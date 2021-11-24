---

layout: wide

title: Managing Commitment Based Discounts
description: coming soon...
permalink: /framework/capabilities/manage-commitment-based-discounts/
page-identifier: capability_commitment-discounts
framework-capability-title: Managing Commitment Based Discounts
framework-capability-desc: coming soon...
order: 8

---

# Managing Commitment Based Discounts

{% include contribute-capabiility.md %}

{% include domains-loop.md %}


## Definition
_definition for this Capability.  the objective here is to capture the "What" (**not** the "How") for this Capability._


## Maturity Assessment

#### Crawl
* Analysis and purchases are performed across many business units in an adhoc manner
* Purchases may be made in ways that do not provide the greatest overall discounts to the business
* Purchasing or management done reactively when spending is too high or someone gets upset about not hitting a forecast/budget.
* Tech teams autonomously making commitments without considering WACC/NPV or other finance centric considerations.
* Finance folks buying without proper understanding of planned infrastructure changes


#### Walk
* Centralized analysis and purchasing occurs in a semi-regular cadence with input from both Tech + Finance.
* Alerting when commitment utilization declines, stops being used, or needs attention due to deviation from established norms
* Regular evaluation of long term business technology plans
* Constant evaluation of new releases/updates from Cloud Providers
* Adhoc reporting on KPI’s


#### Run
* Frequent purchase cycles occur with automated allocation of discounts according to business requirements
* Metrics driven management of when to make changes and a bi-drectional connection between rightsizing/utilization/refactoring and the proper commitment type and term
* Regular reporting occurs on KPI’s




## Functional Activity
_written for each persona responsible for the functional activity and processes encapsulated by his Capability.  each one should be associated generally to one of the FinOps Phases (Inform, Optimize, Operate). for example:_
>As a [FinOps Persona], I will [functional activity] so that [desired outcome] is achieved.



## Measure(s) of Success
* Ability to measure the overall effective savings rate of [Cloud Rate Optimization](https://www.finops.org/framework/domains/cloud-rate-optimization/) efforts for both technology-based and monetary-based commitment discounts
* For resource-based commitment discounts, maintaining a utilization upper-waterline around 80% for steady-state usage
* For spend-based commitment discounts, purchasing commitments with at least 90% savings per dollar of commitment for an established threshold of peak variable usage
* Analysis and purchase decisions for commitments are made in the context of interruptable/batch/highly variable workloads
* Ability to identify unused commitment based discounts with daily resolution
* Ability to notify stakeholder teams about expiring commitments with sufficient time to plan a new purchase
* Purchasing of commitment based discounts are viewed as investments by stakeholder teams like Execs/Productment/Finance; the investment is the cost of the commitment over the entire period, and the return is the savings provided
* Hybrid purchasing strategy that Aligns commitment terms with infrastructure workload characteristics and lifecycle
* Purchasing commitments that deliver more than 10% return on investment
* Mitigate risk by purchasing commitments with a break-even within 9 months
* Analysis and management is done centrally using a holistic view of the organization's cloud estate and not at each individual cloud sub-account level
* Analysis for making commitment purchases is supplemented with planned infrastructure and/or workload capacity changes
* Committment purchases are spread over the year to allow for flexibility by always have some % of commitments expiring; this enables re-evaluation of commitment levels at regular intervals informed by forecasted future usage
* Analysis and purchase decisions for commitments are made in the context of any negotiated commercial discounts offered to enterprises by the cloud service provider in exchange for overall cloud spend



## Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_


<!-- ####### Real World Resources ####### -->

{% include story-loop.md %}


## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._




## Get Involved

_Get involved and contribute to the community by sharing your real world experiences related to this Capability in the form of a story or providing a playbook for how you have implemented best practices in your organization. Your real world experiences can be provided in the context of:_

>* _one or more cloud providers_
* _the types of cloud services used (compute, storage, database, etc...)_
* _describe a combination of  tooling, platform or vendor, and processes including KPIs_
* _the industry the organization belongs to_
* _the complexity of the organization (global enterprise, start-up, etc…)_
* _the [FinOps personas](https://www.finops.org/framework/personas/) involved / organizational roles_

_Join the conversation about this Capability in Slack <!-- [insert name and link to Slack channel here] -->. You can submit stories, how-tos and suggest improvements [using one of the options for contributing here](https://www.finops.org/introduction/how-to-contribute/)._

---
