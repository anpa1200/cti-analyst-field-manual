# Contradiction Handling

## Purpose

Provide a workflow for handling conflicting source claims without ignoring inconvenient evidence.

## Practitioner-Level Explanation

Contradictions are normal in CTI. Vendors use different telemetry, naming, visibility, and confidence thresholds. A contradiction does not automatically invalidate both claims, but it does require structured handling.

The analyst should identify whether the contradiction is factual, taxonomic, temporal, or interpretive.

## CTI Relevance

Contradiction handling prevents weak actor merges, stale claims, and detection work based on outdated assumptions.

## Common Mistakes

- Choosing the source that matches the preferred narrative.
- Treating vendor naming differences as proof of different actors.
- Failing to account for time: both claims may have been true at different dates.
- Not recording contradiction status.

## Practical Workflow

1. Extract both claims separately.
2. Identify contradiction type.
3. Check dates, scope, telemetry basis, and wording.
4. Look for primary evidence.
5. Update confidence or mark Gap.
6. Preserve both claims until resolved.

## Example / Mini Case

Source A says a cluster is linked to one sponsor; Source B uses more cautious language. The correct output is not to average the claims. Record both, prefer the more precise primary evidence, and state whether the sponsor link is source-reported, assessed-by-source, or a local assessment.

## Analyst Checklist

- Is the contradiction explicit?
- Are source dates compared?
- Is the stronger source identified with reasoning?
- Does the contradiction affect a downstream detection or report?

## Output Artifact

```text
Contradiction ID:
Claim A:
Source A:
Claim B:
Source B:
Contradiction Type:
Assessment:
Confidence Impact:
Resolution Status:
Follow-Up:
```

## Cross-Links

- [Source Reliability](../01-cti-foundations/source-reliability.md)
- [Alternative Hypotheses](alternative-hypotheses.md)
- [Evidence Register Template](../10-templates/evidence-register-template.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
