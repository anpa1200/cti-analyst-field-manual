# Sherman Kent for CTI

## Purpose

Translate Sherman Kent-style analytic discipline into practical CTI writing and review habits.

## Practitioner-Level Explanation

Sherman Kent's core value for CTI is disciplined judgment: say what is known, how it is known, what is assessed, how confident the analyst is, and what remains uncertain. CTI often fails when it sounds certain but is built on unexamined assumptions.

Kent-style discipline helps analysts avoid vague estimative language, overclaiming, source laundering, and attribution shortcuts. The goal is not academic writing. The goal is a judgment that can survive review by a skeptical peer.

The two pillars are:

1. **Separation**: facts from reporting from assessment from inference from assumption from gap.
2. **Calibration**: confidence terms used consistently and tied to evidence strength, source access, and corroboration.

## Calibrated Probability Wording Table

The following table adapts the Sherman Kent Words of Estimative Probability (WEP) tradition to CTI usage. The approximate probability ranges are guideposts, not mathematical bounds. The decisive factor is evidence quality, not word choice.

| Term | Approximate Range | CTI Use |
|---|---|---|
| Almost certainly / Highly likely | 93–99% | Reserved for claims with multiple independent primary sources and no credible alternative. Rare in practitioner CTI. |
| Likely / Probably | 70–85% | Supported by primary or well-established secondary sources with consistent evidence. Some alternative still plausible. |
| We believe / We assess | Judgment statement | Signals analyst assessment, not source report. Must be followed by evidence and confidence reason. |
| Possibly / May | 25–50% | Consistent with available evidence but not strongly supported. Alternatives are roughly equally plausible. |
| Unlikely / Probably not | 15–30% | Evidence leans against this, but the claim cannot be excluded. |
| Remote / Highly unlikely | 2–10% | Evidence strongly contradicts this. Reserved for claims that remain theoretically possible but are operationally negligible. |
| Cannot assess / Unknown | — | Insufficient evidence to form a judgment. Use Gap label and assign a collection task. |

**Critical rule:** The term used must be tied to a reason. "Likely" with no reason is not calibrated language. "Likely because three independent government advisories describe the same behavior" is.

## Confidence Is Not Probability

Confidence (High/Medium/Low) and probability wording (likely/possibly/remote) serve different purposes:

- **Probability wording** describes where the analyst places the judgment on a likelihood scale.
- **Confidence** describes how well the evidence, source access, and analytic process support that placement.

A judgment can be "likely" with only low confidence, meaning the analyst leans toward the claim but the evidence base is thin. A judgment can be "possibly" with high confidence, meaning the evidence clearly supports a claim being plausible but not dominant.

Do not conflate these. "High confidence" does not mean "almost certainly."

## Common Mistakes

### Bad Example 1 — "Likely" without explanation

```text
The actor will likely target financial institutions next quarter.
```

Problem: "Likely" is presented without evidence, source, corroboration, or alternative hypothesis. A reader cannot evaluate the claim or decide how to act on it.

Corrected:

```text
Key Judgment: The actor may prioritize financial institutions in the next quarter.
Estimative Term: Possibly (25-50%)
Evidence: Reported - Two vendor reports describe the actor targeting financial sector victims in adjacent campaigns over the past 90 days (SRC-003, SRC-007).
Assumptions: The actor's target selection is driven by sector overlap with past campaigns rather than bespoke customer selection.
Gaps: No primary government advisory confirms targeting intent. No telemetry from this environment to confirm exposure.
Alternative: The actor may shift to telecom if financial-sector hardening reduces return.
Confidence: Low confidence — evidence is vendor reporting, no primary source, no local telemetry confirmation.
What Would Change It: Primary advisory or observed targeting of financial institutions by this cluster.
```

### Bad Example 2 — "High confidence" from one weak source

```text
We assess with high confidence that the malware is operated by a nation-state sponsor.
```

Problem: "High confidence" from a single secondary vendor report or from shared tooling alone is not defensible. High confidence requires primary sources, corroboration, and contradiction review.

Corrected:

```text
Key Judgment: Sponsor attribution is unknown.
Evidence: Reported - Vendor A assesses nation-state sponsorship (SRC-011). No primary source confirms.
Alternative Hypotheses: Criminal operator for hire; independent hacktivist with state-adjacent motivation; false flag.
Confidence: Low confidence — single-vendor assessment, no corroboration, tool overlap is the primary cited evidence.
What Would Change It: Primary government attribution statement with supporting forensics; independent corroboration of exclusive infrastructure links.
```

### Bad Example 3 — "Almost certainly" with no contradiction review

```text
This is almost certainly the same group responsible for the 2024 supply chain intrusion.
```

Problem: "Almost certainly" implies contradictions and alternatives have been reviewed and found non-credible. Asserting it without showing the work breaks Kent discipline.

Corrected:

```text
Key Judgment: Operational overlap with the 2024 cluster is possible but not confirmed.
Estimative Term: Possibly (25-50%)
Evidence: Reported - overlapping infrastructure (PIV-008), similar lure themes (EV-022). Assessed - behavioral consistency with prior cluster by vendor B.
Assumptions: The infrastructure overlap is not due to shared hosting, tool resale, or deliberate false flag.
Alternatives: Separate actor reusing purchased tools; copycat campaign; coincidental infrastructure reuse via shared hosting provider.
Contradiction: Vendor C keeps the 2024 cluster and current activity separate with no published rationale.
Confidence: Low confidence — infrastructure overlap exists but is not exclusive. Contradiction from vendor C unresolved.
What Would Change It: Exclusive infrastructure link, common malware config seed not publicly available, or primary source linking operators.
```

## Practical Workflow

1. Write the key judgment first in one sentence.
2. Separate evidence (facts, reports) from interpretation (assessment, inference).
3. State assumptions explicitly — what must be true for the judgment to hold.
4. Use calibrated estimative language with a reason.
5. List alternative hypotheses and assign rough plausibility.
6. Explain confidence with evidence quality, corroboration, and analytic consistency.
7. State what evidence would change the judgment.
8. Identify collection gaps and decision impact.

## Analyst Checklist

- Is the key judgment written as a single, testable sentence?
- Are facts, reporting, assessment, inference, assumptions, and gaps separated?
- Is the estimative term tied to a stated reason?
- Is confidence justified by evidence quality and corroboration?
- Are alternatives reviewed and their plausibility assessed?
- Is there at least one gap and collection task?
- Can a reader turn the output into a decision, hunt, detection, or collection task?

## Output Artifact

```text
Key Judgment:
Estimative Term:
Evidence:
Assumptions:
Alternative Hypotheses:
Contradictions:
Confidence:
Confidence Reason:
What Would Change It:
Collection Gaps:
Decision Impact:
```

## Cross-Links

- [Estimative Language](estimative-language.md)
- [Alternative Hypotheses](alternative-hypotheses.md)
- [Assumptions and Gaps](assumptions-and-gaps.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Evidence Labels](../01-cti-foundations/evidence-labels.md)

## References

- [Words of Estimative Probability — Sherman Kent, CIA](https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
