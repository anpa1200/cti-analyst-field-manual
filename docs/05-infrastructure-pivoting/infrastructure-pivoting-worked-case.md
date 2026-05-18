# Infrastructure Pivoting Worked Case

## Purpose

Provide a safe example of moving from one seed indicator to a bounded infrastructure cluster.

## Practitioner-Level Explanation

This worked case uses generic, non-operational example values. It demonstrates documentation structure, not live tracking.

The method starts with one seed domain, checks passive DNS, certificates, URL paths, hosting, and telemetry, then accepts only corroborated relationships.

## CTI Relevance

Worked cases help analysts learn when to stop pivoting and how to explain cluster boundaries.

## Common Mistakes

- Using live malicious infrastructure in a training page.
- Failing to defang or sanitize examples.
- Accepting all graph neighbors.
- Not documenting rejected pivots.

## Practical Workflow

1. Record seed domain example[.]com.
2. Check passive DNS within the relevant month.
3. Find two domains with matching certificate and path pattern.
4. Reject shared-hosting neighbors with no corroboration.
5. Write a cluster assessment.
6. Convert to hunt enrichment with limitations.

![Infrastructure Pivoting Worked Case — Practical Workflow](/img/infographic-pivot-worked-case-workflow.png)

![Threat Intelligence Pivot Workflow: Controlled, Documented, and Defensible](/img/infographic-pivot-workflow-defensible.png)

## Example / Mini Case

Seed: example[.]com. Passive DNS shows one IP with many unrelated domains. Certificate data identifies two domains with a matching SAN pattern and same validity window. Web path data shows both used `/update/check` during the same week. Assessment: bounded three-domain infrastructure cluster, medium confidence. Attribution remains Unknown.

## Analyst Checklist

- Is the example sanitized?
- Are accepted pivots justified?
- Are rejected pivots listed?
- Is attribution avoided unless supported?

## Output Artifact

```text
Seed:
Accepted Cluster:
Rejected Pivots:
Evidence:
Confidence:
Attribution Status:
Defensive Use:
Limitations:
```

## Cross-Links

- [Infrastructure Pivot Log](../10-templates/infrastructure-pivot-log.md)
- [Diamond Model](../03-frameworks/diamond-model.md)
- [Pivoting Limitations](pivoting-limitations.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
