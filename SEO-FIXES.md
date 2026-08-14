# SEO fixes

Prepared locally on 2026-08-14. These changes are not committed, pushed, or deployed.

## Issue 4 — Docusaurus metadata

- `docusaurus.config.js` centralizes the browser-title suffix through the site title `1200km`, sets the field-manual cover as the default social image, enables Git-backed update times, and emits the exact site name.
- `src/pages/index.js` gives the custom landing page a dedicated 155-character value description with matching Open Graph and Twitter metadata.
- `src/theme/DocItem/Metadata/index.js` supplies exact title, description, social, image, and modified-time parity for every documentation route.
- `scripts/generate-seo-descriptions.mjs` combines authored source summaries with reviewed route-specific overrides while enforcing length, grammar guards, uniqueness, and title exclusion.
- `scripts/seo-description-overrides.json` provides curated, page-specific value statements where source metadata alone is unsuitable; it contains no generic filler or clipped prose.
- `src/generated/seo-descriptions.json` contains the 81 generated documentation descriptions.
- `scripts/check-seo.mjs` validates every built route and fails on metadata regressions.
- `scripts/check-cross-site-seo.mjs` checks built descriptions across sibling sites together so duplicates cannot hide behind per-repository validation.
- `package.json` regenerates descriptions before each build and exposes `check:seo` through the validation workflow.

## Issue 7 — HexStrike destination labels

- `docusaurus.config.js` labels each `0x4m4/hexstrike-ai` navigation link as “HexStrike AI (upstream project).”
- `docs/ecosystem.md` gives the same explicit upstream label to both in-body links. No owner/fork destination occurs in this repository.

## Issue 8 — discovery and lastmod

- `.github/workflows/deploy-pages.yml` and `.github/workflows/build.yml` check out full Git history so deployment and validation builds can derive real update dates.
- `docusaurus.config.js` enables Git-backed document dates and fills the custom landing-page sitemap date from its source-file history.

## Issue 9 — structured data

- `src/theme/DocItem/Metadata/index.js` emits valid absolute-URL `BreadcrumbList` JSON-LD on all 81 documentation pages.
- `src/pages/index.js` emits the landing-page `BreadcrumbList`.
- `scripts/check-seo.mjs` parses every JSON-LD block, validates breadcrumb order and absolute URLs, and rejects missing metadata.

## Validation

- `npm run build` — passed.
- `npm run check:seo` — passed: 82 routes, 82 unique descriptions, 82/82 sitemap `lastmod` values.
- The generated-description file is idempotent across repeated generation (SHA-256 `5821c5ed592b235c78f11ba4167c5c859a546c3c085fee3decaabffc69d6420c`).
- All 81 documentation descriptions were editorially reviewed after generation; the previous clipped clauses and generic review fillers are absent.
- `node scripts/check-cross-site-seo.mjs field=build israel=../israel-government-threat-actors-cti/build hydra=../operation-desert-hydra/docs-site/build shield=../opencti-intelligent-shield/docs-site/build` — passed: 292 routes and 292 globally unique descriptions.
- `.github/workflows/build.yml` and `.github/workflows/deploy-pages.yml` parse as valid YAML with full-history checkout enabled.
- Canonical URLs remain under `https://1200km.com/cti-analyst-field-manual/`.
- Every built title contains exactly one ` | 1200km` suffix; Open Graph and Twitter titles, descriptions, and images match.
- Every non-root documentation route exposes a Git-derived `article:modified_time`.
- `git diff --check` — passed.

## Deploy and human follow-ups

- Commit and deploy this repository before treating the production metadata or sitemap as updated.
- After deployment, merge the sub-site sitemap into the main sitemap index and submit it to Google Search Console and Bing Webmaster Tools.
- Request indexing for the project landing page after the production build is live.
- No `article:published_time` was invented: the documentation framework exposes reliable last-update history but not a trustworthy creation date for every source page.

## Complete touched-file manifest

- `.github/workflows/deploy-pages.yml`
- `.github/workflows/build.yml`
- `SEO-FIXES.md`
- `docs/ecosystem.md`
- `docusaurus.config.js`
- `package.json`
- `scripts/check-seo.mjs`
- `scripts/check-cross-site-seo.mjs`
- `scripts/generate-seo-descriptions.mjs`
- `scripts/seo-description-overrides.json`
- `src/generated/seo-descriptions.json`
- `src/pages/index.js`
- `src/theme/DocItem/Metadata/index.js`
