# Finished Intelligence vs Research Notes

## Purpose

Separate raw research activity from finished intelligence that can support decisions.

## Practitioner-Level Explanation

Research notes capture what an analyst found. Finished intelligence explains what the findings mean, why they matter, how confident the analyst is, what remains unknown, and what action should follow.

Research notes are necessary. They preserve source material, quotes, timestamps, pivots, and abandoned leads. But they are not usually suitable for a SOC lead, executive, or detection engineer without synthesis.

Finished intelligence requires judgment. It must include evidence, uncertainty, relevance, and a practical output.

## CTI Relevance

This distinction is critical in CTI-to-detection work. A detection engineer does not need ten pages of article excerpts. They need a behavior, a confidence statement, telemetry requirements, expected false positives, and validation guidance.

## Common Mistakes

- Delivering source summaries without judgment.
- Treating long reports as more mature than concise assessments.
- Hiding contradictions in appendices.
- Omitting confidence because the analyst does not want to be challenged.
- Publishing raw IOCs without expiration, context, or source rating.

## Practical Workflow

1. Keep research notes separate from finished outputs.
2. Extract claims into an evidence register.
3. Label each claim: Observed, Reported, Assessed, Inferred, Unknown, or Gap.
4. Identify contradictions and missing context.
5. Write key judgments with confidence reasons.
6. Tailor the final product to the consumer.
7. Preserve source links and limitations.
8. Convert conclusions into actions or documented gaps.

## Example / Mini Case

Research note:

```text
Vendor A says the actor used phishing and a cloud storage link. Vendor B says a similar campaign used archives and script execution. Several IOCs are listed.
```

Finished intelligence:

```text
Assessment:
Reported campaign behavior supports a medium-confidence hunt for archive-based phishing leading to script execution and external staging. The public sources do not prove the same actor operated both campaigns. The SOC should hunt behavior rather than actor label.

Action:
Run a 30-day hunt for archive extraction followed by script interpreter execution and outbound connection to newly observed domains. Record false positives from IT automation and software installers.
```

## Analyst Checklist

- Are raw notes separated from judgments?
- Are claims traceable to sources?
- Are contradictions documented?
- Is confidence justified?
- Is the consumer clear?
- Does the output support a decision, action, or gap?

## Output Artifact

```text
Key Judgment:
Evidence Basis:
Evidence Labels:
Confidence:
Limitations:
Alternative Explanations:
Recommended Action:
Appendix / Research Notes Link:
```

## Cross-Links

- [Evidence Labels](evidence-labels.md)
- [Confidence Language](confidence-language.md)
- [Alternative Hypotheses](../02-analytic-discipline/alternative-hypotheses.md)
- [Finished Intelligence Report Template](../10-templates/finished-intel-report-template.md)

## References

- Medium source profile: [medium.com/@1200km](https://medium.com/@1200km)
- Article-specific references will be added during the detailed source-ingestion pass.
