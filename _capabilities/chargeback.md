---


layout: capability

title: Chargeback & IT Finance Integration
description: Chargeback and IT Finance Integration is about pushing spend accountability to the edges of the organization that are responsible for creating the expense.
permalink: /framework/capabilities/chargeback/
page-identifier: capability_chargeback
framework-capability-title: Chargeback & IT Finance Integration
framework-capability-desc: Chargeback and IT Finance Integration is about pushing spend accountability to the edges of the organization that are responsible for creating the expense.
order: 12

---

# Chargeback & IT Finance Integration


{% include contribute-capabiility.md %}

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Chargeback and IT Finance Integration is about pushing spend accountability to the edges of the organization that are responsible for creating the expense.

Once chargeback has been implemented and visibility given to teams, [mature FinOps practitioners](https://www.finops.org/framework/maturity-model/) then integrate that data programmatically into their relevant internal reporting systems and financial management tools.

Chargeback is the focus in this capability, but [Showback](https://www.finops.org/framework/capabilities/analysis-showback/) is a foundational part of any FinOps practice.  The difference is that Chargeback sends expenses to a product or department P&L and Showback shows the charges by product or department but keeps the expenses in a centralized budget.  Neither way should be considered more mature than the other, as which method used is entirely dependent on organizational accounting policy and preference.

A tagging and account strategy is vital as ways to identify costs.  By either assigning a tag to a resource, or by designating a cost center that pays for resources in a certain account, practitioners can identify who is accountable for the expense incurred.

Another consideration in this capability is how to allocate [shared organizational costs](https://www.finops.org/framework/capabilities/manage-shared-cloud-cost/) and [commitment based discounts](https://www.finops.org/framework/capabilities/manage-commitment-based-discounts/).  Will these be held centrally or allocated based on consumption?  

It is important for a centralized FinOps team to align with their finance partners to make sure that the decisions made in this capability (chargeback vs showback, tagging and accounting strategies, how to handle shared costs) can integrate with the companies IT policies and systems.  The goal is to make it easy for users to be accountable for their expenses. The best way to do this is by integrating with the company's finance tools and processes.



## Maturity Assessment

#### Crawl
* Cloud spend is allocated to teams based on estimated usage of resources.
* Shared costs and discounts are held centrally due to lack of strategy on how to provide visibility and/or allocation.

#### Walk
* Tagging strategy and/or Account strategy is in place to provide visibility into how expense is allocated
* Strategy implemented on how to show and allocate shared costs/discounts

#### Run
* Teams understand their direct and allocated shared cost portion of cloud spend based on their actual consumption.
* Chargeback/Showback reporting is integrated automatically into the companies IT finance tooling




## Functional Activity

#### As someone in a Business/Product role, I will…
* Review the costs I am accountable for each month
* Understand how these costs impact my budget
* Have an understanding of organizational policy regarding chargeback/showback and allocation of shared costs/discounts


#### As someone in a Finance/FinOps role, I will…
* Understand how cloud expense is generated
* Ensure there is appropriate documentation on chargeback/showback policy and that operations are auditable according to company policies
* Help teams reconcile their portion of expense that is allocated to them each month
* Help teach teams the tagging and account policies and the importance of expense accountability


#### As someone in an Engineering/Operations role, I will...
* Understand how cloud expense is generated for each service used
* Comply with company tagging and account policies
* Review costs incurred each month


#### As someone in an Executive role, I will…
* Understand how cloud expense is generated
* Review cloud expense for portions they are accountable for
* Leverage this information for real time decision making




## Measure(s) of Success
_at least one measure of success; should be described in a context of cost; this could be an efficiency KPI or an agreed upon threshold or target._
_for example:_
>* idle resource costs will not exceed 3% of total monthly cloud spend
* anomaly costs will not exceed $150/month



## Inputs
* Tagging and Account strategy are important for cost allocation.
* Company accounting policy
* Company cost center/department hierarchy



<!-- ####### Real World Resources ####### -->
## Real World Resources
_a collection of real world examples, stories and “how to” for this Capability; based on FinOps community member experiences; information here may:_
>* _apply to one or more cloud providers_
* _include specific types of cloud services used) (compute, storage, database, etc...)_
* _describe a combination of  tooling, platform or vendor_
* _describe the industry the organization belongs to_
* _describe the complexity of the organization (global, enterprise, etc…)_
* _include the FinOps personas involved and any other organizational roles_