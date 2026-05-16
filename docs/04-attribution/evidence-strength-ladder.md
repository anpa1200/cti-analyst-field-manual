# Evidence Strength Ladder

## Purpose

Rank attribution evidence by strength and limitations.

## Practitioner-Level Explanation

Not all attribution evidence has equal weight. A reused IP address is weak by itself. A unique malware build, exclusive infrastructure, operator mistake, and corroborated victimology together are stronger.

The ladder helps analysts explain why a judgment is high, medium, or low confidence.

## CTI Relevance

Evidence weighting prevents overclaiming and makes attribution review possible.

## Common Mistakes

- Treating all overlaps as equal.
- Ignoring time windows.
- Not checking whether infrastructure is shared.
- Overweighting victimology.

## Practical Workflow

1. List evidence items.
2. Classify each item by type.
3. Assess exclusivity and timing.
4. Identify benign or alternative explanations.
5. Combine evidence only when relationships are valid.
6. Document confidence impact.

## Example / Mini Case

Weak evidence: same cloud provider, common tool, generic phishing theme. Stronger evidence: unique C2 path pattern, malware configuration overlap, repeated operator schedule, and corroborated targeting pattern.

## Analyst Checklist

- Is the evidence exclusive?
- Is timing aligned?
- Could infrastructure be shared or resold?
- Does the evidence identify actor, tool, or only activity cluster?

## Output Artifact

```text
Evidence Item:
Type:
Strength: Weak / Moderate / Strong
Timing:
Exclusivity:
Alternative Explanation:
Confidence Impact:
Source:
```

## Cross-Links

- [Attribution Methodology](attribution-methodology.md)
- [Confidence vs Probability](confidence-vs-probability.md)
- [Infrastructure Pivoting Limitations](../05-infrastructure-pivoting/pivoting-limitations.md)

## References

- [The Diamond Model of Intrusion Analysis — Caltagirone, Pendergast, Betz](https://act.globalcyberalliance.org/index.php/The_Diamond_Model_of_Intrusion_Analysis)
- [Words of Estimative Probability — Sherman Kent, CIA](https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
