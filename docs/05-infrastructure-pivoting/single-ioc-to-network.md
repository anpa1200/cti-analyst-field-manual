# Single IOC to Network

## Purpose

Explain how to pivot from one indicator to a bounded infrastructure hypothesis.

## Practitioner-Level Explanation

A single IOC is a starting point, not a campaign; document it in an [Infrastructure Pivot Log](../10-templates/infrastructure-pivot-log.md) before expanding. [Pivoting](single-ioc-to-network.md) expands from a seed indicator to related domains, IPs, certificates, URLs, hosting, malware configs, and telemetry observations.

The analyst must define cluster boundaries and false-positive risk. Without boundaries, pivoting becomes uncontrolled graph expansion.

## CTI Relevance

Infrastructure pivoting supports scoping, attribution hypotheses, detection ideas, and collection planning.

## Common Mistakes

- Treating every shared IP neighbor as malicious.
- Ignoring time windows.
- Failing to separate infrastructure owner, hosting provider, and operator.
- Not recording why a pivot was accepted or rejected.

## Practical Workflow

1. Record the seed IOC and source.
2. Define time window.
3. Pivot through passive DNS, certificate, WHOIS, ASN, URL path, favicon, and malware config data where available.
4. Score each link strength.
5. Reject weak or stale pivots.
6. Build a bounded cluster.
7. Write limitations.

![Threat Intelligence Pivoting Workflow: Building a Bounded Infrastructure Cluster](/img/infographic-pivot-bounded-cluster.png)

## Example / Mini Case

A domain resolves to a shared hosting IP. Pivoting to every domain on that IP would create noise. A stronger pivot would require shared certificate attributes, unique URL paths, matching malware configuration, or close temporal overlap.

## Analyst Checklist

- Is the seed source reliable?
- Is each pivot time-bounded?
- Are shared-hosting risks documented?
- Can the cluster be defended to a reviewer?

## Output Artifact

```text
Seed IOC:
Source:
Time Window:
Pivot Type:
Related Indicator:
Link Strength:
Reason Accepted / Rejected:
Cluster Boundary:
Limitations:
```

## Cross-Links

- [Passive DNS](passive-dns.md)
- [Certificates](certificates.md)
- [Pivoting Limitations](pivoting-limitations.md)
- [Infrastructure Pivot Log](../10-templates/infrastructure-pivot-log.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
