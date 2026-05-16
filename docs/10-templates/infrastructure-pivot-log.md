# Infrastructure Pivot Log

## Purpose

Document accepted and rejected infrastructure pivots with link strength and limitations.

## Fields

- **pivot_id:** Unique pivot identifier.
- **seed:** Initial IOC or artifact.
- **pivot_type:** Passive DNS, certificate, ASN, URL path, favicon, malware config, or telemetry.
- **related_indicator:** Candidate related indicator.
- **time_window:** First/last seen or relevant date window.
- **link_strength:** Weak, moderate, or strong.
- **decision:** Accepted, rejected, or pending.
- **reason:** Why the decision was made.
- **limitations:** False-positive and coverage risks.

## Example Values

```text
pivot_id: PIV-002
seed: example[.]com
pivot_type: Certificate
related_indicator: update-example[.]com
time_window: 2026-04-01 to 2026-04-08
link_strength: Moderate
decision: Accepted
reason: Shared rare SAN pattern and URL path.
limitations: Attribution remains Unknown.
```

## Quality Gates

- Every pivot has a time window.
- Rejected pivots are preserved.
- Link strength is justified.
- Attribution is not inferred from weak pivots.

## Common Failure Modes

- Graph sprawl.
- No rejected-pivot record.
- No false-positive discussion.

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

- [Single IOC to Network](../05-infrastructure-pivoting/single-ioc-to-network.md)
- [Pivoting Limitations](../05-infrastructure-pivoting/pivoting-limitations.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)

## Required vs Optional Fields

Required: seed, pivot type, related indicator, time window, link strength, decision, reason, limitations.

Optional: tool used, screenshot/hash of result, analyst owner, expiry date.

## Pass / Fail Example

Pass: A certificate pivot is accepted because of rare SAN pattern plus matching URL path in the same week.

Fail: Every domain on the same ASN is treated as actor infrastructure.

## Complete Filled Example

```text
pivot_id: PIV-014
seed: login-example[.]com
pivot_type: Certificate + URL path
related_indicator: auth-example[.]com
time_window: 2026-05-10 to 2026-05-14
link_strength: Moderate
decision: Accepted as candidate cluster, not attribution.
reason: Same cert issuance window and same uncommon path structure.
limitations: Could be shared phishing kit; actor remains Unknown.
```
