---

layout: capability
permalink: /framework/capabilities/cost-allocation/
search: true
search-keywords:

title: Cost Allocation (Metadata & Hierarchy)
description: Cost Allocation is the set of practices to divide up a consolidated invoice or bill among those who are responsible for its various component parts. In the context of FinOps this typically involves dividing up consolidated Cloud Service Provider invoices among various IT groups who use cloud within the organization.
page-identifier: capability_allocation
framework-capability-title: Cost Allocation (Metadata & Hierarchy)
framework-capability-desc: Cost Allocation is the set of practices to divide up a consolidated invoice or bill among those who are responsible for its various component parts.
label:
order: 1

---

# Cost Allocation (Metadata & Hierarchy)

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Cost Allocation is the set of practices to divide up a consolidated invoice or bill among those who are responsible for its various component parts. In the context of FinOps this typically involves dividing up consolidated Cloud Service Provider invoices among various IT groups who use cloud within the organization.

FinOps, itself, is necessary due to the large quantity of billing and usage data provided by cloud providers, and the speed at which it is delivered. Cloud billing and usage data is aggregated into a few data sources, often with millions of lines of data, delivered multiple times per day. Cost Allocation can be a challenge to appropriately divide the total cloud bill among the many parts of an organization who are using it.

Cost Allocation is done through a combination of functional activities primarily focused around the use of a consistent hierarchy of accounts, projects, subscriptions, resource groups and other logical groupings of resources (and the naming of these hierarchical groupings); along with resource-level metadata -- tags or labels -- applied within the cloud service provider, or by a third party FinOps platform.

All of the clouds provide tools to allow users to arrange hierarchy groupings, and to apply metadata to those groupings. The naming standards used for the accounts, resource groups, projects, and folders, can also be useful in determining the owner of any group of resources.

All of the cloud providers also allow for the use of tags or labels which can be applied as metadata to most individual resources, and which then appear in the billing and usage data when turned on by the user.

Increasingly, FinOps platforms and cloud providers are adding the capability to more flexibly manage resource metadata and hierarchy groupings either within the cloud provider or in the cost and usage data after delivery by the cloud provider.

Cloud provider invoices can be analyzed, using a combination of hierarchy and metadata to allocate costs to various organizational, functional, or financial targets within the user company. Any resources or hierarchy groupings which have no metadata attached can be addressed by the FinOps team as a compliance issue. Resources and hierarchy groupings which can be directly attributed to an internal target can be mapped to that target. Resources and hierarchy groups which are shared, can be identified as shared cost, and then various models of distributing those costs can be applied.

An important prerequisite to effective cost allocation is the metadata strategy, which should include all of the details governing the cost allocation process. The strategy should create a list of metadata which should be applied, possible values, compliance requirements, and mechanisms for doing so. Likewise, it should indicate a mapping of those metadata or hierarchy groupings to internal identifiers within the user organization, such as the business unit, P&L group, cost center, application ID, etc. to which costs will be allocated. There can be multiple layers of cost allocation and multiple ways to slice the cost and usage data as well. For example, finance may need to see costs divided into the Cost Center, but some engineering teams may need more granular breakdown by application, and there may also be a need to see all costs related to Production environments for all applications, or costs which are identified as R&D costs.



## Maturity Assessment
#### Crawl
* At lower maturity the mechanisms for allocating cost will be less granular and more general, and the ability to handle shared costs or untagged cost will be less effective, granularity of cost allocation will likely be at the business unit or portfolio level
* Crawl phase cost allocation might include simply dividing the total bill by account, project or subscription where a list of these is known to belong to a specific cost center or business unit
* Accounts, projects or subscriptions which are unknown would be fairly common as cloud use grows, and the FinOps or finance team might need to investigate these to determine an owner some months
* Tags or labels may be used for some cost-allocation, but not used consistently, or not used for a majority of spend
* A Metadata strategy, including resource and hierarchy naming standards might exist, but it may not be followed consistently
* Use of Cloud Service Provider tools

#### Walk
* At a walk maturity, mechanisms for allocating cost will be well-established, and there will be a variety of mechanisms, but all may not be used consistently or universally, and some shared costs or unallocated costs may still exist, granularity of cost allocation will typically be at an application or service level
* Walk phase cost allocation will typically include a combination of factors, such as accounts, projects or subscriptions which are identified by metadata or naming standard as belonging to specific cost centers, resources within shared cost pools which can be identified as belonging to a particular cost center, and some mechanisms for the distribution of shared costs
* There will likely still be either legacy or less critical parts of the cloud infrastructure which are not consistently using the cost allocation standards, which may still require some manual or estimation effort
* There may be some shared cost infrastructure which cannot be directly allocated without some information not available in the cost and usage data, but which can be either budgeted for directly as a shared cost or which can be divided by agreed-upon factors which are available (e.g. the percent of directly attributable other costs paid by an application is the same percent paid of the shared cost items)
* Use of a combination of Cloud Service Provider tools and third party tools of various types
* KPIs for cost allocation understood, not automated likely

#### Run
* At the run maturity, costs should be allocable to as granular a level as required by an organization, with direct allocation or consistent mechanisms for distributing shared cost items, and the strategies for metadata, hierarchy and naming standards are being used consistently and effectively universally.
* Multiple sources of data are being brought together to effectively allocate shared costs at the level they can be where this is critical to the organization
* There are few scenarios where all cost is not allocated at the most granular level or is unidentified, requiring essentially no research or reporting generation time
* Use of Cloud Service Provider tools, third party tools, home developed and maintained tools and automation
* KPIs well understood and automated




## Functional Activity
#### As someone in a FinOps Practitioner role, I will…
* develop the Naming Standards for all required and optional layers of hierarchical groupings
* develop compliance standards for various groups


#### As someone in a Business/Product role, I will…
* provide feedback on cost allocations made to products within my control

#### As someone in a Finance role, I will…
* determine the organizational and budgetary units to which cost will be allocated
* determine how to allocate percentages of any shared cost items


#### As someone in an Engineering/Operations role, I will...
* determine how and when metadata will be applied to hierarchical groupings and resources
* enforce and automate metadata standards for cost allocation metadata
* identify and provide all metadata sources required for analysis and cost allocation


#### As someone in an Executive role, I will…
* review and approve cost allocations assigned to organizations within my control
* review and approve cost allocation strategies
* determine and provide feedback when cost allocation must become more granular or mature



## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

* The majority of cloud costs can be categorized and allocated directly allocated to an organizational unit.  According to [the FinOps Community of Practitioners](https://data.finops.org/), comprehensive allocation translates to at least 80% of cloud spend is allocated for a FinOps practice operating at a Crawl maturity level; and 90% for a FinOps practice operating at a Run maturity level
* Ability to surface the percentage of cost that cannot be categorized and allocated directly, and which must be investigated at a low level
* Metadata compliance as a percent of spend (i.e. 80% of cost has appropriate allocation metadata, or is within a known hierarchical grouping)
* Stakeholder notifications for missing allocation metadata when resources are deployed




## Inputs
* Cloud Adoption Frameworks / Architecture Frameworks from Cloud Service Providers
* Established reference listing an organization’s valid values for each element of allocation metadata (e.g. Project names, Application IDs, Cost Center IDs, Contacts, Organization groupings, etc.)
* Reporting which surface percentage of spend that is allocated and unallocated by established allocation metadata
* Roles defined for cost ownership
* Existing tag/label standards for operations, existing naming standards
* Understanding of the capabilities of CI/CD, platform, cloud provider capabilities


{% include resources-loop.md %}

{% include story-loop.md %}


## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._


---
