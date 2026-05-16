# False Flag Analysis

## Purpose

Provide a practical method for evaluating deception, imitation, and persona manipulation.

## Practitioner-Level Explanation

False flags range from deliberate deception to casual copying. CTI analysts should not assume every misleading signal is sophisticated deception. Many overlaps come from shared tools, public reporting, infrastructure reuse, affiliate models, or poor source visibility.

The analyst should ask what the signal is, who benefits if it is believed, and whether stronger evidence supports or contradicts it.

## CTI Relevance

False-flag analysis is especially important for hack-and-leak personas, politically motivated claims, and public attribution debates.

## Common Mistakes

- Assuming every inconsistency is deception.
- Ignoring mundane explanations like shared tooling.
- Amplifying persona claims without corroboration.
- Treating language artifacts as decisive.

## Practical Workflow

1. Identify the suspicious signal.
2. List benign explanations.
3. List deception hypotheses.
4. Check evidence strength.
5. Look for independent corroboration.
6. State whether the signal affects attribution confidence.

## Example / Mini Case

A claimed persona posts data allegedly from a victim. The correct response is to preserve the claim, avoid reposting sensitive content, check internal telemetry or trusted reporting, and record the claim separately from verified compromise.

## Analyst Checklist

- Is the signal actually inconsistent?
- Are non-deceptive explanations considered?
- Is the claim separated from verified telemetry?
- Is public amplification avoided?

## Output Artifact

```text
Signal:
Possible Benign Explanation:
Possible Deception Explanation:
Evidence For:
Evidence Against:
Impact on Attribution:
Recommended Handling:
```

## Cross-Links

- [Attribution Methodology](attribution-methodology.md)
- [Persona-aware Israel CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/actors/handala/)
- [Alternative Hypotheses](../02-analytic-discipline/alternative-hypotheses.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
