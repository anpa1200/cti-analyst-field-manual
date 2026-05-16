# Sigma, KQL, and SPL Examples

## Purpose

Explain how to express detection logic across platforms without pretending skeleton logic is production-ready.

## Practitioner-Level Explanation

Sigma, KQL, and SPL are implementation formats. The analytic logic should come first: behavior, telemetry, fields, false positives, and validation. Platform syntax follows. A rule skeleton is a communication artifact until tested against real or realistic telemetry.

## CTI Relevance

Cross-platform examples help CTI and detection teams collaborate while preserving platform-specific validation needs.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. Write platform-neutral logic.
2. Map fields for each platform.
3. Create Sigma, KQL, and SPL variants.
4. Run syntax validation.
5. Run positive and negative tests.
6. Document tuning and false positives.

## Example / Mini Case

Platform-neutral behavior: non-browser process connects to IMAPS. KQL may use DeviceNetworkEvents. Splunk may use endpoint network data. Sigma may express process and destination port. Each needs local field validation.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Detection Logic:
Sigma Fields:
KQL Table / Fields:
SPL Index / Sourcetype / Fields:
Positive Test:
Negative Test:
False Positives:
Promotion Status:
```

## Cross-Links

- [Telemetry Requirements](telemetry-requirements.md)
- [Detection Backlog](detection-backlog.md)
- [Israel CTI Platform Query Variants](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/platform-query-variants/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
