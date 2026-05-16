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

## Latest Validated State

| Field | Value |
|---|---|
| Release label | 0.2.0 |
| Commit hash | 7dbf4ed |
| Validation date | 2026-05-16 |
| Validator | Local environment (Ubuntu 6.17.0, Node 20, Python 3) |
| GitHub Actions run ID | Pending first push to remote main branch |
| GitHub Pages deploy ID | Pending first push to remote main branch |

## Checks Executed Locally — 2026-05-16

| Check | Command | Result | Evidence |
|---|---|---|---|
| YAML lint — governance register | `python3 -c "import yaml; yaml.safe_load(open('data/correlation-register.yml'))"` | **Passed** — YAML valid. Keys confirmed: last_checked, last_commit, schema_version, projects, shared_concepts, review_workflow | Local stdout, 2026-05-16 |
| Internal Markdown link validation | `npm run check:links` (runs `scripts/check_links.py`) | **Passed** — `Local Markdown link check passed: 0 broken links.` | Local stdout, 2026-05-16 |
| Docusaurus build | `npm run build` | **Passed** — `Generated static files in "build".` | Local stdout, 2026-05-16, build/ directory confirmed present |

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

- [ ] GitHub Actions run ID for the build workflow
- [ ] GitHub Actions run ID for the deploy-pages workflow
- [ ] Commit hash at time of run
- [ ] YAML lint result from CI (not only local)
- [ ] Internal link check result from CI
- [ ] Build result from CI
- [ ] External link check summary (manual, with hard 404s listed separately from transient failures)
- [ ] Any DRL promotion artifacts if a detection was promoted
- [ ] Reviewer sign-off if claiming publication-grade status

## Cross-Links

- [Publication-Grade Review Backlog](../review/publication-grade-review.md)
- [Link-Check Report](link-check-report.md)
- [Limitations](../limitations.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Cross-Project Correlation Register](../governance/cross-project-correlation-register.md)
