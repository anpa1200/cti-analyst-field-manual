# CTI Analyst Field Manual

## Purpose

This manual provides a structured operating model for cyber threat intelligence work: from [collection requirements](01-cti-foundations/pir-sir-eei.md) to [evidence handling](01-cti-foundations/evidence-labels.md), [analytic judgment](02-analytic-discipline/sherman-kent-for-cti.md), [infrastructure pivoting](05-infrastructure-pivoting/single-ioc-to-network.md), [actor profiling](06-actor-research/actor-profile-template.md), [hunting hypotheses](08-cti-to-detection/hunting-hypothesis-template.md), [detection engineering](08-cti-to-detection/intelligence-to-detection.md), [SOC handoff](08-cti-to-detection/soc-handoff.md), and executive communication.

If you are reviewing the manual professionally, start with [Role-Based Reading Paths](role-based-reading-paths.md), [Publication-Grade Review Backlog](review/publication-grade-review.md), and [Authoritative Bibliography](references/authoritative-bibliography.md).


## CTI Ecosystem

This manual is one part of a three-book CTI ecosystem. Use [CTI Project Ecosystem](ecosystem.md) and [Cross-Project Fact Correlation](fact-correlation.md) to move between general analyst tradecraft, customer delivery methodology, and the Israel-focused actor knowledge base.

- [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) turns tradecraft into gated delivery.
- [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) provides sector-specific actor, tool, TTP, hunt, and detection examples.

## What This Manual Is

This is a practitioner field manual. It is designed to help an analyst produce repeatable, reviewable CTI outputs rather than disconnected research notes.

The manual uses public, defensive, TLP:CLEAR material and transforms Medium article themes into a coherent tradecraft reference. It does not copy blog posts into documentation pages. It reorganizes the ideas into workflows, templates, checklists, and review gates.

## What This Manual Is Not

This is not a beginner glossary, an exploit guide, a malware analysis lab, an IOC dump, or a production detection pack. It does not provide malware source code, unauthorized access instructions, leaked data, credentials, or victim-sensitive information.

## Operating Principles

- State the intelligence question before collecting sources.
- Separate facts from assessments, inferences, assumptions, and gaps.
- Rate source reliability and information credibility.
- Explain confidence instead of decorating prose with confidence words.
- Do not use [ATT&CK](03-frameworks/mitre-attack-as-working-tool.md) as [attribution](04-attribution/attribution-methodology.md) evidence.
- Treat infrastructure pivots as hypotheses until bounded by corroboration.
- Convert CTI into decisions, hunts, detections, SOC actions, or documented gaps.

## Evidence Labels

The manual uses these labels:

- **Observed:** directly seen in telemetry, primary artifact, or controlled analysis.
- **Reported:** stated by a source.
- **Assessed:** analytic judgment by a source or by the analyst, with reasoning.
- **Inferred:** derived from indirect evidence; weaker than observed or reported.
- **Unknown:** not known from available evidence.
- **Gap:** required information is missing and should be collected or documented.

## Confidence

Confidence reflects evidence quality, source access, corroboration, and analytic consistency. It does not equal probability. A high-confidence judgment can still be wrong if new evidence emerges; a low-confidence judgment may still be operationally important if impact is high.

## How To Navigate

Start with CTI Foundations, then move into analytic discipline, frameworks, attribution, infrastructure pivoting, actor research, sector CTI, CTI-to-detection, AI-assisted CTI, and reusable templates.

## Cross-Links

- [What Is CTI](01-cti-foundations/what-is-cti.md)
- [PIR, SIR, and EEI](01-cti-foundations/pir-sir-eei.md)
- [Evidence Labels](01-cti-foundations/evidence-labels.md)
- [Attribution Methodology](04-attribution/attribution-methodology.md)
- [Intelligence to Detection](08-cti-to-detection/intelligence-to-detection.md)
- [Detection Readiness Levels](08-cti-to-detection/detection-readiness-levels.md)
- [AI CTI Control Matrix](09-ai-assisted-cti/ai-cti-control-matrix.md)

## References

- [Authoritative Bibliography](references/authoritative-bibliography.md)
- Medium source profile: [medium.com/@1200km](https://medium.com/@1200km)
- Public RSS source index: [Medium Source Index](references/medium-source-index.md)
