# Source Register Template

## Purpose

Track source provenance, reliability, credibility, review status, and downstream use.

## Fields

- **source_id:** Unique source identifier.
- **publisher:** Organization or author.
- **title:** Exact source title.
- **url:** Stable source URL.
- **publication_date:** Date the source was published.
- **accessed_date:** Date the analyst accessed it.
- **source_type:** Government, vendor CTI, academic, media, persona claim, internal, or other.
- **reliability:** A-F source reliability rating.
- **credibility:** 1-6 information credibility rating.
- **summary:** Short source summary.
- **limitations:** Known limits, missing evidence, or caveats.
- **downstream_links:** Evidence, actor, TTP, hunt, detection, or report links.

## Example Values

```text
source_id: SRC-001
publisher: Example Vendor CTI
title: Example Campaign Report
url: https://example.com/report
publication_date: 2026-05-01
accessed_date: 2026-05-16
source_type: Vendor CTI
reliability: B
credibility: 2
summary: Reports phishing leading to script execution.
limitations: No raw telemetry shown.
downstream_links: EV-001, HUNT-003
```

## Quality Gates

- URL resolves or archive is recorded.
- Publication and access dates are present.
- Reliability and credibility are justified.
- Limitations are not empty.

## Common Failure Modes

- Using a source without access date.
- Rating the publisher but not the claim.
- No link to downstream evidence.

## Practical Workflow

1. Create the artifact only after the intelligence requirement or decision is clear.
2. Fill required fields before writing narrative prose.
3. Attach evidence labels, source references, confidence, and limitations.
4. Review with the intended consumer.
5. Update the artifact when evidence, telemetry, or decision context changes.

## Analyst Checklist

- Is the consumer defined?
- Are required fields complete?
- Are claims source-backed or marked Gap?
- Is confidence justified?
- Are limitations explicit?
- Is there a next action or owner?

## Cross-Links

- [Source Reliability](../01-cti-foundations/source-reliability.md)
- [Evidence Register Template](evidence-register-template.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)

## Required vs Optional Fields

Required: source ID, publisher, title, URL or access location, publication date when available, accessed date, source type, reliability, credibility, limitations, downstream use.

Optional: archive URL, archive hash, language, collection method, reviewer, next review date.

## Pass / Fail Example

Pass: A vendor report row includes title, URL, publication date, accessed date, A-F reliability, 1-6 credibility, a limitation, and linked evidence IDs.

Fail: A row says "vendor blog" with no URL, no date, no access metadata, and no explanation of why the source is trusted.

## Complete Filled Example

```text
source_id: SRC-ATTACK-001
publisher: MITRE ATT&CK
title: Enterprise ATT&CK documentation
url: https://attack.mitre.org/
publication_date: Ongoing
accessed_date: 2026-05-16
source_type: Framework documentation
reliability: A
credibility: 2
summary: Official behavior taxonomy used for technique mapping.
limitations: Not attribution evidence and not proof of detection coverage.
downstream_links: ATT&CK mapping rules, DRL model, detection backlog.
```
