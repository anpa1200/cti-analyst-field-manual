# Telecom 4G Threats

## Purpose

Frame 4G telecom CTI around assets, dependencies, attack surfaces, and defensive outputs.

## Practitioner-Level Explanation

4G telecom CTI requires understanding both enterprise IT and telecom-specific systems. Public CTI often mentions telecom targeting without proving compromise of core network elements. Analysts must separate corporate IT compromise, subscriber-data exposure, signaling-plane risk, lawful intercept risk, and supplier exposure.

The manual approach is to map assets and dependencies first, then connect public reporting to plausible observables.

## CTI Relevance

Telecom networks are high-value targets for espionage, disruption, fraud, and strategic access. CTI must be precise enough for network, SOC, and executive teams.

## Common Mistakes

- Writing sector CTI as generic threat landscape prose.
- Not connecting threats to assets and dependencies.
- Ignoring telemetry and control realities.
- Overstating public evidence about successful compromise.

## Practical Workflow

1. Define telecom assets and crown jewels.
2. Separate IT, OSS/BSS, RAN, core, signaling, and supplier access.
3. Map public reporting to asset exposure.
4. Identify telemetry owners.
5. Create sector-specific hunt hypotheses.
6. Document gaps where public evidence is insufficient.

## Example / Mini Case

A report says an actor targets telecoms. The analyst does not assume SS7 compromise. The output asks whether exposed VPNs, admin jump hosts, OSS/BSS portals, or supplier remote access create observable risk.

## Analyst Checklist

- Are assets and dependencies defined?
- Are threats tied to observable behavior?
- Are sector-specific false positives considered?
- Are source limits explicit?

## Output Artifact

```text
Sector:
Asset Class:
Threat Scenario:
Public Evidence:
Assessed Relevance:
Telemetry Owner:
Hunt Idea:
Detection Candidate:
Gaps:
```

## Cross-Links

- [Cellular Provider Case Study](cellular-provider-case-study.md)
- [Telemetry Requirements](../08-cti-to-detection/telemetry-requirements.md)
- [Israel CTI Threat Model](https://anpa1200.github.io/israel-government-threat-actors-cti/israel-government-threat-model/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
