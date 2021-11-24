---

layout: wide

title: Managing Anomalies
description: Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise. Anomalies in the context of FinOps are unpredicted variations (usually increases) in cloud spending that are larger than would be expected given historical spending patterns.
permalink: /framework/capabilities/manage-anomalies/
page-identifier: capability_anomalies
framework-capability-title: Managing Anomalies
framework-capability-desc: Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner...
order: 3

---

# Managing Anomalies

{% include domains-loop.md %}


## Definition
Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise.

Anomalies in the context of FinOps are unpredicted variations (usually increases) in cloud spending that are larger than would be expected given historical spending patterns.

Managing anomalies typically involves the use of tools or reports to identify unexpected spending, the distribution of anomaly alerts, and the investigation and resolution of anomalous usage and cost.

Anomaly detection allows the FinOps team to react quickly in order to maintain spend levels that an organization expects. To quickly find those needles in your cloud haystack, using automated, machine learning–based anomaly detection is key. These tools are generally offered by cloud providers and third party platforms.

An anomaly usually occurs when teams deploy resources with the expectation that they will maintain budget, and then find they are trending over budget. This may be due to the fact that the resources are higher priced than planned, or that launching some resources has created unexpected cost in another service. For example, launching a new set of virtual machines might also trigger an unexpected large increase in logging data.

Detected anomalies can be effectively dealt with only when cost allocation metadata or other operational metadata exists to determine who can best evaluate the anomaly for resolution.

Resolving an anomaly typically involves some level of investigation and then either a change to adjust the environment, or to adjust the expectation of the cost of the affected scope. Another resolution may be to simply acknowledge the anomaly. For example, a new testing infrastructure may be created to accommodate a testing period for a new application. If this environment has not existed before, it may be flagged as anomalous because it varies from historical spending patterns. So while automated tools will see this as anomalous, it is expected from the perspective of the humans launching the new environment, and the anomaly can be dismissed after ensuring it’s within the expected new cost of the new environment.

You must also be able to track anomalies that might not directly result in a change in cloud spend. If a team starts using a new cloud service offering, replacing the usual one, you can learn of this through anomaly reports that show your cost by cloud service offering. Anomalies in this report can be very significant for companies that require sign-off—for security or compliance reasons—before using new services. Having Anomaly Detection tools that provide this granularity of cost by service, by account/project, by cost allocation tag, etc. is critical.

Managing anomalies will also be an important touchpoint between the FinOps function and the Security function. Security anomaly detection tools may detect problems which do not dramatically affect cost, and vice versa.



## Maturity Assessment
#### Crawl
* Understanding that anomalous spending might occur
* Manually checking for anomalous spending
* Some form of automated detection or reporting or tooling (usually provided by the Cloud Service Provider in use
* Thresholds set at very high level with minimal/no context
* Unexpected spending is manually investigated and routed when necessary to a suspected owner for resolution

#### Walk
* Use of anomaly detection tooling in most or all departments and teams
* Context-relevant thresholds (percentage of spend change, single item spend amount ceilings, forecast breach alerts, etc.)
* Unexpected spending automatically routed to responsible teams

#### Run
* Mature Anomaly detection tooling embedded across the organizations
* Automated handling of anomalous spending alerts, with appropriate severity
* Connected to event management or ticketing systems.
* Granular context-related anomaly alert thresholds linked directly to service components
* Alert thresholds iteratively updated in line with service lifecycles
* Analysis results in full RCCA post-mortem / future prevention






## Functional Activity

#### As someone in a FinOps Practitioner role, I will…
* establish requirements for anomaly detection tool selection that is appropriate for cost monitoring and capable of defining, refining, detecting and alerting unexpected cloud spending events (cost anomalies).
* work with stakeholder teams to establish anomalous detection thresholds and reporting/notifications frequency
* document and communicate anomaly detection mechanism and thresholds to all stakeholders
* ensure that anomaly detection is tied appropriately to cost allocation metadata
* generate reports that surface all and/or alerted anomalous spending

#### As someone in an Engineering/Operations role, I will...
* anomaly detection tooling has access to raw spending data at appropriate real-time granularity and frequency
* ensure that my team is aware of the correct processes and actions to respond to and address a cloud cost anomaly
* provide feedback to FinOps on the correctness of established thresholds and detection coverage
* determine the cause and resolve issues with anomalies

#### As someone in a Finance role, I will…
* help to establish anomalous spend thresholds that are in alignment with business goals
* provide contingency capacity within forecasts for cloud costs to accommodate anomalous spending trends that align with established thresholds




## Measure(s) of Success
* The count of anomalies within a period of time; including consistent identifiation of a proper anomaly
* Time to detect the anomaly; this is the time it takes from the anomaly reporting to someone acknowledging it.  
* Duration of the anomaly; the length in time for resolution of the anomaly
* Time to investigate and address an identified anomaly; time of investigation of a true anomaly is real time wasted cost in many cases
* Real time allocation of anomalous spending above a threshold within a particular cost allocation code




## Inputs
* Cloud cost and usage data (API or File based)
* Anomaly detection tooling
* Cost allocation metadata established and aligned to the organization's reporting needs
* Anomalous spend notification to stakeholder teams
* Stakeholder real-time visibility into cost and usage reporting data



<!-- ####### Real World Resources ####### -->
## Real World Resources
_a collection of real world examples, stories and “how to” for this Capability; based on FinOps community member experiences; information here may:
>* _apply to one or more cloud providers_
* _include specific types of cloud services used) (compute, storage, database, etc...)_
* _describe a combination of  tooling, platform or vendor_
* _describe the industry the organization belongs to_
* _describe the complexity of the organization (global, enterprise, etc…)_
* _include the FinOps personas involved and any other organizational roles_



## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._



## Get Involved
Get involved and contribute to the community by sharing a story or providing a playbook for how you have managed anomalies and established best practices in your organization. Your real world story or how-to can be provided in the context of:
>* one or more cloud providers
* the types of cloud services used (compute, storage, database, etc...)
* describe a combination of  tooling, platform or vendor, and processes including KPIs
* the industry the organization belongs to
* the complexity of the organization (global enterprise, start-up, etc…)
* the [FinOps personas](https://www.finops.org/framework/personas/) involved / organizational roles

Join the conversation about this Capability in Slack. Examples of channels discussing allocation challenges and solutions include [the #tools-and-services channel](https://finopsfoundation.slack.com/archives/CK3UAH2P7) and [the #ask-a-question channel](https://finopsfoundation.slack.com/archives/C02EEAUTPGV).  You can submit stories, how-tos and suggest improvements [using one of the options for contributing listed here](https://www.finops.org/introduction/how-to-contribute/).


---
