import fs from 'node:fs';
import path from 'node:path';

const inputs = process.argv.slice(2);
if (inputs.length < 2 || inputs.some((input) => !input.includes('='))) {
  throw new Error('Usage: node scripts/check-cross-site-seo.mjs <site-label>=<build-dir> [...]');
}

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

const seen = new Map();
const failures = [];
let routeCount = 0;

for (const input of inputs) {
  const separator = input.indexOf('=');
  const label = input.slice(0, separator);
  const buildDir = path.resolve(input.slice(separator + 1));
  if (!fs.existsSync(buildDir)) {
    failures.push(`${label}: build directory does not exist: ${buildDir}`);
    continue;
  }

  for (const file of walk(buildDir).filter((candidate) => path.basename(candidate) === 'index.html')) {
    routeCount += 1;
    const html = fs.readFileSync(file, 'utf8');
    const tags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const descriptions = tags.filter((tag) => tag.name === 'description').map((tag) => tag.content);
    const route = `${label}:${path.relative(buildDir, file)}`;
    if (descriptions.length !== 1 || !descriptions[0]) {
      failures.push(`${route}: expected one non-empty description, found ${descriptions.length}`);
      continue;
    }
    const description = descriptions[0];
    const previous = seen.get(description);
    if (previous) failures.push(`${route}: description duplicates ${previous}`);
    seen.set(description, route);
  }
}

if (failures.length) {
  console.error(`Cross-site SEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Cross-site SEO validation passed: ${routeCount} routes and ${seen.size} globally unique descriptions across ${inputs.length} sites.`);
