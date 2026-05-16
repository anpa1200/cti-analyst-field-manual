# ATT&CK Mapping Mistakes

## Purpose

List common ATT&CK errors that reduce CTI and detection-engineering quality.

## Practitioner-Level Explanation

ATT&CK can improve precision, but bad mappings create false confidence. The most common failure is mapping broad actor reporting to a technique and presenting it as local detection coverage.

Good mapping is narrow, evidence-backed, and operationally testable.

## CTI Relevance

This page helps reviewers challenge weak mappings before they become dashboards, coverage claims, or detection backlogs.

## Common Mistakes

- Mapping actor names instead of behavior.
- Mapping malware capability instead of observed use.
- Ignoring data sources and telemetry requirements.
- Overusing high-level techniques when sub-techniques exist.
- Treating ATT&CK as an attribution engine.

## Practical Workflow

1. Start with a source claim.
2. Extract a behavior.
3. Choose the narrowest defensible technique.
4. Record tactic, procedure, evidence, and confidence.
5. Add telemetry requirements.
6. Assign mapping maturity.
7. Reject mappings that cannot be supported.

## Example / Mini Case

A report says a tool can capture credentials. Do not map credential dumping unless the source reports observed credential dumping or analysis confirms capability and the page is explicit that the mapping is capability-based, not observed procedure.

## Analyst Checklist

- Is this observed behavior or tool capability?
- Is the technique narrow enough?
- Is the mapping useful to a detection engineer?
- Is confidence justified?
- Would the mapping survive review?

## Output Artifact

```text
Mapping ID:
Claim:
Behavior:
Technique:
Tactic:
Evidence Label:
Observed / Capability / Actor-Level:
Telemetry:
Confidence:
Reviewer Notes:
```

## Cross-Links

- [MITRE ATT&CK as a Working Tool](mitre-attack-as-working-tool.md)
- [Evidence Labels](../01-cti-foundations/evidence-labels.md)
- [Detection Backlog Item](../10-templates/detection-backlog-item.md)

## References

- [MITRE ATT&CK](https://attack.mitre.org/)
- [MITRE ATT&CK Resources](https://attack.mitre.org/resources/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
