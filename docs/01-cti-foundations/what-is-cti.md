# What Is CTI?

## Purpose

Define cyber threat intelligence as an analytic discipline that supports decisions, not as a synonym for IOCs, threat feeds, or long reports.

## Practitioner-Level Explanation

Cyber threat intelligence is evidence-based analysis of adversary intent, capability, opportunity, behavior, infrastructure, targeting, and likely operational relevance to a defended environment. CTI becomes useful when it answers a decision-maker's question and can be traced to evidence, limitations, confidence, and a recommended action.

A CTI product can be strategic, operational, tactical, or technical. The category is less important than whether the product is fit for its consumer. A board-level risk note, a SOC hunt hypothesis, a detection backlog item, an actor profile, and an infrastructure pivot log are all CTI outputs if they connect evidence to decisions.

CTI is not merely collecting indicators. Indicators can support CTI, but without context, confidence, expiration, source rating, and actionability, they are raw data. CTI requires interpretation and explicit uncertainty.

## CTI Relevance

Good CTI helps teams prioritize limited defensive resources. It answers questions such as:

- Which threats matter to this organization now?
- Which assets, identities, suppliers, or telemetry gaps create exposure?
- Which actor behaviors are defensible to hunt for?
- Which claims are strong enough to drive a detection, response plan, or executive decision?
- Which claims remain gaps?

## Common Mistakes

- Treating IOC lists as finished intelligence.
- Writing actor profiles that do not explain relevance to a specific environment.
- Using ATT&CK coverage charts as proof of detection coverage.
- Making attribution claims from shared tooling alone.
- Reporting every source claim with equal weight.
- Hiding uncertainty to make the report sound stronger.

## Practical Workflow

1. Define the decision or question.
2. Convert the decision into [PIRs and SIRs](pir-sir-eei.md).
3. Collect sources and rate reliability.
4. Extract claims and label evidence.
5. Separate facts, assessments, inferences, assumptions, and gaps.
6. Evaluate relevance to the defended environment.
7. Produce an output: report, actor profile, hunt, detection backlog item, SOC note, or executive summary.
8. Review whether the output changes a decision or action.

## Example / Mini Case

A vendor reports that an actor abuses remote monitoring and management tools after phishing. The weak output is: "Actor X uses RMM tools; block RMM." The CTI output is stronger:

- **Reported:** Vendor observed RMM installation after phishing in a campaign.
- **Assessment:** This is relevant because the organization allows several RMM products for IT support.
- **Gap:** It is unknown whether current EDR logs capture RMM child processes and network connections consistently.
- **Action:** Create a hunt for newly installed RMM tools on non-IT endpoints, then decide whether to move to detection after baseline review.

## Analyst Checklist

- Is the intelligence question explicit?
- Is the customer or consumer defined?
- Are sources rated?
- Are claims separated from assessments?
- Are assumptions and gaps visible?
- Is confidence explained?
- Is there a recommended action or documented reason for no action?

## Output Artifact

```text
CTI Output Type:
Consumer:
Decision Supported:
PIR/SIR:
Key Judgments:
Evidence Labels:
Confidence:
Limitations:
Recommended Action:
Follow-Up Collection:
```

## Cross-Links

- [Intelligence Cycle](intelligence-cycle.md)
- [PIR, SIR, and EEI](pir-sir-eei.md)
- [Evidence Labels](evidence-labels.md)
- [Source Reliability](source-reliability.md)
- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)

## References

- Andrey Pautov Medium profile and CTI articles: [medium.com/@1200km](https://medium.com/@1200km)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
