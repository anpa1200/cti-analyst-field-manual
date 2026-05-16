# Sigma, KQL, and SPL Examples

## Purpose

Show how to express detection logic across platforms while marking each example honestly with its DRL level and validation requirements.

## Core Rule

Platform syntax is implementation detail. The analytic logic must exist first: behavior, telemetry, fields, false positives, and validation. Every example below is a **DRL-4 candidate** — draft logic only. None are production-ready without positive test, negative test, benign baseline, historical replay, SOC pilot, and production approval.

## How to Read These Examples

Each example includes:
- **Behavior:** What the detection targets.
- **Source behavior:** CTI claim that justifies the detection.
- **DRL:** Current readiness level.
- **False positives:** Known benign matches.
- **Validation required:** What must happen before promotion.

## Example 1: Script Interpreter Spawned from Archive Extraction

**Behavior:** A compressed archive is extracted and immediately spawns a scripting engine. This is a common pattern for phishing payload delivery.

**Source behavior:** Reported — multiple vendor reports describe archive-attached phishing leading to PowerShell, wscript, or cscript execution. No local telemetry confirmation.

**DRL: 4** — draft logic, no test evidence.

**False positives:** Admin deployment packages, software installers with embedded scripts, developer tooling.

**Validation required:** Positive synthetic test (simulate archive + script spawning), negative test (confirm legitimate installer does not fire), benign baseline review, historical replay.

### Sigma (DRL-4 candidate — not production)

```yaml
title: Archive Extraction Followed by Script Interpreter — DRL-4 Candidate
status: experimental
description: >
  Detects a scripting engine (PowerShell, wscript, cscript, mshta) spawned as a child
  of a known archive extraction utility. DRL-4 draft only. Requires positive/negative
  testing, benign baseline review, and SOC pilot before promotion.
references:
  - https://attack.mitre.org/techniques/T1059/001/
author: CTI Analyst Field Manual
date: 2026-05-16
tags:
  - attack.execution
  - attack.t1059.001
  - drl.4.candidate
logsource:
  category: process_creation
  product: windows
detection:
  selection_parent:
    ParentImage|endswith:
      - '\7z.exe'
      - '\WinRAR.exe'
      - '\msiexec.exe'
      - '\expand.exe'
  selection_child:
    Image|endswith:
      - '\powershell.exe'
      - '\pwsh.exe'
      - '\wscript.exe'
      - '\cscript.exe'
      - '\mshta.exe'
  condition: selection_parent and selection_child
falsepositives:
  - Software installation packages that extract and execute setup scripts
  - Admin automation tools using archive-based deployment
  - Developer tooling
level: medium
```

### KQL — Microsoft Defender for Endpoint (DRL-4 candidate — not production)

```kql
// DRL-4 candidate — not production
// Requires telemetry validation: confirm ParentProcessName is populated
// Validate positive/negative cases before enabling as alert
DeviceProcessEvents
| where Timestamp > ago(7d)
| where InitiatingProcessFileName in~ ("7z.exe", "WinRAR.exe", "msiexec.exe", "expand.exe")
| where FileName in~ ("powershell.exe", "pwsh.exe", "wscript.exe", "cscript.exe", "mshta.exe")
| project Timestamp, DeviceName, AccountName,
          InitiatingProcessFileName, InitiatingProcessCommandLine,
          FileName, ProcessCommandLine, FolderPath
| order by Timestamp desc
```

### SPL — Splunk with Sysmon (DRL-4 candidate — not production)

```spl
`sysmon` EventCode=1
(ParentImage="*\\7z.exe" OR ParentImage="*\\WinRAR.exe" OR ParentImage="*\\msiexec.exe")
(Image="*\\powershell.exe" OR Image="*\\wscript.exe" OR Image="*\\cscript.exe" OR Image="*\\mshta.exe")
| table _time, host, User, ParentImage, ParentCommandLine, Image, CommandLine
| sort -_time
```

---

## Example 2: Non-Browser Process Outbound on IMAPS / SMTPS

**Behavior:** A non-browser, non-mail-client process opens an outbound connection on TCP 993 (IMAPS) or TCP 465/587 (SMTPS). This is a C2 exfiltration pattern that abuses email protocols.

**Source behavior:** Reported — public CTI describes email-protocol C2 used by several threat clusters for data staging. Evidence label: Reported. Confidence: Medium (multi-vendor, no local telemetry confirmation).

**DRL: 4** — draft logic, no test evidence.

**False positives:** Mail clients, backup tools, developer SMTP testing, monitoring agents.

**Validation required:** Positive test with netcat or mail client connecting on 993/465, negative test confirming Outlook or Thunderbird does not fire, baseline review of legitimate mail clients.

### Sigma (DRL-4 candidate — not production)

```yaml
title: Non-Browser Process Outbound IMAPS or SMTPS — DRL-4 Candidate
status: experimental
description: >
  Detects a process connecting outbound on IMAPS (993) or SMTPS (465, 587) that is
  not a known mail client or browser. C2 via email protocol. DRL-4 draft only.
references:
  - https://attack.mitre.org/techniques/T1071/003/
author: CTI Analyst Field Manual
date: 2026-05-16
tags:
  - attack.command_and_control
  - attack.t1071.003
  - drl.4.candidate
logsource:
  category: network_connection
  product: windows
  service: sysmon
detection:
  selection:
    EventID: 3
    DestinationPort:
      - 993
      - 465
      - 587
  filter_legit:
    Image|endswith:
      - '\OUTLOOK.EXE'
      - '\thunderbird.exe'
      - '\chrome.exe'
      - '\firefox.exe'
      - '\msedge.exe'
  condition: selection and not filter_legit
falsepositives:
  - Mail clients not in filter list
  - Backup and archiving tools with SMTP reporting
  - Developer SMTP testing utilities
level: medium
```

### KQL — Microsoft Defender for Endpoint (DRL-4 candidate — not production)

```kql
// DRL-4 candidate — not production
// Add known-good mail clients to exclusion list after baseline review
let LegitMailClients = dynamic(["outlook.exe","thunderbird.exe","chrome.exe","firefox.exe","msedge.exe"]);
DeviceNetworkEvents
| where Timestamp > ago(7d)
| where RemotePort in (993, 465, 587)
| where tolower(InitiatingProcessFileName) !in (LegitMailClients)
| project Timestamp, DeviceName, AccountName,
          InitiatingProcessFileName, InitiatingProcessCommandLine,
          RemoteIP, RemotePort
| order by Timestamp desc
```

### SPL — Splunk with Sysmon (DRL-4 candidate — not production)

```spl
`sysmon` EventCode=3
(DestinationPort=993 OR DestinationPort=465 OR DestinationPort=587)
NOT (Image="*\\OUTLOOK.EXE" OR Image="*\\thunderbird.exe" OR Image="*\\chrome.exe"
     OR Image="*\\firefox.exe" OR Image="*\\msedge.exe")
| table _time, host, User, Image, CommandLine, DestinationIp, DestinationPort
| sort -_time
```

---

## DRL Promotion Checklist for Any Example Above

Before any example can move from DRL-4 to DRL-5 or higher, the following must be documented:

| Gate | Required Evidence |
|---|---|
| DRL-5 | Positive synthetic test fires; obvious benign control does not fire. |
| DRL-6 | Benign baseline reviewed; expected false-positive classes documented. |
| DRL-7 | 30-day historical replay; alert volume and false-positive rate measured. |
| DRL-8 | SOC triage playbook, owner, escalation path, and rollback plan complete. |
| DRL-9 | Production approval with change record and residual risk acceptance. |

No example on this page has passed DRL-5. None may be deployed as a production alert.

## Common Mistakes

- Jumping from actor report to production alert by skipping telemetry validation.
- Using these examples as production rules because they have correct syntax.
- Failing to add environment-specific exclusions to the filter lists.
- Omitting false-positive review before enabling alerts.
- Claiming detection coverage because a technique is mapped.

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry confirmed available in the target environment?
- Is the hypothesis falsifiable?
- Are false positives named from real operational context?
- Is readiness level honestly stated as DRL-4?

## Output Artifact

```text
Detection ID:
Behavior:
Source Claim:
Evidence Label:
Sigma Path:
KQL Variant:
SPL Variant:
Positive Test Result:
Negative Test Result:
Benign Baseline Status:
Historical Replay Status:
DRL:
Owner:
```

## Cross-Links

- [Telemetry Requirements](telemetry-requirements.md)
- [Detection Backlog](detection-backlog.md)
- [Detection Readiness Levels](detection-readiness-levels.md)
- [Israel CTI Platform Query Variants](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/platform-query-variants/)

## References

- [Sigma Documentation](https://sigmahq.io/docs/)
- [MITRE ATT&CK Data Sources](https://attack.mitre.org/datasources/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
