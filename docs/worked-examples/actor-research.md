# Worked Examples: Actor Research

## Purpose

Show the minimum evidence structure for an actor profile that supports defensive action. Section A uses a fully synthetic teaching example. Section B uses MuddyWater / TEMP.Zagros as a real public-source case — every claim in Section B is traceable to a public government advisory or authoritative vendor report and is labeled accordingly.

---

## Section A — Synthetic Teaching Example

### Alias Table

| Alias | Source | Evidence Label | Caveat |
|---|---|---|---|
| Example Cluster | Vendor A report | Reported | Vendor-specific naming. |
| Example Kitten | Vendor B report | Reported | May overlap partially, not necessarily one-to-one. |
| Public persona name | Government advisory | Reported | Persona is not automatically the operational cluster. |

### Source Chronology

| Date | Source | Claim | Use |
|---|---|---|---|
| 2024-09-19 | Primary vendor report | Describes persistent access tooling. | Tool and TTP evidence. |
| 2025-03-10 | Government advisory | Describes sector targeting. | Relevance and defensive prioritization. |
| 2026-05-16 | Local review | No new primary source found. | Freshness and gap statement. |

### Actor Claim Table

| Claim | Evidence Label | Confidence | Freshness Date | Detection Implication |
|---|---|---|---|---|
| Actor uses webshells on edge servers. | Reported | Medium | 2026-05-16 | Monitor web root file creation and server process anomalies. |
| Actor is linked to a specific sponsor. | Assessed | Low/Medium | 2026-05-16 | Do not use sponsor claim as detection logic. |
| Actor targets the local sector. | Reported | Medium | 2026-05-16 | Prioritize relevance scoring and telemetry review. |

### TTP Mapping With Evidence

| Technique | Behavior Evidence | Mapping Confidence | Quality | Rejected Alternative |
|---|---|---|---|---|
| T1505.003 Server Software Component: Web Shell | Source reports webshell persistence on internet-facing server. | Medium | M2 | T1190 rejected for this row because exploitation was not described in enough detail. |

---

## Section B — Real Public-Source Case: MuddyWater / TEMP.Zagros

**Scope and caveat:** This section uses only public, TLP:CLEAR sources: the joint CISA/NSA/FBI/CNMF advisory (February 2022), MITRE ATT&CK actor page, and publicly available vendor reporting. Every claim carries an evidence label. This is an analyst tradecraft exercise using public defensive intelligence. It is not an attribution determination.

**Sources used:**

| Source ID | Publisher | Title | Date | Reliability |
|---|---|---|---|---|
| SRC-MW-001 | CISA / NSA / FBI / CNMF | Iranian Government-Sponsored APT Actor Threatens Public and Private Sectors | 2022-02-24 | A |
| SRC-MW-002 | MITRE ATT&CK | MuddyWater (G0069) | Ongoing | A |
| SRC-MW-003 | Multiple vendors (Trend Micro, Talos) | Referenced from CISA advisory and MITRE page | Various | B–C |

### PIR / SIR Framing

```text
Decision owner: Detection Engineering Lead
Decision: Which MuddyWater behaviors from public reporting are observable with current
          endpoint, email, identity, and DNS telemetry, and should any enter a 30-day
          hunt backlog?

PIR-001: Which reported MuddyWater initial access, execution, and persistence behaviors
         are relevant to an organization with Windows endpoints, Microsoft 365,
         and internet-facing remote access services?

SIR-001: What initial access vectors does MuddyWater use according to primary reporting?
SIR-002: What execution and persistence techniques are described with behavior evidence?
SIR-003: Which techniques have sufficient telemetry to support a hunt hypothesis?
SIR-004: Which are only actor-level claims without observable procedure evidence?
```

### Alias Table

| Alias | Source | Evidence Label | Caveat |
|---|---|---|---|
| MuddyWater | Multiple vendors; referenced in CISA advisory | Reported | Vendor-assigned; not universally standardized |
| TEMP.Zagros | Mandiant / FireEye historical reporting | Reported | Mandiant-specific naming convention |
| Static Kitten | CrowdStrike | Reported | CrowdStrike-specific naming convention |
| Seedworm | Symantec | Reported | Symantec-specific naming convention |
| Mercury | Microsoft | Reported | Microsoft-specific naming convention |
| Earth Vetala | Trend Micro | Reported | Trend Micro-specific naming convention |

**Alias caveat (Reported / Medium confidence):** CISA advisory (SRC-MW-001) uses the MuddyWater label and attributes it to Iran's Ministry of Intelligence and Security (MOIS). MITRE ATT&CK (SRC-MW-002) aggregates the above aliases under G0069. Vendor alias equivalence is source-reported; independent forensic confirmation of full cluster equivalence is not always documented in public reporting. Do not merge aliases across vendors without checking each vendor's stated rationale.

### Sponsor Assessment

| Claim | Evidence Label | Source | Confidence |
|---|---|---|---|
| MuddyWater is assessed to be a subordinate element of Iran's Ministry of Intelligence and Security (MOIS) | Assessed | SRC-MW-001 (joint US government advisory) | Medium confidence — government attribution statement; public forensic chain is not fully published. |

**Caveat:** The government attribution statement is the strongest public basis for sponsor assessment. It does not include full forensic chain disclosure, as is normal for government advisories. Do not treat the sponsor claim as Observed; it is a government assessment (Reported/Assessed). An alternative hypothesis — contracted operator with MOIS affiliation — is not ruled out by public evidence.

### Source Chronology

| Date | Source | Primary Claim | Evidence Label | Downstream Use |
|---|---|---|---|---|
| 2022-02-24 | CISA/NSA/FBI/CNMF advisory | Broad TTP and IOC disclosure | Reported | Initial access, execution, persistence hunt candidates |
| Ongoing | MITRE ATT&CK G0069 | Technique aggregation from multiple reporting streams | Reported/Assessed | ATT&CK mapping validation |
| 2026-05-16 | Local review | No new primary source found in 2025–2026 period | Gap | Freshness caveat; reassess before operational use |

### Actor Claim Table

| Claim | Evidence Label | Source | Confidence | Detection Implication |
|---|---|---|---|---|
| Uses spear-phishing emails with malicious links or attachments for initial access | Reported | SRC-MW-001 | Medium | Email gateway log review; phishing attachment hunt |
| Uses commercial and open-source remote administration tools (RATs) including ScreenConnect, RemoteUtilities | Reported | SRC-MW-001 | Medium | Non-IT host RMM install hunt; HUNT-MW-001 |
| Uses PowerShell-based tools and scripts for execution and C2 | Reported | SRC-MW-001, SRC-MW-002 | Medium | PowerShell commandline logging; obfuscation patterns |
| Uses custom backdoors and off-the-shelf tools (e.g., Mori, POWERSTATS) | Reported | SRC-MW-001, SRC-MW-002 | Medium | File hash and behavior hunting; tool association requires freshness date |
| Targets government, defense, energy, financial, and telecom sectors globally | Reported | SRC-MW-001 | Medium | Sector relevance for prioritization |
| Sponsor is MOIS | Assessed (government advisory) | SRC-MW-001 | Medium | Affects escalation and reporting; not used for detection logic |
| Uses DNS-based C2 | Reported | SRC-MW-002 (technique T1071.004) | Low-Medium | DNS query anomaly hunting; confidence limited because procedure details are aggregated |

### ATT&CK Mapping With Evidence and Quality

| Technique ID | Technique Name | Behavior Evidence | Evidence Label | Mapping Confidence | Quality | Rejected / Downgraded |
|---|---|---|---|---|---|---|
| T1566.001 | Spear-Phishing Attachment | Advisory describes attachment delivery | Reported | Medium | M2 | T1566.002 (link) added as separate row — both are described |
| T1566.002 | Spear-Phishing Link | Advisory describes link delivery | Reported | Medium | M2 | Not rejected; both observed |
| T1059.001 | PowerShell | Advisory describes PowerShell-based tools and scripts | Reported | Medium | M2 | CommandLine details not fully provided; procedure is partially described |
| T1021.001 | Remote Services: Remote Desktop Protocol | Advisory mentions RDP use | Reported | Low-Medium | M1 | Advisory does not specify RDP as primary vector; mapped at actor level |
| T1219 | Remote Access Software | Advisory specifically names commercial RATs including ScreenConnect | Reported | High | M3 | Strong behavioral description; specific tool named |
| T1071.004 | Application Layer Protocol: DNS | MITRE aggregation; procedure details not fully specified in primary source | Reported | Low | M1 | Not directly described in the CISA advisory with procedure detail; aggregated from multiple vendor reporting |
| T1053.005 | Scheduled Task/Job: Scheduled Task | Advisory describes persistence via scheduled tasks | Reported | Medium | M2 | Specific scheduling pattern not provided |

**Mapping quality legend:** M1 = actor-level claim only; M2 = behavior described without full procedure; M3 = specific procedure or tool described.

### Telemetry Requirements for Hunt Candidates

| Behavior | Data Source | Required Fields | Confirmed Available | Gap |
|---|---|---|---|---|
| Commercial RAT install on non-IT host | EDR software inventory | product_name, install_time, host, user | Unknown — validate | Need: confirm field population |
| PowerShell execution with obfuscation | EDR process / Sysmon EventID 1 | CommandLine, ParentImage, User | Unknown — validate | Need: confirm command-line audit policy enabled |
| Phishing attachment — script spawn | Email gateway + EDR | recipient, attachment_hash, process_name, parent | Unknown — validate | Need: email-to-EDR correlation |
| Unusual scheduled task creation | Windows Security EventID 4698 | TaskName, TaskContent, SubjectUserName | Unknown — validate | Audit policy may not capture task content |

### Hunt Hypotheses (DRL-1 Candidates)

```text
HUNT-MW-001
Hypothesis: If MuddyWater-style RAT is used after phishing, then a non-IT endpoint
will show a new remote access software install followed by an external remote session
without a change ticket.
Source Claim: EV row for T1219 above (SRC-MW-001)
DRL: 1 (source-backed candidate; no telemetry mapping, no logic, no testing yet)
Next Step: Validate EDR software inventory fields and network session logging.

HUNT-MW-002
Hypothesis: If PowerShell-based tools are used for execution, then endpoints will show
PowerShell with unusual encoded or obfuscated command-line arguments.
Source Claim: EV row for T1059.001 above (SRC-MW-001)
DRL: 1 (source-backed candidate; no telemetry mapping, no logic, no testing yet)
Next Step: Confirm command-line audit policy enables CommandLine field in process events.
```

### SOC Handoff Note (Illustrative — Not a Production Alert)

```text
Handoff ID: SOC-MW-DRAFT-001
Status: DRL-1 candidate only — not approved for alerting
Alert Name: Non-IT Commercial RAT Install (MuddyWater-Style Behavior)
Why It Matters: Government advisory (SRC-MW-001) attributes commercial RAT use to a
                state-sponsored actor targeting government, defense, and telecom.
First Checks: Host owner, business role, install source, ticket, remote session destination.
Required Logs: EDR software inventory, process events, network, identity, ticketing.
False Positives: Helpdesk deployment, vendor support, IT migration, remote work tooling.
Escalation: No ticket + external session + suspicious pre-install activity.
Gaps: Telemetry fields not yet validated. No historical baseline completed.
DRL: 1 — cannot be used as a production alert.
```

### Executive Summary (Illustrative)

```text
Decision: Approve two 30-day hunt hypotheses for MuddyWater-style behaviors.
Bottom Line: Public government reporting justifies a scoped hunt for commercial RAT
             installation and PowerShell obfuscation. No production alerting yet.
Why Now: The 2022 CISA/NSA/FBI/CNMF advisory is the primary public source.
         No 2025–2026 primary source was identified. Freshness is a risk.
Confidence: Medium — government advisory is reliable; telemetry not yet validated.
Business Impact: Commercial RATs could enable persistent unauthorized remote access.
Recommended Actions: (1) Validate telemetry fields. (2) Approve DRL-1 hunt candidates
                     for 30-day scoped run. (3) Reassess when new primary source appears.
Limitations: No local compromise evidence. No freshness confirmation for 2026.
Owner: Detection Engineering Lead and SOC Lead.
```

### Gaps and Collection Tasks

| Gap | Impact | Collection Path | Owner |
|---|---|---|---|
| No 2025–2026 primary source found | Freshness risk; actor behavior may have evolved | Monitor CISA, vendor advisories for updates | CTI Analyst |
| Telemetry fields unvalidated | Blocks hunt hypothesis promotion past DRL-1 | Schema validation by Detection Engineering | Detection Engineering |
| Alias equivalence not fully documented | Analyst may accidentally merge separate clusters | Check each vendor's stated cluster rationale | CTI Analyst |
| DNS-based C2 procedure details thin | Low-confidence mapping; may generate noisy hunts | Seek more specific procedure reporting before hunting | CTI Analyst |

---

## Cross-Links

- [Actor Profile Template](../06-actor-research/actor-profile-template.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md)
- [Telemetry Requirements](../08-cti-to-detection/telemetry-requirements.md)
- [Israel Actor Workbench](https://1200km.com/israel-government-threat-actors-cti/navigation/actor-workbench/)

## References

- CISA/NSA/FBI/CNMF: MuddyWater advisory (2022-02-24) — [aa22-055a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-055a)
- MITRE ATT&CK: G0069 MuddyWater — [attack.mitre.org/groups/G0069](https://attack.mitre.org/groups/G0069/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
