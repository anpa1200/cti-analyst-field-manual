# Estimative Language

## Purpose

Provide practical wording for CTI judgments where evidence is incomplete, and enforce consistency so readers can interpret confidence correctly.

## Practitioner-Level Explanation

Estimative language gives readers a controlled way to understand analytic judgment under uncertainty. Terms such as likely, possibly, consistent with, and insufficient evidence must be used consistently and with explicit reasons. Without discipline, these words become decoration rather than communication.

Avoid dramatic or vague words. "The actor is dangerous" is not an estimate. "The actor is likely to prioritize credential access and edge-device exploitation against exposed remote access services, based on two government advisories and consistent vendor reporting" is an estimate with traceable support.

**Three rules:**

1. Every estimative term must be followed by a reason or it is decorative language, not analysis.
2. Source reporting and local analyst assessment must be explicitly separated.
3. The weakest defensible term is the correct term. Do not upgrade language to sound authoritative.

## Calibrated Wording Reference

| Term | Approx. Range | When to Use |
|---|---|---|
| Almost certainly | 93–99% | Multiple independent primary sources, no credible alternative. |
| Likely / Probably | 70–85% | Primary or established secondary sources; consistent evidence; alternatives remain. |
| Possibly / May | 25–50% | Consistent with evidence but weakly supported; alternatives roughly as plausible. |
| Unlikely | 15–30% | Evidence leans against; cannot fully exclude. |
| Remote / Highly unlikely | 2–10% | Evidence strongly contradicts; theoretically possible only. |
| Cannot assess | — | Insufficient evidence. Record as Gap and assign collection task. |

See [Sherman Kent for CTI](sherman-kent-for-cti.md) for the full calibration table and worked examples.

## Bad Examples and Corrections

### Bad Example 1 — "Likely" without explanation

```text
The campaign likely targets critical infrastructure.
```

Problem: The estimative term is asserted with no evidence, no source, no alternative.

Corrected:

```text
Judgment: The campaign possibly targets critical infrastructure.
Evidence Label: Reported
Source: SRC-009 — vendor report citing two energy-sector victims.
Confidence: Low confidence — single-vendor reporting, no primary advisory, no local telemetry.
What Would Change It: Primary government advisory naming critical infrastructure victims, or observed targeting of this environment.
```

### Bad Example 2 — Passive language hiding the assessment owner

```text
It is assessed that the malware is designed for long-term persistence.
```

Problem: "It is assessed" hides who assessed it. Reader cannot evaluate whether this is source-reported or analyst-derived.

Corrected:

```text
Reported: Vendor A assesses the malware is designed for long-term persistence (SRC-006).
Assessed-here: Consistent with observed behavior in public sandbox reports. The persistence mechanism is a scheduled task, which is detectable.
```

### Bad Example 3 — Mixing source assessment with local assessment

```text
The actor probably has access to zero-day capabilities.
```

Problem: It is unclear whether "probably" comes from a source or from the local analyst. If it is source language, it must be labeled Reported. If it is local assessment, the evidence must be stated.

Corrected:

```text
Reported: Vendor B assesses the actor probably has access to zero-day capabilities, based on observed exploitation of a then-unpatched vulnerability (SRC-012). Evidence label: Reported.
Assessed-here: Local assessment deferred pending identification of a specific unpatched vulnerability in this environment. Gap: Unknown whether this actor has used zero-day techniques against our sector.
```

### Bad Example 4 — Using estimative language to avoid evidence

```text
The actor may conduct future operations. The situation remains uncertain.
```

Problem: This says nothing. "May" and "uncertain" require a reason and a scope. Without those, the statement is not intelligence.

Corrected:

```text
No actionable intelligence judgment is possible on future targeting. The gap is recorded and assigned for collection. The next collection priority is: any primary source identifying the actor's 2026 infrastructure or target set.
```

## Practical Workflow

1. Define the judgment in one sentence.
2. Choose the weakest accurate estimative term.
3. Attach the evidence label (Observed, Reported, Assessed, Inferred).
4. State whether the assessment is source-reported or analyst-assessed.
5. Record what evidence would strengthen or weaken it.
6. Record the gap if evidence is insufficient for any useful estimate.

## Analyst Checklist

- Is the estimative term necessary, or can the claim be stated as fact or gap?
- Can the reader distinguish source assessment from local assessment?
- Does the term match evidence strength?
- Is the reason for the term stated explicitly?
- Is the judgment actionable — does it support a decision, hunt, detection, or collection task?

## Output Artifact

```text
Judgment:
Estimative Term:
Approximate Range:
Evidence Label:
Source or Analyst Assessment:
Reason:
Alternative:
Confidence:
What Would Change It:
Gap / Collection Task:
```

## Cross-Links

- [Sherman Kent for CTI](sherman-kent-for-cti.md)
- [Confidence Language](../01-cti-foundations/confidence-language.md)
- [Assumptions and Gaps](assumptions-and-gaps.md)
- [Confidence vs Probability](../04-attribution/confidence-vs-probability.md)

## References

- [Words of Estimative Probability — Sherman Kent, CIA](https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
