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
A foundational principle of FinOps is: "Everyone takes ownership for their cloud usage".  The true key to understanding total cost of ownership is built upon transparency and accuracy, but unallocated shared costs hinders both of these. Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.

The goal of Cost Sharing is can be full allocation; however it can also be the adoption of an informed ignore approach.  The latter is where a business decision is explicitly made about shared platform services coming from a central budget versus a from a portion of each cost center's budget.

Almost every organization has cloud costs that need to be segmented and allocated to business departments; the cost of running networking services, Support costs which benefit all Engineering teams or simply the cost of service resources from a cloud provider for which they do not (yet) support tagging/labelling.

As organizations increase their adoption of public cloud, without a strategy and processes in place to assign shared cloud resource costs to specific business owners, it becomes increasingly difficult to understand how to properly and fairly allocate costs, and to actually forecast and budget.



## Maturity Assessment
_description of the characteristics of each maturity level (crawl, walk, run) for this Capability in the context of the organization's FinOps practice._



## Functional Activity
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
