# Evidence Labels

## Purpose

Define a consistent evidence-labeling model so CTI claims can be reviewed, challenged, and converted into action without losing uncertainty.

## Practitioner-Level Explanation

Evidence labels make analytic status explicit. They prevent analysts from writing every sentence as if it has the same evidentiary weight.

This manual uses six labels:

| Label | Meaning | Example Use |
| --- | --- | --- |
| Observed | Directly seen in telemetry, primary artifact, or controlled analysis. | Internal logs show process execution. |
| Reported | Stated by a source. | A vendor report states the actor used a loader. |
| Assessed | Analytic judgment by a source or analyst, with reasoning. | The vendor assesses the cluster is state aligned. |
| Inferred | Derived from indirect evidence. | Similar infrastructure suggests possible campaign overlap. |
| Unknown | The answer is not known from available evidence. | Operator identity is unknown. |
| Gap | Missing information required for the requirement. | No source confirms whether the tool was used after 2024. |

Labels do not replace prose. The analyst still needs to explain source quality, confidence, contradictions, and limitations.

## CTI Relevance

Evidence labels are useful across the whole CTI workflow:

- [Source registers](../10-templates/source-register-template.md) use them to classify extracted claims.
- [Actor profiles](../06-actor-research/actor-profile-template.md) use them to avoid overclaiming [attribution](../04-attribution/attribution-methodology.md).
- [ATT&CK mappings](../03-frameworks/attck-mapping-mistakes.md) use them to show whether behavior is observed or only actor-level reporting.
- [Detection backlogs](../08-cti-to-detection/detection-backlog.md) use them to decide whether a hypothesis is strong enough to test.
- Executive summaries use them to avoid false certainty.

## Common Mistakes

- Treating reported claims as observed facts.
- Treating vendor assessments as universal truth.
- Using inferred links as attribution.
- Leaving gaps implicit.
- Failing to update labels when new evidence arrives.

## Practical Workflow

1. Extract one claim per row or paragraph.
2. Assign an evidence label.
3. Record source, date, and access context.
4. Add confidence and confidence reason.
5. Record contradiction or gap.
6. Link the claim to any ATT&CK mapping, hunt, detection, or report judgment.
7. Revisit labels during review.

## Example / Mini Case

```text
Claim:
A public report states that a cluster used cloud storage to stage payloads.

Evidence Label:
Reported

Confidence:
Medium confidence, because the source is reliable but the report does not include telemetry excerpts or multiple corroborating sources.

Detection Use:
Do not alert on all cloud storage use. Build a hunt for cloud storage download followed by script execution on endpoints where that pattern is unusual.

Gap:
No internal telemetry has confirmed this behavior in the defended environment.
```

## Analyst Checklist

- Is each major claim labeled?
- Are reported claims separated from observed facts?
- Are assessments attributed to the source or clearly marked as analyst assessment?
- Are inferred links prevented from becoming hard claims?
- Are gaps visible enough to drive follow-up collection?
- Are labels linked to downstream actions?

## Output Artifact

```text
Claim ID:
Claim:
Evidence Label:
Source:
Source Reliability:
Information Credibility:
Confidence:
Confidence Reason:
Contradiction / Gap:
Downstream Use:
```

## Cross-Links

- [Source Reliability](source-reliability.md)
- [Confidence Language](confidence-language.md)
- [Evidence Register Template](../10-templates/evidence-register-template.md)
- [ATT&CK Mapping Mistakes](../03-frameworks/attck-mapping-mistakes.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Israel CTI — Operating Standard (Claim Rules)](https://anpa1200.github.io/israel-government-threat-actors-cti/methodology/operating-standard/)
- [Israel CTI — Fact Correlation (Shared Evidence Labels)](https://anpa1200.github.io/israel-government-threat-actors-cti/fact-correlation/)
- [Customer project — Artifact Contracts](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/standard/artifact-contracts/)

## References

- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [FIRST TLP 2.0](https://www.first.org/tlp/)
- [MISP Documentation](https://www.misp-project.org/documentation/)
- Medium source profile: [medium.com/@1200km](https://medium.com/@1200km)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
