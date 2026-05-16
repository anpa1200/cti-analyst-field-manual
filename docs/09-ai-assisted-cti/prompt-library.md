# Prompt Library

## Purpose

Provide reusable prompt patterns for CTI research, evidence review, and detection handoff.

## Practitioner-Level Explanation

Prompts should force structure. The best CTI prompts ask for claim tables, source verification, uncertainty, gaps, and downstream artifacts rather than narrative summaries. A prompt library should be treated like code: versioned, reviewed, and improved based on errors.

## CTI Relevance

Good prompts reduce rework and make AI outputs easier to validate.

## Common Mistakes

- Letting the model invent sources or facts.
- Using AI output without source verification.
- Putting sensitive or restricted data into public tools.
- Skipping human analytic judgment.

## Practical Workflow

1. Choose the task type.
2. Define source limits.
3. Specify evidence labels and confidence terms.
4. Request structured output.
5. Ask for gaps and candidate rows.
6. Review manually.

## Example / Mini Case

Research prompt: Extract only source-supported claims. For each claim provide URL, evidence label, confidence reason, defensive implication, and whether it should become a source-register, evidence-register, TTP, hunt, or detection row.

## Analyst Checklist

- Are sources real and checked?
- Are claims evidence-labeled?
- Is sensitive data excluded?
- Has a human reviewed the output?
- Are hallucination controls applied?

## Output Artifact

```text
Prompt ID:
Purpose:
Allowed Sources:
Output Schema:
Required Evidence:
Quality Gates:
Known Failure Modes:
Last Reviewed:
```

## Cross-Links

- [Safe LLM Research Workflow](safe-llm-research-workflow.md)
- [Hallucination Control](hallucination-control.md)
- [Actor Deep Research Prompts in Israel CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/reports/actor-deep-research-prompts/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
