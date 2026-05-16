# Diamond Model

## Purpose

Use the Diamond Model to relate adversary, capability, infrastructure, and victim without overclaiming attribution.

## Practitioner-Level Explanation

The Diamond Model helps structure CTI around four core features: adversary, capability, infrastructure, and victim. The strongest use is not drawing diagrams. The strongest use is testing whether links between features are supported.

An analyst can often know capability and infrastructure while adversary remains unknown. That is still useful CTI if the uncertainty is explicit.

## CTI Relevance

The model is especially useful for infrastructure pivoting, actor clustering, and alternative hypotheses.

## Common Mistakes

- Filling the adversary vertex because the diagram feels incomplete.
- Treating victimology as proof.
- Ignoring relationship strength between vertices.
- Failing to date infrastructure observations.

## Practical Workflow

1. Define the event or activity cluster.
2. Populate known vertices only.
3. Label unknown vertices as Unknown or Gap.
4. Record evidence for each relationship.
5. Assess relationship strength.
6. Use the model to generate collection tasks.

## Example / Mini Case

A domain, certificate, lure theme, and payload family may define a campaign cluster. The adversary remains Unknown. The next collection tasks are passive DNS, malware config review, lure recipient analysis, and overlap checks with known clusters.

## Analyst Checklist

- Are all vertices evidence-labeled?
- Are relationship strengths documented?
- Are unknowns left unknown?
- Does the model generate collection tasks?

## Output Artifact

```text
Event ID:
Adversary:
Capability:
Infrastructure:
Victim:
Relationships:
Evidence:
Confidence:
Collection Tasks:
```

## Cross-Links

- [Infrastructure Pivoting Worked Case](../05-infrastructure-pivoting/infrastructure-pivoting-worked-case.md)
- [Attribution Methodology](../04-attribution/attribution-methodology.md)
- [Alternative Hypotheses](../02-analytic-discipline/alternative-hypotheses.md)

## References

- [The Diamond Model of Intrusion Analysis](https://act.globalcyberalliance.org/index.php/The_Diamond_Model_of_Intrusion_Analysis)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
