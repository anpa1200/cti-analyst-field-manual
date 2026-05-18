# Actor Profile Template

## Purpose

Define the required sections for a professional actor profile.

## Practitioner-Level Explanation

An actor profile is a decision-support artifact. It should not be a static encyclopedia page. It must explain what is known, who reported it, what is assessed, why it matters, what is detectable, and what remains unknown.

A good profile includes aliases, sponsor assessments, targeting, TTPs, tooling, infrastructure notes, evidence quality, relevance, hunting ideas, detection candidates, and freshness status.

## CTI Relevance

Consistent actor profiles help CTI teams compare actors, prioritize research, and hand off useful content to detection and SOC teams.

## Common Mistakes

- Writing actor pages as biographies instead of decision support.
- Merging vendor aliases without source confirmation.
- Using tool overlap as attribution proof.
- Omitting relevance to the defended environment.
- Failing to separate actor, persona, sponsor, and public claim.

## Practical Workflow

1. Create alias and source table.
2. Add sponsor/attribution section with confidence.
3. Write targeting and relevance.
4. Add TTPs with evidence labels.
5. Add tools with source and behavior.
6. Add detections and hunts.
7. Add gaps and review date.

![Actor Profile Template — Practical Workflow](/img/infographic-actor-profile-workflow.png)

![Alias Table — Naming and Source Caveats](/img/infographic-alias-table.png)

## Example / Mini Case

A profile for a destructive persona should include a persona-claims section rather than mixing all public claims into confirmed incidents.

![Threat Intelligence Summary — Actor Profile Format](/img/infographic-actor-profile-summary.png)

## Analyst Checklist

- Are aliases source-confirmed?
- Are sponsor and attribution claims evidence-labeled?
- Are behaviors mapped to TTPs only when supported?
- Are detection and hunting implications included?
- Are gaps explicit?

## Output Artifact

```text
Primary Name:
Aliases and Sources:
Sponsor / Attribution:
Confidence:
Targeting:
Relevance:
TTPs:
Tools:
Infrastructure Notes:
Detection Ideas:
Hunt Hypotheses:
Evidence IDs:
Gaps:
Last Reviewed:
```

## Cross-Links

- [Actor Profile Template in Templates](../10-templates/actor-profile-template.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Israel CTI Actor Workbench](https://anpa1200.github.io/israel-government-threat-actors-cti/navigation/actor-workbench/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
