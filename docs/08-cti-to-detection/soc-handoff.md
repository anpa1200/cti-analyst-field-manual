# SOC Handoff

## Purpose

Package CTI-derived detections and hunts so SOC analysts can triage them consistently.

## Practitioner-Level Explanation

SOC handoff is where CTI and detection engineering become operational. A handoff note should explain why the alert matters, what to check first, what false positives are expected, when to escalate, and what response actions are authorized. Without SOC handoff, even good detection logic may fail in practice.

## CTI Relevance

SOC handoff reduces alert fatigue, improves triage quality, and captures feedback for CTI updates.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. Summarize behavior and risk.
2. List required triage data.
3. Define first 15-minute checks.
4. List benign explanations.
5. Define escalation thresholds.
6. Add containment guidance within authority.
7. Set feedback loop.

## Example / Mini Case

Alert: unusual MDM wipe command pattern. SOC checks admin identity, MFA/session context, device count, change ticket, source IP, and recent privilege changes before escalation.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Alert / Hunt Name:
Why It Matters:
First Checks:
Required Logs:
Expected False Positives:
Escalation Criteria:
Response Guidance:
Feedback Fields:
Owner:
```

## Cross-Links

- [SOC Handoff Note](../10-templates/soc-handoff-note.md)
- [Customer Delivery SOC Workflow](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/practitioner-package/package-index/)
- [Detection Backlog](detection-backlog.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
