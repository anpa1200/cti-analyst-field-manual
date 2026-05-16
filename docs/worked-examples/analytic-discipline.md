# Worked Examples: Analytic Discipline

## Purpose

Force assumptions, contradictions, alternatives, and confidence justifications into visible artifacts.

## Assumption Register

| ID | Assumption | Why It Matters | Evidence | Risk If Wrong | Review Trigger |
|---|---|---|---|---|---|
| ASM-001 | Endpoint telemetry includes command-line fields for script interpreters. | Required for detection design. | Reported by platform owner, not yet tested. | Detection logic may be unusable. | First query test. |
| ASM-002 | Vendor reporting describes behavior accurately enough for hunt design. | CTI-to-detection chain depends on source detail. | Source is reputable but lacks raw logs. | Hunt may overfit summary language. | New primary source or local telemetry review. |

## Contradiction Register

| ID | Claim A | Claim B | Impact | Handling |
|---|---|---|---|---|
| CON-001 | Source 1 says activity is a named actor. | Source 2 tracks it as an unattributed cluster. | Attribution confidence cannot be high. | Use behavior-first language; list both vendor names; keep actor claim as Assessed or Gap. |

## Alternative Hypotheses

| Hypothesis | Supporting Evidence | Weakness | Collection Need |
|---|---|---|---|
| H1: State-linked actor executed the activity. | Targeting and TTPs resemble source reporting. | Similar tooling is public or shared. | Infrastructure overlap, timing, victimology, malware config. |
| H2: Criminal affiliate reused the same tooling. | Tooling is available outside the named cluster. | Victimology may not match financially motivated behavior. | Extortion pattern, payment note, affiliate infrastructure. |
| H3: Internal admin activity caused the observable. | Behavior overlaps with legitimate administration. | Timing and source path may be unusual. | Change ticket, owner interview, admin baseline. |

## Confidence Justification

```text
Assessment:
The observed behavior is consistent with reported RMM-abuse tradecraft, but attribution remains Unknown.

Confidence:
Medium confidence for behavior relevance; low confidence for actor attribution.

Reason:
The behavior is source-supported and observable in local telemetry, but there is no exclusive infrastructure, malware configuration, or source-confirmed actor handoff.
```

## Bad Example / Corrected Example

Bad:

```text
This was probably Actor X because the technique appears on Actor X's ATT&CK page.
```

Corrected:

```text
Observed behavior maps to T1059.001 with medium mapping confidence. Actor attribution is Unknown because the evidence is behavior overlap only and lacks exclusive infrastructure, source-confirmed tooling, or victimology correlation.
```

## Cross-Links

- [Assumptions and Gaps](../02-analytic-discipline/assumptions-and-gaps.md)
- [Contradiction Handling](../02-analytic-discipline/contradiction-handling.md)
- [Alternative Hypotheses](../02-analytic-discipline/alternative-hypotheses.md)
- [Confidence Language](../01-cti-foundations/confidence-language.md)
