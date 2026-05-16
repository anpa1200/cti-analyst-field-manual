# CTI Analyst Field Manual

**Tagline:** From threat intelligence research to defensible analytic judgment, hunting hypotheses, and detection-ready outputs.

## What This Project Is

CTI Analyst Field Manual is a professional Docusaurus handbook for cyber threat intelligence tradecraft. It transforms Andrey Pautov's public Medium CTI writing into a structured analyst operating manual covering collection requirements, evidence handling, source reliability, confidence language, attribution, infrastructure pivoting, actor profiling, threat hunting, CTI-to-detection, SOC handoff, and executive communication.

This is not a simple archive of Medium posts. The articles are treated as source material and reorganized into practitioner workflows, checklists, templates, and field-ready outputs.

## Who It Is For

- CTI analysts
- Threat intelligence researchers
- Detection engineers
- SOC leads
- Threat hunters
- Customer-facing cyber intelligence consultants
- Security research hiring managers reviewing CTI-to-detection tradecraft

## What Problem It Solves

Many CTI outputs fail because they stop at research notes. This field manual focuses on the chain from intelligence question to evidence-backed judgment, telemetry requirement, hunt hypothesis, detection candidate, SOC action, and executive decision.

## How This Differs From Related Projects

- **Customer-Driven AI CTI Project:** delivery methodology and customer engagement gates.
- **Israel Government Threat Actors CTI:** sector- and actor-specific knowledge base for Israeli public-sector exposure.
- **HexStrike AI Guide:** tooling-oriented guide.
- **CTI Analyst Field Manual:** general CTI tradecraft and analyst operating manual.

## How To Use The Field Manual

1. Start with [Intro](docs/intro.md) and [What Is CTI](docs/01-cti-foundations/what-is-cti.md).
2. Use [Role-Based Reading Paths](docs/role-based-reading-paths.md) if you are reviewing as a CTI analyst, detection engineer, SOC lead, executive, or hiring manager.
3. Define PIRs, SIRs, and EEIs before collecting sources.
4. Use source reliability and evidence labels before making assessments.
5. Apply analytic discipline before attribution or ATT&CK mapping.
6. Convert intelligence into hunting hypotheses, detection backlog items, SOC handoff notes, and executive summaries.
7. Use templates to keep outputs consistent and reviewable.
8. Use the [Authoritative Bibliography](docs/references/authoritative-bibliography.md) for doctrine sources; Medium is author/source inspiration, not the main authority for doctrine.

## Repository Structure

```text
docs/
  intro.md
  limitations.md
  01-cti-foundations/
  02-analytic-discipline/
  03-frameworks/
  04-attribution/
  05-infrastructure-pivoting/
  06-actor-research/
  07-sector-cti/
  08-cti-to-detection/
  09-ai-assisted-cti/
  10-templates/
  governance/
  review/
  validation/
  worked-examples/
  references/
data/
src/pages/index.js
sidebars.js
```

## Example Workflows

- **Collection planning:** PIR -> SIR -> EEI -> source register -> collection gap register.
- **Evidence discipline:** source claim -> evidence label -> confidence reason -> contradiction/gap log.
- **Attribution review:** behavior cluster -> alternative hypotheses -> evidence strength ladder -> confidence statement.
- **Infrastructure research:** seed IOC -> passive DNS/cert/ASN pivots -> cluster boundary -> limitations.
- **CTI to detection:** source claim -> ATT&CK mapping -> telemetry requirement -> hunt hypothesis -> detection backlog -> SOC handoff.
- **Detection maturity:** source-backed behavior -> telemetry mapping -> synthetic tests -> benign baseline -> historical replay -> SOC pilot -> DRL-9 production approval.

## Validation

- `npm run check:links` validates local Markdown links.
- `npm run build` validates the Docusaurus site.
- `npm run validate` runs both checks.
- CI runs link validation before build. See [CI Validation Evidence](docs/validation/ci-validation-evidence.md).
- Publication-grade gaps are tracked in [Publication-Grade Review Backlog](docs/review/publication-grade-review.md).

## Limitations

This project is a field manual and portfolio-grade tradecraft reference. It is not a production SOC detection pack, not an attribution oracle, and not a replacement for customer telemetry validation. See [Known Limitations](docs/limitations.md).

## Defensive-Use Statement

All content is intended for defensive, public, TLP:CLEAR CTI practice. The repository does not include malware source code, exploit instructions, leaked data, credentials, victim-sensitive information, or operational instructions for unauthorized access.

## Author Links

- Medium: [medium.com/@1200km](https://medium.com/@1200km)
- GitHub: [github.com/anpa1200](https://github.com/anpa1200)
- LinkedIn: [linkedin.com/in/andrey-pautov](https://www.linkedin.com/in/andrey-pautov/)

## GitHub Repository Description

Professional CTI analyst field manual: evidence discipline, attribution, infrastructure pivoting, actor research, CTI-to-detection, SOC handoff, and AI-assisted workflows.

## Suggested GitHub Topics

`cti`, `cyber-threat-intelligence`, `threat-intelligence`, `detection-engineering`, `threat-hunting`, `mitre-attack`, `soc`, `analytic-tradecraft`, `docusaurus`, `tlp-clear`

## License Recommendation

Recommended licensing: **CC BY 4.0** for documentation content and **MIT** for any future code or scripts. Until code is added, the repository treats the manual as documentation-first content.


## CTI Documentation Ecosystem

This repository is part of a connected three-book CTI documentation ecosystem:

- [CTI Analyst Field Manual](https://anpa1200.github.io/cti-analyst-field-manual/) - general CTI tradecraft and analyst operating manual.
- [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) - customer delivery methodology, quality gates, and CTI-to-detection project control.
- [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) - Israel-focused actor, tool, TTP, hunt, detection, and source knowledge base.

Use the ecosystem page in the documentation site to move between tradecraft, delivery methodology, and sector-specific intelligence.
