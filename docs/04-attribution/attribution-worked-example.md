# Attribution Worked Example

## Purpose

Show a safe, defensive attribution workflow using public-style evidence categories.

## Practitioner-Level Explanation

This worked example demonstrates method, not a definitive claim about a real incident. The scenario uses common CTI evidence categories: lure, tooling, infrastructure, targeting, timing, and public reporting.

The key lesson is that attribution should be built as a chain of evidence and alternatives, not as a label attached at the start.

## CTI Relevance

Worked examples help analysts practice defensible reasoning before working on real incidents.

## Common Mistakes

- Starting with the actor label.
- Ignoring alternatives.
- Treating similarity as identity.
- Skipping confidence explanation.

## Practical Workflow

1. Define the event.
2. Record observed facts.
3. Add source-reported context.
4. Build candidate hypotheses.
5. Weigh evidence.
6. Write confidence-limited judgment.
7. Define collection needed to improve confidence.

## Example / Mini Case

Scenario: A phishing email delivers a script that downloads a payload from cloud storage. Public reporting says several actors use similar delivery. The analyst avoids attribution and instead assesses the activity as consistent with known tradecraft while recommending behavior-based hunting. Attribution remains Gap until infrastructure, malware configuration, or victimology is corroborated.

## Analyst Checklist

- Are observations separated from public reporting?
- Are candidates compared fairly?
- Is the final assessment bounded?
- Are collection tasks specific?

## Output Artifact

```text
Event:
Observed Evidence:
Reported Context:
Hypotheses:
Evidence Weighting:
Assessment:
Confidence:
Gaps:
Recommended Action:
```

## Cross-Links

- [Evidence Strength Ladder](evidence-strength-ladder.md)
- [False Flag Analysis](false-flag-analysis.md)
- [Actor Profile Template](../10-templates/actor-profile-template.md)

## References

- [Medium Source Index](../references/medium-source-index.md)
- [CTI Project Ecosystem](../ecosystem.md)
