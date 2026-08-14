import React from 'react';
import Head from '@docusaurus/Head';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import seoDescriptions from '@site/src/generated/seo-descriptions.json';

const SITE_NAME = '1200km — Andrey Pautov Security Research';
const PROJECT_NAME = 'CTI Analyst Field Manual';
const PROJECT_URL = 'https://1200km.com/cti-analyst-field-manual/';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function cleanExcerpt(value, title) {
  const titlePattern = new RegExp(escapeRegExp(title), 'gi');
  return String(value || '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_#>|]/g, ' ')
    .replace(titlePattern, 'this subject')
    .replace(/\.{2,}|…/g, '.')
    .replace(/\s+/g, ' ')
    .replace(/^[\s:;,.-]+|[\s:;,.-]+$/g, '')
    .trim();
}

function clipWords(value, maxLength) {
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength + 1).replace(/\s+\S*$/, '').trim();
  return clipped || value.slice(0, maxLength).trim();
}

function buildDescription(rawDescription, title) {
  const lead = 'Use this evidence-led page to review ';
  const tails = [
    ', connect the findings to practical defensive work, and support transparent analyst validation.',
    ', connect the findings to defensive work, and support analyst validation.',
    ', and apply the findings in defensive analysis.',
    '.',
  ];
  const fallback = 'the documented evidence, workflow, limitations, and defensive context';
  const source = cleanExcerpt(rawDescription, title) || fallback;

  for (const tail of tails) {
    const excerpt = clipWords(source, 160 - lead.length - tail.length);
    const candidate = `${lead}${excerpt}${tail}`;
    if (candidate.length >= 140 && candidate.length <= 160) return candidate;
  }

  const excerpt = clipWords(source, 160 - lead.length - 1);
  return `${lead}${excerpt}.`;
}

function absoluteUrl(permalink) {
  return new URL(permalink, 'https://1200km.com').href;
}

export default function DocItemMetadata() {
  const {metadata, frontMatter, assets} = useDoc();
  const title = metadata.title.replace(/\s*\|\s*1200km\s*$/i, '').trim();
  const formattedTitle = `${title} | 1200km`;
  const description = seoDescriptions[metadata.source]
    ?? buildDescription(metadata.description, title);
  const pageUrl = absoluteUrl(metadata.permalink);
  const modifiedTime = metadata.lastUpdatedAt
    ? new Date(metadata.lastUpdatedAt).toISOString()
    : undefined;
  const breadcrumbItems = [
    {'@type': 'ListItem', position: 1, name: '1200km', item: 'https://1200km.com/'},
    {'@type': 'ListItem', position: 2, name: PROJECT_NAME, item: PROJECT_URL},
  ];
  if (pageUrl !== PROJECT_URL) {
    breadcrumbItems.push({'@type': 'ListItem', position: 3, name: title, item: pageUrl});
  }

  return (
    <>
      <PageMetadata
        title={title}
        description={description}
        keywords={frontMatter.keywords}
        image={assets.image ?? frontMatter.image}
      />
      <Head>
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="twitter:title" content={formattedTitle} />
        <meta name="twitter:description" content={description} />
        {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems,
          })}
        </script>
      </Head>
    </>
  );
}
