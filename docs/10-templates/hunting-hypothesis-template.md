# Hunting Hypothesis Template

## Purpose

Create falsifiable hunt plans from CTI claims.

## Fields

- **hunt_id:** Unique hunt identifier.
- **hypothesis:** If/then behavior statement.
- **source_claim:** Claim and source backing the hunt.
- **telemetry:** Required tables/logs.
- **fields:** Required fields.
- **lookback:** Search period.
- **malicious_pattern:** Expected suspicious behavior.
- **benign_pattern:** Expected legitimate pattern.
- **false_positives:** Likely benign sources.
- **escalation:** When to open incident or case.

## Example Values

```text
hunt_id: HUNT-011
hypothesis: If phishing leads to script execution, then endpoints receiving suspicious mail may spawn script interpreters within 24 hours.
source_claim: EV-009
telemetry: Email gateway, EDR process, network logs
fields: recipient, attachment, process, command line, destination
lookback: 30 days
false_positives: IT automation, software installers
escalation: Script execution plus unknown external download.
```

## Quality Gates

- Hypothesis is falsifiable.
- Telemetry and fields are listed.
- False positives are named.
- Stop condition exists.

## Common Failure Modes

- Keyword search disguised as a hunt.
- No benign baseline.
- No escalation path.

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

- [Hunting Hypothesis Template](../08-cti-to-detection/hunting-hypothesis-template.md)
- [Telemetry Requirements](../08-cti-to-detection/telemetry-requirements.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
