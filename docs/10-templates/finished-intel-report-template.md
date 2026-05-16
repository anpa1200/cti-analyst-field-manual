# Finished Intelligence Report Template

## Purpose

Structure a CTI report that supports decisions rather than only summarizing research.

## Fields

- **title:** Report title.
- **audience:** Consumer and decision owner.
- **executive_summary:** Concise decision-focused summary.
- **key_judgments:** Evidence-backed judgments with confidence.
- **evidence:** Source and evidence references.
- **assessment:** Analytic interpretation.
- **implications:** Defensive, operational, or business impact.
- **recommendations:** Specific actions.
- **gaps:** Known unknowns.
- **appendix:** Source and technical detail.

## Example Values

```text
title: CTI Assessment of RMM Abuse Reporting
audience: SOC Lead and Detection Engineering
executive_summary: Public reporting supports a hunt, not production alerting yet.
key_judgments: Medium-confidence relevance due to current RMM exposure.
recommendations: Run 30-day hunt and baseline admin tooling.
gaps: Unknown local false-positive volume.
```

## Quality Gates

- Audience and decision are clear.
- Key judgments include confidence.
- Recommendations are actionable.
- Gaps are visible.

## Common Failure Modes

- Research dump.
- No decision supported.
- No confidence language.

## Practical Workflow

1. Create the artifact only after the intelligence requirement or decision is clear.
2. Fill required fields before writing narrative prose.
3. Attach evidence labels, source references, confidence, and limitations.
4. Review with the intended consumer.
5. Update the artifact when evidence, telemetry, or decision context changes.

## Analyst Checklist

- Is the consumer defined?
- Are required fields complete?
- Are claims source-backed or marked Gap?
- Is confidence justified?
- Are limitations explicit?
- Is there a next action or owner?

## Cross-Links

- [Finished Intelligence vs Research Notes](../01-cti-foundations/finished-intelligence-vs-research-notes.md)
- [Executive Summary](executive-summary.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
