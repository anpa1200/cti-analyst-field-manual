# CI Validation Evidence

## Purpose

Document build and link-validation evidence so reviewers can distinguish configured quality controls from proven quality controls.

## Current Validation Scope

| Check | Command | Status |
|---|---|---|
| Docusaurus build | `npm run build` | Passed locally on 2026-05-16 |
| Internal markdown/link validation | `npm run check:links` | Passed locally on 2026-05-16 |
| GitHub Pages build | `.github/workflows/deploy-pages.yml` | Configured |
| Pull request build | `.github/workflows/build.yml` | Configured |

## Broken-Link Report

Local internal-link validation on 2026-05-16 found zero internal Markdown link failures after this hardening pass.

External link availability is not treated as deterministic CI because public sites, Medium, GitHub Pages, and PDF hosting can rate-limit or temporarily fail. External references should use access dates and archive/fallback links when they become report-critical.

## CI Quality Boundary

Passing CI means the site builds and internal links resolve. It does not mean:

- every external source still returns HTTP 200;
- every campaign claim is true;
- every detection is production-ready;
- every Medium or GitHub link is immune to future change;
- every template has been reviewed by a second analyst.

## Required Future Evidence

- Copy latest successful GitHub Actions run ID into this page for each release.
- Add external link-check summary with transient failures separated from hard 404s.
- Add release evidence for any new DRL promotion.
- Add reviewer sign-off for doctrine pages before claiming publication-grade status.

## Cross-Links

- [Publication-Grade Review Backlog](../review/publication-grade-review.md)
- [Limitations](../limitations.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
