# CTI Project Ecosystem

## Purpose

This page connects the three CTI documentation projects into one practitioner ecosystem. Each project has a different role, but they are intended to be used together.

## The Ecosystem

| Project | Role | Use When You Need |
| --- | --- | --- |
| [CTI Analyst Field Manual](https://anpa1200.github.io/cti-analyst-field-manual/) | General CTI tradecraft and analyst operating manual | Evidence discipline, analytic judgment, attribution, infrastructure pivoting, actor research workflow, CTI-to-detection foundations, templates |
| [CTI as a Code](https://anpa1200.github.io/CTI_as_a_Code/) | Lab platform and structured training framework | Hands-on practice applying the tradecraft in this manual — 8 assignments using evidence labels, claims ledger, ATT&CK gap taxonomy, Sigma rules, and git-based audit trails |
| [Operation Desert Hydra](https://anpa1200.github.io/operation-desert-hydra/) | Complete CTI-to-detection pipeline on MuddyWater | Worked example of the full pipeline: source gathering → OpenCTI knowledge graph → 11 detection records → 14 PASS / 1 PARTIAL / 1 FAIL lab validation |
| [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) | Delivery methodology and customer engagement operating model | Project phases, quality gates, customer outcomes, AI-assisted workflow controls, acceptance criteria, replay and delivery packages |
| [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) | Sector and actor knowledge base | Israeli public-sector threat model, actors, tools, TTPs, detections, hunts, evidence registers, source tracking |
| [HexStrike AI](https://github.com/0x4m4/hexstrike-ai) | AI-powered offensive security automation platform | MCP agent-based tool orchestration, 150+ security tools, AI-driven penetration testing, adversarial validation of detection coverage |

## Recommended Navigation

1. Start here when you need the tradecraft standard: [CTI Analyst Field Manual](https://anpa1200.github.io/cti-analyst-field-manual/).
2. Move to the delivery model when work must become a managed customer project: [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/).
3. Use the Israel-focused knowledge base when the question involves Israeli government, municipal, telecom, critical-infrastructure, or supplier exposure: [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/).

## Cross-Project Workflows

### Actor Profile to Customer Delivery

Use [Actor Research](/cti-analyst-field-manual/docs/actor-research/muddywater-seedworm/) to structure the profile, then use [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) to turn it into a project plan, quality gates, and accepted deliverables. Use [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) when the actor requires Israel-sector context.

### CTI Finding to Detection Backlog

Use [Intelligence to Detection](/cti-analyst-field-manual/docs/cti-to-detection/intelligence-to-detection/) for the reasoning chain. Use [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/) for phase control and gate evidence. Use [Israel Government Threat Actors CTI](https://anpa1200.github.io/israel-government-threat-actors-cti/) for concrete actor, tool, TTP, hunt, and detection examples.

### Source Claim to Evidence Register

Use [Evidence Labels](/cti-analyst-field-manual/docs/cti-foundations/evidence-labels/) and [Source Reliability](/cti-analyst-field-manual/docs/cti-foundations/source-reliability/) as the analytic standard. Use the Customer project for delivery gates. Use the Israel project for a live example of source and evidence governance.

## Repository Links

- [CTI Analyst Field Manual repository](https://github.com/anpa1200/cti-analyst-field-manual)
- [CTI as a Code repository](https://github.com/anpa1200/CTI_as_a_Code)
- [Operation Desert Hydra repository](https://github.com/anpa1200/operation-desert-hydra)
- [Customer-Driven AI CTI Project repository](https://github.com/anpa1200/customer-driven-ai-cti-project)
- [Israel Government Threat Actors CTI repository](https://github.com/anpa1200/israel-government-threat-actors-cti)
- [HexStrike AI repository](https://github.com/0x4m4/hexstrike-ai)

## Boundary

The CTI documentation projects (Field Manual, Customer project, Israel CTI) are defensive and public-source oriented. They do not provide exploit instructions, malware source code, leaked data, credentials, or unauthorized-access guidance. HexStrike AI is an authorized offensive security and penetration testing platform; use it only in authorized engagements.
