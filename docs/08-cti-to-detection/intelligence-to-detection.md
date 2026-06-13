---
description: "Converting CTI claims into telemetry requirements, detection hypotheses, KQL/Sigma rules, and SOC handoff packages — the complete CTI-to-detection workflow."
---

# Intelligence to Detection

## Purpose

Convert CTI claims into telemetry requirements, hunts, detections, SOC actions, and validation plans.

## Practitioner-Level Explanation

[CTI-to-detection](intelligence-to-detection.md) is a chain, not a single translation step; the Customer project turns that chain into [delivery gates](https://1200km.com/customer-driven-ai-cti-project/docs/methodology/foundations/). A source reports behavior. The analyst labels evidence, assesses relevance, identifies telemetry, writes a hunt hypothesis, validates false positives, and only then promotes detection logic.

The actor name is usually less important than the behavior and observable; use the Israel CTI [Actor Workbench](https://1200km.com/israel-government-threat-actors-cti/navigation/actor-workbench/) only after evidence is labeled.

## CTI Relevance

This workflow is the bridge between CTI and operational defense. It makes intelligence useful to detection engineering and SOC teams.

## Common Mistakes

- Jumping from actor report to production alert.
- Skipping telemetry requirements.
- Ignoring false positives and tuning.
- Claiming coverage without validation.

## Practical Workflow

1. Extract behavior from source reporting.
2. Label evidence and confidence.
3. Assess environment relevance.
4. Define required telemetry and fields.
5. Write a testable hunt hypothesis.
6. Baseline benign behavior.
7. Draft detection logic.
8. Validate positive and negative cases.
9. Create SOC handoff.
10. Assign detection readiness level.

![Intelligence to Detection — Practical Workflow](/img/infographic-intel-to-detection-workflow2.png)

![Intelligence to Detection: Practical Workflow (10-step)](/img/infographic-intel-to-detection-workflow.png)

## Example / Mini Case

Reported behavior: archive attachment leads to script execution and external download. Detection chain: email attachment metadata, endpoint archive extraction, script process creation, network connection, false-positive baseline for admin scripts, SOC triage instructions.

![Detection Idea Pipeline](/img/infographic-detection-idea-pipeline.png)

## Analyst Checklist

- Is there a source-backed behavior?
- Is telemetry available?
- Is the hypothesis testable?
- Are false positives named?
- Is readiness level honest?

## Output Artifact

```text
Source Claim:
Evidence Label:
Behavior:
Telemetry:
Fields:
Hunt Hypothesis:
Detection Logic:
False Positives:
Validation:
SOC Action:
Readiness Level:
```

## Cross-Links

- [Telemetry Requirements](telemetry-requirements.md)
- [Detection Backlog](detection-backlog.md)
- [SOC Handoff](soc-handoff.md)
- [Customer-Driven AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/docs/methodology/foundations/)
- [Operation Desert Hydra — Full CTI-to-Detection Pipeline (MuddyWater)](https://github.com/anpa1200/operation-desert-hydra)

## Live Example: Operation Desert Hydra

[github.com/anpa1200/operation-desert-hydra](https://github.com/anpa1200/operation-desert-hydra) — a complete, deployable implementation of the workflow on this page: 8 public sources → evidence labels → 10 procedure records → OpenCTI graph → 11 detections → Ansible lab validation → 12 Kibana proof screenshots → coverage matrix. Sigma rules, KQL, Elastic JSON, and SPL are all version-controlled in `detections/`.

```bash
git clone https://github.com/anpa1200/operation-desert-hydra.git
cd operation-desert-hydra
cp stack/.env.template stack/.env
bash start.sh   # OpenCTI :8080 · Kibana :5601 · all 11 simulations
bash stop.sh    # halt; --destroy-vm to remove disk
```

## References

- [MITRE ATT&CK Resources](https://attack.mitre.org/resources/)
- [Sigma Documentation](https://sigmahq.io/docs/)
- [Authoritative Bibliography](../references/authoritative-bibliography.md)
- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
