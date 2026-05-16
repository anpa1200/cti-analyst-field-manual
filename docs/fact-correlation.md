# Cross-Project Fact Correlation

## Purpose

This page keeps the three CTI books aligned so readers do not receive conflicting methodology, taxonomy, or production-readiness guidance.

## Canonical Project Roles

| Project | Canonical Role | Do Not Treat As |
| --- | --- | --- |
| [CTI Analyst Field Manual](https://anpa1200.github.io/cti-analyst-field-manual/) | General CTI tradecraft and analyst operating manual. | Sector-specific threat database or customer delivery package. |
| [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) | Gated delivery methodology for CTI-to-detection work. | Actor knowledge base or universal attribution authority. |
| [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) | Israel-focused actor, tool, TTP, hunt, detection, and source knowledge base. | General CTI methodology replacement or production SOC detection pack. |

## Shared Rules

| Topic | Correlated Rule | Canonical Detail |
| --- | --- | --- |
| Evidence labels | Claims must separate observed, reported, assessed, inferred, unknown, and gap states. | [Evidence Labels](https://anpa1200.github.io/cti-analyst-field-manual/docs/cti-foundations/evidence-labels/) |
| Source reliability | Source reliability and information credibility are related but separate. | [Source Reliability](https://anpa1200.github.io/cti-analyst-field-manual/docs/cti-foundations/source-reliability/) |
| PIR/SIR/EEI | Intelligence work starts from decision-linked requirements. | [PIR, SIR, and EEI](https://anpa1200.github.io/cti-analyst-field-manual/docs/cti-foundations/pir-sir-eei/) |
| ATT&CK | Map behavior only when evidence supports the technique; ATT&CK is not attribution evidence. | [ATT&CK as a Working Tool](https://anpa1200.github.io/cti-analyst-field-manual/docs/frameworks/mitre-attack-as-working-tool/) |
| Detection readiness | No project claims production detection coverage unless local validation, pilot/replay, owner, rollback, and SOC workflow exist. | [Customer methodology](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/methodology/foundations/) and [Israel dashboard](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/detection-status-dashboard/) |
| Actor facts | Actor-specific facts, tools, TTPs, and source references live in the Israel CTI project. | [Actor Workbench](https://anpa1200.github.io/israel-government-threat-actors-cti/navigation/actor-workbench/) |
| Customer delivery | Acceptance gates, project control, and delivery packaging live in the Customer project. | [Workflow Quick Reference](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/workflow/full-workflow-quick-reference/) |

## Correlation Fixes Applied

- The Customer project mapping rule now aligns with the Field Manual: detections should map to ATT&CK only when behavior and evidence support the mapping. If no defensible mapping exists, the detection must document that explicitly rather than force a technique.
- All three projects use the same production-readiness boundary: examples, hunts, and pilot candidates are not production SOC coverage until validated in the target environment.
- The Israel CTI project remains the canonical location for actor-specific pages and TTP navigation; the Field Manual links to it rather than duplicating actor databases.

## Review Workflow

1. When a methodological rule changes, update the Field Manual first.
2. When delivery gates or acceptance criteria change, update the Customer project.
3. When actor, tool, TTP, source, or detection facts change, update the Israel CTI project.
4. Run Docusaurus builds for all affected projects.
5. Re-check ecosystem and inline links after deployment.
