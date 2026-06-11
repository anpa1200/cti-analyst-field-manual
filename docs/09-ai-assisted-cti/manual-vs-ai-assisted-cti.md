# Manual vs AI-Assisted CTI

## Purpose

Explain where AI can accelerate CTI work and where human judgment remains mandatory.

## Practitioner-Level Explanation

AI can accelerate source triage, summarization, schema drafting, prompt-based extraction, first-pass hypothesis generation, and editorial tightening. It cannot own [attribution](../04-attribution/attribution-methodology.md), [source validation](../01-cti-foundations/source-reliability.md), [confidence assignment](../01-cti-foundations/confidence-language.md), or customer-risk acceptance.

The useful model is analyst-led, AI-assisted CTI.

## CTI Relevance

AI-assisted CTI can reduce mechanical effort while preserving evidence discipline if [quality gates](ai-quality-gates.md) are enforced.

## Common Mistakes

- Letting the model invent sources or facts.
- Using AI output without source verification.
- Putting sensitive or restricted data into public tools.
- Skipping human analytic judgment.

## Practical Workflow

1. Define the analyst task.
2. Decide whether AI is allowed for the data class.
3. Use structured prompts.
4. Require source links and claim extraction.
5. Verify every source and claim.
6. Edit for confidence, gaps, and consumer relevance.

## Example / Mini Case

Manual workflow may take hours to extract claims from reports. AI can create a draft extraction table quickly, but the analyst must verify URLs, evidence labels, and whether the text supports each claim.

## Analyst Checklist

- Are sources real and checked?
- Are claims evidence-labeled?
- Is sensitive data excluded?
- Has a human reviewed the output?
- Are [hallucination controls](hallucination-control.md) applied?

## Output Artifact

```text
Task:
AI Role:
Data Classification:
Prompt:
Output:
Human Checks:
Source Verification:
Accepted / Rejected Claims:
Final Artifact:
```

## Cross-Links

- [Safe LLM Research Workflow](safe-llm-research-workflow.md)
- [AI Quality Gates](ai-quality-gates.md)
- [Customer AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/)
- [ThreatMapper — self-hosted AI ATT&CK extraction and APT attribution platform](https://1200km.com/threatmapper-docs/): practical example of LLM-driven technique extraction with evidence, confidence scoring, Jaccard APT matching, and Navigator heatmap — all running locally on your own stack.

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
