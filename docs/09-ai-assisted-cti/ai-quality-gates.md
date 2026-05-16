# AI Quality Gates

## Purpose

Define review gates that AI-assisted CTI outputs must pass before use.

## Practitioner-Level Explanation

AI output should not be accepted because it reads well. It must pass gates: source existence, source support, evidence labeling, no unsupported attribution, no sensitive data exposure, no unsafe content, and human review. For customer delivery, AI use should be logged according to project policy.

![AI Tool Approval Checklist — eight requirements that must be documented before an AI tool is used in CTI work](/img/ai-tool-approval-checklist.png)

## CTI Relevance

Quality gates prevent hallucinations and weak claims from entering reports, detections, or executive decisions.

## Common Mistakes

- Letting the model invent sources or facts.
- Using AI output without source verification.
- Putting sensitive or restricted data into public tools.
- Skipping human analytic judgment.

## Practical Workflow

1. Check data handling.
2. Verify every URL.
3. Confirm source content supports each claim.
4. Check evidence labels.
5. Check attribution and ATT&CK rules.
6. Check safety boundaries.
7. Record reviewer and decision.

## Example / Mini Case

An AI summary says a source attributes an operation to a sponsor. The reviewer opens the source and finds the source used only cautious language. The claim is downgraded and confidence lowered.

## Analyst Checklist

- Are sources real and checked?
- Are claims evidence-labeled?
- Is sensitive data excluded?
- Has a human reviewed the output?
- Are hallucination controls applied?

## Output Artifact

```text
Gate:
Pass / Fail:
Evidence:
Reviewer:
Corrections Required:
Residual Risk:
Approved Use:
```

## Cross-Links

- [Hallucination Control](hallucination-control.md)
- [Source Reliability](../01-cti-foundations/source-reliability.md)
- [Customer Quality Gates](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/methodology/reference-toolkit/)

## References

- [FIRST TLP 2.0](https://www.first.org/tlp/)
- [OASIS CTI Documentation](https://oasis-open.github.io/cti-documentation/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
