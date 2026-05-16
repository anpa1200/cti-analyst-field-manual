# Cyber Kill Chain

## Purpose

Use kill-chain thinking to sequence intrusion activity and identify defensive opportunities.

## Practitioner-Level Explanation

The Cyber Kill Chain organizes activity from preparation through delivery, exploitation, installation, command and control, and objectives. For CTI, its value is sequencing. It helps analysts ask where evidence exists and where defenders can intervene.

The model is not complete for every modern intrusion. Identity-plane abuse, cloud-native activity, SaaS compromise, and living-off-the-land behavior may not fit neatly. Use the model as a sequencing tool, not a forced structure.

## CTI Relevance

Kill-chain analysis helps convert a long report into phases, observables, telemetry, and response opportunities.

## Common Mistakes

- Forcing every campaign into every phase.
- Ignoring cloud and identity activity because it does not fit old phases.
- Using kill-chain phase names without observables.
- Failing to connect phases to controls.

## Practical Workflow

1. List observed or reported behaviors.
2. Order them by likely sequence.
3. Map each behavior to evidence and telemetry.
4. Identify prevention, detection, and response opportunities.
5. Record missing phases as gaps, not assumptions.

## Example / Mini Case

A phishing campaign may have delivery evidence from email logs, execution evidence from endpoint telemetry, and C2 evidence from DNS logs. If no exploitation evidence exists, mark it as Gap rather than inventing a phase.

## Analyst Checklist

- Does every phase have evidence or a gap label?
- Are identity and cloud actions represented?
- Are defensive controls mapped to phases?
- Is sequence confidence stated?

## Output Artifact

```text
Phase:
Behavior:
Evidence Label:
Telemetry:
Control Opportunity:
Detection Idea:
Gap:
Confidence:
```

## Cross-Links

- [Diamond Model](diamond-model.md)
- [Telemetry Requirements](../08-cti-to-detection/telemetry-requirements.md)
- [Hunting Hypothesis Template](../08-cti-to-detection/hunting-hypothesis-template.md)

## References

- [Lockheed Martin Cyber Kill Chain Paper](https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
