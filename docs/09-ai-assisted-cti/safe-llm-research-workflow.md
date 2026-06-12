# Safe LLM Research Workflow

## Purpose

Define a safe workflow for using LLMs in public, defensive CTI research.

## Practitioner-Level Explanation

[Safe LLM use](safe-llm-research-workflow.md) starts with scope and data handling; use Customer project [AI governance](https://1200km.com/customer-driven-ai-cti-project/docs/methodology/foundations/) for delivery work. Public TLP:CLEAR material may be appropriate for external tools. Internal telemetry, credentials, victim data, proprietary reporting, or sensitive incident data should not be pasted into public models.

The model should be asked to produce structured claims, source links, confidence caveats, and gaps. The analyst verifies everything.

![AI-Assisted CTI — Transition to Practical Workflow](/img/infographic-ai-workflow-transition.png)

![Practical Workflow: Pre-Prompt Setup (6-step)](/img/infographic-ai-pre-prompt-workflow.png)

## CTI Relevance

This workflow lets teams gain speed without losing source integrity or data-handling discipline.

## Common Mistakes

- Letting the model invent sources or facts.
- Using AI output without source verification.
- Putting sensitive or restricted data into public tools.
- Skipping human analytic judgment.

## Practical Workflow

1. Classify the data.
2. Define task and allowed sources.
3. Ask for structured output.
4. Require evidence labels.
5. Verify links and content.
6. Downgrade unsupported claims.
7. Record AI use if project policy requires it.

![Practical Workflow: Research & Analysis with Rigor (6-step)](/img/infographic-ai-research-rigor-workflow.png)

## Example / Mini Case

Prompt the model to extract claims from public reporting into a table: claim, source URL, evidence label, confidence, detection implication, gap. Then manually check each URL and claim before using it.

## Analyst Checklist

- Are sources real and checked?
- Are claims evidence-labeled?
- Is sensitive data excluded?
- Has a human reviewed the output?
- Are hallucination controls applied?

## Output Artifact

```text
Task:
Allowed Data:
Prompt Version:
Model Output:
Source Verification:
Claim Review:
Corrections:
Final Use:
Reviewer:
```

## Cross-Links

- [Prompt Library](prompt-library.md)
- [Hallucination Control](hallucination-control.md)
- [AI Governance in Customer CTI](https://1200km.com/customer-driven-ai-cti-project/docs/methodology/foundations/)
- [ThreatMapper CTI-to-detection workflow](https://1200km.com/threatmapper/): self-hosted implementation of this workflow with operator-configured LLM providers, structured ATT&CK mapping candidates, evidence, and extraction confidence. Use a local/private gateway when report content must not reach an external provider.

## References

- [FIRST TLP 2.0](https://www.first.org/tlp/)
- [OASIS CTI Documentation](https://oasis-open.github.io/cti-documentation/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
