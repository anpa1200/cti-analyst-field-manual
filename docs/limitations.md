# Known Limitations

## Purpose

This page defines the boundaries of the field manual so readers do not overinterpret tradecraft guidance as validated operational coverage.

## Limitations

- The manual is based on public, TLP:CLEAR material and author-owned public writing.
- It is not a production SOC detection pack.
- Templates require local adaptation before use in a customer or enterprise environment.
- ATT&CK mappings in examples are teaching aids unless tied to explicit evidence.
- Attribution examples are analytic exercises, not legal or government determinations.
- Infrastructure pivoting guidance must be bounded by false-positive controls and corroboration.
- AI-assisted workflows require human review, source checking, and evidence validation.

No detection may be represented as production coverage unless it reaches [DRL-9](08-cti-to-detection/detection-readiness-levels.md). AI-assisted outputs must follow the [AI CTI Control Matrix](09-ai-assisted-cti/ai-cti-control-matrix.md), and doctrine-heavy claims should cite the [Authoritative Bibliography](references/authoritative-bibliography.md) instead of relying only on author articles.

## Defensive Boundary

Do not add malware samples, exploit instructions, leaked data, credentials, victim-sensitive information, or operational instructions for unauthorized access.

## Cross-Links

- [Evidence Labels](01-cti-foundations/evidence-labels.md)
- [Source Reliability](01-cti-foundations/source-reliability.md)
- [Attribution Methodology](04-attribution/attribution-methodology.md)
- [Hallucination Control](09-ai-assisted-cti/hallucination-control.md)
- [Detection Readiness Levels](08-cti-to-detection/detection-readiness-levels.md)
- [Authoritative Bibliography](references/authoritative-bibliography.md)
