# Collection Gap Register

## Purpose

Track missing information that affects CTI judgments or defensive action.

## Fields

- **gap_id:** Unique gap identifier.
- **requirement:** PIR/SIR affected.
- **gap_statement:** What is missing.
- **impact:** Blocking, confidence-limiting, or contextual.
- **collection_path:** How to close or reduce the gap.
- **owner:** Person or team responsible.
- **due_date:** Review or collection date.
- **status:** Open, in progress, closed, accepted risk.

## Example Values

```text
gap_id: GAP-006
requirement: PIR-002
gap_statement: Unknown whether endpoint telemetry records command-line fields for script hosts.
impact: Blocking
collection_path: Validate EDR schema and retention.
owner: Detection Engineering
due_date: 2026-05-30
status: Open
```

## Quality Gates

- Impact is classified.
- Owner exists.
- Collection path is realistic.
- Accepted gaps are risk-owned.

## Common Failure Modes

- Gap has no owner.
- Gap is vague.
- Gap never reviewed.

## Practical Workflow

1. Create the artifact only after the intelligence requirement or decision is clear.
2. Fill required fields before writing narrative prose.
3. Attach evidence labels, source references, confidence, and limitations.
4. Review with the intended consumer.
5. Update the artifact when evidence, telemetry, or decision context changes.

## Analyst Checklist

- Is the consumer defined?
- Are required fields complete?
- Are claims source-backed or marked Gap?
- Is confidence justified?
- Are limitations explicit?
- Is there a next action or owner?

## Cross-Links

- [Assumptions and Gaps](../02-analytic-discipline/assumptions-and-gaps.md)
- [PIR, SIR, and EEI](../01-cti-foundations/pir-sir-eei.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
