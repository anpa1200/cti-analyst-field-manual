# MITRE ATT&CK as a Working Tool

## Purpose

Use ATT&CK to organize observed behavior and detection ideas without turning it into attribution evidence.

## Practitioner-Level Explanation

ATT&CK is a behavior taxonomy. It helps analysts describe what happened, compare procedures, identify telemetry requirements, and communicate with detection engineers. It does not prove who performed the activity.

A useful mapping includes technique ID, technique name, tactic, procedure, evidence, source, confidence, mapping quality, detection idea, and limitations. Actor-level mappings are weaker than procedure-level mappings tied to telemetry.

## CTI Relevance

ATT&CK turns CTI into operational language for hunts, detections, and coverage discussions. It also reveals where reporting is too vague to support engineering.

## Common Mistakes

- Mapping every sentence to a technique.
- Using ATT&CK overlap as attribution evidence.
- Ignoring sub-techniques and tactics.
- Claiming detection coverage because a technique appears in a profile.

## Practical Workflow

1. Extract a behavior, not an actor label.
2. Identify the tactic and technique.
3. Record the source and evidence label.
4. Write the specific procedure.
5. Define required telemetry.
6. Add detection or hunt idea.
7. Assign mapping quality and limitations.

## Example / Mini Case

Weak: "Actor uses PowerShell: T1059.001."

Better: "Reported: actor used PowerShell launched from a shortcut to download a payload. Mapping: T1059.001, medium confidence. Detection idea: shortcut execution spawning powershell.exe with network activity. Limitation: source did not provide command-line examples."

## Analyst Checklist

- Is the mapping behavior-based?
- Is the source and evidence label recorded?
- Does the mapping include a detection idea?
- Is mapping quality honest?
- Is attribution kept separate?

## Output Artifact

```text
Technique ID:
Technique Name:
Tactic:
Procedure:
Evidence Label:
Source:
Confidence:
Required Telemetry:
Detection Idea:
Limitations:
```

## Cross-Links

- [ATT&CK Mapping Mistakes](attck-mapping-mistakes.md)
- [Intelligence to Detection](../08-cti-to-detection/intelligence-to-detection.md)
- [Evidence Labels](../01-cti-foundations/evidence-labels.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
