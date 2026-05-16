# Link-Check Report

## Purpose

Record link-check policy and latest validation result.

## Latest Result

| Date | Scope | Tool | Result |
|---|---|---|---|
| 2026-05-16 | Internal Markdown links and local doc targets | `scripts/check_links.py` via `npm run check:links` | 0 broken internal links |

## Validation Policy

- Internal links must pass before merge.
- Docusaurus build must pass before deploy.
- Cross-project links should be checked before release, but public GitHub Pages propagation can lag immediately after deployment.
- External source links should record access date in finished products.
- Critical doctrine references should have archive or fallback references if the original is unstable.

## Known Limits

The internal checker validates Markdown link targets in repository docs. It does not prove that every generated Docusaurus route is semantically correct, and it does not certify external websites.

## Cross-Links

- [CI Validation Evidence](ci-validation-evidence.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
