# PIR, SIR, and EEI

## Purpose

Define Priority Intelligence Requirements, Specific Intelligence Requirements, and Essential Elements of Information in a CTI workflow.

## Practitioner-Level Explanation

PIRs, SIRs, and EEIs convert broad curiosity into answerable intelligence work.

A **PIR** is the high-level intelligence question tied to a decision. A **SIR** breaks that question into specific sub-questions. An **EEI** defines the concrete information needed to answer a SIR.

The distinction matters because analysts often mistake a topic for a requirement. "[MuddyWater](../06-actor-research/muddywater-seedworm.md)" is a topic. "Which [MuddyWater behaviors reported since 2024](https://anpa1200.github.io/israel-government-threat-actors-cti/actors/muddywater/) are observable with our endpoint and identity telemetry?" is closer to a PIR.

## CTI Relevance

Well-written requirements prevent unfocused collection and make it easier to decide when an output is complete enough. They also help analysts avoid collecting every available article when the actual decision only requires a bounded answer.

## Common Mistakes

- Writing PIRs that are too broad to answer.
- Writing SIRs that simply restate the PIR.
- Skipping EEIs and then arguing about evidence after collection.
- Mixing strategic, operational, and technical requirements in one question.
- Forgetting the decision owner.

## Practical Workflow

1. Identify the decision owner.
2. Write the decision that intelligence must support.
3. Draft one PIR in question form.
4. Break the PIR into three to seven SIRs.
5. For each SIR, define EEIs.
6. Define required output format and due date.
7. Define what would count as a gap.
8. Review whether the PIR can lead to action.

## Example / Mini Case

```text
Decision:
Should the SOC prioritize a 30-day hunt for remote management tool abuse?

PIR:
Which public CTI reporting since 2024 describes adversary abuse of RMM tools that is relevant to our endpoint estate?

SIR-1:
Which actors or clusters are reported to use RMM tools after phishing or edge compromise?

EEIs:
- Tool names
- Initial access method
- Observed process behavior
- Required telemetry
- Reported sectors or victimology
- Confidence and source reliability

SIR-2:
Can our telemetry observe the behavior?

EEIs:
- Endpoint process logs
- Software inventory
- Network connections
- Identity logs for remote access sessions
- Known administrative RMM baselines
```

## Analyst Checklist

- Does the PIR support a real decision?
- Is the PIR answerable with available or collectable evidence?
- Do SIRs decompose the PIR rather than repeat it?
- Are EEIs concrete enough to drive collection?
- Is the expected output defined?
- Are gaps acceptable and documented?

## Output Artifact

```text
PIR ID:
Decision Owner:
Decision Supported:
PIR Question:
SIRs:
EEIs:
Required Sources:
Required Telemetry:
Due Date:
Output Format:
Gap Criteria:
```

## Cross-Links

- [Intelligence Cycle](intelligence-cycle.md)
- [Source Register Template](../10-templates/source-register-template.md)
- [Collection Gap Register](../10-templates/collection-gap-register.md)
- [Hunting Hypothesis Template](../08-cti-to-detection/hunting-hypothesis-template.md)
- [Customer project PIR gate artifacts](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/standard/artifact-contracts/)
- [Customer delivery phases and quality gates](https://anpa1200.github.io/customer-driven-ai-cti-project/docs/methodology/foundations/)
- [Israel CTI Actor Workbench](https://anpa1200.github.io/israel-government-threat-actors-cti/navigation/actor-workbench/)

## References

- [MITRE ATT&CK Resources — Threat-Informed Defense](https://attack.mitre.org/resources/)
- [OASIS CTI Documentation — STIX and TAXII](https://oasis-open.github.io/cti-documentation/)
- [MISP Documentation](https://www.misp-project.org/documentation/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
