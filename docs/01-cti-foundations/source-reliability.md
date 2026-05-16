# Source Reliability

## Purpose

Provide a practical model for rating source reliability and information credibility without pretending the rating is absolute truth.

## Practitioner-Level Explanation

Source reliability describes the historic trustworthiness, access, and discipline of the source. Information credibility describes how believable a specific claim is after considering corroboration, detail, consistency, and proximity to evidence. A strong CTI product tracks both.

A useful model is similar to the Admiralty Code: source reliability A-F and information credibility 1-6. An A2 claim from a primary government advisory has a different weight than a C4 claim from an unsourced social media post. The notation is not mathematical. It is a review prompt that forces the analyst to explain why a claim deserves weight.

## CTI Relevance

Ratings prevent source flattening. They help analysts decide which claims can support executive judgments, actor profile updates, ATT&CK mappings, hunts, detections, or only collection gaps.

## Common Mistakes

- Rating a source once and never revisiting it.
- Confusing source reputation with claim correctness.
- Treating a vendor blog, government advisory, news article, and persona claim as equal.
- Using A-F/1-6 notation without a confidence reason.

## Practical Workflow

1. Identify the source type and publisher.
2. Record publication date, access date, and URL.
3. Rate source reliability based on track record and access.
4. Rate information credibility for each claim, not only the source.
5. Record corroboration, contradiction, and gaps.
6. Revisit ratings when new evidence appears.

## Example / Mini Case

A government advisory states that an actor exploited a specific appliance vulnerability. The source may be A because it is a primary government source. The claim may be 2 rather than 1 if the advisory does not provide detailed forensic evidence. A blog summarizing that advisory may be B or C and should cite the advisory rather than becoming a primary source.

## Analyst Checklist

- Is source reliability separate from information credibility?
- Is the rating claim-specific?
- Are publication and access dates recorded?
- Are contradictions visible?
- Would a reviewer understand why the rating was assigned?

## Output Artifact

```text
Source ID:
Publisher:
Title:
URL:
Publication Date:
Accessed Date:
Source Type:
Source Reliability: A-F
Information Credibility: 1-6
Rating Reason:
Corroboration:
Contradiction or Gap:
Downstream Use:
```

## Cross-Links

- [Evidence Labels](evidence-labels.md)
- [Confidence Language](confidence-language.md)
- [Source Register Template](../10-templates/source-register-template.md)
- [CTI Project Ecosystem](../ecosystem.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
