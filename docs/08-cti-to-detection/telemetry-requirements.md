# Telemetry Requirements

## Purpose

Define the logs, fields, retention, and quality needed before a hunt or detection can be trusted.

## Practitioner-Level Explanation

Detection quality depends on telemetry quality. A good CTI-derived detection states exactly which data sources and fields are required, what retention is needed, and where visibility gaps exist. Telemetry requirements should be written before detection logic.

## CTI Relevance

This prevents detection engineering from building fragile rules against unavailable, inconsistent, or low-quality data.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. List behavior to observe.
2. Identify data sources.
3. Name required fields.
4. Check retention and latency.
5. Check parsing and normalization.
6. Document gaps.
7. Decide whether to hunt, detect, or defer.

## Example / Mini Case

A DNS tunneling hunt needs query name, source host, timestamp, domain, query type, response code, and count, length, or entropy features. Without source host or query name retention, the hypothesis may be blocked.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Behavior:
Data Source:
Required Fields:
Retention:
Latency:
Normalization:
Known Gaps:
Decision: Hunt / Detect / Defer
```

## Cross-Links

- [Intelligence to Detection](intelligence-to-detection.md)
- [Platform examples in Israel CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/platform-field-mapping/)
- [Collection Gap Register](../10-templates/collection-gap-register.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
