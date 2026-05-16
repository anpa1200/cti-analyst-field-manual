# Estimative Language

## Purpose

Provide practical wording for CTI judgments where evidence is incomplete.

## Practitioner-Level Explanation

Estimative language gives readers a controlled way to understand analytic judgment under uncertainty. Terms such as likely, possibly, consistent with, and insufficient evidence must be used consistently.

Avoid dramatic or vague words. "The actor is dangerous" is not a useful estimate. "The actor is likely to prioritize credential access and edge-device exploitation against exposed remote access services" is more useful because it has observable implications.

## CTI Relevance

Precise estimative language prevents readers from treating analytic judgment as fact or ignoring a weak signal that needs collection.

## Common Mistakes

- Using likely, probably, and possibly interchangeably.
- Writing passive phrases that hide who made the assessment.
- Mixing source assessment and local analyst assessment.
- Using estimative language to avoid evidence.

## Practical Workflow

1. Define the judgment.
2. Choose the weakest accurate term.
3. Attach the evidence label.
4. State whether the assessment is source-reported or analyst-assessed.
5. Record what evidence would strengthen or weaken it.

## Example / Mini Case

"Reported: Vendor X states the campaign used phishing attachments. Assessed-here: The behavior is relevant to this environment because inbound attachments are retained in email logs and endpoint process telemetry can observe script execution. Confidence: medium."

## Analyst Checklist

- Is the estimative term necessary?
- Can the reader distinguish source assessment from local assessment?
- Does the term match evidence strength?
- Is the judgment actionable?

## Output Artifact

```text
Judgment:
Evidence Label:
Estimative Term:
Actor / Behavior / Target:
Confidence:
Reason:
What Would Change It:
```

## Cross-Links

- [Confidence Language](../01-cti-foundations/confidence-language.md)
- [Assumptions and Gaps](assumptions-and-gaps.md)
- [Confidence vs Probability](../04-attribution/confidence-vs-probability.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
