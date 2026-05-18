# Confidence Language

## Purpose

Explain how to use confidence language in CTI without confusing confidence with probability.

## Practitioner-Level Explanation

Confidence communicates the analyst's trust in a judgment based on evidence quality, source access, corroboration, analytic consistency, and known gaps. It does not mean probability. A high-confidence judgment can still be wrong if new evidence appears. A low-confidence judgment can still matter if the potential impact is severe.

This manual uses High, Medium, and Low confidence. Each confidence statement must include the reason. Confidence without a reason is decoration.

## CTI Relevance

Confidence language allows CTI teams to be useful without overclaiming. It gives SOC, IR, detection, and executive consumers enough context to decide how much weight to place on a judgment.

## Common Mistakes

- Using confidence words as tone rather than analytic method.
- Equating high confidence with certainty.
- Writing probability numbers without calibration.
- Changing confidence to satisfy a stakeholder preference.

## Practical Workflow

1. State the judgment.
2. Identify evidence supporting the judgment.
3. Identify evidence weakening or contradicting it.
4. Assess [source reliability](source-reliability.md) and information credibility.
5. Assign confidence.
6. Write the confidence reason in plain language.
7. Define what evidence would change the confidence level.

![Confidence Language — Practical Workflow](/img/infographic-confidence-language-workflow.png)

## Example / Mini Case

Weak: "We assess with high confidence that Actor X is responsible."

Better: "We assess with medium confidence that the activity aligns with Actor X reporting because tooling, targeting, and timing match two reliable vendor reports. Confidence is limited because no unique infrastructure overlap or internal forensic artifact is available."

## Analyst Checklist

- Is confidence attached to a specific judgment?
- Is the reason explicit?
- Are gaps and [contradictions](../02-analytic-discipline/contradiction-handling.md) included?
- Could another analyst challenge the judgment from the evidence record?
- Is confidence separated from probability?

## Output Artifact

```text
Judgment:
Confidence: High / Medium / Low
Evidence Supporting:
Evidence Limiting:
Source Reliability:
Information Credibility:
Alternative Hypotheses:
What Would Change Confidence:
```

## Cross-Links

- [Source Reliability](source-reliability.md)
- [Estimative Language](../02-analytic-discipline/estimative-language.md)
- [Confidence vs Probability](../04-attribution/confidence-vs-probability.md)
- [Evidence Register Template](../10-templates/evidence-register-template.md)

## References

- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Words of Estimative Probability](https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
