---

layout: wide

title: Forecasting | FinOps Framework Capability
description: Understand forecasting cloud costs - how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.
permalink: /framework/capabilities/forecasting
page-identifier: capability_forecasting
framework-capability-title: Forecasting
framework-capability-desc: This FinOps Capability represents the practice of understanding how future cloud infrastructure and application lifecycle changes may impact current budgets...
order: 5

---

# Forecasting

{% include domains-loop.md %}

## Definition
Forecasting is the practice of predicting future spending, usually based on a combination of historical spending and an evaluation of future plans, understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.

This capability also involves collaboration between stakeholder teams like Finance, Engineering, and Executives to build agreed upon forecast models and KPIs from which to establish budgets that align with business goals.

Accurate financial forecasting depends on an organization's other [FinOps Capabilities](https://www.finops.org/framework/capabilities/) also being robust in order to provide accurate data as input.  For example, a foundational element of this capability is the ability to fully categorize and allocate cloud costs.

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
* The majority of cloud costs can be categorized and allocated, including shared costs.  According to [the FinOps Community of Practitioners](https://data.finops.org/), comprehensive allocation translates to at least 80% of cloud spend is allocated for a FinOps practice operating at a Crawl maturity level; and 90% for a FinOps practice operating at a Run maturity level
* Forecast models leverage discount-adjusted, amortized cloud usage data
* Forecast cost vs actual cost trends within established percentage threshold of variance.  According to [the FinOps Community of Practitioners](https://data.finops.org/), acceptable levels of forecasting accuracy translates to a maximum 20% variance from actual spend for a FinOps practice operating at a Crawl maturity level; a 15% variance for a FinOps practice operating at a Walk maturity level; and 12% variance for a FinOps practice operating at a Run maturity level.
* Stakeholder notifications for forecast variance threshold exceeded & risk of budget overspend
* Forecast frequency that includes intermediate forecasts to update budgets based on business drivers
* Teams and Business Units are responsible for managing their budgets based on forecast data


## Inputs
* Adjusted and amortized cloud cost & usage data
* Cost allocation constructs aligned to the organization's reporting needs
* Commercial & commitment based discount data
* Cost anomaly trends
* Forecasting models and tooling
* Stakeholder real-time visibility into cost and usage reporting data


<!-- ####### Real World Resources ####### -->

{% include story-loop.md %}


## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._



## Get Involved

Get involved and contribute to the community by sharing a forecasting related story or providing a playbook for how you have implemented cloud cost forecasting best practices in your organization. Your real world story or how-to can be provided in the context of:
>* one or more cloud providers
* the types of cloud services used (compute, storage, database, etc...)
* describe a combination of  tooling, platform or vendor, and processes including KPIs
* the industry the organization belongs to
* the complexity of the organization (global enterprise, start-up, etc…)
* the [FinOps personas](https://www.finops.org/framework/personas/) involved / organizational roles

Join the conversation about this Capability in [the Slack #forecasting channel](https://finopsfoundation.slack.com/archives/C01T6BW6TFZ). You can submit stories, how-tos and suggest improvements [using one of the options for contributing listed here](https://www.finops.org/introduction/how-to-contribute/).


---
