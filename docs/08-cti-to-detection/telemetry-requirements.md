# Telemetry Requirements

## Purpose

Define the logs, fields, retention, and quality needed before a hunt or detection can be trusted.

## Practitioner-Level Explanation

Detection quality depends on telemetry quality. A good CTI-derived detection states exactly which data sources and fields are required, what retention is needed, and where visibility gaps exist. Write telemetry requirements before detection logic, not after. Logic written against fields that do not exist is not detection — it is a placeholder.

## Field-Level Telemetry Reference

The tables below list the data sources most commonly required for endpoint, network, identity, and cloud hunts. Every field must be validated in your environment before it appears in production detection logic.

### Windows Security Event Log

| Field | Example Value | Required For |
|---|---|---|
| EventID | 4624, 4688, 4698, 4776 | Logon, process creation, scheduled task, credential validation |
| SubjectUserName | DOMAIN\user | Identity correlation |
| TargetUserName | DOMAIN\victim | Lateral movement, privilege use |
| ProcessName | C:\Windows\System32\cmd.exe | Process execution |
| CommandLine | powershell.exe -enc ... | Command-line behavior (requires audit policy enabled) |
| IpAddress | 10.1.2.3 | Remote logon source |
| LogonType | 3, 10 | Network vs. remote interactive |

**Common gap:** CommandLine is not logged by default on most Windows versions. Requires Audit Process Creation with command-line inclusion via GPO or registry.

### Sysmon (System Monitor)

| EventID | Meaning | Key Fields |
|---|---|---|
| 1 | Process Create | CommandLine, ParentImage, ParentCommandLine, Hashes, User |
| 3 | Network Connection | Image, DestinationIp, DestinationPort, Protocol |
| 7 | Image Load | Image, ImageLoaded, Signed, SignatureStatus |
| 11 | File Create | TargetFilename, Image |
| 12/13 | Registry Create/Set | TargetObject, Details |
| 22 | DNS Query | QueryName, QueryResults, Image |
| 23 | File Delete | TargetFilename |

**Common gap:** Sysmon is not deployed by default. Configuration must enable the required event types and filters. Noisy rules without filters will generate excessive volume and cause tuning paralysis.

### EDR Process Telemetry (platform-generic)

| Field | Notes |
|---|---|
| process_name | Executable filename |
| process_path | Full executable path |
| command_line | Full argument string |
| parent_process_name | Parent executable |
| parent_command_line | Parent argument string |
| user | Executing identity |
| host | Endpoint hostname |
| timestamp | UTC timestamp of event |
| hash_sha256 | File hash for threat-intel lookup |

**Common gap:** Parent process chain may not be available in all EDR configurations. Verify whether your EDR records grandparent process context.

### DNS Telemetry

| Field | Notes |
|---|---|
| query_name | Queried domain name |
| query_type | A, AAAA, MX, TXT, CNAME |
| response_code | NOERROR, NXDOMAIN, SERVFAIL |
| source_ip | Querying host |
| timestamp | Query time (UTC) |
| answer | Resolved IP or CNAME |

**Common gap:** DNS logging is frequently incomplete. Recursive resolvers may not log internal resolution. Encrypted DNS (DoH, DoT) bypasses traditional DNS logging entirely.

### Proxy / Web Gateway

| Field | Notes |
|---|---|
| url | Full request URL |
| domain | Destination domain |
| method | GET, POST, CONNECT |
| user_agent | Browser or tool identifier |
| source_ip | Requesting host |
| destination_ip | Resolved server IP |
| response_code | HTTP response code |
| bytes_out / bytes_in | Data volume |
| timestamp | Request time (UTC) |

**Common gap:** TLS inspection may not be enabled, making encrypted channel contents invisible. User-agent fields can be spoofed and should not be used as primary detection criteria.

### Identity Provider (Entra ID / Okta / similar)

| Field | Notes |
|---|---|
| user_principal_name | Authenticating identity |
| app_display_name | Target application |
| ip_address | Source IP of authentication |
| location_city / country | Geographic context |
| risk_level | IdP-assigned risk score |
| mfa_result | MFA challenge outcome |
| conditional_access_result | Policy enforcement outcome |
| timestamp | Authentication time (UTC) |

**Common gap:** Legacy authentication protocols may not log MFA result or conditional access enforcement.

### Cloud Audit Logs (AWS CloudTrail / Azure Monitor / GCP Audit Logs)

| Field | Notes |
|---|---|
| eventName / operationName | API call or operation |
| userIdentity / principalName | Calling identity |
| sourceIPAddress | Source IP |
| userAgent | SDK, CLI, or console identifier |
| requestParameters | API call parameters |
| responseElements | API call response |
| errorCode | Failed call indicator |
| eventTime | Timestamp (UTC) |
| resources | Affected resource ARN/ID |

**Common gap:** Management plane logs (e.g., CloudTrail) are separate from data plane logs (e.g., S3 object access). Both must be enabled if the detection requires full coverage.

## CTI Relevance

This prevents detection engineering from building fragile rules against unavailable, inconsistent, or low-quality data. Every detection candidate must identify which data source, which fields, and what retention window are required before the rule is drafted.

## Common Mistakes

- Assuming fields are available because the data source exists.
- Using generic field names without platform-specific validation.
- Skipping retention and latency checks.
- Building detection logic before confirming command-line or parent-process fields are populated.
- Treating DNS or proxy logs as complete when TLS or DoH is in use.

## Practical Workflow

1. List the specific behavior to observe.
2. Identify the data source platform.
3. Name required fields by platform-specific name, not generic label.
4. Confirm field is populated in your environment (not just present in schema).
5. Check retention period and latency.
6. Check parsing and normalization.
7. Document gaps where fields are absent, unpopulated, or unreliable.
8. Decide whether to hunt, detect, or defer to gap-collection.

## Example: Telemetry Map for RMM Abuse Behavior

Behavior: New RMM tool installed on non-IT endpoint followed by external remote session.

| Data Source | Required Fields | Gap Risk |
|---|---|---|
| EDR software inventory | product_name, install_time, host, user | May not capture all installers; depends on EDR policy |
| EDR process | process_name, parent_process_name, command_line, user | Parent chain required; command_line must be enabled |
| Network | destination_ip, destination_port, bytes_out, protocol, host | Egress logging coverage may be incomplete |
| Identity | user_principal_name, logon_time, source_ip, mfa_result | Legacy auth may not record MFA result |
| Ticketing | ticket_id, assigned_host, change_window | Integration with EDR required for automated correlation |

## Analyst Checklist

- Is each required field validated as populated in the target environment?
- Is retention sufficient for the lookback window?
- Are command-line and parent-process fields confirmed?
- Are encrypted channel or DoH gaps documented?
- Is a gap registered for any required field that is missing?
- Is readiness level honest?

## Output Artifact

```text
Behavior:
Data Source:
Platform:
Required Fields (platform-specific):
Confirmed Populated: Yes / No / Unknown
Retention:
Latency:
Normalization:
Known Gaps:
Decision: Hunt / Detect / Defer
```

## Cross-Links

- [Intelligence to Detection](intelligence-to-detection.md)
- [Detection Backlog](detection-backlog.md)
- [Collection Gap Register](../10-templates/collection-gap-register.md)
- [Platform examples in Israel CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/platform-field-mapping/)

## References

- [MITRE ATT&CK Data Sources](https://attack.mitre.org/datasources/)
- [Sigma Documentation](https://sigmahq.io/docs/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
