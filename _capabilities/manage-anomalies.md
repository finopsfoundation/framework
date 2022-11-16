---

layout: capability
permalink: /framework/capabilities/manage-anomalies/
search: true
search-keywords: RACI accountable accountability exception exceptions alert alerts

title: Managing Anomalies
description: Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise. Anomalies in the context of FinOps are unpredicted variations (usually increases) in cloud spending that are larger than would be expected given historical spending patterns.
page-identifier: capability_anomalies
framework-capability-title: Managing Anomalies
framework-capability-desc: Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner...
label:
order: 3

---

# Managing Anomalies

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise.

Managing anomalies typically involves the use of tools or reports to identify unexpected spending, the distribution of anomaly alerts, and the investigation and resolution of anomalous usage and cost.

**In the context of Cloud FinOps,** anomalies are levels of spending that are different from the normal or expected spend.

Anomaly detection identifies data points, events, and/or observations that deviate from a dataset's normal behavior. Detection tools & procedures allows the FinOps team to react quickly in order to maintain spend levels that an organization expects. To quickly find those needles in your cloud haystack, using automated, machine learning–based anomaly detection is key. These tools are generally offered by cloud providers and third party platforms.

Detected anomalies can be effectively dealt with only when cost allocation metadata or other operational metadata exists to determine who can best evaluate the anomaly for resolution.

Having Anomaly Detection tools that provide this granularity of cost by service, by account/project, by cost allocation tag, etc. is critical for triage.

**Triage Anomalies** is the practice of driving incoming work by priority so that the highest impacting alerts are handled first.

**Resolving Anomalies** typically involves some level of investigation and then either a change to adjust the environment, or to adjust the expectation of the cost of the affected scope. Another resolution may be to simply acknowledge the anomaly. 

### Example A

Imagine a new testing infrastructure created to accommodate a testing period for a new application. If this environment has not existed before, it may be flagged as anomalous because it varies from historical spending patterns. So while automated tools will see this as anomalous, it is expected from the perspective of the humans launching the new environment, and the anomaly can be dismissed after ensuring it’s within the expected new cost of the new environment. 

The concept “inform to ignore” has been applied, which represents gathering information to justify taking no action.

**Note:** Anomalies may not directly result in a change in cloud spend.

### Example B

If a team starts using a new cloud service offering, replacing the usual one, you can learn of this through anomaly reports that show your cost by cloud service offering. **Reporting & Tracking Anomalies** is a function of anomaly management. You must also be able to track anomalies, record impact to spend, and resolution. Both push notifications or data visualization can be used as methods to report & track anomalies.

### Considerations alongside Budget Management Capability

Part of your anomaly triage process may include a postmortem step to understand if the anomaly detection and resolution has or will impact variance to overall budget. Having a strong communication/collaboration between Engineering and Finance if anomaly causes an unfavorable impact to budget is critical to making near-real time decisions. See the [Budget Management Capability](/framework/capabilities/budget-management/) for more details.

### Considerations alongside FinOps Intersections with Other Frameworks
Managing anomalies will also be an important touchpoint between the FinOps function and the Security function. Security anomaly detection tools may detect problems which do not dramatically affect cost, and vice versa.

For example, anomalies that detect a new service can be very significant for companies that require sign-off—for security or compliance reasons—before using new services. See the [FinOps Intersections with Other Frameworks Capability](/framework/capabilities/asset-management/) for more context and information.

## Maturity Assessment
#### Crawl
* Understanding that anomalous spending might occur
* Manually checking for anomalous spending
* Reacting to anomaly active post billing
* Using budget alerts vs an anomaly detection service
* Limited granular detection minimizing context insights
* Unexpected spending is manually investigated and routed when necessary to a suspected owner for resolution

#### Walk
* Some form of automated detection or reporting or tooling (usually provided by the Cloud Service Provider in use
* Use of anomaly detection tooling in most or all departments and teams
* Context-relevant thresholds (percentage of spend change, single item spend amount ceilings, forecast breach alerts, etc.)
* Cost allocation metadata provides context to segment anomalies
* Unexpected spending automatically routed to responsible teams
* Create initial KPIs - # of alerts & spend associated with alert

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
* help establish anomalous percentage thresholds that trigger financial review of budget to actual
* provide contingency capacity within forecasts for cloud costs to accommodate anomalous spending trends that align with established thresholds

## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

* The count of anomalies within a period of time; including consistent identification of a proper anomaly
* Spend associated with alert within a period of time; represents total anomaly detection
* Time to detect the anomaly; this is the time it takes from the anomaly reporting to someone acknowledging it.
* Duration of the anomaly; the length in time for resolution of the anomaly
* Time to investigate and address an identified anomaly; time of investigation of a true anomaly is real time wasted cost in many cases
* Educating teams on understanding how variable types of cloud spending can be by product, as to better define what is anomalous and who is accountable
* The count of actioned anomalies and spending amount avoided (to nearest billing period)
* The count of unactionale anomalies and categorized but justification to ignore (i.e. new service, performance testing, customer peak, false alert).


## Inputs
* Cloud cost and usage data (API or File based)
* Anomaly detection tooling
* Cost allocation metadata established and aligned to the organization's reporting needs
* Anomalous spend notification to stakeholder teams
* Stakeholder real-time visibility into cost and usage reporting data
* Documentation of triage process and expectation of personas



<!-- REAL WORLD RESOURCES, PROJECTS, PLAYBOOKS, GUIDES AND STORIES -->

{% include resources-loop.md %}

---
