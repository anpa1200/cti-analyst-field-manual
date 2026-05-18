# Hunting Hypothesis Template

## Purpose

Define a falsifiable hunt hypothesis format for CTI-driven threat hunting.

## Practitioner-Level Explanation

A hunt hypothesis is a testable statement about adversary behavior in an environment. It should include behavior, telemetry, lookback window, expected malicious pattern, expected benign pattern, false positives, stop condition, and escalation path.

A hunt is not a keyword search. It is an investigation plan.

## CTI Relevance

Hypotheses make CTI actionable without prematurely creating noisy alerts.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. Start with a source-backed behavior.
2. Define why the behavior matters locally.
3. List required logs and fields.
4. Set lookback window.
5. Define malicious and benign patterns.
6. Run and tune.
7. Record findings and next action.

![Practical Workflow: Hunt for RMM Abuse](/img/infographic-hunt-rmm-abuse-workflow.png)

## Example / Mini Case

Hypothesis: If an actor abuses RMM tooling after phishing, then non-IT endpoints may show new RMM installation followed by remote session activity within 24 hours of suspicious email receipt.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Hypothesis ID:
Source Claim:
Behavior:
Environment Relevance:
Telemetry:
Fields:
Lookback:
Expected Malicious Pattern:
Expected Benign Pattern:
False Positives:
Stop Condition:
Escalation:
```

## Cross-Links

- [Hunting Hypothesis Template](../10-templates/hunting-hypothesis-template.md)
- [Telemetry Requirements](telemetry-requirements.md)
- [Detection Backlog](detection-backlog.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
