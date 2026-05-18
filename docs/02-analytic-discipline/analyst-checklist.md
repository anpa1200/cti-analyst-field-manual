# Analyst Checklist

## Purpose

Provide a reusable pre-publication checklist for CTI outputs.

## Practitioner-Level Explanation

The checklist is a quality-control tool. It should be used before publishing a report, updating an [actor profile](../06-actor-research/actor-profile-template.md), creating a [hunt hypothesis](../08-cti-to-detection/hunting-hypothesis-template.md), or briefing a decision-maker.

The point is not bureaucracy. The point is to catch unsupported claims, missing confidence reasons, unbounded pivots, and broken links before the output becomes operational guidance.

## CTI Relevance

Consistent review improves trust between CTI, SOC, detection engineering, IR, and executive consumers.

## Common Mistakes

- Reviewing only grammar and not evidence.
- Failing to check links and dates.
- Not testing whether the output answers the PIR.
- Treating the checklist as optional for urgent work.

## Practical Workflow

1. Confirm the PIR or decision.
2. Check every major claim for evidence label and source.
3. Review confidence reasons.
4. Check contradictions and gaps.
5. Verify links and dates.
6. Confirm downstream action is realistic.
7. Record reviewer and review date.

## Example / Mini Case

Before sending an executive note about a campaign, the analyst verifies that [actor attribution](../04-attribution/attribution-methodology.md) is not based only on [ATT&CK overlap](../03-frameworks/attck-mapping-mistakes.md), that the [source](../01-cti-foundations/source-reliability.md) is primary or clearly labeled as secondary, and that the recommendation is feasible for the SOC.

## Analyst Checklist

- Does the output answer the requirement?
- Are major claims source-backed?
- Are gaps visible?
- Are cross-links working?
- Is the recommendation within scope and defensive?

## Output Artifact

```text
Output ID:
Reviewer:
Review Date:
PIR Answered:
Evidence Check:
Confidence Check:
Gap Check:
Cross-Link Check:
Decision / Action Check:
Approved / Changes Required:
```

## Cross-Links

- [Finished Intelligence vs Research Notes](../01-cti-foundations/finished-intelligence-vs-research-notes.md)
- [Evidence Register Template](../10-templates/evidence-register-template.md)
- [Finished Intelligence Report Template](../10-templates/finished-intel-report-template.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
