# Worked Examples: Actor Research

## Purpose

Show the minimum evidence structure for an actor profile that supports defensive action.

## Alias Table

| Alias | Source | Evidence Label | Caveat |
|---|---|---|---|
| Example Cluster | Vendor A report | Reported | Vendor-specific naming. |
| Example Kitten | Vendor B report | Reported | May overlap partially, not necessarily one-to-one. |
| Public persona name | Government advisory | Reported | Persona is not automatically the operational cluster. |

## Source Chronology

| Date | Source | Claim | Use |
|---|---|---|---|
| 2024-09-19 | Primary vendor report | Describes persistent access tooling. | Tool and TTP evidence. |
| 2025-03-10 | Government advisory | Describes sector targeting. | Relevance and defensive prioritization. |
| 2026-05-16 | Local review | No new primary source found. | Freshness and gap statement. |

## Actor Claim Table

| Claim | Evidence Label | Confidence | Freshness Date | Detection Implication |
|---|---|---|---|---|
| Actor uses webshells on edge servers. | Reported | Medium | 2026-05-16 | Monitor web root file creation and server process anomalies. |
| Actor is linked to a specific sponsor. | Assessed | Low/Medium | 2026-05-16 | Do not use sponsor claim as detection logic. |
| Actor targets the local sector. | Reported | Medium | 2026-05-16 | Prioritize relevance scoring and telemetry review. |

## TTP Mapping With Evidence

| Technique | Behavior Evidence | Mapping Confidence | Quality | Rejected Alternative |
|---|---|---|---|---|
| T1505.003 Server Software Component: Web Shell | Source reports webshell persistence on internet-facing server. | Medium | M2 | T1190 rejected for this row because exploitation was not described in enough detail. |

## Detection Implications

- Detection should key on server behavior, not actor name.
- Actor page should link to relevant hunts and tool pages.
- Every tool association needs a source and freshness date.
- Absence of an IOC does not equal absence of relevance.

## Cross-Links

- [Actor Profile Template](../06-actor-research/actor-profile-template.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Israel Actor Workbench](https://anpa1200.github.io/israel-government-threat-actors-cti/navigation/actor-workbench/)
