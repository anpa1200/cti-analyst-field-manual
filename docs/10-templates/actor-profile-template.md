# Actor Profile Template

## Purpose

Create an actor profile that supports decisions, hunts, and detections.

## Fields

- **actor_id:** Stable actor identifier.
- **primary_name:** Preferred name and rationale.
- **aliases:** Aliases with source for each.
- **sponsor_assessment:** Sponsor claim with evidence label and confidence.
- **targeting:** Sectors, regions, and victimology with dates.
- **ttps:** Behavior mappings with evidence.
- **tools:** Tools and malware with source-backed behavior.
- **detections:** Mapped hunts or detections.
- **gaps:** Unknowns and collection needs.
- **last_reviewed:** Review date and owner.

## Example Values

```text
actor_id: ACT-001
primary_name: Example Cluster
aliases: VendorA Name, VendorB Name
sponsor_assessment: Assessed-by-source, medium confidence
targeting: Telecom and public-sector reporting since 2024
ttps: T1566 phishing, evidence EV-003
tools: ExampleLoader, reported by SRC-002
detections: HUNT-004
gaps: No public 2026 primary source found
last_reviewed: 2026-05-16
```

## Quality Gates

- Aliases are source-confirmed.
- Actor, persona, and sponsor are separated.
- TTPs are behavior-backed.
- Gaps are explicit.

## Common Failure Modes

- Alias drift.
- Tool overlap used as attribution proof.
- No relevance section.

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

- [Actor Profile Template](../06-actor-research/actor-profile-template.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)

## Required vs Optional Fields

Required: primary name, alias table with source per alias, sponsor statement or Gap, targeting, TTPs, tools, evidence IDs, detection implications, gaps, freshness date.

Optional: infrastructure notes, persona claims, timeline, confidence history, retired aliases.

## Pass / Fail Example

Pass: The profile separates actor, persona, sponsor, and tool claims, with source and confidence for each.

Fail: The profile merges vendor aliases without source mapping and treats shared tooling as attribution proof.

## Complete Filled Example

```text
actor_id: ACT-EXAMPLE-001
primary_name: Example Cluster
aliases: VendorA ExampleName (SRC-001); VendorB ExampleKitten (SRC-002)
sponsor_assessment: Gap; no primary source confirms sponsor.
targeting: Reported telecom and public-sector targeting, 2024-2026.
ttps: T1505.003 web shell, EV-010, medium mapping confidence.
tools: ExampleShell, Reported, SRC-002.
detections: HUNT-EDGE-001, DET-CAND-003.
gaps: No 2026 primary reporting on current infrastructure.
last_reviewed: 2026-05-16
```
