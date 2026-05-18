# Assumptions and Gaps

## Purpose

Define how to document assumptions and intelligence gaps so they improve analysis instead of weakening it invisibly.

## Practitioner-Level Explanation

An assumption is something the analyst accepts temporarily to reason forward. A gap is information needed to answer the requirement but not currently available. Both must be visible.

A mature CTI product does not hide gaps. It explains whether the gap blocks the judgment, limits confidence, or creates a collection task.

## CTI Relevance

Assumption and gap handling is essential for [attribution](../04-attribution/attribution-methodology.md), threat prioritization, [infrastructure clustering](../05-infrastructure-pivoting/single-ioc-to-network.md), and [detection engineering](../08-cti-to-detection/intelligence-to-detection.md). It tells downstream teams what can be trusted and what still needs validation.

## Common Mistakes

- Treating assumptions as facts.
- Using gaps as excuses to avoid judgment.
- Failing to distinguish blocking gaps from nice-to-have gaps.
- Not assigning owners or collection paths to gaps.

## Practical Workflow

1. List assumptions before writing the judgment.
2. Identify gaps during source extraction.
3. Classify gaps as blocking, confidence-limiting, or contextual.
4. Assign collection options.
5. Update the judgment if a key assumption fails.

## Example / Mini Case

A report describes an actor targeting telecom providers. The analyst assumes similar exposure may exist in a local telecom environment. That assumption is acceptable only if labeled. The gap is whether the local environment has the same exposed service, telemetry, or supplier relationship.

## Analyst Checklist

- Are assumptions explicitly named?
- Are gaps classified by impact?
- Is there a collection path?
- Does the confidence statement reflect the gaps?
- Are stale assumptions reviewed?

## Output Artifact

```text
Assumption ID:
Statement:
Why Needed:
Risk if Wrong:
Gap ID:
Gap Type:
Collection Path:
Owner:
Due Date:
Effect on Confidence:
```

## Cross-Links

- [Collection Gap Register](../10-templates/collection-gap-register.md)
- [Alternative Hypotheses](alternative-hypotheses.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
