---

layout: capability
permalink: /framework/capabilities/manage-commitment-based-discounts/
search: true
search-keywords:

title: Managing Commitment Based Discounts
description: Spend-based commitment discounts and resource-based commitment discounts are the most popular rate optimizations that cloud service providers offer. This is partially because CSP native tooling and FinOps platforms enable you to plan, manage, and benefit from these types of discount constructs...
page-identifier: capability_commitment-discounts
framework-capability-title: Managing Commitment Based Discounts
framework-capability-desc: Spend-based commitment discounts and resource-based commitment discounts are the most popular rate optimizations that cloud service providers offer. This is partially because CSP native tooling and FinOps platforms enable you to plan, manage, and benefit from these types of discount constructs...
label:
order: 8

---

# Managing Commitment Based Discounts

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition

Cloud services have different approaches that leverage spend commitment to offer discounts on services. These vary from customized commercially negotiated discounts, to spend-based commitment discounts like AWS Savings Plans, resource-based commitment discounts like Google CUDs and others.

Spend-based commitment discounts and resource-based commitment discounts are the most popular rate optimizations that cloud service providers offer. This is partially because CSP native tooling and FinOps platforms enable you to plan, manage, and benefit from these types of discount constructs.

Each cloud service provider has a slightly different offering with its own specific rules on how it works and the discounts it provides. You must also consider the implementation models that organizations use, based on their needs, and how the overall process should work inside an organization.

Altogether the implementation of these strategies drives an organizations Effective Savings Rate (ESR). It is important to note that under utilization of a commitment based discount would also negatively impact ESR as would significant usage not covered by discounts.



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
## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

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


---
