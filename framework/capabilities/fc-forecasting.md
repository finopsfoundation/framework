---

title: Forecasting
layout: default
permalink: /framework/capabilities/fc-forecasting
tags:
- forecasting
- cost allocation
- budgets
capability-domains:
- domains/tracking-and-benchmarking/
- domains/cloud-usage-and-cost/
- domains/cloud-rate-optimization/
capability-title: Forecasting
capability-desc: This FinOps Capability represents the practice of understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.
order: 1

---
# Forecasting

---
## Domains
[Performance Tracking & Benchmarking](domains/tracking-and-benchmarking/)
[Understanding Cloud Usage and Cost](domains/cloud-usage-and-cost/)
[Cloud Rate Optimization](domains/cloud-rate-optimization/)


## Definition
This FinOps Capability represents the practice of understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.

This capability also involves collaboration between stakeholder teams like Finance, Engineering, and Executives to build agreed upon forecast models and KPIs from which to establish budgets that align with business goals.

Accurate financial forecasting depends on an organization's other FinOps Capabilities also being robust in order to provide accurate data as input.  For example, a foundational element of this capability is the capability to fully categorize and allocate cloud costs.

When Finance, Engineering, and Executives build models to forecast cloud spend
reliably and accurately, cloud cost forecasting will inform investment and operational decisions to accelerate an organization's growth.



## Maturity Assessment
#### Crawl
* a variety of cloud cost data-sources and tools are used for forecasting by stakeholders across the organization
* forecasts are created manually and/or ad-hoc
* forecasts are trend-based
* forecasting variance analysis is done manually
* limited/aggregate forecasting visibility (only by business unit or cost center)
* Engineering/Operations teams are not involved with the creation of cloud cost forecasts or tracking of discrepancies from forecasted spend

#### Walk
* forecast costs tracked against actual usage and used to establish budgets
* forecast is inclusive of cloud rate optimization and commitment-based discounts
* forecast models are rolling and trend-based
* forecast updates are done on a regular cadence but not automated
* stakeholder teams (Executives, Engineering, Finance) have access to cloud cost forecasting data
* cloud cost forecast data is used to supplement back-end accounting system data
* regular review cadence by FinOps team of forecast thresholds and trends with stakeholder teams

#### Run
* global policy for applying allocation metadata to prevent unallocated cost
* forecast tracked and updated against discount-adjusted, amortized cloud usage
* forecast models are a combination of rolling, trend-based and driver-based
* forecast is inclusive of usage optimization opportunities
* forecasts aligned to the organization's allocation constructs being used across the organization for reporting cloud costs
* granular forecasting visibility (by business unit, cost center, team, product, service, etc ...) in the context of organizational KPIs
* stakeholder teams (Executives, Engineering, Finance) have real-time visibility into a single source of truth for how cloud usage is impacting forecast trends and budgets
* integration and automated data flow between cloud cost forecast data and back-end accounting systems used for broader organizational reporting




## Functional Activity
#### As someone in a Business/Product role, I will…
* develop product centric KPIs to measure the cost effectiveness in achieving my desired business outcomes
* establish forecasting threshold variances that are in alignment with the product-line that i own
* use these KPIs to inform forecast models in collaboration with my engineering counterparts

#### As someone in a Finance/FinOps role, I will…
* establish requirements for when forecasting is due and how frequently forecast updates are needed
* generate granular forecasts with reasonable accuracy
* help to establish forecasting KPIs that are in alignment with business goals
* explore optimization opportunities with teams that are forecast to overspend
* provide forecast data for cloud costs to enable stakeholders to create budgets
* provide granular reporting to teams on forecasted spend by different business-centric dimensions
* provide reporting on budgets vs actuals vs forecast to establish trends and compare against variance KPIs

#### As someone in an Engineering/Operations role, I will...
* monitor for cloud spend forecasts exceeding budgets
* work with FinOps stakeholders to identify actionable optimization opportunities to avoid forecasted overspend
* get approval for planned changes which will have a negative impact to our cloud spend projections / budgets

#### As someone in an Executive role, I will…
* be aware of cloud cost forecasts and monitor for impacts to the business
* establish forecasting threshold variances that are in alignment with business goals
* manage competing priorities for active project timelines when forecasted spend impacts budgets for high-priority initiatives
* ensure successful communication between the FinOps team and Business Units




## Measure(s) of Success
* cloud costs can be categorized and allocated, including shared costs
* forecast models leverage discount-adjusted, amortized cloud usage data
* forecast frequency that includes intermediate forecasts to update budgets based on business drivers
* forecast cost vs actual cost trends within established percentage threshold of variance
* stakeholder notifications for forecast variance threshold exceeded & risk of budget overspend
* Teams and Business Units are responsible for managing their budgets based on forecast data




## Inputs
* Adjusted and amortized cloud cost & usage data
* Cost allocation constructs aligned to the organization's reporting needs
* Commercial & commitment based discount data
* Cost anomaly trends
* Forecasting models and tooling
* Stakeholder real-time visibility into cost and usage reporting data




## Stories/How-To
_We're still collecting stories & how-to's - stay tuned - in the meantime get involved and help the community by sharing your real world examples and/or a “how to” for this capability. Information here may apply to:_
> * _apply to one or more cloud providers_
* _include specific types of cloud services used) (compute, storage, database, etc...)_
* _describe a combination of  tooling, platform or vendor_
* _describe the industry the organization belongs to_
* _describe the complexity of the organization (global, enterprise, etc…)_
* _include the FinOps personas involved and any other organizational roles_



## Get Involved
Get involved and share your experiences by joining the conversation about this Capability in [the Slack #forecasting channel](https://finopsfoundation.slack.com/archives/C01T6BW6TFZ).  Contribute to the community by sharing a forecasting related story or providing a playbook for how you have implemented cloud cost forecasting best practices in your organization.  Stories/How-tos can be in the context of a specific cloud provider, can describe processes including any KPIs,  how you're leveraging toolin, from the perspective of your industry, [the personas involved](https://www.finops.org/framework/personas/), or current maturity level.  Additionally, you can submit stories, how-tos and suggest improvements [using one of the options for contributing here](https://www.finops.org/introduction/how-to-contribute/).


---
