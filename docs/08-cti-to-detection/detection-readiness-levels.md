# Detection Readiness Levels

![DRL Scale: Detection Readiness Levels 0–9](/img/infographic-drl-scale-reference.png)

![Required Validation Artifacts for DRL Promotion](/img/infographic-drl-validation-artifacts.png)

![DRL Scale Example: RMM Abuse Detection Journey](/img/infographic-drl-rmm-example.png)

![DRL Promotion Checklist](/img/infographic-drl-promotion-checklist.png)

## Purpose

Define a practical DRL model so CTI-derived detections are not marketed as production coverage before validation.

## Core Rule

Only **DRL-9** can be called production detection coverage. Anything below DRL-9 is research, candidate logic, hunt content, pilot content, or validation work.

## DRL Scale

| DRL | Meaning | Required Evidence |
|---:|---|---|
| 0 | Idea only | Behavior or threat question exists; no evidence package. |
| 1 | Source-backed candidate | Source claim, evidence label, source reliability, and information credibility recorded. |
| 2 | Observable defined | Observable, expected malicious pattern, and expected benign overlap documented. |
| 3 | Telemetry mapped | Data source, field names, retention, and owner identified. |
| 4 | Hunt logic drafted | Query or analytic logic exists; no test evidence yet. |
| 5 | Synthetic validation | Positive and negative synthetic tests pass; limitations documented. |
| 6 | Benign baseline reviewed | Expected false positives reviewed against benign or lab-realistic data. |
| 7 | Historical replay complete | Query replayed over historical data; alert volume and false-positive classes measured. |
| 8 | SOC pilot complete | SOC triage playbook, owner, escalation path, rollback plan, and pilot feedback complete. |
| 9 | Production coverage | Approved, monitored, reviewed, owned, tested, tuned, and rollback-ready. |

## Required Validation Artifacts

| Artifact | Required By | Notes |
|---|---:|---|
| Source claim and evidence ID | DRL-1 | Must include evidence label and confidence reason. |
| Field mapping | DRL-3 | Include platform-specific fields, not only generic telemetry names. |
| Positive test | DRL-5 | Demonstrates expected malicious pattern fires. |
| Negative test | DRL-5 | Demonstrates obvious benign control does not fire. |
| Benign baseline replay | DRL-6 | Measures known normal behavior. |
| Historical replay | DRL-7 | Measures volume over realistic retention window. |
| False-positive analysis | DRL-7 | Must include classes and tuning guidance. |
| SOC triage playbook | DRL-8 | First checks, required logs, escalation, and response authority. |
| Rollback plan | DRL-8 | How to disable or tune if alert causes harm. |
| Owner and review date | DRL-8 | Named team/person and next review date. |
| Production approval | DRL-9 | Change record and acceptance of residual risk. |

## Examples

| DRL | Example |
|---:|---|
| 0 | "Maybe detect RMM abuse." |
| 1 | Vendor report describes RMM abuse; source and evidence row created. |
| 2 | Observable: new RMM install on non-IT host followed by external session. |
| 3 | EDR software inventory, process, network, and identity fields confirmed. |
| 4 | KQL/SPL/Sigma logic drafted. |
| 5 | Synthetic positive RMM install fires; benign approved install does not. |
| 6 | Baseline shows approved helpdesk tooling generates expected benign matches. |
| 7 | 30-day replay produces manageable alert volume and known false-positive classes. |
| 8 | SOC pilot runbook tested by analysts; rollback owner assigned. |
| 9 | Production alert approved, monitored, reviewed, and tied to response process. |

## Bad Example / Corrected Example

Bad:

```text
The rule is mapped to ATT&CK, so production coverage exists.
```

Corrected:

```text
The rule is DRL-4. It has behavior-backed ATT&CK mapping and draft logic, but no positive test, negative test, benign baseline, historical replay, SOC pilot, or production approval.
```

## Full SOC Handoff Example

```text
Handoff ID: SOC-RMM-001
Detection: New RMM installation on non-IT host followed by external remote session
DRL: 8 during pilot
Why it matters: Source-backed adversary behavior overlaps with unauthorized remote control.
First checks:
- Confirm host owner and business role.
- Check software approval and change ticket.
- Review parent process and install source.
- Review identity session, source IP, MFA state, and remote session destination.
- Check email/web activity in the preceding 24 hours.
Required logs: EDR process, software inventory, network, identity, helpdesk ticketing.
False positives: Helpdesk deployment, vendor support, IT migration, approved remote work.
Escalation threshold: No ticket plus unknown source plus external remote session plus suspicious pre-install activity.
Response: Follow IR policy; do not isolate critical systems without incident commander approval.
Rollback: Disable alert or add approved deployment group if false-positive rate exceeds pilot threshold.
Owner: Detection Engineering
Review date: 2026-06-16
```

## Cross-Links

- [Intelligence to Detection](intelligence-to-detection.md)
- [Detection Backlog](detection-backlog.md)
- [SOC Handoff](soc-handoff.md)
- [Detection Backlog Item Template](../10-templates/detection-backlog-item.md)
- [Customer-Driven AI CTI Workflow](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/workflow/full-workflow-quick-reference/)
- [Israel CTI — Detection Lifecycle](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/detection-lifecycle/)
- [Israel CTI — Detection Status Dashboard](https://anpa1200.github.io/israel-government-threat-actors-cti/detection-engineering/detection-status-dashboard/)

## References

- [Sigma Documentation](https://sigmahq.io/docs/)
- [MITRE ATT&CK Resources](https://attack.mitre.org/resources/)
- [MISP Documentation](https://www.misp-project.org/documentation/)
