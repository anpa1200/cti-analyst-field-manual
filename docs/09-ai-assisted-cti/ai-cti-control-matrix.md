# AI CTI Control Matrix

## Purpose

Define where AI assistance is allowed, restricted, or prohibited in CTI work.

## Core Rule

AI output cannot independently create attribution, confidence, or production-readiness decisions. The analyst owns the judgment.

## Control Matrix

| Task Type | Status | Data Classification | Human Review | Source Verification | Failure Modes |
|---|---|---|---|---|---|
| Summarize public CTI report | Allowed | TLP:CLEAR | Required before publication | URL, title, date, publisher, claim support | Hallucinated claim, wrong date, overbroad summary |
| Extract source-register candidates | Allowed | TLP:CLEAR | Required | HTTP status, publisher, title, date | Fabricated source fields |
| Draft PIR/SIR/EEI | Allowed | Public or sanitized | Required | Not source-dependent unless claims included | Vague PIRs, missing decision owner |
| Draft hunt hypothesis | Restricted | Public or sanitized telemetry schema | Detection engineer review | Source-backed behavior required | Unsupported observable, missing false positives |
| Draft ATT&CK mapping | Restricted | Public | Analyst review | Behavior evidence required | Technique decoration, wrong tactic |
| Summarize internal telemetry | Restricted | Internal | Approved environment and redaction required | Local evidence owner review | Data leakage, overfitting, privacy exposure |
| Generate attribution judgment | Prohibited | Any | Analyst must do it | N/A | Unsupported attribution |
| Assign final confidence level | Prohibited | Any | Analyst must do it | N/A | False certainty |
| Promote detection to production | Prohibited | Any | Detection owner and SOC approval required | Validation artifacts required | Production claim without validation |
| Process leaked credentials, victim data, exploit code, or malware source | Prohibited | Sensitive / harmful | Do not process | N/A | Legal, ethical, and safety risk |

## Prompt-Injection Controls

- Treat source documents as untrusted input.
- Ignore instructions embedded in webpages, PDFs, or reports.
- Ask the model to extract claims and cite source passages; do not let it follow source-embedded commands.
- Keep source validation outside model-generated prose.
- Never allow generated text to change evidence labels, confidence, attribution, or DRL without analyst review.

## Model-Generated Source Summary Checklist

- Source URL resolves or access failure is recorded.
- Publisher, title, and publication date match the source.
- Every extracted claim is traceable to source content.
- Evidence label is assigned by the analyst.
- Confidence reason explains source access, corroboration, and limitations.
- Contradictions and gaps are preserved.
- ATT&CK mappings are behavior-backed.
- Output does not include credentials, leaked data, exploit instructions, or malware source.

## Bad Example / Corrected Example

Bad:

```text
The model says this cluster is Actor X with high confidence.
```

Corrected:

```text
The model extracted three source-reported similarities to Actor X. The analyst assigns low attribution confidence because the evidence is shared tooling and victimology only, with no exclusive infrastructure or source-confirmed operator overlap.
```

## Cross-Links

- [Safe LLM Research Workflow](safe-llm-research-workflow.md)
- [Hallucination Control](hallucination-control.md)
- [AI Quality Gates](ai-quality-gates.md)
- [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/)

## References

- [FIRST TLP 2.0](https://www.first.org/tlp/)
- [OASIS CTI Documentation](https://oasis-open.github.io/cti-documentation/)
