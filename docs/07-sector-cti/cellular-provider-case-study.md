# Cellular Provider Case Study

## Purpose

Provide a structured defensive CTI workflow for a fictional cellular provider.

## Practitioner-Level Explanation

The case study models a realistic CTI engagement without exposing a real victim. It starts with crown jewels, dependencies, PIRs, source collection, threat scenarios, telemetry readiness, hunts, detections, SOC handoff, and executive reporting.

The purpose is to show how CTI becomes operational decisions.

![CTI-Led Defensive Strategy for a Cellular Provider — end-to-end practitioner guide covering telecom core, cloud-native operations, SOC/NOC, identity, third-party access, and executive decision support](/img/telecom-cti-defensive-strategy.png)

## CTI Relevance

Case studies let analysts practice customer-specific relevance instead of generic actor summaries.

## Common Mistakes

- Writing sector CTI as generic threat landscape prose.
- Not connecting threats to assets and dependencies.
- Ignoring telemetry and control realities.
- Overstating public evidence about successful compromise.

## Practical Workflow

1. Define business functions.
2. Identify crown jewels and dependencies.
3. Write PIRs and SIRs.
4. Map relevant actors and behaviors.
5. Score threat scenarios.
6. Assess telemetry readiness.
7. Create hunts and detection backlog.
8. Write SOC and executive outputs.

## Example / Mini Case

Scenario: supplier VPN credentials are abused to access telecom management systems. CTI output identifies identity logs, VPN logs, privileged session monitoring, supplier contact path, and escalation criteria.

## Analyst Checklist

- Are assets and dependencies defined?
- Are threats tied to observable behavior?
- Are sector-specific false positives considered?
- Are source limits explicit?

## Output Artifact

```text
Customer:
Crown Jewels:
PIRs:
Threat Scenarios:
Relevant Actors:
Telemetry:
Hunts:
Detection Backlog:
SOC Handoff:
Executive Summary:
```

## Cross-Links

- [PIR, SIR, and EEI](../01-cti-foundations/pir-sir-eei.md)
- [Telecom 4G Threats](telecom-4g-threats.md)
- [SOC Handoff](../08-cti-to-detection/soc-handoff.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
