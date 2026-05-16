# Detection Backlog Item

## Purpose

Track detection candidates from idea to retirement.

## Fields

- **detection_id:** Unique detection identifier.
- **title:** Short behavior-focused title.
- **source_behavior:** Behavior being detected.
- **evidence_id:** Claim/evidence backing the idea.
- **telemetry:** Required data source.
- **logic_summary:** Plain-language detection logic.
- **false_positives:** Expected benign matches.
- **validation:** Positive, negative, replay, or pilot status.
- **readiness:** Hunt, pilot, production, retired, or DRL level.
- **owner:** Responsible engineer or team.

## Example Values

```text
detection_id: DET-007
title: Archive Extraction Followed by Script Execution
source_behavior: Phishing archive launches script interpreter
evidence_id: EV-009
telemetry: EDR process and file events
logic_summary: Archive extraction followed by powershell/cscript/wscript within 10 minutes
false_positives: Admin packages, installers
validation: Synthetic positive and negative tests pending
readiness: Hunt
owner: Detection Engineering
```

## Quality Gates

- Behavior-focused title.
- Evidence linked.
- Telemetry verified.
- Validation status honest.
- Owner and next step present.

## Common Failure Modes

- Actor-name detection title.
- No false positives.
- Production status without tests.

## Practical Workflow

1. Create the artifact only after the intelligence requirement or decision is clear.
2. Fill required fields before writing narrative prose.
3. Attach evidence labels, source references, confidence, and limitations.
4. Review with the intended consumer.
5. Update the artifact when evidence, telemetry, or decision context changes.

## Analyst Checklist

- Is the consumer defined?
- Are required fields complete?
- Are claims source-backed or marked Gap?
- Is confidence justified?
- Are limitations explicit?
- Is there a next action or owner?

## Cross-Links

- [Detection Backlog](../08-cti-to-detection/detection-backlog.md)
- [SOC Handoff Note](soc-handoff-note.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)

## Required vs Optional Fields

Required: detection ID, behavior title, evidence ID, telemetry, field mapping, logic summary, false positives, validation status, DRL, owner, review date, rollback plan.

Optional: Sigma/KQL/SPL paths, ATT&CK mapping, SOC pilot notes, retirement reason.

## Pass / Fail Example

Pass: Detection is marked DRL-4 with draft logic and no production claim.

Fail: Detection is marked production because it has a Sigma rule but no replay, owner, or SOC handoff.

## Complete Filled Example

```text
detection_id: DET-CAND-001
title: Non-IT RMM Install Followed by External Session
source_behavior: Reported RMM abuse after initial access.
evidence_id: EV-RMM-001
telemetry: EDR software inventory, process, network, identity, ticketing
field_mapping: host, user, product_name, process_name, destination_ip, ticket_id
logic_summary: New RMM install on non-IT host followed by external session within 60 minutes.
false_positives: Helpdesk deployment, approved vendor support.
validation: Positive/negative synthetic tests pending.
readiness: DRL-4 / Hunt
owner: Detection Engineering
review_date: 2026-06-16
rollback_plan: Disable scheduled query and revert tuning list.
```
