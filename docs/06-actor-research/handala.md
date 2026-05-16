# Handala / Void Manticore Research Method

## Purpose

Use Handala as a model for separating public persona claims from operational cluster assessment.

## Practitioner-Level Explanation

Handala-style reporting requires strict persona discipline. A public claim, a Telegram post, a defacement message, a leaked-data claim, and a verified intrusion are different evidence classes.

The analyst should treat Handala as a claim-heavy persona unless stronger sources connect a specific operation to a tracked cluster such as Void Manticore. Do not repost leaked material. Do not treat persona messaging as telemetry.

## CTI Relevance

This case is valuable because modern CTI must handle psychological operations, hack-and-leak claims, and destructive narratives without becoming an amplifier.

## Common Mistakes

- Writing actor pages as biographies instead of decision support.
- Merging vendor aliases without source confirmation.
- Using tool overlap as attribution proof.
- Omitting relevance to the defended environment.
- Failing to separate actor, persona, sponsor, and public claim.
- Amplifying claims that are intended to create fear.
- Treating claimed victim lists as verified compromise.

## Practical Workflow

1. Capture the public claim metadata without sensitive content.
2. Check internal telemetry and trusted third-party corroboration.
3. Separate persona, cluster, sponsor, and victim claims.
4. Record confidence and gaps.
5. Recommend comms/SOC/legal handling separately.

## Example / Mini Case

A persona claims to have breached a public-sector organization. The CTI output records the claim, source channel, date, and claimed sector. Verification remains Gap until telemetry or trusted reporting confirms compromise. The SOC action is scoped triage, not public amplification.

## Analyst Checklist

- Are aliases source-confirmed?
- Are sponsor and attribution claims evidence-labeled?
- Are behaviors mapped to TTPs only when supported?
- Are detection and hunting implications included?
- Are gaps explicit?
- Is leaked or sensitive content excluded?
- Is the public claim separated from verified compromise?

## Output Artifact

```text
Persona Claim ID:
Persona:
Claim Date:
Claimed Victim / Sector:
Evidence Captured:
Telemetry Match:
Third-Party Corroboration:
Confidence:
Comms / Legal Handling:
Status:
```

## Cross-Links

- [False Flag Analysis](../04-attribution/false-flag-analysis.md)
- [Israel CTI Handala Profile](https://anpa1200.github.io/israel-government-threat-actors-cti/actors/handala/)
- [Customer Delivery Methodology](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/methodology/foundations/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
