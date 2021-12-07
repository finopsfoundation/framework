---

layout: wide

title: Managing Shared Cost
description: The true key to understanding total cost of ownership is built upon transparency and accuracy, but unallocated shared costs hinders both of these. Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.
permalink: /framework/capabilities/manage-shared-cloud-cost/
page-identifier: capability_shared-cost
framework-capability-title: Managing Shared Cost
framework-capability-desc: The true key to understanding total cost of ownership is built upon transparency and accuracy, but unallocated shared costs hinders both of these. Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.
order: 4

---

# Managing Shared Cost

{% include contribute-capabiility.md %}

{% include domains-loop.md %}


## Definition
<<<<<<< HEAD
Managing shared cloud costs is the exercise of identifying and allocating cloud costs back to the teams or organizations that created them. Managing shared IT and cloud costs can spans multiple business departments. As organizations increase cloud resources and scale, it becomes increasingly difficult to assign shared cloud resources to specific business owners.
=======
A foundational principle of FinOps is: "Everyone takes ownership for their cloud usage".  The true key to understanding total cost of ownership is built upon transparency and accuracy, but unallocated shared costs hinders both of these. Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.

The goal of Cost Sharing is can be full allocation; however it can also be the adoption of an informed ignore approach.  The latter is where a business decision is explicitly made about shared platform services coming from a central budget versus a from a portion of each cost center's budget.

Almost every organization has cloud costs that need to be segmented and allocated to business departments; the cost of running networking services, Support costs which benefit all Engineering teams or simply the cost of service resources from a cloud provider for which they do not (yet) support tagging/labelling.

As organizations increase their adoption of public cloud, without a strategy and processes in place to assign shared cloud resource costs to specific business owners, it becomes increasingly difficult to understand how to properly and fairly allocate costs, and to actually forecast and budget.

>>>>>>> master

Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.

Please see the ["Identifying Shared Cost" project](/projects/identifying-shared-costs/) for more information and context.

## Maturity Assessment
Shared costs can vary from organization to organization, and also depend on the maturity and size within the company itself. However, there are a standard set of costs that generally appear on every company’s balance sheet, and it becomes the responsibility of the company to determine whether they should be considered shared or not.

Some shared costs apply to the entire organization, while others may be shared only among those cost centers that use them. In terms of accounting however, most cases of “shared costs” in the cloud are actually accrued and charged within one account, and it can be challenging to determine which costs should be shared.

**TBD:** definitions of shared cost by FinOps maturity level-- contributions welcome!

## Functional Activity
<<<<<<< HEAD
Here are key personas that have expectations, activities, or stakeholdership in identifying and managing shared costs.

### Finance: Controlling
This person supports Executives to make better decisions. They typically want all costs accurately allocated according to cause and their respective cost centers where special attention is paid to shared costs.

### Business: Program Manager
This role is responsible for accurate reporting from all the products of their program that they manage. Not having shared costs distributed correctly could create a financial disadvantage for product budgets.

### Business: Product Owner Platform
This is a business owner of a shared platform which enables many product teams to deliver business value fast, reliable and secure. They have an obligation to showback or chargeback the costs that have been caused by the product teams by using their platform.

### Engineering: Software Engineer
This role typically operates workloads that create these costs but might be the last person to review or observe the charges.

### Engineering: Engineering Manager or Director
This leadership role is responsible for all costs incurred in their team or department, including the portion of shared costs that their team is charged.
=======
#### As someone in a Business/Product role, I will…
* identify shared services/infrastructure which are part of my product and engage with stakeholder FinOps personas to determine how to
* understand cloud providers common use cases, and have a basic understanding of billing and pricing models


#### As someone in a Finance/FinOps role, I will…
* understand the basics of how cloud computing works, know the key services offered by cloud providers being used, including their common use cases, and have a basic understanding of billing and pricing models
* work with Finance to ensure required allocations are implemented to support financial reporting so shared costs can be assign to specific business owners.
* build processes and define rules to enable full allocation of shared costs.
* allocate the shared costs based on the defined rules and create stakeholder persona reporting
* understand available cost sharing models (fixed, proportional, even-split) and determine which models should be applied based on the use case


#### As someone in an Engineering/Operations role, I will...
* architect solutions that support segmentation of cost such that shared costs can be assign to specific business owners
* know much of all the shared platform costs that have occurred for which my team is responsible


#### As someone in an Executive role, I will…
* 
>>>>>>> master


## Measure(s) of Success
_at least one measure of success; should be described in a context of cost; this could be an efficiency KPI or an agreed upon threshold or target._
_for example:_
>* idle resource costs will not exceed 3% of total monthly cloud spend
* anomaly costs will not exceed $150/month



## Inputs
* Adjusted and amortized cloud cost & usage data
* Cost allocation constructs aligned to the organization's reporting needs
* Stakeholder real-time visibility into cost and usage reporting data
* Shared resources (networking, shared-storage, K8s Node, etc)
* Platform services (logging, database, security, etc)
* Enterprise level support
* Enterprise level discounts
* Licensing, 3rd party SaaS costs




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

_Join the conversation about this Capability in the Slack channel [#wg-shared-costs](https://finopsfoundation.slack.com/archives/C02APESR2G7). You can submit stories, how-tos and suggest improvements [using one of the options for contributing here](https://www.finops.org/introduction/how-to-contribute/)._

---
