# Link-Check Report

## Purpose

Record link-check policy and latest validation result.

## Latest Result — v0.3.0

| Date | Scope | Tool | Result | Evidence |
|---|---|---|---|---|
| 2026-05-18 | Internal Markdown links and all doc targets | `scripts/check_links.py` via `npm run check:links` in CI | **0 broken internal links** | GitHub Actions runs [26051906283](https://github.com/anpa1200/cti-analyst-field-manual/actions/runs/26051906283) and [26051911199](https://github.com/anpa1200/cti-analyst-field-manual/actions/runs/26051911199) — both passed |
| 2026-05-16 | Internal Markdown links (local only) | `npm run check:links` | 0 broken internal links | Local stdout — pre-CI baseline |

## External Link Status — Manual Review 2026-05-18

| Domain | URL | HTTP Status | Notes |
|---|---|---|---|
| attack.mitre.org | https://attack.mitre.org/ | 200 | |
| www.first.org | https://www.first.org/tlp/ | 200 | |
| oasis-open.github.io | https://oasis-open.github.io/cti-documentation/ | 200 | |
| www.misp-project.org | https://www.misp-project.org/documentation/ | 200 | |
| sigmahq.io | https://sigmahq.io/docs/ | 200 | |
| www.cia.gov | https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf | 200 | |
| www.lockheedmartin.com | LM Kill Chain white paper PDF | 200 | |
| 1200km.com | Israel CTI project | 200 | |
| 1200km.com | Customer CTI project | 200 | |
| act.globalcyberalliance.org | Diamond Model wiki page | **403** WARNING | Bot protection / rate limit — page accessible in browser. Monitor; add archive fallback if persistent. |

**Hard 404s:** 0

**Transient / bot-blocked:** 1 (Diamond Model wiki — accessible in browser, not a dead link)

## Validation Policy

- Internal links must pass CI before merge.
- Docusaurus build must pass before deploy.
- Cross-project links should be checked before release, but GitHub Pages propagation can lag immediately after deployment.
- External source links should record access date in finished products.
- Critical doctrine references should have archive or fallback references if the original is unstable.

## Known Limits

The internal checker validates Markdown link targets in repository docs. It does not prove that every generated Docusaurus route is semantically correct, and it does not certify external websites. External link checks are manual and performed at each release.

## Cross-Links

- [CI Validation Evidence](ci-validation-evidence.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
