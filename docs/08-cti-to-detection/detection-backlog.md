# Detection Backlog

## Purpose

Organize CTI-derived detection candidates by value, evidence, telemetry, readiness, and validation state.

## Practitioner-Level Explanation

A [detection backlog](detection-backlog.md) is not a wish list; compare maturity against the Israel CTI [Detection Status Dashboard](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/detection-status-dashboard/). Each item should record source behavior, evidence, expected value, telemetry dependency, false-positive risk, owner, readiness level, and promotion criteria. Backlog discipline prevents teams from losing good hypotheses or promoting immature logic too early.

## CTI Relevance

Backlogs connect CTI priorities to engineering capacity and SOC readiness.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. Create one row per detection idea.
2. Link source and evidence.
3. Record telemetry dependency.
4. Score value and feasibility.
5. Assign owner and readiness.
6. Track testing and false positives.
7. Promote, defer, or retire.

## Example / Mini Case

A backup-deletion behavior may be high impact but blocked by missing process telemetry. The backlog item remains Hunt or Design until telemetry exists and tests are completed.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Detection ID:
Title:
Source Behavior:
Evidence ID:
Technique:
Telemetry Required:
Priority:
False Positives:
Validation Status:
Readiness Level:
Owner:
Next Step:
```

## Cross-Links

- [Detection Backlog Item](../10-templates/detection-backlog-item.md)
- [Telemetry Requirements](telemetry-requirements.md)
- [SOC Handoff](soc-handoff.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
