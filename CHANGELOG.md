# Changelog

## 0.2.0 — 2026-05-16

**Commit:** 7dbf4ed  
**Build status:** Passed locally (YAML lint, internal link check, Docusaurus build)  
**GitHub Actions run:** Pending remote push  
**External review status:** Not completed — self-reviewed only  
**Known limitations:** See [Known Limitations](docs/limitations.md)  
**Next review target:** When external expert review is available

### Changes

#### Governance and CI

- Hardened `data/correlation-register.yml` with schema version, `required_terms`, `forbidden_claim_patterns`, `canonical_owner`, `consuming_projects`, per-concept `authoritative_reference`, and structured `review_workflow` steps. Schema version 1.1.
- Added YAML lint validation step to both GitHub Actions workflows (build and deploy) before `npm ci`. Fails CI if YAML is invalid.
- Rewrote `docs/validation/ci-validation-evidence.md` to separate "configured," "passed locally," and "CI-proven." Added commit hash, date, exact commands executed, results, and checklist for future release evidence requirements.
- Updated `docs/governance/cross-project-correlation-register.md` last-checked date.

#### Doctrine Fixes

- Expanded `docs/01-cti-foundations/source-reliability.md`: added full A-F source reliability table, 1-6 information credibility table, combined notation examples (A1 through F6), warning that ratings are review prompts not mathematical truth, updated references to MISP admiralty taxonomy.
- Expanded `docs/02-analytic-discipline/sherman-kent-for-cti.md`: added calibrated probability wording table, three bad/corrected examples ("likely" without explanation, "high confidence" from one weak source, "almost certainly" without contradiction review), added CIA Words of Estimative Probability reference.
- Expanded `docs/02-analytic-discipline/estimative-language.md`: added calibrated wording reference table, four bad/corrected examples (bare "likely," passive language, mixed source/analyst assessment, using estimative language to avoid evidence), added WEP reference.
- Fixed `docs/01-cti-foundations/intelligence-cycle.md`: replaced Medium-only references with MITRE ATT&CK Resources, OASIS CTI, and MISP Documentation.
- Fixed `docs/09-ai-assisted-cti/hallucination-control.md`, `ai-quality-gates.md`, `prompt-library.md`: added FIRST TLP 2.0, OASIS CTI, and Authoritative Bibliography references.
- Fixed `docs/08-cti-to-detection/soc-handoff.md`, `telemetry-requirements.md`: added authoritative references.

#### Detection Engineering

- Rewrote `docs/08-cti-to-detection/telemetry-requirements.md`: added field-level tables for Windows Security Event Log, Sysmon, EDR process telemetry, DNS, proxy/web gateway, identity provider, and cloud audit logs. Added common gap notes for each source. Added RMM telemetry map example.
- Rewrote `docs/08-cti-to-detection/sigma-kql-spl-examples.md`: added two real DRL-4 detection candidates with Sigma, KQL (MDE), and SPL (Sysmon) variants. Both marked DRL-4 with explicit promotion checklist. No production coverage claim.

#### AI Governance

- Rewrote `docs/09-ai-assisted-cti/ai-cti-control-matrix.md`: added data classification matrix (TLP:CLEAR through Prohibited), expanded task-control matrix with detection logic draft row, added prompt-injection controls with five test cases, added five hallucination failure examples with corrections, added AI review log template with all required fields, added prohibited use summary.

#### Worked Examples

- Rewrote `docs/worked-examples/actor-research.md`: added Section B — full real public-source MuddyWater case using CISA/NSA/FBI/CNMF joint advisory (2022-02-24) and MITRE ATT&CK G0069. Includes PIR/SIR decomposition, source register rows, alias table with per-alias sourcing, sponsor assessment with caveat, source chronology, actor claim table, ATT&CK mapping with quality levels and rejected alternatives, telemetry requirements table, two DRL-1 hunt hypotheses, illustrative SOC handoff, executive summary, and gaps register. Synthetic teaching example preserved as Section A.

#### Publication-Grade Review

- Rewrote `docs/review/publication-grade-review.md`: replaced self-score "8.8/10 after hardening pass" with "~8.0/10 internal estimate" with explicit caveat that no external review has been completed. Added score definition, external review requirements, what external review would change, open-item tracker for remaining gaps, and release summary table.

### Open Issues After This Release

- Template second-analyst review: not completed.
- Page-by-page evidence annotations: not completed.
- DRL validation artifacts above DRL-4: not completed.
- External link check in CI: not completed.
- Actor page freshness confirmation for 2025–2026: not completed.
- External expert review: not completed.

---

## 0.1.0 — 2026-05-16

**Commit:** 34377ff through e28c162  
**Build status:** Passed locally

### Changes

- Created Docusaurus project structure.
- Added homepage, README, limitations, sidebar, roadmap, contributing guidance.
- Added first-tranche pages for CTI foundations (7 pages), analytic discipline (6), frameworks (5), attribution (5), infrastructure pivoting (6), actor research (5), sector CTI (4), CTI-to-detection (7), AI-assisted CTI (6), templates (10), worked examples (9), references (2), governance (1), review (1), validation (2).
- Added Medium source index from public RSS feed.
- Added authoritative bibliography with primary doctrine references.
- Added role-based reading paths.
- Added cross-project correlation register.
- Added CI validation evidence and link-check report.
- Added DRL-0 through DRL-9 model.
- Added AI CTI control matrix (initial version).
- Added GitHub Actions workflows for build and deploy.
