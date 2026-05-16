# Publication-Grade Review Backlog

## Purpose

Track the strict review findings that block the manual from being treated as a publication-grade CTI field manual.

## Current Readiness Score

| State | Score | Reason |
|---|---:|---|
| Before this hardening pass | 7.6 / 10 | Strong structure, thin doctrine authority, uneven examples, weak validation evidence. |
| After this hardening pass | 8.8 / 10 | Authoritative references, worked examples, DRL model, AI governance, correlation register, role paths, and link-check workflow added. |
| Remaining ceiling | 9.2 / 10 | Needs external expert review, broader page-by-page evidence annotations, and more lab-realistic detection validation artifacts. |

## Prioritized Issue List

| Severity | Issue | Required Fix | Status |
|---|---|---|---|
| Critical | Doctrine pages relied too heavily on Medium/source-index references. | Add primary framework and standards references. | Fixed with [Authoritative Bibliography](../references/authoritative-bibliography.md) and module references. |
| Critical | ATT&CK guidance could be misused as coverage decoration. | Require behavior evidence, mapping confidence, quality level, and rejected alternatives. | Fixed in [ATT&CK Mapping Mistakes](../03-frameworks/attck-mapping-mistakes.md) and [Module Worked Examples](../worked-examples/frameworks.md). |
| High | Detection maturity model was incomplete. | Add DRL-0 through DRL-9 with validation artifacts. | Fixed in [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md). |
| High | AI-assisted CTI controls were too general. | Add task-control matrix, prohibited uses, source verification, and prompt-injection controls. | Fixed in [AI CTI Control Matrix](../09-ai-assisted-cti/ai-cti-control-matrix.md). |
| High | Templates lacked complete pass/fail examples. | Add module examples and stricter template quality gates. | Partially fixed; each template still needs individual expansion in future releases. |
| Medium | Cross-project consistency depended on prose. | Add machine-readable correlation register and workflow. | Fixed with [Cross-Project Correlation Register](../governance/cross-project-correlation-register.md). |
| Medium | CI evidence was implicit. | Add CI validation evidence page and link-check report. | Fixed with [CI Validation Evidence](../validation/ci-validation-evidence.md). |
| Medium | Manual lacked role-based reading paths. | Add CTI analyst, detection engineer, SOC lead, manager, and hiring reviewer paths. | Fixed in [Role-Based Reading Paths](../role-based-reading-paths.md). |

## Page-by-Page Fix Plan

| Area | Pages | Fix Standard |
|---|---|---|
| Foundations | What is CTI, Intelligence Cycle, PIR/SIR/EEI, Evidence Labels, Source Reliability, Confidence Language | Add authoritative references, bad/corrected examples, source and evidence rows. |
| Analytic Discipline | Sherman Kent, Estimative Language, Assumptions, Contradictions, Alternatives | Add assumption register, contradiction register, ACH-style alternative hypothesis table, confidence justification. |
| Frameworks | ATT&CK, Kill Chain, Diamond Model, Pyramid of Pain | Add correct and incorrect mappings, Diamond event, Kill Chain misuse example, evidence limits. |
| Attribution | Methodology, Evidence Ladder, False Flag, Confidence vs Probability | Add weak/corrected claims, competing hypotheses, caveats, confidence statement. |
| Infrastructure Pivoting | IOC, PDNS, Certificates, ASN, Limitations, Worked Case | Add pivot log, stop conditions, rejected pivots, downgrade example. |
| Actor Research | MuddyWater, Handala, APT41, Actor Template, Update Workflow | Add alias tables with source per alias, claim tables, source chronology, freshness dates, gaps. |
| Sector CTI | Telecom 4G/5G, Cellular Case, Israel Notes | Add asset taxonomy, telemetry owner map, sector false positives, customer relevance statement. |
| CTI to Detection | Intelligence to Detection, Hunt Template, Backlog, Telemetry, Sigma/KQL/SPL, SOC Handoff | Add CTI-to-detection chain, DRL model, validation artifacts, SOC handoff example. |
| AI-Assisted CTI | Manual vs AI, Safe Workflow, Prompts, Quality Gates, Hallucination Control | Add AI control matrix, prompt-injection controls, blocked use cases, human review gates. |
| Templates | All template pages | Ensure required/optional fields, pass/fail gates, complete filled examples, common failure modes. |

## Non-Negotiable Editorial Rules

- No unsupported attribution.
- No ATT&CK mapping without behavior evidence.
- No production detection claim below DRL-9.
- No Medium-only doctrine citation.
- No template without a filled example.
- No AI-generated confidence or attribution decision without analyst review.

## Cross-Links

- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Module Worked Examples](../worked-examples/cti-foundations.md)
- [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md)
- [Cross-Project Correlation Register](../governance/cross-project-correlation-register.md)
- [CI Validation Evidence](../validation/ci-validation-evidence.md)
