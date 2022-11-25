---

layout: capability
permalink: /framework/capabilities/forecasting
search: true
search-keywords: budget budgets budgeting estimate estimates overruns projections models expenses finance accounting chargeback showback performance tracking benchmarking alignment

title: Forecasting | FinOps Framework Capability
description: Understand forecasting cloud costs - how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.
page-identifier: capability_forecasting
framework-capability-title: Forecasting
framework-capability-desc: This FinOps Capability represents the practice of understanding how future cloud infrastructure and application lifecycle changes may impact current budgets...
label:
order: 5

---

# Forecasting

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Forecasting is the practice of predicting future spending, usually based on a combination of historical spending and an evaluation of future plans, understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions.

This capability also involves collaboration between stakeholder teams like Finance, Engineering, and Executives to build agreed upon forecast models and KPIs from which to establish budgets that align with business goals.

Unfortunately there is no one forecasting method that fits all situations.

Cloud spend is variable which is inherently difficult to predict. Specifically engineers can start workloads at any time typically without having to go through a procurement process.

Accurate financial forecasting depends on an organization's other [FinOps Capabilities](https://www.finops.org/framework/capabilities/) also being robust in order to provide accurate data as input.  For example, a foundational element of this capability is the ability to fully categorize and allocate cloud costs.

There is a potential gap between engineers, finance, and procurement where finance has financial reporting responsibilities, and procurement has accounting responsibilities, and both need assistance from engineers and leadership to meet these obligations. When Finance, Engineering, and Executives build models to forecast cloud spend reliably and accurately, cloud cost forecasting will inform investment and operational decisions to accelerate an organization's growth.

![Forecasting](https://www.finops.org/img/forecasting/WhyForecasts.png)

You should understand the basics of how cloud works, specifically you should know the key services around compute and storage for the cloud providers your organization is using and their billing and pricing models. You will also need to understand financial processes around forecasting, budgeting, procurement, and allocations.

Depending on the cloud providers your organization is using, you can gain some of this knowledge through training and certifications. Specifically for AWS we recommend the [AWS Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/) certification, for Google the [Google Cloud Platform Fundamentals](https://www.cloudskillsboost.google/course_templates/60) course, and for Azure, the [Azure Fundamentals](https://learn.microsoft.com/en-us/certifications/azure-fundamentals/) learning path.
## Forecasting Methodologies

| Methodology | Description |
| ----------- | ----------- |
| Trend-Based | Uses historic trends to forecast future spend. Ideally this takes seasonality into consideration. Seasonality can include annual peaks during holidays but also daily peaks when more people are using a service during specific hours of the day. Trend based forecasting will not be able to capture out-of-band events such as launching a new product or feature, launching in a new country, or the effect of TV commercials on consumer behavior. |
| Driver-Based | Uses Key Performance Indicators (KPIs) to forecast the effect on business results. KPIs can be things like active accounts, widgets sold, ad impressions and so forth. The business will forecast the KPIs factoring in organic growth, like more people on the Internet, and inorganic growth, like new launches and marketing efforts. Cloud workloads that scale based on a specific business KPI are forecasted by applying the KPI growth on actual spend. Driver based forecasting will not be able to forecast workloads that don’t exist in the cloud yet but are planned to be launched in the future. |
| Rolling Forecast | To predict next month, quarter, and year. It allows companies to adjust their plans based on any shifts in the business such as economic changes, COVID as an example. As the economy changed a rolling forecast would be adjusted to forecast that change and allow the company to alter their plans with the new data. |
| Static Forecast | Predict for the fiscal year only with no adjustments. |
| Special Projects | Are planned cloud workloads that currently do not yet exist in the cloud. Their cost needs to be estimated by engineers and layered into trend or driver based forecasting to get a complete picture of future cloud spend. Special projects can also be costs that will not materialize on the cloud bill like licensing fees, professional services, or small workloads running on other cloud providers where automation isn’t feasible. |

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


## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

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




<!-- REAL WORLD RESOURCES, PROJECTS, PLAYBOOKS, GUIDES AND STORIES -->

{% include resources-loop.md %}

---
