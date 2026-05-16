# Worked Examples: Infrastructure Pivoting

## Purpose

Document how to pivot from a single IOC without building a misleading graph.

## Single IOC to Candidate Cluster

```text
Seed:
login-example[.]com observed in a phishing email.

Initial facts:
- First seen in mail telemetry: 2026-05-12
- Registrar: privacy-protected
- Hosting ASN: commodity VPS provider
- Certificate: Let's Encrypt, shared pattern with two candidate domains
- URL path: /m365/login/index.html

Assessment:
Candidate phishing cluster, not actor attribution.
```

## Pivot Log

| Pivot ID | Seed | Pivot Type | Related Indicator | Link Strength | Decision | Reason |
|---|---|---|---|---|---|---|
| PIV-001 | login-example[.]com | Certificate SAN | auth-example[.]com | Moderate | Accepted | Same cert issuance window and matching URL path. |
| PIV-002 | login-example[.]com | ASN | unrelated-vps[.]net | Weak | Rejected | Commodity ASN with no rare overlap. |
| PIV-003 | login-example[.]com | Favicon hash | portal-example[.]com | Moderate | Pending | Same favicon but could be copied template. |

## False-Positive Controls

- Require time-window overlap.
- Avoid ASN-only clustering.
- Preserve rejected pivots.
- Separate infrastructure clustering from actor attribution.
- Downgrade confidence when a pivot depends on commodity hosting, common TLS automation, or copied kits.

## Stop Conditions

Stop pivoting when:

- candidate links are only ASN or registrar-level;
- time windows do not overlap;
- every new node adds noise but no rare feature;
- the intelligence requirement has already been answered;
- analyst cannot explain why the next pivot is relevant.

## Confidence Downgrade Example

```text
Initial:
Medium confidence cluster based on certificate and path overlap.

After review:
Downgraded to low confidence because the same kit and favicon appear across unrelated phishing pages and the hosting provider is commodity infrastructure.
```

## Cross-Links

- [Single IOC to Network](../05-infrastructure-pivoting/single-ioc-to-network.md)
- [Passive DNS](../05-infrastructure-pivoting/passive-dns.md)
- [Certificates](../05-infrastructure-pivoting/certificates.md)
- [Pivoting Limitations](../05-infrastructure-pivoting/pivoting-limitations.md)
