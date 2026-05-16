# Executive Summary Template

## Purpose

Summarize CTI judgments for senior decision-makers without losing uncertainty.

## Fields

- **decision:** Decision the summary supports.
- **bottom_line:** One-paragraph conclusion.
- **why_now:** Why the issue matters now.
- **confidence:** Confidence and reason.
- **business_impact:** Operational or risk impact.
- **recommended_actions:** Specific executive-level actions.
- **limits:** What is unknown or not proven.
- **owner:** Accountable owner for follow-up.

## Example Values

```text
decision: Approve 30-day hunt for remote admin tooling abuse.
bottom_line: Public reporting and local exposure justify a scoped hunt, not emergency blocking.
why_now: Multiple recent reports describe RMM abuse after initial access.
confidence: Medium; sources are credible but local telemetry is untested.
business_impact: Potential unauthorized remote control of endpoints.
recommended_actions: Approve hunt, validate telemetry, review RMM policy.
limits: No evidence of compromise in this environment.
owner: SOC Lead.
```

## Quality Gates

- Decision is explicit.
- No unsupported attribution.
- Confidence is explained.
- Actions are owned.

## Common Failure Modes

- Too technical for audience.
- No decision.
- Uncertainty hidden.

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

- [Finished Intelligence Report Template](finished-intel-report-template.md)
- [Confidence Language](../01-cti-foundations/confidence-language.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
