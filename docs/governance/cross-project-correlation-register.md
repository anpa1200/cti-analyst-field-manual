# Cross-Project Correlation Register

## Purpose

Define which project owns each shared concept and how consistency is reviewed.

## Last Checked

2026-05-16

## Canonical Ownership

| Shared Concept | Canonical Owner | Consuming Projects | Consistency Rule |
|---|---|---|---|
| Evidence labels | Field Manual | Customer-Driven AI CTI, Israel Threat Actors CTI | Use Observed, Reported, Assessed, Inferred, Unknown, Gap. |
| Source reliability | Field Manual | Customer-Driven AI CTI, Israel Threat Actors CTI | Use A-F source reliability and 1-6 information credibility with caveats. |
| Confidence language | Field Manual | Customer-Driven AI CTI, Israel Threat Actors CTI | Confidence reflects evidence quality, access, corroboration, and analytic consistency; it is not probability. |
| ATT&CK mapping rules | Field Manual | Customer-Driven AI CTI, Israel Threat Actors CTI | Map behavior only when evidence supports a technique; otherwise mark Gap / Not mapped. |
| DRL model | Field Manual | Customer-Driven AI CTI, Israel Threat Actors CTI | Only DRL-9 is production coverage. Lower levels are research, hunt, pilot, or validation states. |
| SOC handoff | Field Manual | Customer-Driven AI CTI | Include first checks, required logs, false positives, escalation, response authority, feedback loop. |
| AI-assisted CTI controls | Field Manual | Customer-Driven AI CTI | AI output cannot independently create attribution, confidence, or production-readiness decisions. |
| Customer delivery gates | Customer-Driven AI CTI | Field Manual, Israel Threat Actors CTI | Use gated execution for scoped customer work. |
| Actor/tool/TTP/detection knowledge | Israel Threat Actors CTI | Field Manual, Customer-Driven AI CTI | Actor-specific claims require source, evidence label, freshness date, and caveat. |
| Production-readiness boundary | Field Manual | All | Do not market research or synthetic testing as production SOC coverage. |

## Review Workflow

1. When a shared concept changes, update the canonical owner first.
2. Update consuming projects only after the owner page is stable.
3. Add or update crosslinks from consuming pages to the owner page.
4. Run local build and internal link validation in each changed repository.
5. Record the last checked date in this page and the sister-project correlation page.
6. For detection readiness changes, verify the Israel CTI detection dashboard and Customer delivery gates do not overstate maturity.

## Machine-Readable Register

The YAML source for this table is stored at:

```text
data/correlation-register.yml
```

## Cross-Links

- [Fact Correlation](../fact-correlation.md)
- [Detection Readiness Levels](../08-cti-to-detection/detection-readiness-levels.md)
- [AI CTI Control Matrix](../09-ai-assisted-cti/ai-cti-control-matrix.md)
- [Customer-Driven AI CTI Project](https://1200km.com/customer-driven-ai-cti-project/)
- [Israel Government Threat Actors CTI](https://1200km.com/israel-government-threat-actors-cti/)
