# Pivoting Limitations

## Purpose

Document false-positive risks and analytic limits in infrastructure research.

## Practitioner-Level Explanation

Infrastructure pivoting can create impressive graphs and weak intelligence. Shared hosting, CDNs, sinkholes, scanners, compromised sites, bulletproof hosting, reused kits, and affiliate ecosystems all complicate interpretation.

Every pivot should answer: what does this relationship prove, what does it not prove, and what additional evidence would strengthen it?

## CTI Relevance

Limitations protect downstream teams from treating weak pivots as blocklists, attribution, or production detections.

## Common Mistakes

- Graph expansion without stopping rules.
- Failing to document rejected pivots.
- Assuming infrastructure equals actor.
- Forgetting indicator expiration.

## Practical Workflow

1. Define pivot objective.
2. Set stop conditions.
3. Document accepted and rejected pivots.
4. Classify link strength.
5. Record false-positive risks.
6. Expire or demote stale indicators.

## Example / Mini Case

If a domain shares an IP with hundreds of unrelated domains, the pivot should usually stop unless another feature links a smaller subset. The output should say shared hosting prevents high-confidence clustering.

## Analyst Checklist

- Are stop conditions defined?
- Are weak pivots rejected?
- Are false-positive risks named?
- Are indicators expired?

## Output Artifact

```text
Pivot Objective:
Stop Condition:
Accepted Pivots:
Rejected Pivots:
False-Positive Risk:
Expiration:
Confidence:
Reviewer Notes:
```

## Cross-Links

- [Single IOC to Network](single-ioc-to-network.md)
- [Certificates](certificates.md)
- [Evidence Strength Ladder](../04-attribution/evidence-strength-ladder.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
