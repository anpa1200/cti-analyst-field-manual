# Worked Examples: Frameworks

## Purpose

Show how to use ATT&CK, Diamond Model, Cyber Kill Chain, and Pyramid of Pain without turning them into decoration.

## Correct ATT&CK Mapping

| Field | Example |
|---|---|
| Behavior | Shortcut file launches PowerShell to download a second-stage payload. |
| Technique | T1059.001 - Command and Scripting Interpreter: PowerShell |
| Evidence | Reported in source summary; command-line pattern not fully published. |
| Mapping confidence | Medium |
| Mapping quality | M2 if only behavior is described; M3 if tied to a specific query and telemetry. |
| Detection idea | `.lnk` execution spawning `powershell.exe` with external network connection. |
| Rejected alternatives | T1204 alone is insufficient because the relevant detectable behavior is script execution after user interaction. |

## Incorrect ATT&CK Mapping

| Bad Mapping | Why It Fails |
|---|---|
| "Actor is MuddyWater, therefore map all known MuddyWater techniques." | Actor profile coverage is not incident evidence. |
| "PowerShell appeared in a report, therefore production coverage exists." | Mapping is not detection validation. |
| "Two actors share T1059.001, therefore they are related." | Common techniques are weak attribution evidence. |

## Diamond Model Event

| Diamond Vertex | Filled Example |
|---|---|
| Adversary | Unknown; source reports a named cluster, but local evidence does not prove identity. |
| Capability | Script execution and payload retrieval. |
| Infrastructure | External URL and hosting provider observed in proxy logs. |
| Victim | Finance workstation in a business unit with access to invoice workflows. |
| Timestamp | 2026-05-15T10:42:00Z |
| Result | Candidate intrusion event requiring triage. |
| Confidence | Medium for event existence, low for actor identity. |

## Kill Chain Use Without Forced Chronology

Useful:

```text
Delivery and execution are observed. Reconnaissance and weaponization are Unknown. Do not infer missing stages.
```

Not useful:

```text
Every intrusion must be documented through all seven stages before response can begin.
```

## Cross-Links

- [MITRE ATT&CK as a Working Tool](../03-frameworks/mitre-attack-as-working-tool.md)
- [ATT&CK Mapping Mistakes](../03-frameworks/attck-mapping-mistakes.md)
- [Diamond Model](../03-frameworks/diamond-model.md)
- [Cyber Kill Chain](../03-frameworks/cyber-kill-chain.md)
- [Pyramid of Pain](../03-frameworks/pyramid-of-pain.md)
