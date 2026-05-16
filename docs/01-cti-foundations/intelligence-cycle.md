# Intelligence Cycle

## Purpose

Explain the intelligence cycle as a practical CTI workflow rather than a static diagram.

## Practitioner-Level Explanation

The intelligence cycle is a disciplined way to move from requirements to action. In CTI, the cycle usually contains direction, collection, processing, analysis, dissemination, feedback, and continuous refinement.

The cycle matters because threat reporting is noisy. Without a cycle, analysts collect interesting material and then search for a use case. With a cycle, analysts collect against a decision need and can explain why a source, claim, detection idea, or gap matters.

## CTI Relevance

A CTI team should be able to trace a finished product backward to the requirement that caused it and forward to the decision it supports. If it cannot, the product may still be useful research, but it is not finished intelligence.

## Common Mistakes

- Starting with sources instead of requirements.
- Treating collection as the whole job.
- Publishing before processing source reliability and contradictions.
- Disseminating the same product to executives, SOC analysts, and detection engineers.
- Failing to collect feedback on whether the output was used.

## Practical Workflow

1. **Direction:** Define PIRs, SIRs, and decision owners.
2. **Collection:** Gather public reporting, telemetry summaries, vendor intelligence, government advisories, and internal context allowed by scope.
3. **Processing:** Normalize sources, extract claims, identify dates, rate source reliability, and preserve links.
4. **Analysis:** Compare claims, weigh evidence, document assumptions, and produce judgments.
5. **Dissemination:** Deliver the right format to the right audience.
6. **Feedback:** Ask whether the product changed a decision, hunt, detection, control, or risk posture.
7. **Refinement:** Update requirements, gaps, and collection priorities.

## Example / Mini Case

A SOC lead asks whether recent reporting on an actor should change monitoring. The cycle prevents a vague answer.

- **Direction:** Determine whether the actor's reported behaviors intersect with the organization's telemetry.
- **Collection:** Pull public vendor reports and existing internal telemetry inventory.
- **Processing:** Extract behaviors, not only IOCs.
- **Analysis:** Identify which behaviors can be hunted with current logs.
- **Dissemination:** Provide a detection backlog item and a telemetry gap note.
- **Feedback:** SOC confirms whether the hunt produced results or only baselining needs.

## Analyst Checklist

- Is there a named requirement?
- Is collection scoped to the requirement?
- Are sources processed before analysis?
- Are judgments separated from raw reporting?
- Is the output tailored to the consumer?
- Is feedback captured?

## Output Artifact

```text
Requirement ID:
Decision Owner:
PIR:
SIRs:
Collection Sources:
Processed Claims:
Analytic Judgment:
Dissemination Format:
Feedback Required:
Next Cycle Trigger:
```

## Cross-Links

- [PIR, SIR, and EEI](pir-sir-eei.md)
- [Source Reliability](source-reliability.md)
- [Finished Intelligence vs Research Notes](finished-intelligence-vs-research-notes.md)
- [Collection Gap Register](../10-templates/collection-gap-register.md)

## References

- Medium source profile: [medium.com/@1200km](https://medium.com/@1200km)
- Article-specific references will be added during the detailed source-ingestion pass.
