# Publication-Grade Review Backlog

## Purpose

Track findings that block the manual from being treated as a publication-grade CTI field manual. This page is a working backlog, not a marketing scorecard.

## Score Caveat

All scores below are internal self-assessments. They are not externally validated. An internal self-assessment is structurally biased toward the author's view of what has been completed. **These scores must not be presented as externally peer-reviewed or certified maturity levels.**

The only valid path to a higher confidence score is external expert review.

## Internal Self-Assessment (2026-05-16, commit 7dbf4ed)

| State | Internal Estimate | Basis |
|---|---|---|
| Before 0.1.0 scaffold | ~6.5/10 | Placeholder structure; thin content; no doctrine references; no examples. |
| After 0.1.0 fill pass | ~7.5/10 | Pages filled; consistent structure; templates present; cross-links added. |
| After 0.2.0 hardening pass | **~8.0/10 (internal estimate)** | Doctrine references added; DRL model complete; AI governance added; YAML register; CI hardened; real worked example added; Sherman Kent and estimative language expanded. |
| To reach 9.0/10 | Not yet achieved | Requires external expert review, validation artifacts for at least one detection path, and individual page-by-page evidence annotations. |

**This score is an internal estimate and is not a substitute for independent expert review.**

## What "Publication-Grade" Requires

A publication-grade CTI field manual is one that:

1. Every doctrine claim is traceable to a primary or authoritative secondary reference.
2. Every template has a complete filled example reviewed by someone other than the author.
3. At least one full detection path (from source claim to SOC handoff) has validation artifacts at DRL-5 or above.
4. Attribution methodology has been reviewed for logical consistency by a senior CTI practitioner.
5. AI governance controls have been tested against at least three real prompt-injection attempts.
6. External review has been completed by at least one practitioner not involved in writing.

None of items 2–6 have been completed for this release.

## Prioritized Issue Tracker

| Severity | Issue | Required Fix | Status |
|---|---|---|---|
| Critical (fixed) | Doctrine pages relied only on Medium references. | Add primary framework and standards references. | Fixed: Authoritative Bibliography, module references, Sherman Kent WEP citation, MITRE ATT&CK, Diamond Model, Lockheed Kill Chain, FIRST TLP 2.0, MISP taxonomies. |
| Critical (fixed) | ATT&CK guidance could be misused as coverage decoration. | Require behavior evidence, mapping confidence, quality level, rejected alternatives. | Fixed in ATT&CK Mapping Mistakes and Module Worked Examples. |
| High (fixed) | Detection maturity model was incomplete. | Add DRL-0 through DRL-9 with validation artifacts. | Fixed in Detection Readiness Levels. |
| High (fixed) | AI-assisted CTI controls were too general. | Add task-control matrix, data classification, prohibited uses, source verification, prompt-injection controls, AI review log template. | Fixed in AI CTI Control Matrix. |
| High (fixed) | Source reliability model described but not defined. | Add full A-F source reliability and 1-6 information credibility tables with examples and warnings. | Fixed in Source Reliability. |
| High (fixed) | Sherman Kent and estimative language pages referenced only Medium. | Add WEP reference; add calibrated probability table; add bad/corrected examples. | Fixed in Sherman Kent for CTI and Estimative Language. |
| High (fixed) | Telemetry requirements page had no field-level examples. | Add platform-specific fields for Windows Security, Sysmon, EDR, DNS, proxy, IdP, cloud audit logs. | Fixed in Telemetry Requirements. |
| High (fixed) | Detection examples were skeletons without real Sigma/KQL/SPL. | Add two real DRL-4 detection examples with Sigma, KQL, and SPL variants; mark DRL honestly. | Fixed in Sigma/KQL/SPL Examples. |
| High (fixed) | Worked examples section had no real public-source case. | Add MuddyWater public-source case with full chain: PIR/SIR, sources, alias table, claim table, ATT&CK mapping, telemetry, hunt hypotheses, SOC handoff, executive summary, gaps. | Fixed in Worked Examples: Actor Research. |
| High (fixed) | YAML governance register lacked schema enforcement. | Add required fields, forbidden_claim_patterns, required_terms, schema_version; add YAML lint to CI. | Fixed in data/correlation-register.yml and CI workflows. |
| High (fixed) | CI validation evidence claimed audit-grade status without run IDs. | Separate "configured" from "passed locally" from "CI-proven"; add commit hash; add checklist for future releases. | Fixed in CI Validation Evidence. |
| High (fixed) | Self-score claimed 8.8/10 without external validation. | Reword to internal estimate with caveat; add external review requirements. | Fixed in this page. |
| Medium (fixed) | Intelligence cycle page referenced only Medium. | Add MITRE ATT&CK Resources, OASIS CTI, MISP documentation. | Fixed in Intelligence Cycle. |
| Medium (open) | Templates lack reviewer sign-off. | Each template needs second-analyst review before claiming publication-grade. | Open — not completed. |
| Medium (open) | Page-by-page evidence annotations incomplete. | Each doctrine page should have source rows for major claims. | Open — not completed. |
| Medium (open) | No DRL validation artifacts above DRL-4. | At least one full detection path from DRL-1 to DRL-5 needs positive/negative test evidence. | Open — not completed. |
| Low (open) | Actor research pages need freshness confirmation for 2026. | MuddyWater, Handala, APT41 pages need last-checked dates and 2025–2026 source update. | Open — not completed. |
| Low (open) | External link check not run as CI step. | Add external link check with transient vs hard 404 separation. | Open — not completed. |

## Non-Negotiable Editorial Rules

These rules apply to all content and may not be bypassed for any release:

- No unsupported attribution.
- No ATT&CK mapping without behavior evidence.
- No production detection claim below DRL-9.
- No Medium-only doctrine citation.
- No template without a filled example.
- No AI-generated confidence or attribution decision without analyst review.
- No self-score presented as externally validated.

## What Would Change the Internal Estimate

| Action | Score Impact |
|---|---|
| External expert review completed and findings addressed | +0.5 to +0.8 |
| At least one detection path validated to DRL-5 or above | +0.2 |
| All templates reviewed by a second analyst | +0.2 |
| External link check automated in CI | +0.1 |
| 2025–2026 source update for all actor pages | +0.1 |

## External Review Status

| Review Type | Status |
|---|---|
| Author self-review | Completed 2026-05-16 |
| Peer review by second analyst | Not completed |
| External expert review | Not completed |

## Release Summary

| Field | Value |
|---|---|
| Release | 0.2.0 |
| Commit | 7dbf4ed |
| Date | 2026-05-16 |
| Internal self-assessment | ~8.0/10 |
| External review | Not completed |
| Next review target | When external review is available |

## Cross-Links

- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Module Worked Examples](../worked-examples/cti-foundations.md)
- [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md)
- [AI CTI Control Matrix](../09-ai-assisted-cti/ai-cti-control-matrix.md)
- [Cross-Project Correlation Register](../governance/cross-project-correlation-register.md)
- [CI Validation Evidence](../validation/ci-validation-evidence.md)
