# Worked Examples: CTI to Detection

## Purpose

Show the full path from CTI claim to SOC handoff without claiming production coverage too early.

## Full Chain

| Stage | Filled Example |
|---|---|
| CTI claim | Reported: threat reporting describes archive delivery followed by script execution and external payload retrieval. |
| Evidence label | Reported; source is reliable but does not include raw local telemetry. |
| Observable | Archive extraction followed by `powershell.exe`, `wscript.exe`, or `cscript.exe` execution. |
| Telemetry | Email gateway, EDR process creation, file creation, network connections. |
| Hunt hypothesis | If archive-based delivery is present, then endpoints that receive suspicious archives may spawn script interpreters within 24 hours. |
| Detection backlog item | DET-CAND-001 Archive extraction followed by script interpreter and external connection. |
| DRL score | DRL-3 initially; DRL-5 after synthetic positive/negative tests and field mapping. |
| False positives | IT deployment packages, installers, helpdesk scripts, internal automation. |
| SOC handoff | Check user, host role, email source, change ticket, process tree, network destination, and downloaded payload disposition. |

## Detection Readiness Boundary

```text
Hunt-ready:
Source-backed behavior, telemetry fields identified, initial query written.

Pilot-ready:
Positive and negative tests pass, benign baseline reviewed, SOC triage drafted.

Production coverage:
Only DRL-9 after historical replay, measured false-positive rate, owner, rollback plan, review date, and SOC approval.
```

## Cross-Links

- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)
- [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md)
- [SOC Handoff](../08-cti-to-detection/soc-handoff.md)
- [Israel Detection Status Dashboard](https://1200km.com/israel-government-threat-actors-cti/detection-status-dashboard/)
