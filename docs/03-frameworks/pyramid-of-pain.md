# Pyramid of Pain

## Purpose

Use the Pyramid of Pain to prioritize durable defensive intelligence over brittle indicators.

## Practitioner-Level Explanation

The Pyramid of Pain ranks indicators by how disruptive they are for an adversary to change. Hashes and IPs are easy to rotate. Tools, network behaviors, and procedures are harder to change.

This does not mean low-level indicators are useless. They can support triage, scoping, and historical search. But durable detection engineering should move toward behavior and procedure whenever telemetry allows.

## CTI Relevance

This framework helps CTI teams avoid over-investing in stale IOC feeds and under-investing in behavior-based hunts.

## Common Mistakes

- Treating hashes as long-term detection strategy.
- Ignoring IOCs entirely.
- Failing to attach expiration and context to indicators.
- Calling behavior-based logic production-ready without testing.

## Practical Workflow

1. Classify indicators by level.
2. Attach context, source, and expiration.
3. Use hashes/IPs for triage and scoping.
4. Derive behaviors and telemetry requirements.
5. Convert durable behaviors into hunts or detections.
6. Validate false positives.

## Example / Mini Case

A malicious hash from a report is useful for immediate lookback. The stronger long-term detection may be the behavior: archive extraction followed by shortcut execution, script interpreter launch, and outbound connection to a new domain.

## Analyst Checklist

- Are indicators contextualized?
- Is there an expiration date?
- Can a behavior be derived?
- Is telemetry available?
- Has the behavior been validated?

## Output Artifact

```text
Indicator:
Type:
Pyramid Level:
Source:
Context:
Expiration:
Behavior Derived:
Telemetry:
Hunt / Detection Candidate:
```

## Cross-Links

- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)
- [Detection Backlog](../08-cti-to-detection/detection-backlog.md)
- [Source Reliability](../01-cti-foundations/source-reliability.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
