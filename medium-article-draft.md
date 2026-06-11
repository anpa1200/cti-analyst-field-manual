# From Threat Reports to Finished Intelligence: Inside the CTI Analyst Field Manual

**A structured operating model for analysts who are tired of writing research notes that nobody acts on.**

---

Most CTI work fails at the last ten meters.

The analyst collects the report. Reads it. Extracts the interesting parts. Writes a summary. Publishes it. And then nothing happens. No hunt is initiated. No detection is added to the backlog. No executive changes a resource decision. The report disappears into a shared folder, and a week later the analyst starts the cycle again.

The problem is not the analyst. The problem is that what looks like intelligence work is actually research work. Collecting interesting material and summarizing it is not the same as answering a decision-maker's question.

I have spent the last several years writing about CTI tradecraft on Medium — covering evidence labels, confidence language, attribution methodology, detection engineering, and AI-assisted analysis. These articles had value individually. But they were not connected. An analyst could read a piece on estimative language on Monday and a piece on ATT&CK mapping on Thursday and have no framework for understanding how they relate.

That is why I built the **CTI Analyst Field Manual**.

---

## What the Manual Is

The [CTI Analyst Field Manual](https://1200km.com/cti-analyst-field-manual/) is a structured, public, TLP:CLEAR operating model for cyber threat intelligence work. It is not a glossary, a threat landscape report, an IOC dump, or a beginner tutorial.

It is a practitioner reference — the kind of document you keep open in a second tab while you are actually doing the work.

The manual covers the full workflow: from writing a Priority Intelligence Requirement (PIR) through source collection, evidence handling, analytic judgment, attribution, infrastructure pivoting, actor profiling, hunt hypothesis development, detection engineering, SOC handoff, and executive communication.

Every page follows the same structure: purpose, practitioner-level explanation, CTI relevance, common mistakes, practical workflow, example, analyst checklist, output artifact, cross-links, and authoritative references. This consistency is intentional. In a field where every team invents its own vocabulary, a consistent structure is a form of discipline.

---

## The Three Principles That Shaped It

### 1. Intelligence is only finished when it supports a decision

CTI is not a synonym for IOCs. It is not threat actor trivia. It is not an ATT&CK heatmap.

CTI is evidence-based analysis of adversary intent, capability, opportunity, behavior, and likely relevance to a defended environment — produced in response to a specific decision need.

The manual opens with this distinction because it changes everything downstream. If you start with a decision question, you can define what evidence you need, what you do not need, and when you have enough. If you start with sources, you collect forever and never finish.

The practical tool for this is the PIR/SIR/EEI hierarchy. A **Priority Intelligence Requirement** is the high-level question tied to a decision. A **Specific Intelligence Requirement** breaks it into answerable sub-questions. An **Essential Element of Information** defines the concrete evidence needed. Writing these three things before collection is the difference between focused work and noise.

### 2. Evidence labels make your claims reviewable

Every finished CTI product should be reviewable. A reviewer reading your actor profile should be able to ask: "Is this claim observed in telemetry, or are you repeating a vendor report?" A SOC analyst looking at your hunt hypothesis should be able to ask: "Is this behavior confirmed in our environment, or is it a hypothesis based on public reporting?"

Without explicit evidence labels, these questions cannot be answered. With them, every claim carries its own uncertainty.

The manual defines six labels:

- **Observed** — directly seen in telemetry, primary artifact, or controlled analysis
- **Reported** — stated by a source
- **Assessed** — analytic judgment by a source or analyst, with reasoning
- **Inferred** — derived from indirect evidence
- **Unknown** — not available from current evidence
- **Gap** — required information is missing and must be collected or documented

These labels are not bureaucratic decoration. They are the mechanism that separates a claim that should drive action from a claim that should drive collection.

A vendor report says an actor uses remote management tools. That is **Reported**. Your endpoint telemetry shows an RMM installation from a user download path. That is **Observed**. The link between the vendor's actor and your observation is an **Inferred** relationship, not a confirmed attribution. The difference matters when an incident commander asks whether to isolate the host.

### 3. Confidence is not probability — and it must be explained

This is the most common mistake in CTI writing. Analysts write "high confidence" to signal certainty, "medium confidence" to hedge, and "low confidence" to disclaim responsibility. None of this is useful to a decision-maker.

The manual is built on the Sherman Kent model of estimative language. Kent, who shaped CIA analytic doctrine in the 1950s, argued that analysts must use calibrated language so consumers understand not just what analysts believe, but how strongly they believe it and why.

**Confidence describes the strength and quality of the evidence base.** Probability describes likelihood. These are different things.

A judgment can be *likely* but *low confidence* — if you have a reasonable hypothesis but the evidence is thin. A judgment can be *unlikely* but *high confidence* — if strong evidence rules it out. Collapsing these two concepts into a single "confidence level" hides information instead of conveying it.

The manual requires every confidence statement to include a reason. "We assess with medium confidence that this cluster is state-aligned because the targeting pattern is consistent with national-interest objectives (Reported, CISA AA22-055A) but the only technical overlap is commodity tooling, which is insufficient to rule out criminal actors using similar infrastructure."

That is a confidence statement. "Medium confidence" alone is decoration.

---

## Detection Is Not Finished Until DRL-9

One of the most practically impactful parts of the manual is the Detection Readiness Level model — a 0 to 9 scale that defines what evidence is required before a detection can claim each level of maturity.

- **DRL-0**: Idea only
- **DRL-1**: Source-backed candidate (claim, evidence label, source rating)
- **DRL-2**: Observable defined
- **DRL-3**: Telemetry mapped to specific fields and platforms
- **DRL-4**: Hunt logic drafted — no test evidence yet
- **DRL-5**: Synthetic tests pass (positive and negative)
- **DRL-6**: Benign baseline reviewed
- **DRL-7**: Historical replay complete
- **DRL-8**: SOC pilot with triage playbook, rollback plan, and feedback
- **DRL-9**: Production — approved, owned, monitored, tuned

Only DRL-9 is production detection coverage. A Sigma rule mapped to ATT&CK is DRL-4. A hunt hypothesis from a vendor report is DRL-1. These are useful. They are not production.

This model exists because the industry has a habit of conflating "we have a rule" with "we are covered." ATT&CK heatmaps showing full technique coverage are almost always DRL-3 or DRL-4 with no test evidence. The DRL model makes that visible.

---

## A Three-Book Ecosystem

The CTI Analyst Field Manual does not stand alone. It is the first book in a three-project ecosystem:

**Book 1: [CTI Analyst Field Manual](https://1200km.com/cti-analyst-field-manual/)** — General tradecraft. The canonical home for evidence labels, source reliability, confidence language, ATT&CK mapping rules, the DRL model, AI governance controls, and template infrastructure.

**Book 2: [Customer-Driven AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/)** — Delivery methodology. Turns tradecraft into gated delivery: Phase 0 charter, PIR quality gates, crown jewel mapping, telemetry feasibility, detection engineering workflow, and executive handoff — all with AI-assisted workflows and strict human-review controls.

**Book 3: [Israel Government Threat Actors CTI](https://1200km.com/israel-government-threat-actors-cti/)** — Actor knowledge base. A sector-specific reference covering threat actors relevant to Israeli government, municipal, critical infrastructure, and defense-adjacent environments. Includes actor profiles, tool pages, TTP matrices, detection candidates, hunt hypotheses, and a detection status dashboard.

The three books share a common governance register. Evidence labels, source reliability definitions, ATT&CK mapping rules, and the DRL model are defined once in Book 1 and consumed by Books 2 and 3. When the definition changes, it changes in one place.

---

## Who It Is For

**CTI analysts** use the manual as a workflow reference — starting with PIRs, working through source collection, applying evidence labels, building actor profiles, and handing off to detection engineering.

**Detection engineers** use the DRL model, telemetry requirements, and Sigma/KQL/SPL examples to understand what it takes to convert a CTI claim into a validated, production-ready alert.

**SOC leads** use the SOC handoff templates and hunt hypothesis framework to understand what they should receive from CTI and what they need to provide in return.

**Managers and executives** use the confidence language section and executive summary templates to understand what CTI products should contain and how to read uncertainty statements without misinterpreting them.

**Hiring reviewers and educators** can use the publication-grade review backlog, authoritative bibliography, and worked examples to assess the quality of the analysis and methodology.

Each role has a dedicated reading path. The manual does not assume you will read it cover to cover. It is designed to be navigated by need.

---

## A Real Worked Example

The manual includes a full public-source MuddyWater case study — not a synthetic teaching exercise, but a real worked example based on the CISA/NSA/FBI/CNMF joint advisory AA22-055A and MITRE ATT&CK G0069.

The case study includes:

- PIR decomposition into SIRs and EEIs
- A seven-alias table, each alias sourced to its originating vendor
- A sponsor assessment: *Assessed MOIS-aligned, medium confidence*, with the alternative hypothesis explicitly documented
- ATT&CK technique mapping with quality levels (M1 through M3) and rejected alternatives
- A telemetry requirements table with a "Confirmed Available" column
- Two DRL-1 hunt hypotheses with observable, hypothesis, and data source
- An illustrative SOC handoff marked DRL-1, not production
- A gaps register

The point of the worked example is not MuddyWater. The point is the method. The same structure works for any actor, any sector, any environment.

---

## What It Is Not

The manual has a limitations page. This is not marketing humility. It is an accurate statement of what the manual does not do:

- It does not include production detection coverage. Every detection example is explicitly marked with its DRL.
- It does not provide actor attribution. Where attribution is stated, it is sourced to a primary government advisory.
- It does not include IOC lists. IOCs without context, confidence, expiration, and source rating are not CTI.
- It has not been externally peer-reviewed. The internal self-assessment is approximately 8.0/10. The score caveat is explicit: this is not an externally validated maturity rating.

A CTI product that does not acknowledge its limitations is a CTI product that overclaims.

---

## Where to Start

If you are a CTI analyst: [What Is CTI](https://1200km.com/cti-analyst-field-manual/docs/01-cti-foundations/what-is-cti) → [PIR, SIR, and EEI](https://1200km.com/cti-analyst-field-manual/docs/01-cti-foundations/pir-sir-eei) → [Evidence Labels](https://1200km.com/cti-analyst-field-manual/docs/01-cti-foundations/evidence-labels).

If you are a detection engineer: [ATT&CK as a Working Tool](https://1200km.com/cti-analyst-field-manual/docs/frameworks/mitre-attack-as-working-tool) → [Telemetry Requirements](https://1200km.com/cti-analyst-field-manual/docs/08-cti-to-detection/telemetry-requirements) → [Detection Readiness Levels](https://1200km.com/cti-analyst-field-manual/docs/08-cti-to-detection/detection-readiness-levels).

If you want to see the full ecosystem: [CTI Analyst Field Manual](https://1200km.com/cti-analyst-field-manual/) → [Customer-Driven AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/) → [Israel Government Threat Actors CTI](https://1200km.com/israel-government-threat-actors-cti/).

---

The manual is public, TLP:CLEAR, and built for practitioners. If you find a mistake, an overclaim, or a missing reference — that is exactly the kind of feedback that moves it from an internal estimate to a publication-grade resource.

The last ten meters matter. That is what this is for.

---

*CTI Analyst Field Manual: [1200km.com/cti-analyst-field-manual](https://1200km.com/cti-analyst-field-manual/)*
*Medium: [medium.com/@1200km](https://medium.com/@1200km)*
