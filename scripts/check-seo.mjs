import fs from 'node:fs';
import path from 'node:path';

const expectedBaseUrl = process.argv[2];
if (!expectedBaseUrl || !/^https:\/\/1200km\.com\/[^/]+\/$/.test(expectedBaseUrl)) {
  throw new Error('Usage: node scripts/check-seo.mjs https://1200km.com/<sub-site>/');
}

const buildDir = path.resolve('build');
const expectedSiteName = '1200km — Andrey Pautov Security Research';
const failures = [];

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const resolved = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(resolved) : [resolved];
  });
}

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>]+))/g)]
      .map((match) => [match[1].toLowerCase(), decodeHtml(match[2] ?? match[3] ?? match[4] ?? '')]),
  );
}

function metaValue(html, selector, value) {
  const matches = [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((match) => attributes(match[0]))
    .filter((entry) => entry[selector] === value);
  if (matches.length !== 1) {
    return {value: undefined, count: matches.length};
  }
  return {value: matches[0].content, count: 1};
}

function canonicalValues(html) {
  return [...html.matchAll(/<link\b[^>]*>/gi)]
    .map((match) => attributes(match[0]))
    .filter((entry) => entry.rel === 'canonical')
    .map((entry) => entry.href);
}

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script\b(?=[^>]*type=(?:["']?application\/ld\+json["']?))[^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap((match) => {
      try {
        const parsed = JSON.parse(decodeHtml(match[1]).trim());
        return Array.isArray(parsed) ? parsed : [parsed];
      } catch (error) {
        failures.push(`invalid JSON-LD: ${error.message}`);
        return [];
      }
    });
}

function containsType(value, type) {
  if (!value || typeof value !== 'object') return false;
  if (value['@type'] === type || (Array.isArray(value['@type']) && value['@type'].includes(type))) return true;
  if (Array.isArray(value['@graph'])) return value['@graph'].some((entry) => containsType(entry, type));
  return false;
}

const htmlFiles = walk(buildDir).filter((file) => path.basename(file) === 'index.html');
const descriptions = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(buildDir, file);
  const title = decodeHtml(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? '');
  const pageTitle = title.replace(/\s*\|\s*1200km\s*$/, '');
  const description = metaValue(html, 'name', 'description');
  const ogTitle = metaValue(html, 'property', 'og:title');
  const twitterTitle = metaValue(html, 'name', 'twitter:title');
  const ogDescription = metaValue(html, 'property', 'og:description');
  const twitterDescription = metaValue(html, 'name', 'twitter:description');
  const siteName = metaValue(html, 'property', 'og:site_name');
  const ogImage = metaValue(html, 'property', 'og:image');
  const twitterImage = metaValue(html, 'name', 'twitter:image');
  const modifiedTime = metaValue(html, 'property', 'article:modified_time');
  const canonicals = canonicalValues(html);
  const canonical = canonicals[0];

  function fail(message) {
    failures.push(`${relative}: ${message}`);
  }

  if (!title.endsWith(' | 1200km') || (title.match(/\|\s*1200km/g) ?? []).length !== 1) {
    fail(`invalid title template: ${JSON.stringify(title)}`);
  }
  if (description.count !== 1 || !description.value) fail(`expected one description, found ${description.count}`);
  if (description.value) {
    if (description.value.length < 140 || description.value.length > 160) {
      fail(`description length ${description.value.length}`);
    }
    if (pageTitle && description.value.toLowerCase().includes(pageTitle.toLowerCase())) {
      fail('description contains the page title verbatim');
    }
    if (/\.\.|…/.test(description.value)) fail('description contains prohibited truncation punctuation');
    if (!/[.!?]$/.test(description.value)) fail('description lacks a complete-sentence ending');
    if (description.value.split(/\s+/).length < 16) fail('description is too terse to be a complete value statement');
    if ((description.value.match(/\(/g) ?? []).length !== (description.value.match(/\)/g) ?? []).length) {
      fail('description contains unbalanced parentheses');
    }
    if (/\b(?:a|an|and|as|at|by|for|from|in|of|on|or|the|to|with)\.$/i.test(description.value)) {
      fail('description ends with a likely sentence fragment');
    }
    if (/\b(?:Guide (?:analyst )?review|Inform (?:analyst review|practical defensive analysis)|Apply (?:these findings in defensive analyst work|the evidence and limits in defensible analyst decisions)|Use it to guide analyst review|Use these findings in practical defensive analysis|Support defensible analyst decisions|Use the evidence(?:, limitations, and workflow guidance| and limitations)? to support defensible analysis)\b/i.test(description.value)) {
      fail('description contains a generic filler sentence');
    }
    const existing = descriptions.get(description.value);
    if (existing) fail(`description duplicates ${existing}`);
    descriptions.set(description.value, relative);
  }
  if (ogTitle.value !== title || twitterTitle.value !== title) fail('og/twitter title parity failed');
  if (ogDescription.value !== description.value || twitterDescription.value !== description.value) {
    fail('og/twitter description parity failed');
  }
  if (siteName.value !== expectedSiteName) fail('og:site_name is missing or incorrect');
  if (canonicals.length !== 1 || !canonical?.startsWith(expectedBaseUrl)) fail('canonical is missing or outside the unchanged sub-site path');
  if (!ogImage.value || twitterImage.value !== ogImage.value) fail('og/twitter image parity failed');
  if (/(?:^|\/)(?:ap-)?logo\.(?:png|jpe?g|svg)(?:$|[?#])/i.test(ogImage.value ?? '')) {
    fail('generic logo is used as the social card');
  }
  if (canonical && canonical !== expectedBaseUrl && modifiedTime.count !== 1) {
    fail('non-root documentation page lacks article:modified_time');
  }

  const blocks = jsonLdBlocks(html);
  const breadcrumb = blocks.find((block) => containsType(block, 'BreadcrumbList'));
  if (!breadcrumb) fail('BreadcrumbList JSON-LD is missing');
  const breadcrumbNode = breadcrumb?.['@type'] === 'BreadcrumbList'
    ? breadcrumb
    : breadcrumb?.['@graph']?.find((entry) => containsType(entry, 'BreadcrumbList'));
  if (breadcrumbNode) {
    const items = breadcrumbNode.itemListElement;
    if (!Array.isArray(items) || items.length < 2) fail('BreadcrumbList has fewer than two items');
    for (const [index, item] of (items ?? []).entries()) {
      if (item.position !== index + 1 || !/^https:\/\//.test(item.item ?? '')) {
        fail('BreadcrumbList positions or URLs are invalid');
        break;
      }
    }
  }

  for (const match of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = attributes(match[0]).href;
    const label = decodeHtml(match[1]).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (/^https:\/\/github\.com\/0x4m4\/hexstrike-ai\/?$/i.test(href ?? '') && !/upstream project/i.test(label)) {
      fail('ambiguous HexStrike upstream label: ' + JSON.stringify(label));
    }
    if (/^https:\/\/github\.com\/anpa1200\/Hexstrike-AI\/?$/i.test(href ?? '') && !/(?:owner|fork)/i.test(label)) {
      fail('ambiguous HexStrike owner/fork label: ' + JSON.stringify(label));
    }
  }
}

const sitemapPath = path.join(buildDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  failures.push('build/sitemap.xml is missing');
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locationCount = (sitemap.match(/<loc>/g) ?? []).length;
  const lastmodCount = (sitemap.match(/<lastmod>/g) ?? []).length;
  if (locationCount !== htmlFiles.length) failures.push(`sitemap has ${locationCount} URLs for ${htmlFiles.length} HTML routes`);
  if (lastmodCount !== locationCount) failures.push(`sitemap has ${lastmodCount}/${locationCount} lastmod values`);
}

if (failures.length) {
  console.error(`SEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO validation passed: ${htmlFiles.length} routes, ${descriptions.size} unique descriptions, complete sitemap lastmod coverage.`);
