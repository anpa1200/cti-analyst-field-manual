---
description: "Using passive DNS data for infrastructure pivoting in CTI investigations: querying historical resolution records, identifying actor infrastructure clusters, and pivot techniques."
---

# Passive DNS

## Purpose

Use passive DNS safely to understand domain and IP relationships over time.

## Practitioner-Level Explanation

Passive DNS shows observed relationships between domains and IP addresses. It is useful for timeline building and infrastructure clustering, but it is not proof of malicious control.

The most important controls are time window, source coverage, shared hosting awareness, and corroboration with other features.

## CTI Relevance

Passive DNS helps identify campaign infrastructure, historical exposure, and possible related indicators for hunt scoping.

## Common Mistakes

- Ignoring first-seen and last-seen dates.
- Pivoting across shared infrastructure without corroboration.
- Assuming passive DNS coverage is complete.
- Using stale resolutions as current indicators.

## Practical Workflow

1. Start with domain or IP.
2. Record first-seen and last-seen dates.
3. Identify co-resolutions and hosting context.
4. Check for shared hosting or CDN.
5. Corroborate with certificates, paths, configs, or telemetry.
6. Expire stale indicators.

![Passive DNS — Practical Workflow](/img/infographic-passive-dns-workflow2.png)

![Passive DNS & Infrastructure Association Workflow](/img/infographic-passive-dns-workflow.png)

## Example / Mini Case

A domain resolved to an IP used by many unrelated sites. Passive DNS alone is weak. If the same domain also shares a certificate subject pattern and malware config value with another domain, the cluster becomes stronger.

![Practical Workflow: Domain Clustering Example](/img/infographic-domain-clustering-example.png)

## Analyst Checklist

- Are dates recorded?
- Is hosting context known?
- Are pivots corroborated?
- Are indicators expired when stale?

## Output Artifact

```text
Domain / IP:
First Seen:
Last Seen:
Resolution Set:
Hosting Context:
Corroboration:
Accepted Pivots:
Rejected Pivots:
Confidence:
```

## Cross-Links

- [Single IOC to Network](single-ioc-to-network.md)
- [ASN and Hosting Pivots](asn-hosting-pivots.md)
- [Pivoting Limitations](pivoting-limitations.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
