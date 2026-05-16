# Worked Examples: CTI Foundations

## Purpose

Show what acceptable requirement, source, evidence, and confidence artifacts look like before analysis begins.

## Bad PIR vs Corrected PIR

| Type | Example | Problem / Strength |
|---|---|---|
| Bad PIR | "Tell us everything about MuddyWater." | Topic, not a decision. No scope, consumer, time window, or output. |
| Corrected PIR | "Which reported MuddyWater behaviors since 2024 are observable with our endpoint, email, and identity telemetry, and should they enter a 30-day hunt backlog?" | Decision-linked, bounded, telemetry-aware, and actionable. |

## PIR to SIR to EEI Decomposition

```text
Decision owner: SOC Lead
Decision: Approve or reject a scoped 30-day hunt for RMM abuse.

PIR-001:
Which publicly reported RMM-abuse behaviors are relevant to our environment?

SIR-001:
Which actors or campaigns are reported to use RMM tools after initial access?

EEIs:
- Source title, publisher, publication date, accessed date
- Tool names
- Initial access vector
- Process behavior
- Network behavior
- Reported target sectors
- Evidence label and confidence

SIR-002:
Can the SOC observe these behaviors?

EEIs:
- EDR process creation fields
- Software inventory fields
- Network destination fields
- Identity session fields
- Known approved RMM baseline
```

## Source Register Row

| Field | Filled Example |
|---|---|
| source_id | SRC-2026-001 |
| publisher | MITRE ATT&CK |
| title | Enterprise Matrix / Technique documentation |
| url | https://attack.mitre.org/ |
| publication_date | Ongoing |
| accessed_date | 2026-05-16 |
| source_type | Framework documentation |
| source_reliability | A |
| information_credibility | 2 |
| limitations | Technique pages are not campaign proof or attribution evidence. |
| downstream_use | ATT&CK mapping quality gates and detection backlog rules. |

## Evidence Register Row

| Field | Filled Example |
|---|---|
| evidence_id | EV-FOUND-001 |
| claim | ATT&CK is a behavior taxonomy and should not be used as attribution proof. |
| evidence_label | Reported |
| source_id | SRC-2026-001 |
| confidence | High confidence |
| confidence_reason | Primary framework source and consistent with defensive practice. |
| contradiction_or_gap | None for doctrine use; campaign use still requires separate evidence. |
| downstream_use | ATT&CK mapping pages, detection backlog, attribution rules. |

## Analyst Checklist

- Is the requirement a decision question?
- Does every source have publication/access metadata?
- Does every material claim have an evidence label?
- Is confidence justified by evidence quality, not analyst preference?
- Are gaps actionable or explicitly accepted?

## Cross-Links

- [PIR, SIR, and EEI](../01-cti-foundations/pir-sir-eei.md)
- [Source Register Template](../10-templates/source-register-template.md)
- [Evidence Register Template](../10-templates/evidence-register-template.md)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
