# Evidence Register Template

## Purpose

Record claim-level evidence so CTI judgments remain traceable.

## Fields

- **evidence_id:** Unique evidence identifier.
- **claim:** Single claim, not a paragraph of mixed claims.
- **evidence_label:** Observed, Reported, Assessed, Inferred, Unknown, or Gap.
- **source_id:** Source register ID.
- **confidence:** High, Medium, or Low.
- **confidence_reason:** Why the confidence level was assigned.
- **contradiction_or_gap:** Known conflict or missing evidence.
- **downstream_use:** Report, actor page, TTP, hunt, detection, or executive summary.

## Example Values

```text
evidence_id: EV-014
claim: Vendor reports archive attachment leading to script execution.
evidence_label: Reported
source_id: SRC-004
confidence: Medium
confidence_reason: Reliable source, but no raw telemetry included.
contradiction_or_gap: Unknown whether observed in our environment.
downstream_use: HUNT-002, DET-CAND-005
```

## Quality Gates

- One claim per row.
- Evidence label is explicit.
- Confidence has a reason.
- Gaps and contradictions are visible.

## Common Failure Modes

- Combining multiple claims in one row.
- Using confidence without reason.
- No downstream action or gap.

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

- [Evidence Labels](../01-cti-foundations/evidence-labels.md)
- [Confidence Language](../01-cti-foundations/confidence-language.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)

## Required vs Optional Fields

Required: evidence ID, single claim, evidence label, source ID, reliability, credibility, confidence, confidence reason, contradiction or gap, downstream use.

Optional: quote summary, analyst owner, review date, superseded-by field.

## Pass / Fail Example

Pass: One row records one claim and explains why confidence is medium.

Fail: One row mixes targeting, tooling, attribution, and detection implications into a paragraph.

## Complete Filled Example

```text
evidence_id: EV-ATTACK-001
claim: ATT&CK mapping describes behavior and should not be used as actor attribution proof.
evidence_label: Reported
source_id: SRC-ATTACK-001
source_reliability: A
information_credibility: 2
confidence: High confidence
confidence_reason: Official framework documentation and consistent defensive practice.
contradiction_or_gap: Campaign-specific mapping still requires separate evidence.
downstream_use: ATT&CK mapping rules and detection backlog.
```
