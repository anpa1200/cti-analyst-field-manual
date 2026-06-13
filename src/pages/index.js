import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const modules = [
  {
    num: 'Module 01',
    title: 'CTI Foundations',
    desc: 'PIRs, SIRs, EEIs, evidence labels, source reliability (A–F / 1–6), confidence language, and finished intelligence discipline. The analytic foundation everything else depends on.',
    href: '/docs/cti-foundations/what-is-cti',
  },
  {
    num: 'Module 02',
    title: 'Analytic Discipline',
    desc: 'Explicit assumptions, known gaps, alternative hypotheses, contradiction handling, and Sherman Kent–style probabilistic rigor. How to reason in the presence of incomplete information.',
    href: '/docs/analytic-discipline/sherman-kent-for-cti',
  },
  {
    num: 'Module 03',
    title: 'Frameworks',
    desc: 'ATT&CK, Kill Chain, Diamond Model, and Pyramid of Pain as working analytic tools. How to apply each to real intelligence problems — not as compliance checkboxes.',
    href: '/docs/frameworks/mitre-attack-as-working-tool',
  },
  {
    num: 'Module 04',
    title: 'Attribution',
    desc: 'Weighting tooling, infrastructure, victimology, timing, language artifacts, and competing hypotheses. When you can assert attribution and when you cannot.',
    href: '/docs/attribution/attribution-methodology',
  },
  {
    num: 'Module 05',
    title: 'Infrastructure Pivoting',
    desc: 'From single IOC to defensible cluster: passive DNS, certificate analysis, ASN pivoting, domain pattern recognition, and bounded-cluster reasoning with explicit limitations.',
    href: '/docs/infrastructure-pivoting/single-ioc-to-network',
  },
  {
    num: 'Module 06',
    title: 'CTI to Detection',
    desc: 'Convert intelligence into telemetry requirements, hunting hypotheses, detection logic, detection readiness levels (DRL), SOC handoff notes, and validated coverage scores.',
    href: '/docs/cti-to-detection/intelligence-to-detection',
  },
  {
    num: 'Module 07',
    title: 'AI-Assisted Workflows',
    desc: 'Controlled AI integration for CTI tasks: prompt design, hallucination control, data classification, prohibited uses, review workflows, and task-control matrices.',
    href: '/docs/ai-assisted-cti/safe-llm-research-workflow',
  },
  {
    num: 'Module 08',
    title: 'Actor Research',
    desc: 'Structured actor profiling, profile update workflows, alias tables, and worked examples anchored in the MuddyWater/Seedworm case study.',
    href: '/docs/actor-research/muddywater-seedworm',
  },
  {
    num: 'Module 09',
    title: 'Telemetry Reference',
    desc: 'Windows Event Log, Sysmon, EDR process events, DNS, proxy/web gateway, cloud audit logs, identity provider signals, and RMM abuse telemetry.',
    href: '/docs/cti-to-detection/telemetry-requirements',
  },
  {
    num: 'Module 10',
    title: 'SOC Integration',
    desc: 'SOC handoff notes, triage and response playbooks, and the full analyst workflow from collection requirements through finished intelligence to detection backlog.',
    href: '/docs/cti-to-detection/soc-handoff',
  },
];

const infographics = [
  {
    src: '/cti-analyst-field-manual/img/infographic-what-this-manual-is.png',
    label: 'What This Manual Is',
  },
  {
    src: '/cti-analyst-field-manual/img/infographic-intelligence-cycle.png',
    label: 'Intelligence Cycle',
  },
  {
    src: '/cti-analyst-field-manual/img/infographic-evidence-labels.png',
    label: 'Evidence Labels',
  },
  {
    src: '/cti-analyst-field-manual/img/infographic-intel-to-detection-workflow.png',
    label: 'CTI → Detection Workflow',
  },
];

const outputs = [
  'Source Register',
  'Evidence Register',
  'Actor Profile',
  'Infrastructure Pivot Log',
  'Collection Gap Register',
  'Hunting Hypothesis',
  'Detection Backlog Item',
  'SOC Handoff Note',
  'Finished Intelligence Report',
  'DRL Coverage Score',
];

const ecosystem = [
  {
    tag: 'Lab · Training',
    name: 'CTI as a Code',
    desc: 'Apply this manual\'s tradecraft in structured lab assignments with real evidence files, Sigma rules, and git audit trails.',
    href: 'https://1200km.com/CTI_as_a_Code/',
  },
  {
    tag: 'Full Pipeline',
    name: 'Operation Desert Hydra',
    desc: 'End-to-end CTI-to-detection case study on MuddyWater: source gathering → OpenCTI → 11 detection records → Kibana validation.',
    href: 'https://1200km.com/operation-desert-hydra/',
  },
  {
    tag: 'Delivery Methodology',
    name: 'Customer-Driven AI CTI',
    desc: 'Structured methodology for delivering CTI engagements: phases, quality gates, human validation, and delivery artifacts.',
    href: 'https://1200km.com/customer-driven-ai-cti-project/',
  },
  {
    tag: 'Actor Knowledge Base',
    name: 'Israel Threat Actors CTI',
    desc: '22 structured actor profiles: Iranian, Palestinian, and Israeli-nexus groups with TTPs, detection rules, and hunt queries.',
    href: 'https://1200km.com/israel-government-threat-actors-cti/',
  },
  {
    tag: 'CTI Platform',
    name: 'The Intelligent Shield',
    desc: 'OpenCTI deployment with STIX 2.1, AI enrichment connector, feeds, inference rules, and real investigation workflows.',
    href: 'https://1200km.com/opencti-intelligent-shield/',
  },
  {
    tag: 'AI Era Threats',
    name: 'AI vs Defense',
    desc: 'How AI-era offence changes the Pyramid of Pain, skill-floor collapse, and what CTI must adapt to detect.',
    href: 'https://1200km.com/ai-vs-defense/',
  },
];

export default function Home() {
  return (
    <Layout
      title="CTI Analyst Field Manual"
      description="Professional CTI tradecraft manual: from collection requirements to evidence discipline, attribution, infrastructure pivoting, and detection-ready outputs. 80+ pages across 10 modules."
    >
      {/* ── Hero ── */}
      <header className="fm-hero">
        <div className="container">
          <div className="fm-hero-eyebrow">Practitioner Field Manual · 10 Modules · 80+ Pages</div>
          <h1>CTI Analyst Field Manual</h1>
          <p className="fm-hero-subtitle">
            From collection requirements to defensible analytic judgment, hunting hypotheses,
            and detection-ready outputs. Evidence discipline, attribution methodology, infrastructure
            pivoting, and CTI-to-detection chain — structured for working analysts.
          </p>
          <div className="fm-readiness-badge">
            ✦ Readiness Score 8.8 / 10
          </div>
          <div className="fm-hero-actions">
            <Link className="btn-primary-fm" to="/docs/intro">
              Open the Manual
            </Link>
            <Link className="btn-outline-fm" to="/docs/cti-foundations/what-is-cti">
              CTI Foundations →
            </Link>
            <a
              className="btn-outline-fm"
              href="https://github.com/anpa1200/cti-analyst-field-manual"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/cti-analyst-field-manual/img/infographic-field-manual-cover.png"
            alt="CTI Analyst Field Manual — module overview"
            className="fm-cover-img"
          />
        </div>
      </header>

      {/* ── Stats ── */}
      <div className="fm-stats">
        <div className="fm-stat">
          <span className="fm-stat-number">80+</span>
          <span className="fm-stat-label">Pages</span>
        </div>
        <div className="fm-stat">
          <span className="fm-stat-number">10</span>
          <span className="fm-stat-label">Modules</span>
        </div>
        <div className="fm-stat">
          <span className="fm-stat-number">88</span>
          <span className="fm-stat-label">Infographics</span>
        </div>
        <div className="fm-stat">
          <span className="fm-stat-number">8.8</span>
          <span className="fm-stat-label">Readiness Score</span>
        </div>
        <div className="fm-stat">
          <span className="fm-stat-number">TLP:CLEAR</span>
          <span className="fm-stat-label">Classification</span>
        </div>
      </div>

      <main>

        {/* ── What This Is ── */}
        <section className="fm-section">
          <div className="container">
            <div className="fm-two-col">
              <div>
                <div className="fm-section-label">What This Is</div>
                <h2>Practitioner tradecraft. Not a glossary.</h2>
                <p className="fm-section-lead">
                  This manual is built for analysts who need to move from intelligence requirements
                  to evidence-controlled outputs. It emphasizes defensible reasoning, explicit
                  uncertainty, reproducible workflows, and operational usefulness.
                </p>
                <ul className="fm-check-list">
                  <li>Define PIRs and SIRs before collecting anything</li>
                  <li>Rate every source on the A–F / 1–6 Admiralty scale</li>
                  <li>Extract claims and label evidence (Observed / Reported / Assessed)</li>
                  <li>Document assumptions, gaps, and alternative hypotheses</li>
                  <li>Map behavior to ATT&CK only when evidence supports it</li>
                  <li>Convert intelligence findings into telemetry requirements and detection candidates</li>
                  <li>Hand off to SOC with readiness level, replay guidance, and false-positive classes</li>
                </ul>
              </div>
              <div>
                <div className="fm-section-label">What You Produce</div>
                <h2>Outputs, not just analysis.</h2>
                <p className="fm-section-lead">
                  Every module maps to concrete deliverables. The manual is organized around
                  what analysts produce — not concepts they should know.
                </p>
                <div className="fm-output-grid">
                  {outputs.map((o) => (
                    <span className="fm-output-tag" key={o}>{o}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Modules ── */}
        <section className="fm-section-alt">
          <div className="container">
            <div className="fm-section-label">Structure</div>
            <h2>10 Modules</h2>
            <p className="fm-section-lead">
              Each module covers one area of CTI tradecraft in depth — from foundations through
              technical analysis to detection engineering and SOC integration.
              Use the <Link to="/docs/role-based-reading-paths">role-based reading paths</Link> to
              navigate by analyst function.
            </p>
            <div className="fm-module-grid">
              {modules.map((m) => (
                <Link to={m.href} className="fm-module-card" key={m.num}>
                  <span className="fm-module-number">{m.num}</span>
                  <p className="fm-module-title">{m.title}</p>
                  <p className="fm-module-desc">{m.desc}</p>
                  <span className="fm-module-link">Open module →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Infographics ── */}
        <section className="fm-section">
          <div className="container">
            <div className="fm-section-label">Visual Reference</div>
            <h2>88 Workflow Infographics</h2>
            <p className="fm-section-lead">
              Every major concept has a visual workflow companion — from intelligence cycle to
              evidence labels, from ATT&CK mapping to CTI-to-detection pipeline. Built for
              use as desk references and in team training.
            </p>
            <div className="fm-infographic-grid">
              {infographics.map((inf) => (
                <div className="fm-infographic-card" key={inf.label}>
                  <img src={inf.src} alt={inf.label} loading="lazy" />
                  <div className="fm-infographic-label">{inf.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Operating Principles ── */}
        <section className="fm-section-alt">
          <div className="container">
            <div className="fm-section-label">Analytic Standard</div>
            <h2>Operating Principles</h2>
            <p className="fm-section-lead">
              The manual applies a consistent analytic standard across all modules.
              These principles govern when to assert a finding, how to hedge it, and how to
              make the reasoning chain auditable.
            </p>
            <img
              src="/cti-analyst-field-manual/img/infographic-operating-principles.png"
              alt="CTI Analyst Field Manual — Operating Principles"
              style={{maxWidth: '760px', width: '100%', borderRadius: '10px', border: '1px solid rgba(37,99,235,0.2)'}}
            />
          </div>
        </section>

        {/* ── CTI to Detection ── */}
        <section className="fm-section">
          <div className="container">
            <div className="fm-section-label">Core Workflow</div>
            <h2>CTI → Detection Chain</h2>
            <p className="fm-section-lead">
              Module 06 covers the full translation from intelligence finding to detection-ready
              output: telemetry requirements, hunting hypotheses, DRL scoring, SOC handoff, and
              replay artifacts. This is the chain that makes CTI operationally useful.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'}}>
              <img
                src="/cti-analyst-field-manual/img/infographic-intel-to-detection-workflow.png"
                alt="Intelligence to Detection Workflow"
                style={{width: '100%', borderRadius: '10px', border: '1px solid rgba(37,99,235,0.2)'}}
              />
              <img
                src="/cti-analyst-field-manual/img/infographic-drl-scale-reference.png"
                alt="Detection Readiness Level Scale Reference"
                style={{width: '100%', borderRadius: '10px', border: '1px solid rgba(37,99,235,0.2)'}}
              />
            </div>
          </div>
        </section>

        {/* ── Ecosystem ── */}
        <section className="fm-section-alt">
          <div className="container">
            <div className="fm-section-label">Ecosystem</div>
            <h2>Part of a Connected CTI Platform</h2>
            <p className="fm-section-lead">
              This manual is the tradecraft standard. The ecosystem projects apply that
              standard in labs, case studies, customer deliveries, and a live OpenCTI platform.
            </p>
            <div className="fm-eco-grid">
              {ecosystem.map((e) => (
                <a href={e.href} className="fm-eco-card" key={e.name} target="_blank" rel="noopener noreferrer">
                  <span className="fm-eco-tag">{e.tag}</span>
                  <span className="fm-eco-name">{e.name}</span>
                  <span className="fm-eco-desc">{e.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Boundaries + CTA ── */}
        <section className="fm-section">
          <div className="container" style={{maxWidth: '680px'}}>
            <div className="fm-section-label">Scope</div>
            <h2>Defensive. Public-source. TLP:CLEAR.</h2>
            <p style={{lineHeight: 1.75, fontSize: '0.97rem'}}>
              All material in this manual is public, defensive, and oriented toward blue-team
              practitioners. It excludes malware source code, exploit instructions, leaked data,
              credentials, victim-sensitive information, and operational guidance for unauthorized
              access. The manual does not provide definitive attribution — it provides a
              methodology for making analytic judgments with explicit confidence levels and
              documented limitations.
            </p>
            <div style={{marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <Link className="btn-primary-fm" to="/docs/intro">
                Start Reading →
              </Link>
              <Link className="btn-outline-fm" to="/docs/ecosystem">
                Ecosystem Overview
              </Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
