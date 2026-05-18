# Hallucination Control

## Purpose

Provide controls for preventing fabricated or unsupported AI-generated CTI claims.

## Practitioner-Level Explanation

Hallucination control is a workflow problem. The model must not be allowed to convert plausible language into accepted intelligence. Require source URLs, direct support checks, evidence labels, and rejection of unsupported claims. Use AI to accelerate analysis, not to replace evidence.

## CTI Relevance

CTI is especially vulnerable to hallucination because actor names, aliases, tools, and campaigns are easy to blend incorrectly.

## Common Mistakes

- Letting the model invent sources or facts.
- Using AI output without source verification.
- Putting sensitive or restricted data into public tools.
- Skipping human analytic judgment.

## Practical Workflow

1. Require citations for every claim.
2. Open each URL.
3. Check content against claim.
4. Downgrade unsupported claims.
5. Preserve gaps.
6. Avoid actor merges unless source-confirmed.

![Hallucination Control: 6-Step Practical Workflow](/img/infographic-ai-hallucination-control.png)

## Example / Mini Case

The model claims two actor aliases are equivalent. The analyst checks primary sources and finds only one vendor uses the alias while another keeps clusters separate. The output records a taxonomy conflict rather than merging them.

## Analyst Checklist

- Are sources real and checked?
- Are claims evidence-labeled?
- Is sensitive data excluded?
- Has a human reviewed the output?
- Are hallucination controls applied?

## Output Artifact

```text
Claim:
Model Source:
URL Status:
Content Supports Claim: Yes / No / Partial
Correction:
Evidence Label:
Confidence:
Reviewer:
```

## Cross-Links

- [AI Quality Gates](ai-quality-gates.md)
- [Contradiction Handling](../02-analytic-discipline/contradiction-handling.md)
- [Source Register Template](../10-templates/source-register-template.md)

## References

- [FIRST TLP 2.0](https://www.first.org/tlp/)
- [OASIS CTI Documentation — STIX and TAXII](https://oasis-open.github.io/cti-documentation/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
