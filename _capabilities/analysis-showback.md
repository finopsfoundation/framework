---

layout: wide

title: Data Analysis and Showback
description: Data analysis and showback is the ability to create a near real-time reporting mechanism which calls to attention total costs for the desired business entity, opportunities for cost avoidance, and KPIs
permalink: /framework/capabilities/analysis-showback/
page-identifier: capability_showback
framework-capability-title: Data Analysis and Showback
framework-capability-desc: Data analysis and showback is the ability to create a near real-time reporting mechanism which calls to attention total costs for the desired business entity, opportunities for cost avoidance, and KPIs...
order: 2

---

# Data Analysis and Showback

{% include domains-loop.md %}

## Definition
Data analysis and showback is the ability to leverage data, along with metadata on cloud resources and resource hierarchies, to create a near “real time” reporting mechanism for stakeholders which calls to attention: Total costs for the desired business entity, opportunities for cost avoidance, and KPIs for financial health (e.g. performance of rate reduction commitments, unit cost measures for key services, efficiency metrics aggregated by desired “team”,  organizational unit, etc...).

In the context of FinOps, this work will typically focus on the cloud cost and usage data. This Capability relies heavily upon adequate [data ingestion and data normalization capabilities](https://www.finops.org/framework/capabilities/data-normalization/). The results from the work for Data Analysis & Showback will typically be available for [Chargeback & IT Finance Integration](https://www.finops.org/framework/capabilities/chargeback/).

It is within the scope of this Capability to create the data repository of normalized, queryable data from which reporting, analysis, and visualization of cloud cost and usage will occur.  Many of the optimization capabilities and alignment with other organizational processes and systems will likewise rely upon the data sources created by this Capability.

In many cases, organizations will rely upon the native cloud-provider tools to satisfy this capability. In other cases, third party tools will provide much of this functionality.

As cost showback is a fundamental aspect of FinOps, all FinOps domains should be considered and accounted for. Hence, reaching the highest maturity level should be considered a work in progress across [the FinOps Domains](https://www.finops.org/framework/domains/).


## Maturity Assessment

#### Crawl
- Focus on reporting optimizations for services aligning to your highest spend. Often these will be compute right sizing and idle capacity.
- Users are tracking costs at the account level.
- No governance exists to manage wasteful spending.
- Few if any Product Teams are using unit economics to measure their cost effectiveness.
- Tagging is nascent or non-existent and tagging requirements are not fully defined.

#### Walk
- FinOps practitioners are aggressively marketing optimization reports and can point to examples of engineers taking action to optimize spend.
- Some of the more mature product teams have implemented unit economics and can use them to tell effective cost management stories.
- Tagging is fully defined and communicated to the user community.
- Rate optimization activities are tracked and benefits are exposed.

#### Run
- Optimization reporting extends beyond core services and the FinOps team is able to share optimal architecture patterns.
- There may be one or more options to see costs in a multi-account/multi-provider pane of glass.
- Unit costs for key services are developed and tracked over time for efficiency.
- Select Optimizations are governed as a compliance item (data expiration, elimination of waste, etc.).
- Unit economics has gained traction and most product teams are engaged in related activities.
- Users are tracking costs by tags
- Tagging is governed and compliance is at high levels opening the doors for more sophisticated costing views.
- Organization has reached a maturity point in rate optimization where coverage is high, while maintaining consistent savings; this may also go beyond standard compute and database rate reduction into lesser utilized services and potentially even custom rate negotiations have taken place.

## Functional Activity
#### As a *FinOps Practitioner*, I will...
* spend a significant amount of effort in collaboration with Engineering/Finance/Procurement/Product Management to build a cost reporting ecosystem which is aimed at helping consumers understand the important aspects of their spend, as well as, opportunities to optimize their spend.

#### As an *Engineering Manager*, I will...
* take an active role in consuming and fully understanding cost reporting so that I may: set achievable cost objectives for my teams, meet KPIs that are meaningful to my business partners, manage development cycles (producing business capabilities vs.implementing optimizations), and provide accurate forecasting.  

#### As a *Finance/Procurement Manager*, I will...
* use the reporting ecosystem to develop a cost allocation model which accurately reflects the total cost of business capabilities, ensure that cloud cost models are allocating dollars to the desired level of the organization, and ensure integration with existing Finance processes.

#### As a *Business/Product Manager*, I will...
* develop KPIs to measure the cost effectiveness in achieving my desired business outcomes. These KPIs will be used in frequent collaboration with my engineering counterparts.


## Measure(s) of Success
- Overall Tagging Compliance is 90% or above
- The cloud cost reporting ecosystem becomes a fundamental aspect of the IT department
- Most product teams are publishing information related to their unit economics
- FinOps team can define desired level of commitment coverage vs. utilization


## Inputs
- Detailed Billing or Cost and Usage Report
- Service Specific API pulls
- Business Intelligence application/s
- Consistent Marketing
- Organizational Structure


<!-- ####### Real World Resources ####### -->
## Real World Resources
_a collection of real world examples, stories and “how to” for this Capability; based on FinOps community member experiences; information here may:_
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
_Get involved and contribute to the community by sharing your real world experiences related to this Capability in the form of a story or providing a playbook for how you have implemented best practices in your organization. Your real world experiences can be provided in the context of:_

>* _one or more cloud providers_
* _the types of cloud services used (compute, storage, database, etc...)_
* _describe a combination of  tooling, platform or vendor, and processes including KPIs_
* _the industry the organization belongs to_
* _the complexity of the organization (global enterprise, start-up, etc…)_
* _the [FinOps personas](https://www.finops.org/framework/personas/) involved / organizational roles_

_Join the conversation about this Capability in Slack <!-- [insert name and link to Slack channel here] -->. You can submit stories, how-tos and suggest improvements [using one of the options for contributing here](https://www.finops.org/introduction/how-to-contribute/)._

---
