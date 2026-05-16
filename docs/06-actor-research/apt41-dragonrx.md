# APT41 / Operation DragonRx

## Purpose

Show how to transform a public actor case study into a defensible CTI-to-detection workflow.

## Practitioner-Level Explanation

APT41 / DragonRx is useful as a worked teaching theme because it can connect public reporting, exploitation chains, enterprise compromise, pharmaceutical-sector relevance, ATT&CK mapping, and detection engineering.

The page should focus on tradecraft method: how to extract behaviors, avoid over-attribution, map telemetry, and produce hunt/detection outputs from a public case.

## CTI Relevance

This case demonstrates how a sector-specific intrusion narrative becomes practical analyst outputs: timeline, TTP table, telemetry requirements, detections, SOC handoff, and executive risk statement.

## Common Mistakes

- Writing actor pages as biographies instead of decision support.
- Merging vendor aliases without source confirmation.
- Using tool overlap as attribution proof.
- Omitting relevance to the defended environment.
- Failing to separate actor, persona, sponsor, and public claim.

## Practical Workflow

1. Summarize the public case without copying it.
2. Extract behavior sequence.
3. Rate sources and evidence.
4. Map techniques cautiously.
5. Identify telemetry needed.
6. Draft detection and triage outputs.
7. Write executive relevance.

## Example / Mini Case

A public report describes exploitation leading to domain compromise. The field-manual output turns that into a sequence: exposed application, suspicious child processes, credential access indicators, lateral movement, staging, and response requirements. Attribution remains evidence-labeled and not dependent on ATT&CK overlap.

## Analyst Checklist

- Are aliases source-confirmed?
- Are sponsor and attribution claims evidence-labeled?
- Are behaviors mapped to TTPs only when supported?
- Are detection and hunting implications included?
- Are gaps explicit?

## Output Artifact

```text
Case Name:
Sector:
Source Claims:
Behavior Timeline:
ATT&CK Mapping:
Telemetry Requirements:
Hunt Hypotheses:
Detection Candidates:
SOC Handoff:
Executive Summary:
```

## Cross-Links

- [Cyber Kill Chain](../03-frameworks/cyber-kill-chain.md)
- [ATT&CK Mapping Mistakes](../03-frameworks/attck-mapping-mistakes.md)
- [SOC Handoff](../08-cti-to-detection/soc-handoff.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
