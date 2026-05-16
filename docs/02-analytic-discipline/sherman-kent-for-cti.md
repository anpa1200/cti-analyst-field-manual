# Sherman Kent for CTI

## Purpose

Translate Sherman Kent-style analytic discipline into practical CTI writing and review habits.

## Practitioner-Level Explanation

Sherman Kent's core value for CTI is disciplined judgment: say what is known, how it is known, what is assessed, how confident the analyst is, and what remains uncertain. CTI often fails when it sounds certain but is built on unexamined assumptions.

Kent-style discipline helps analysts avoid vague estimative language, overclaiming, source laundering, and attribution shortcuts. The goal is not academic writing. The goal is a judgment that can survive review.

## CTI Relevance

CTI teams regularly advise on risk, detection, incident response, and executive decisions under uncertainty. Kent-style tradecraft gives those judgments structure and humility.

## Common Mistakes

- Treating a useful framework as proof instead of a way to organize evidence.
- Hiding assumptions, gaps, and contradictions in narrative prose.
- Using actor labels where behavior-level claims would be more defensible.
- Skipping consumer, decision, telemetry, or action context.

## Practical Workflow

1. Write the key judgment first.
2. Separate evidence from interpretation.
3. State assumptions explicitly.
4. Use calibrated estimative language.
5. Include alternative hypotheses.
6. Explain confidence.
7. Identify collection gaps and decision impact.

## Example / Mini Case

A report says multiple actors use a similar webshell. A weak CTI note attributes a new case to the best-known actor. A disciplined note says the webshell is consistent with several actors, attribution is unknown, and the defensible action is to hunt the webshell behavior while collecting stronger infrastructure, timing, and operator-pattern evidence.

## Analyst Checklist

- Is the intelligence question explicit?
- Are facts, reporting, assessment, inference, assumptions, and gaps separated?
- Is confidence justified by evidence quality and corroboration?
- Can a reader turn the output into a decision, hunt, detection, or collection task?

## Output Artifact

```text
Key Judgment:
Evidence:
Assumptions:
Alternative Hypotheses:
Confidence:
Collection Gaps:
Decision Impact:
```

## Cross-Links

- [Estimative Language](estimative-language.md)
- [Alternative Hypotheses](alternative-hypotheses.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Evidence Labels](../01-cti-foundations/evidence-labels.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
