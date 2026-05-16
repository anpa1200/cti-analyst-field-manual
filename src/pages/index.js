import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const modules = [
  ['CTI Foundations', 'PIRs, evidence labels, source reliability, confidence language, and finished intelligence discipline.', '/docs/cti-foundations/what-is-cti'],
  ['Analytic Discipline', 'Assumptions, gaps, alternative hypotheses, contradiction handling, and Sherman Kent-style rigor.', '/docs/analytic-discipline/sherman-kent-for-cti'],
  ['Frameworks', 'ATT&CK, Kill Chain, Diamond Model, and Pyramid of Pain as working tools, not decoration.', '/docs/frameworks/mitre-attack-as-working-tool'],
  ['Attribution', 'How to weigh tooling, infrastructure, victimology, timing, language, and competing hypotheses.', '/docs/attribution/attribution-methodology'],
  ['Infrastructure Pivoting', 'How to move from one IOC to a defensible cluster while preserving limitations and uncertainty.', '/docs/infrastructure-pivoting/single-ioc-to-network'],
  ['CTI to Detection', 'Convert intelligence into telemetry requirements, hunting hypotheses, detection logic, SOC handoff, and readiness levels.', '/docs/cti-to-detection/detection-readiness-levels']
];

export default function Home() {
  return (
    <Layout title="CTI Analyst Field Manual" description="Professional CTI tradecraft manual for analyst and detection engineering workflows.">
      <header className="hero hero--manual">
        <div className="container">
          <h1 className="hero__title">CTI Analyst Field Manual</h1>
          <p className="hero__subtitle">From threat intelligence research to defensible analytic judgment, hunting hypotheses, and detection-ready outputs.</p>
          <div>
            <Link className="button button--secondary button--lg" to="/docs/intro">Start the Manual</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="manual-section">
          <div className="container">
            <h2>Why This Exists</h2>
            <p>This project turns practitioner CTI writing into a structured field manual. It is designed for analysts who need to move from collection requirements to evidence handling, attribution, infrastructure pivots, actor profiles, hunt hypotheses, detection engineering, SOC handoff, and executive communication.</p>
            <p>It is not a blog archive and not a beginner glossary. The manual emphasizes defensible reasoning, explicit uncertainty, reproducible outputs, and operational usefulness.</p>
          </div>
        </section>
        <section className="manual-section">
          <div className="container">
            <h2>Main Modules</h2>
            <div className="manual-grid">
              {modules.map(([title, body, href]) => (
                <article className="manual-card" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <Link to={href}>Open module</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="manual-section">
          <div className="container">
            <h2>Analyst Workflow</h2>
            <p>Define PIRs and SIRs. Rate sources. Extract claims. Label evidence. Document assumptions and gaps. Build competing hypotheses. Map behavior only when supported. Convert findings into telemetry requirements, hunts, detection candidates, SOC handoff notes, and executive-ready judgments.</p>
            <p>
              Use the <Link to="/docs/role-based-reading-paths">role-based reading paths</Link>, the{' '}
              <Link to="/docs/references/authoritative-bibliography">authoritative bibliography</Link>, and the{' '}
              <Link to="/docs/review/publication-grade-review">publication-grade review backlog</Link> when reviewing the manual as a professional artifact.
            </p>
          </div>
        </section>
        <section className="manual-section">
          <div className="container">
            <h2>Example Outputs</h2>
            <p>Source register, evidence register, actor profile, infrastructure pivot log, collection gap register, hunting hypothesis, detection backlog item, SOC handoff note, and finished intelligence report.</p>
          </div>
        </section>
        <section className="manual-section">
          <div className="container">
            <h2>Related Projects</h2>
            <p>This manual complements Customer-Driven AI CTI Project, Israel Government Threat Actors CTI, and HexStrike AI Guide. It focuses on analyst tradecraft rather than one sector knowledge base, one delivery methodology, or one tooling guide.</p>
          </div>
        </section>
        <section className="manual-section">
          <div className="container">
            <h2>Defensive Use</h2>
            <p>All material is public, defensive, and TLP:CLEAR oriented. The project excludes malware source code, exploit instructions, leaked data, credentials, victim-sensitive information, and operational instructions for unauthorized access.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
