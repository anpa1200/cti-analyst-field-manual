# Authoritative Bibliography

## Purpose

Separate doctrine authority from author inspiration. Medium articles can explain how the author thinks, but doctrine-heavy CTI pages must anchor to primary standards, original papers, or strong practitioner references.

## Bibliography Rules

- Use primary sources when a framework has an official maintainer or original paper.
- Use vendor blogs for campaign-specific reporting, not for doctrine unless the vendor owns the framework or tool.
- Use Medium articles as author context, not as the only authority for analytic discipline.
- Record access date for unstable web references in the source register when the reference is used in a finished assessment.
- Archive or mirror only where licensing allows it. If not, store the citation and access metadata.

## CTI Frameworks and Intrusion Analysis

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| ATT&CK framework | MITRE | Behavior mapping, technique limits, detection coverage | https://attack.mitre.org/ |
| ATT&CK use guidance — threat-informed defense | MITRE | Mapping discipline; not attribution evidence | https://attack.mitre.org/resources/ |
| The Diamond Model of Intrusion Analysis | Caltagirone, Pendergast, Betz (2013) | Intrusion event modeling and pivot discipline | https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf |
| Diamond Model — GCA wiki mirror | Global Cyber Alliance | Secondary reference; 403 from automated checkers, accessible in browser | https://act.globalcyberalliance.org/index.php/The_Diamond_Model_of_Intrusion_Analysis |
| Cyber Kill Chain | Hutchins, Cloppert, Amin — Lockheed Martin (2011) | Intrusion lifecycle reasoning; not forced chronology | https://www.lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf |
| Pyramid of Pain | David Bianco (2013) | Indicator tiering and detection durability | https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html |

## Intelligence Analysis Tradecraft

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| Words of Estimative Probability | Sherman Kent, CIA Center for Study of Intelligence | Estimative language calibration and confidence discipline | https://www.cia.gov/resources/csi/static/Words-of-Estimative-Probability.pdf |
| Psychology of Intelligence Analysis | Richards J. Heuer Jr., CIA (1999) | Cognitive bias, alternative hypotheses, structured analytic technique | https://www.cia.gov/resources/csi/static/psychology-of-intelligence-analysis.pdf |
| Structured Analytic Techniques for Intelligence Analysis | Heuer and Pherson (2014) | SAT methods including ACH, key assumptions check, devil's advocacy | https://us.sagepub.com/en-us/nam/structured-analytic-techniques-for-intelligence-analysis/book258204 |
| NATO STANAG 2511 / Admiralty Code | NATO Allied Publication | A-F / 1-6 source evaluation model | Referenced via MISP admiralty-scale taxonomy |
| MISP admiralty-scale taxonomy | MISP project | Practical implementation of A-F/1-6 in structured CTI tools | https://www.misp-project.org/taxonomies.html |

## CTI Standards and Data Exchange

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| STIX 2.1 specification | OASIS CTI TC | Structured indicator and relationship representation | https://oasis-open.github.io/cti-documentation/ |
| TAXII 2.1 specification | OASIS CTI TC | Transport and collection exchange model | https://docs.oasis-open.org/cti/taxii/v2.1/os/taxii-v2.1-os.html |
| MISP documentation | MISP project | CTI platform, object modeling, sharing discipline | https://www.misp-project.org/documentation/ |
| MISP core format | MISP standard | Indicator and event structure | https://www.misp-standard.org/rfc/misp-standard-core.html |
| TLP 2.0 | FIRST | Sharing boundaries and public release handling | https://www.first.org/tlp/ |
| FIRST CVSS | FIRST | Vulnerability severity scoring referenced in threat prioritization | https://www.first.org/cvss/ |

## Detection Engineering and Threat Hunting

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| Sigma rule specification | Sigma project / Florian Roth et al. | Detection rule portability and DRL-4 to DRL-9 promotion | https://sigmahq.io/docs/ |
| ATT&CK data sources | MITRE | Telemetry requirements and detection coverage mapping | https://attack.mitre.org/datasources/ |
| Detection Engineering Maturity Matrix (DEMM) | Kyle Bailey | Organizational detection maturity; context for DRL model | https://kyle-bailey.medium.com/detection-engineering-maturity-matrix-f4f3181a5cc7 |
| Threat Hunting with Elastic | Elastic Security | Hunt hypothesis structure and lookback window discipline | https://www.elastic.co/guide/en/security/current/index.html |
| TaHiTI threat hunting methodology | FI-ISAC / Rabobank | Structured hunt lifecycle from intelligence requirement to report | https://www.betaalvereniging.nl/wp-content/uploads/FI-ISAC-use-case-TaHiTI-1.0.pdf |

## SOC Operations and Incident Response

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| NIST SP 800-61r2 — Computer Security Incident Handling Guide | NIST | Incident response lifecycle aligned with SOC handoff model | https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf |
| CISA Incident Response Playbooks | CISA | Government-grade IR playbook structure | https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf |
| NIST Cybersecurity Framework 2.0 | NIST | Govern, Identify, Protect, Detect, Respond, Recover — aligned with SOC/CTI workflow | https://www.nist.gov/cyberframework |

## AI in CTI and Governance

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| NIST AI Risk Management Framework (AI RMF 1.0) | NIST | AI governance structure for CTI tool use and AI output review | https://airc.nist.gov/Home |
| OWASP Top 10 for LLM Applications | OWASP | Prompt injection, hallucination, and data leakage controls | https://owasp.org/www-project-top-10-for-large-language-model-applications/ |
| EU AI Act (Regulation 2024/1689) | European Parliament and Council | High-risk AI classification relevant to AI-assisted CTI in regulated contexts | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689 |
| Anthropic model cards | Anthropic | Capability and limitation documentation for Claude models used in AI-CTI workflows | https://www.anthropic.com/model-card |

## Infrastructure Pivoting and OSINT

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| RiskIQ PassiveTotal documentation | Microsoft Defender Threat Intelligence | Passive DNS methodology and API reference | https://learn.microsoft.com/en-us/defender/threat-intelligence/ |
| Censys documentation | Censys | Internet-wide scanning, certificate pivoting, ASN enrichment | https://support.censys.io/hc/en-us |
| Shodan documentation | Shodan | Banner-based device and service pivoting | https://help.shodan.io/ |
| VirusTotal documentation | Google / VirusTotal | Hash, URL, domain, and IP pivoting for malware infrastructure | https://docs.virustotal.com/ |
| SANS FOR578 — Cyber Threat Intelligence | SANS Institute | Full CTI methodology including infrastructure pivoting and actor research | https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/ |

## Sector CTI — Telecom

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| ENISA Threat Landscape for Telecommunications | ENISA | Threat actor targeting, TTP coverage, and control recommendations for telecom | https://www.enisa.europa.eu/topics/cyber-threats/threats-and-trends |
| GSMA FS.11 — Network Equipment Security Assurance Scheme | GSMA | Telecom equipment security baseline; relevant to SS7/Diameter threat context | https://www.gsma.com/security/network-equipment-security-assurance-scheme/ |
| CISA — Known Exploited Vulnerabilities (KEV) | CISA | Authoritative patch prioritization; covers telecom and edge device CVEs | https://www.cisa.gov/known-exploited-vulnerabilities-catalog |
| 3GPP security specifications | 3GPP | 5G authentication and protocol security relevant to SS7/5G threat mapping | https://www.3gpp.org/specifications-technologies/topics/security |

## Sector CTI — Cloud and Identity

| Reference | Author / Maintainer | Use In Manual | URL |
|---|---|---|---|
| CSA Cloud Controls Matrix (CCM) | Cloud Security Alliance | Control mapping for cloud-native threat analysis | https://cloudsecurityalliance.org/research/cloud-controls-matrix/ |
| CISA Cloud Security Technical Reference Architecture | CISA | Federal cloud security model; relevant for cloud CTI context | https://www.cisa.gov/resources-tools/resources/cisa-cloud-security-technical-reference-architecture |
| Microsoft Entra ID security documentation | Microsoft | Identity-plane telemetry, Conditional Access, audit log fields | https://learn.microsoft.com/en-us/entra/identity/ |
| AWS Security documentation | AWS | Cloud audit log fields (CloudTrail), IAM abuse patterns | https://docs.aws.amazon.com/security/ |
| GCP Security Command Center documentation | Google Cloud | Cloud-native detection and audit log reference | https://cloud.google.com/security-command-center/docs |

## How To Use This Page

When a doctrine page cites a framework, it should link to the relevant authority in this bibliography and explain the practical CTI application. Do not turn reference links into proof of a campaign claim. Campaign claims still require source-specific evidence, freshness date, and evidence labels.

Access dates should be recorded in the source register when a reference is used in a finished assessment. For PDFs and unstable URLs, note the archive URL or access date explicitly.

## Cross-Links

- [Source Reliability](../01-cti-foundations/source-reliability.md)
- [Evidence Labels](../01-cti-foundations/evidence-labels.md)
- [MITRE ATT&CK as a Working Tool](../03-frameworks/mitre-attack-as-working-tool.md)
- [Diamond Model](../03-frameworks/diamond-model.md)
- [Cyber Kill Chain](../03-frameworks/cyber-kill-chain.md)
- [Fact Correlation](../fact-correlation.md)
- [Link-Check Report](../validation/link-check-report.md)
