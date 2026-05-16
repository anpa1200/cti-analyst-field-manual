# Worked Examples: Attribution

## Purpose

Show how to downgrade weak attribution and write defensible confidence statements.

## Weak Attribution Claim

```text
This intrusion was Actor X because the victim is in Actor X's target sector and the malware name appears in prior reports.
```

Problems:

- Victimology is supporting evidence, not proof.
- Shared malware or tooling may be reused.
- No infrastructure, timing, operator behavior, or source-confirmed overlap is cited.
- No competing hypotheses are documented.

## Corrected Attribution Claim

```text
Assessment:
The intrusion is consistent with reporting on Actor X, but attribution remains low confidence.

Evidence:
- Reported: Source A links similar malware behavior to Actor X.
- Observed: Local telemetry shows matching process and network behavior.
- Gap: No source-confirmed infrastructure overlap, malware configuration match, or operator handoff evidence.

Competing hypotheses:
- Criminal reuse of public or leaked tooling.
- Different state-linked cluster using similar procedures.
- Legitimate administrative activity followed by unrelated malware.
```

## Evidence Strength Ladder

| Strength | Evidence Type | Attribution Value |
|---|---|---|
| Weak | Shared ATT&CK technique | Common behavior; not enough. |
| Weak | Broad victimology | Context only. |
| Moderate | Reused infrastructure in same time window | Useful if not shared hosting. |
| Moderate | Similar malware configuration | Stronger if rare and time-bound. |
| Strong | Source-confirmed operational handoff or unique operator mistake | High value but still requires caveats. |
| Strong | Multiple independent sources with technical overlap | Supports higher confidence when contradictions are handled. |

## Confidence Statement

```text
Medium confidence:
The assessment rests on two independent vendor reports and one local telemetry match. Confidence is limited because the infrastructure is hosted on a common provider and no exclusive malware configuration has been recovered.
```

## Cross-Links

- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Evidence Strength Ladder](../04-attribution/evidence-strength-ladder.md)
- [False Flag Analysis](../04-attribution/false-flag-analysis.md)
- [Confidence vs Probability](../04-attribution/confidence-vs-probability.md)
