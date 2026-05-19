# CI Validation Evidence

## Purpose

Document build and link-validation evidence so reviewers can distinguish **configured** quality controls from **proven** quality controls. This page is updated on each release. Do not treat "configured" as "passed."

## Critical Distinction

| Status | Meaning |
|---|---|
| Configured | The check is defined in CI workflow but no run result is recorded here. |
| Passed locally | The check was run on the developer machine; not a CI artifact. |
| CI passed — run recorded | A GitHub Actions run ID is recorded and the artifact is traceable. |

No check is treated as audit-grade evidence unless a run ID or commit hash is recorded.

## Latest Validated State — v0.3.0

| Field | Value |
|---|---|
| Release label | 0.3.0 |
| Commit hash | 2fea09c |
| Validation date | 2026-05-18 |
| Validator | GitHub Actions (ubuntu-latest, Node 20) |
| Build workflow run ID | [26051906283](https://github.com/anpa1200/cti-analyst-field-manual/actions/runs/26051906283) — **passed** |
| Deploy workflow run ID | [26051911199](https://github.com/anpa1200/cti-analyst-field-manual/actions/runs/26051911199) — **passed** |
| GitHub Pages artifact | `github-pages` artifact produced and deployed |
| Annotation | Node.js 20 deprecation warnings in both runs — not a failure; actions still executed successfully. Upgrade to Node.js 24-compatible action versions before September 2026. |

## CI Run Results — 2026-05-18 (commit 2fea09c)

| Check | Workflow | Result | Run ID |
|---|---|---|---|
| YAML lint — governance register | `build.yml` + `deploy-pages.yml` | **CI passed** | 26051906283 / 26051911199 |
| Internal Markdown link validation (`check:links`) | Both workflows | **CI passed** — 0 broken internal links | 26051906283 / 26051911199 |
| Docusaurus build | Both workflows | **CI passed** — static files generated | 26051906283 / 26051911199 |
| GitHub Pages deploy | `deploy-pages.yml` | **CI passed** — artifact uploaded and deployed | 26051911199 |

## Previous Validated State — v0.2.0

| Field | Value |
|---|---|
| Release label | 0.2.0 |
| Commit hash | 7dbf4ed |
| Validation date | 2026-05-16 |
| Validator | Local environment (Ubuntu 6.17.0, Node 20, Python 3) |

| Check | Command | Result |
|---|---|---|
| YAML lint | `python3 -c "import yaml; yaml.safe_load(...)"` | **Passed locally** |
| Internal Markdown links | `npm run check:links` | **Passed locally** — 0 broken links |
| Docusaurus build | `npm run build` | **Passed locally** |

## CI Workflow Configuration

| Workflow | File | Trigger | Steps Configured |
|---|---|---|---|
| Build | `.github/workflows/build.yml` | push and PR to main | YAML lint → npm ci → check:links → build |
| Deploy | `.github/workflows/deploy-pages.yml` | push to main | YAML lint → npm ci → check:links → build → upload artifact → deploy pages |

Steps added in commit 7dbf4ed: YAML lint step added to both workflows before `npm ci`.

## What CI Does Not Prove

Passing CI means the YAML is valid, the site builds, and internal Markdown links resolve. It does not mean:

- every external source still returns HTTP 200;
- every campaign claim is true;
- every detection is production-ready;
- every template has been reviewed by a second analyst;
- any content has been externally peer-reviewed;
- the site score is externally validated.

## External Link Policy

External link availability is not treated as deterministic CI because public sites, Medium, GitHub Pages, and PDF hosting can rate-limit or temporarily fail. External references should use access dates. Report-critical references should record archive or fallback links when they become unavailable.

External link check has not been run as a CI step. It remains a manual release-review action.

## Required Evidence for Each Future Release

Before any release can claim CI-proven status, record:

- [x] GitHub Actions run ID for the build workflow — recorded above for v0.3.0
- [x] GitHub Actions run ID for the deploy-pages workflow — recorded above for v0.3.0
- [x] Commit hash at time of run — 2fea09c
- [x] YAML lint result from CI (not only local) — passed in both workflows
- [x] Internal link check result from CI — passed in both workflows
- [x] Build result from CI — passed in both workflows
- [ ] External link check summary (manual, with hard 404s listed separately from transient failures) — pending v0.3.0 manual review
- [ ] Any DRL promotion artifacts if a detection was promoted — no promotions in v0.3.0
- [ ] Reviewer sign-off if claiming publication-grade status — not claimed for v0.3.0

## Cross-Links

- [Publication-Grade Review Backlog](../review/publication-grade-review.md)
- [Link-Check Report](link-check-report.md)
- [Limitations](../limitations.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Cross-Project Correlation Register](../governance/cross-project-correlation-register.md)
