---

layout: wide

title: Budget Management
description: Budgeting for Cloud is a process of collecting estimated expenses for a specific period of time.  Decisions on how to operate as a business, what to invest in and other strategic decisions are made based on budgets.
permalink: /framework/capabilities/budget-management/
page-identifier: capability_budget-management
framework-capability-title: Budget Management
framework-capability-desc: Budgeting for Cloud is a process of collecting estimated expenses for a specific period of time.  Decisions on how to operate as a business, what to invest in and other strategic decisions are made based on budgets.
order: 6

---

# Budget Management

{% include contribute-capabiility.md %}

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Budgeting for Cloud (or other IT expenses) is a process of collecting estimated expenses for a specific period of time.  Decisions on how to operate as a business, what to invest in and other strategic decisions are made based on budgets.  If actual expenses do not match the budget, it can impact the operations and other decisions that were made based on those budgets.

The term ‘favorable to budget’ means that there are less expenses than as planned in the budget.

The term ‘unfavorable to budget’ means that there are more expenses than as planned in the budget.

It may sound like being favorable to budget is ideal, and while it is not necessarily a bad thing, it is far from ideal.  Had the budget more accurately reflected there being less expense, the business might have made different decisions to invest in more or grow in different areas.

Budget Management contains the acts of:
1. Accumulating the estimated expenses for a specific time period.
2. Tracking actuals and forecasting remaining spend and comparing to the budgeted amount to identify material variances to budget that are favorable or unfavorable.
3. Investigating the causes of variances to budget.



## Maturity Assessment
#### Crawl
* Budgets set at the enterprise/top-level and not broken down into smaller units.
* Engineering teams are aware of the budget. Finance tracks actuals to budget at least quarterly.
* Budget process is largely handled between finance and business/product leaders but not largely understood by all.


#### Walk
* Cloud spend budget is broken down into departments/product teams and accumulated to calculate the enterprise/top-level spend budget.
* Engineering and Finance teams meet monthly to discuss actual expenses to budget and reports are created monthly.
* Review process exist to monitor, alert and handle budget under/overruns.
* Variances to budget are investigated monthly.


#### Run
* Engineering teams proactively predict the cost impact of changes and raise awareness to budget leaders when material impacts are expected.
* There is strong communication/collaboration between Engineering and Finance and reports are updated and variances are investigated automatically.
* Budget under/overruns are predicted in advance allowing teams to respond appropriately.
* The process for budget setting/adjustments is easily understood and followed by all teams.



## Functional Activity
#### As someone in a Business/Product role, I will…
* Understand my business/product strategy and that it is reflected in the budget estimates that we prepare
* Work with Finance and Engineering teams on budget planning to gain their input
* Guide teams on importance to maintain cloud spend within budgets


#### As someone in a Finance/FinOps role, I will…
* Work with budget leaders in budget planning
* Help monitor cloud spend vs budget
* Provide reporting on budget vs actual vs forecast
* Alert teams who are projected to materially overspend or underspend
* Work with teams who are forecast to overspend on possible optimisations
* Communicate to appropriate leadership when material underspend to budget is expected so that they can make appropriate decisions


#### As someone in an Engineering/Operations role, I will...
* Get approval for planned changes which will have a negative impact to our cloud spend projections / budgets
* Monitor for cloud spend forecasts exceeding budgets (See: Forecasting)
* Assist budget leaders with planning on future cloud spend
* Allocate time to optimise cloud spend to maintain budget


#### As someone in an Executive role, I will…
* Guide teams on importance to maintain cloud spend within budgets
* Stay up to date with actuals to forecast so that I can make appropriate decisions




## Measure(s) of Success
* Overall Budget vs Actuals
  * Measuring accuracy of budget estimations
  * Favorable variance to budget (Potential benefit)
  * Unfavorable variance to budget  (Risk)
* Expense Burn Rate
  * Rate of expense incurred over specific period of time (daily, weekly, monthly)
  * Can be used to help forecast expense to budget
* Variance to budget are identifiable/understood
  * What caused the variance?
  * Why did it happen and will it happen again?




## Inputs
* Department/Product budget estimates
* Forecasted cloud spend
* Actuals from cloud bill
* Usage/Rate Optimisation recommendations



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

_Join the conversation about this Capability in the Slack channel [#budget-management](https://finopsfoundation.slack.com/archives/C02PVHB7WE6). You can submit stories, how-tos and suggest improvements [using one of the options for contributing here](https://www.finops.org/introduction/how-to-contribute/)._

---
