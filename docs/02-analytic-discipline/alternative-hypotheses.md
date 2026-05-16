# Alternative Hypotheses

## Purpose

Show how to document competing explanations before making CTI judgments.

## Practitioner-Level Explanation

Alternative hypotheses protect analysts from premature closure. In CTI, the first plausible answer is often the wrong one or only one of several possible explanations.

A good alternative hypothesis is not a random possibility. It must explain the same evidence and be testable by additional collection.

## CTI Relevance

Alternative hypotheses are essential for attribution, infrastructure clustering, persona claims, and interpreting campaign overlap.

## Common Mistakes

- Writing only one hypothesis.
- Inventing alternatives that cannot be tested.
- Treating the best-known actor as the default answer.
- Failing to say what evidence would discriminate between hypotheses.

## Practical Workflow

1. State the main hypothesis.
2. Write at least two alternatives.
3. List evidence supporting and weakening each one.
4. Identify discriminating evidence.
5. Assign confidence and collection tasks.
6. Update when new evidence arrives.

## Example / Mini Case

Evidence shows a phishing lure, a cloud storage link, and PowerShell execution. Hypothesis 1: a tracked APT campaign. Hypothesis 2: commodity intrusion using similar tradecraft. Hypothesis 3: internal red-team or admin activity. Discriminating evidence includes infrastructure ownership, payload lineage, user targeting, and approved testing records.

## Analyst Checklist

- Can each hypothesis explain the evidence?
- Is each hypothesis testable?
- Are discriminating indicators defined?
- Does the final judgment explain why alternatives were rejected or retained?

## Output Artifact

```text
Primary Hypothesis:
Alternative Hypothesis 1:
Alternative Hypothesis 2:
Evidence For:
Evidence Against:
Discriminating Evidence Needed:
Confidence:
Collection Task:
```

## Cross-Links

- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [False Flag Analysis](../04-attribution/false-flag-analysis.md)
- [Contradiction Handling](contradiction-handling.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
