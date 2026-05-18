# Actor Update Workflow

![Threat Intelligence Profile Maintenance Workflow](/img/infographic-actor-update-workflow.png)

## Purpose

Provide a repeatable process for refreshing actor profiles without source drift or overclaiming.

## Practitioner-Level Explanation

Actor profiles decay. Aliases change, sponsor language evolves, tools are reclassified, and old IOCs become stale. Updates need a workflow, not ad hoc edits.

Every update should identify what changed, what source supports it, what confidence changed, and which downstream hunts, detections, or reports are affected.

## CTI Relevance

Actor update discipline keeps CTI repositories accurate and prevents stale actor pages from driving bad detection priorities.

## Common Mistakes

- Adding new reports without updating old contradictions.
- Changing sponsor language without source support.
- Leaving detections linked to deprecated claims.
- Failing to mark old IOCs as stale.

## Practical Workflow

1. Check latest primary sources.
2. Compare against existing profile.
3. Add new claims to evidence register.
4. Update aliases and sponsor language only with sources.
5. Review TTP and tool mappings.
6. Check affected detections and hunts.
7. Record changelog and review date.

## Example / Mini Case

A new source reports a tool previously associated with one actor under a different cluster. The analyst records the contradiction, updates confidence, and marks affected detections as behavior-based rather than actor-specific.

## Analyst Checklist

- Is the update source-backed?
- Are contradictions recorded?
- Are downstream links reviewed?
- Is the review date updated?

## Output Artifact

```text
Actor:
Update Date:
New Sources:
Changed Claims:
Evidence IDs:
Confidence Changes:
Affected TTPs:
Affected Detections:
Gaps:
Reviewer:
```

## Cross-Links

- [Evidence Register Template](../10-templates/evidence-register-template.md)
- [Contradiction Handling](../02-analytic-discipline/contradiction-handling.md)
- [Detection Backlog](../08-cti-to-detection/detection-backlog.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
