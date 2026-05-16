# MuddyWater / Seedworm

## Purpose

Show how to structure an actor research page for a mature Iran-nexus intrusion cluster without overclaiming every reported activity.

## Practitioner-Level Explanation

A [MuddyWater / Seedworm](https://anpa1200.github.io/israel-government-threat-actors-cti/actors/muddywater/) profile should be built around behavior, source chronology, targeting, tooling, and operational relevance. The analyst should separate long-term public reporting from current campaign evidence and avoid treating every PowerShell or remote-management-tool event as MuddyWater.

The practical value of the profile is not the name. It is a set of behaviors that can become collection requirements, hunts, detection candidates, and customer-facing risk judgments.

## CTI Relevance

MuddyWater is a useful training case because public reporting frequently connects it to phishing, living-off-the-land tradecraft, remote management tooling, credential access, and Middle East targeting. It demonstrates how actor knowledge becomes defensive action.

## Common Mistakes

- Writing actor pages as biographies instead of decision support.
- Merging vendor aliases without source confirmation.
- Using tool overlap as attribution proof.
- Omitting relevance to the defended environment.
- Failing to separate actor, persona, sponsor, and public claim.

## Practical Workflow

1. Create an alias table with source for each alias.
2. Build a source chronology.
3. Extract behaviors into evidence rows.
4. Separate tooling capability from observed use.
5. Map only supported ATT&CK techniques.
6. Write hunt hypotheses tied to telemetry.
7. Document gaps and freshness date.

## Example / Mini Case

A source reports phishing that leads to remote management tool installation. The actor page should not say "detect MuddyWater." It should say: hunt for newly installed [RMM tooling](https://anpa1200.github.io/israel-government-threat-actors-cti/tools/remote-monitoring-and-management-tools/) on non-IT endpoints after suspicious email activity, with local baselining and false-positive review.

## Analyst Checklist

- Are aliases source-confirmed?
- Are sponsor and attribution claims evidence-labeled?
- Are behaviors mapped to TTPs only when supported?
- Are detection and hunting implications included?
- Are gaps explicit?

## Output Artifact

```text
Actor:
Aliases:
Sponsor / Attribution Claims:
Key Sources:
Targeting:
TTPs:
Tools:
Detection Ideas:
Hunt Hypotheses:
Gaps:
Last Reviewed:
```

## Cross-Links

- [Actor Profile Template](actor-profile-template.md)
- [Israel CTI MuddyWater Profile](https://anpa1200.github.io/israel-government-threat-actors-cti/actors/muddywater/)
- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
