# SOC Handoff Note

## Purpose

Package a hunt or detection for SOC triage and escalation.

## Fields

- **handoff_id:** Unique handoff identifier.
- **alert_or_hunt:** Name of alert or hunt.
- **why_it_matters:** Threat and impact context.
- **first_checks:** Initial triage steps.
- **required_logs:** Logs needed for triage.
- **false_positives:** Expected benign causes.
- **escalation:** Escalation threshold.
- **response:** Authorized response guidance.
- **feedback:** What SOC should report back.

## Example Values

```text
handoff_id: SOC-004
alert_or_hunt: Non-IT RMM Installation
why_it_matters: Reported adversary behavior uses RMM after phishing.
first_checks: User, host role, install source, ticket, remote session.
required_logs: EDR, software inventory, email, identity.
false_positives: Helpdesk support, approved vendor work.
escalation: No ticket plus external session plus suspicious email.
response: Isolate only per IR policy.
feedback: True/false positive and tuning notes.
```

## Quality Gates

- First checks are concrete.
- Escalation threshold is clear.
- False positives are realistic.
- Response stays within authority.

## Common Failure Modes

- No triage path.
- Overbroad escalation.
- No feedback loop.

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

- [SOC Handoff](../08-cti-to-detection/soc-handoff.md)
- [Detection Backlog Item](detection-backlog-item.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
