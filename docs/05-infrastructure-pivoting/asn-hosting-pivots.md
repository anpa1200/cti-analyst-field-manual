# ASN and Hosting Pivots

## Purpose

Use hosting and ASN context without overclaiming malicious ownership.

## Practitioner-Level Explanation

Hosting context tells the analyst where infrastructure lives and how easy it may be to rotate. ASN patterns can support clustering when paired with timing, provider selection, account artifacts, or repeated operational behavior.

An ASN is rarely a strong indicator by itself. Many actors and benign users share providers.

## CTI Relevance

Hosting pivots support enrichment, blocking decisions, provider abuse reporting, and campaign infrastructure analysis.

## Common Mistakes

- Blocking whole ASNs without business impact review.
- Treating provider preference as attribution.
- Ignoring VPS resale and compromised infrastructure.
- Not separating ingress, C2, staging, and redirector roles.

## Practical Workflow

1. Identify ASN and provider.
2. Classify infrastructure role.
3. Check historical actor/provider patterns.
4. Look for account-level or configuration overlap.
5. Assess collateral risk.
6. Document whether the pivot is tactical or analytic.

## Example / Mini Case

A campaign uses low-cost VPS providers across several countries. That supports an operational pattern but not actor identity. It may still guide firewall enrichment and short-term hunting.

## Analyst Checklist

- Is the infrastructure role clear?
- Is provider overlap meaningful?
- Is collateral risk understood?
- Is the pivot corroborated?

## Output Artifact

```text
Indicator:
ASN:
Provider:
Infrastructure Role:
First / Last Seen:
Provider Pattern:
Collateral Risk:
Defensive Use:
Confidence:
```

## Cross-Links

- [Passive DNS](passive-dns.md)
- [Pivoting Limitations](pivoting-limitations.md)
- [Detection Backlog](../08-cti-to-detection/detection-backlog.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
