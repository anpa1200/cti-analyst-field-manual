# Source Reliability

## Purpose

Provide a practical model for rating source reliability and information credibility without pretending the rating is absolute truth.

## Practitioner-Level Explanation

Source reliability describes the historic trustworthiness, access, and discipline of the source. Information credibility describes how believable a specific claim is after considering corroboration, detail, consistency, and proximity to evidence. A strong CTI product tracks both.

The model in use is the Admiralty Code (NATO-style source evaluation), sometimes called the Admiralty System or the STANAG 2511 model. It is also codified in the MISP admiral taxonomy and widely used in law enforcement, military intelligence, and commercial CTI.

The notation is not mathematical. It is a **review prompt** that forces the analyst to explain why a claim deserves the weight assigned to it. Pair this with [evidence labels](evidence-labels.md) for each claim and [confidence language](confidence-language.md) in the finished product.

## Source Reliability: A through F

| Code | Label | Meaning |
|---|---|---|
| A | Reliable | No doubt about authenticity, trustworthiness, or competence. History of reliability. |
| B | Usually reliable | Minor doubts. Most information has been correct in past assessments. |
| C | Fairly reliable | Significant doubts. Has provided valid information in the past but also erroneous. |
| D | Not usually reliable | Significant doubts. More often proved wrong or inconsistent than right. |
| E | Unreliable | Lacking in authenticity, trustworthiness, and competence; history of invalid information. |
| F | Reliability cannot be judged | No basis for evaluating the source's reliability. New source or insufficient history. |

**Guidance:**
- Government advisories with attributed, publicly accountable authors typically qualify for A or B.
- Established commercial CTI vendors with consistent methodology typically qualify for B or C.
- Anonymous social media accounts, unverified personas, and first-use sources typically qualify for F until track record exists.
- Source reliability changes over time. Reassess when new evidence about the source appears.

![Source Reliability A–F — Admiralty Code Scale](/img/infographic-source-reliability-a-f.png)

## Information Credibility: 1 through 6

| Code | Label | Meaning |
|---|---|---|
| 1 | Confirmed | Confirmed by other independent sources; consistent with established facts and behavior. |
| 2 | Probably true | Not confirmed, but consistent with other reporting and past behavior of the actor or sector. |
| 3 | Possibly true | Not confirmed; not inconsistent with other reporting. Basis exists for the information. |
| 4 | Doubtful | Not confirmed; inconsistent with other reporting or with known patterns. |
| 5 | Improbable | Not confirmed; contradicts other reliable reporting; inconsistent with logic and known facts. |
| 6 | Cannot be judged | No basis for evaluating whether the information is true or false. |

**Guidance:**
- Corroboration from independent primary sources is required for a rating of 1. Shared sourcing from the same secondary summary does not count as independent corroboration.
- A claim rated 2 or 3 may still be operationally important. Low credibility rating does not mean ignore; it means collect more evidence before acting.
- A claim rated 4 or 5 should not drive defensive action without explicit risk acceptance.

![Information Credibility 1–6 — Admiralty Code Scale](/img/infographic-source-credibility-1-6.png)

## Combined Notation and Examples

| Notation | Source | Claim | Meaning |
|---|---|---|---|
| A1 | Government CISA advisory with documented forensics | Specific CVE exploited in named campaign | Reliable source, confirmed by independent telemetry |
| A2 | Government advisory | Actor uses phishing for initial access | Reliable source, consistent with prior reporting but not independently confirmed with telemetry |
| B3 | Established vendor CTI report | Specific tool variant observed in cluster | Usually reliable source, possibly true but single-vendor reporting |
| C4 | Media summary of vendor blog | Attribution to a named nation-state | Fairly reliable intermediary; claim is doubtful because secondary summary with no forensics |
| F6 | Anonymous Telegram persona | Claim of responsibility for an attack | New or unverified source; cannot judge claim truth |

![Source Reliability — Combined Notation and Examples](/img/infographic-source-reliability-combined.png)

## Common Mistakes

- Rating a source once and never revisiting it.
- Confusing source reputation with claim correctness. An A-rated source can report a 5-credibility claim.
- Treating a vendor blog, government advisory, news article, and persona claim as equal.
- Using A-F/1-6 notation without a written confidence reason.
- Treating a secondary summary as independent corroboration.

## Warning: Ratings Are Review Prompts, Not Mathematical Truth

An A-rated source can make a weak claim. A weak source can report something that later proves true. The Admiralty rating system is a structured way to force the analyst to explain the basis for the claim weight. It does not remove the analyst's judgment responsibility. Do not use ratings to automate trust decisions.

## Practical Workflow

1. Identify the source type and publisher.
2. Record publication date, access date, and URL.
3. Rate source reliability (A-F) based on track record, access, and accountability.
4. Rate information credibility (1-6) for each **claim**, not only for the source overall.
5. Record what corroborates, contradicts, or is missing.
6. Revisit ratings when new evidence about the source or the claim appears.

![Source Reliability — Practical Workflow](/img/infographic-source-reliability-workflow.png)

## Example / Mini Case

A government advisory states that an actor exploited a specific appliance vulnerability. The source rates A because it is a primary government source with documented accountability and consistent past accuracy. The specific claim rates 2 rather than 1 because the advisory describes the technique but does not provide raw telemetry or forensic artifact details for independent verification. A commercial vendor blog summarizing that advisory may rate C or B depending on track record, and the claim rates no higher than 3 in the vendor summary because the advisory is now the primary source, not the blog. The blog should cite the advisory; if it does not, rate the claim 4.

## Analyst Checklist

- Is source reliability rated separately from information credibility?
- Is the rating claim-specific, not only source-level?
- Are publication and access dates recorded?
- Are contradictions and corroboration visible?
- Would a reviewer understand why the rating was assigned without asking the analyst?
- Has the source been reassessed if new evidence about it appeared?

## Output Artifact

```text
Source ID:
Publisher:
Title:
URL:
Publication Date:
Accessed Date:
Source Type:
Source Reliability: [A-F] [Label]
Information Credibility: [1-6] [Label]
Rating Reason:
Corroboration:
Contradiction or Gap:
Downstream Use:
```

## Cross-Links

- [Evidence Labels](evidence-labels.md)
- [Confidence Language](confidence-language.md)
- [Source Register Template](../10-templates/source-register-template.md)
- [Israel CTI — Source Rating (quick reference)](https://anpa1200.github.io/israel-government-threat-actors-cti/source-rating/)
- [Israel CTI — Scoring Models (full A-F and 1-6 tables)](https://anpa1200.github.io/israel-government-threat-actors-cti/methodology/scoring-models/)
- [Customer project — Normative Language (MUST/SHOULD for ratings)](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/standard/normative-language/)

## References

- [MISP Taxonomies — admiralty-scale](https://www.misp-project.org/taxonomies.html)
- [MISP Documentation](https://www.misp-project.org/documentation/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
