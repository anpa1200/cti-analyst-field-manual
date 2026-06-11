# MuddyWater / Seedworm

## Purpose

Show how to structure an actor research page for a mature Iran-nexus intrusion cluster without overclaiming every reported activity.

## Practitioner-Level Explanation

A [MuddyWater / Seedworm](https://1200km.com/israel-government-threat-actors-cti/actors/muddywater/) profile should be built around behavior, source chronology, targeting, tooling, and operational relevance. The analyst should separate long-term public reporting from current campaign evidence and avoid treating every PowerShell or remote-management-tool event as MuddyWater.

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

A source reports phishing that leads to remote management tool installation. The actor page should not say "detect MuddyWater." It should say: hunt for newly installed [RMM tooling](https://1200km.com/israel-government-threat-actors-cti/tools/remote-monitoring-and-management-tools/) on non-IT endpoints after suspicious email activity, with local baselining and false-positive review.

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
- [Israel CTI MuddyWater Profile](https://1200km.com/israel-government-threat-actors-cti/actors/muddywater/)
- [Israel CTI RMM Tools](https://1200km.com/israel-government-threat-actors-cti/tools/remote-monitoring-and-management-tools/)
- [Worked Example — MuddyWater Full Public-Source Case](../worked-examples/actor-research.md)
- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)
- [Operation Desert Hydra — Full CTI-to-Detection Pipeline for MuddyWater](https://github.com/anpa1200/operation-desert-hydra)

## Live Example: Operation Desert Hydra

[github.com/anpa1200/operation-desert-hydra](https://github.com/anpa1200/operation-desert-hydra) — a reproducible public-source CTI pipeline that takes MuddyWater reporting through source gathering, an OpenCTI knowledge graph, a 10-record procedure dataset, 11 detection records, and Ansible-validated Kibana proof screenshots. Everything this page describes in the abstract is executed concretely there.

```bash
git clone https://github.com/anpa1200/operation-desert-hydra.git
cd operation-desert-hydra
cp stack/.env.template stack/.env
bash start.sh   # OpenCTI :8080 · Kibana :5601 · all 11 simulations
bash stop.sh    # halt; --destroy-vm to remove disk
```

## References

- [MITRE ATT&CK G0069 — MuddyWater](https://attack.mitre.org/groups/G0069/)
- [CISA/NSA/FBI/CNMF Advisory AA22-055A — Iranian Government-Sponsored Actors](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-055a)
- [Operation Desert Hydra — Medium Article](https://medium.com/@1200km)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
