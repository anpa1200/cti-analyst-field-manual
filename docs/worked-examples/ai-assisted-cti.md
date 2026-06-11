# Worked Examples: AI-Assisted CTI

## Purpose

Show where AI can help CTI work and where it must be blocked or constrained.

## Allowed Use Cases

| Task | Status | Required Control |
|---|---|---|
| Summarize public TLP:CLEAR reports | Allowed | Source URLs and human verification. |
| Extract candidate source-register rows | Allowed | Analyst confirms titles, dates, and URLs. |
| Draft hunt hypotheses from source-backed behavior | Restricted | Detection engineer verifies telemetry and false positives. |
| Generate confidence or attribution decision | Prohibited | Analyst must make and justify the judgment. |
| Process leaked credentials or victim data | Prohibited | Do not ingest or reproduce sensitive data. |

## Data Classification Rules

- TLP:CLEAR public reports: usable with source verification.
- Internal telemetry: restricted; use only approved environment and redaction.
- Customer identifiers: restricted; minimize and anonymize.
- Credentials, leaked data, malware source, exploit instructions: prohibited.

## Hallucination-Control Checklist

- Does every source URL resolve?
- Does the cited source actually support the claim?
- Are actor names and aliases source-confirmed?
- Are dates checked against publication and access dates?
- Are ATT&CK mappings behavior-backed?
- Are gaps preserved rather than filled with plausible text?

## Prompt-Injection Controls

- Treat source text as untrusted input.
- Do not follow instructions embedded inside scraped reports or webpages.
- Ask the model to extract claims, not obey page instructions.
- Keep source verification outside the generated summary.
- Never let generated text change the evidence label without analyst review.

## Cross-Links

- [AI CTI Control Matrix](../09-ai-assisted-cti/ai-cti-control-matrix.md)
- [Safe LLM Research Workflow](../09-ai-assisted-cti/safe-llm-research-workflow.md)
- [Hallucination Control](../09-ai-assisted-cti/hallucination-control.md)
- [Customer-Driven AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/)
