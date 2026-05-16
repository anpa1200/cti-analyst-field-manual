# Attribution Methodology

## Purpose

Provide a strict, evidence-weighted approach to CTI attribution.

## Practitioner-Level Explanation

Attribution is a probabilistic analytic judgment. It is not a label copied from a report and not a result of one IOC match. A defensible attribution weighs timing, targeting, language, infrastructure, tooling, TTPs, operational tempo, malware lineage, and alternative hypotheses.

Shared tooling does not prove actor identity. Victimology is supporting evidence, not proof. Infrastructure overlap can be weak or strong depending on exclusivity, timing, and reuse.

## CTI Relevance

Attribution affects response priority, legal/comms posture, executive reporting, and detection focus. Weak attribution can mislead all of those consumers.

## Common Mistakes

- Attributing from a single IOC.
- Using ATT&CK overlap as proof.
- Ignoring false-flag and copycat possibilities.
- Failing to separate cluster, persona, sponsor, and public claim.

## Practical Workflow

1. Define what is being attributed: event, campaign, tool, infrastructure, persona, or sponsor.
2. Collect evidence by category.
3. Rate strength and reliability.
4. Generate alternative hypotheses.
5. Weigh contradictions.
6. Assign confidence with reason.
7. State limitations and what would change the judgment.

## Example / Mini Case

A persona claims an attack on social media. Attribution to the persona is not the same as attribution to the operational cluster. The analyst records the public claim as Reported, seeks telemetry or third-party corroboration, and avoids sponsor attribution unless stronger evidence exists.

## Analyst Checklist

- Is the attribution object clear?
- Are actor, persona, and sponsor separated?
- Is evidence multi-factor?
- Are alternatives documented?
- Is confidence justified?

## Output Artifact

```text
Attribution Object:
Candidate Actor / Cluster:
Persona:
Sponsor Claim:
Evidence Categories:
Alternative Hypotheses:
Contradictions:
Confidence:
Confidence Reason:
Limitations:
```

## Cross-Links

- [False Flag Analysis](false-flag-analysis.md)
- [Evidence Strength Ladder](evidence-strength-ladder.md)
- [Alternative Hypotheses](../02-analytic-discipline/alternative-hypotheses.md)
- [Israel CTI Actor Workbench](https://anpa1200.github.io/israel-government-threat-actors-cti/navigation/actor-workbench/)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
