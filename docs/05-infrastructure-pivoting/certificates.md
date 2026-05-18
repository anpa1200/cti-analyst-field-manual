# Certificates

## Purpose

Use TLS certificate data as one feature in infrastructure clustering.

## Practitioner-Level Explanation

Certificates can reveal domain relationships through subjects, issuers, SANs, serials, validity windows, and reuse patterns. Certificate pivots are stronger when the certificate is unusual, reused across a small set, and temporally aligned with activity.

They are weaker when using automated certificates, common issuers, or shared hosting platforms.

## CTI Relevance

Certificate pivots support infrastructure clustering, detection enrichment, and timeline reconstruction.

## Common Mistakes

- Pivoting on common certificate issuers.
- Ignoring automated certificate churn.
- Treating certificate reuse as actor identity.
- Not checking validity dates.

## Practical Workflow

1. Collect certificate fields.
2. Check SANs and validity windows.
3. Identify unusual reuse patterns.
4. Compare with passive DNS and URL paths.
5. Assess link strength.
6. Document limitations.

![Certificate Analysis Workflow](/img/infographic-certificate-analysis.png)

## Example / Mini Case

Two domains share a rare certificate subject and appeared within the same week. That is a moderate pivot if supported by similar URL paths or payload behavior. It is weak if both use common managed hosting and no other overlap exists.

## Analyst Checklist

- Are certificate fields specific enough?
- Are validity dates aligned?
- Is reuse rare or common?
- Is there corroboration beyond the certificate?

## Output Artifact

```text
Certificate Fingerprint:
Subject:
Issuer:
SANs:
Validity:
Related Domains:
Rarity:
Corroboration:
Assessment:
```

## Cross-Links

- [Passive DNS](passive-dns.md)
- [Infrastructure Pivot Log](../10-templates/infrastructure-pivot-log.md)
- [Evidence Strength Ladder](../04-attribution/evidence-strength-ladder.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
