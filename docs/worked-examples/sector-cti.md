# Worked Examples: Sector CTI

## Purpose

Convert sector context into specific telemetry owners, false positives, and customer relevance.

## Telecom Asset Taxonomy

| Asset Class | Examples | CTI Relevance | Typical Owner |
|---|---|---|---|
| Corporate IT | Email, identity, endpoints | Initial access and lateral movement. | Enterprise IT / SOC |
| BSS/OSS | Billing, provisioning, service management | Fraud, persistence, operational disruption. | Telecom operations |
| Core network | EPC/5GC, HSS/UDM, IMS | High-impact service and subscriber risk. | Network engineering |
| Edge and access | RAN management, routers, firewalls | Remote access and supply-chain exposure. | Network operations |
| Customer support tooling | CRM, ticketing, remote support | Social engineering and account takeover. | Customer operations |

## Threat Scenario

```text
Scenario:
Reported telecom-focused actor targets VPN and edge appliances, then moves into operational support systems.

Customer relevance:
High if the organization operates exposed VPN gateways, third-party managed firewalls, or shared admin jump hosts between IT and telecom operations.

Evidence boundary:
Sector relevance does not prove compromise and does not prove actor attribution.
```

## Telemetry Owner Map

| Telemetry | Owner | Required Fields |
|---|---|---|
| VPN logs | Network security | username, source IP, device, auth result, MFA state |
| EDR | SOC | process, command line, parent process, network connection |
| Firewall | Network operations | source, destination, port, policy, action |
| BSS/OSS audit | Telecom operations | user, action, target object, timestamp |
| Identity logs | IAM team | sign-in, role change, MFA change, risky session |

## Sector-Specific False Positives

- Vendor maintenance windows.
- Network discovery by authorized engineering teams.
- Emergency remote support.
- Bulk provisioning changes during planned rollout.
- Legitimate roaming/interconnect testing.

## Cross-Links

- [Telecom 4G Threats](../07-sector-cti/telecom-4g-threats.md)
- [Telecom 5G Threats](../07-sector-cti/telecom-5g-threats.md)
- [Telemetry Requirements](../08-cti-to-detection/telemetry-requirements.md)
- [Customer-Driven AI CTI Project](https://anpa1200.github.io/customer-driven-ai-cti-project/)
