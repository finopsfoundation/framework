---

layout: wide

title: Data Ingestion & Normalization
description: Data ingestion and normalization in the context of FinOps represents the set of functional activities involved with processing/transforming  data sets to create a queryable common repository for your cloud cost management needs.
permalink: /framework/capabilities/data-normalization/
page-identifier: capability_normalization
framework-capability-title: Data Ingestion & Normalization
framework-capability-desc: Data ingestion and normalization in the context of FinOps represents the set of functional activities involved with processing/transforming  data sets...
order: 11

---

# Data Ingestion & Normalization

{% include domains-loop.md %}


## Definition
Data ingestion and normalization in the context of FinOps represents the set of functional activities involved with processing/transforming  data sets to create a queryable common repository for your cloud cost management needs. In this context, data ingestion and normalization occurs when bringing together cloud billing data, cloud usage data, cloud utilization and performance data, on-premises CMDB or ITAM data, business-specific data, and other data points from a variety of cloud providers and IT data repositories to create a collection of cost and usage information which can be queried to support and enable the [FinOps Capabilities](https://www.finops.org/framework/capabilities/).

Effective FinOps practice requires access to regular streams of detailed usage, utilization and cost data, which can be categorized and analyzed to drive decision making. Unlike the world of on-premises data centers, there is no shortage of data on cloud usage. Cloud vendors produce massive amounts of very granular usage and cost data on which to base a FinOps practice. Monitoring platforms, security platforms, and business operations applications can also provide data that will inform on utilization, location, value and usage, oftentimes at similar levels of volume and granularity.

So while the issue many data centers experienced was a lack of detailed data, the challenge faced by cloud users is oftentimes that there is too much. An effective data ingestion and normalization strategy should strive to provide the FinOps team with the right combination of data from:
>* the right source systems
* at the right timeliness to support the cadence of decision making
* at the right level of granularity to support aggregate reporting and drill down investigation
* with the appropriate standardization, augmentation, normalization, etc.

The strategy for data ingestion will be driven largely by the needs of the reporting, cost allocation and optimization reporting needs. Data required to make decisions at a business unit level will not be in need of as much detailed or granular information.

FinOps teams which manage or allocate costs at a resource level may require multiple sources of data to gather resource information for some cloud providers which don’t natively provide it.

The data ingestion and normalization challenge grows as the complexity and diversity of the data increases. The level of granularity, the consistency of cost and rate metrics, mismatches between similar or analogous services, application of various types of discounts, the application of metadata to resources and hierarchies, and many other differences between the billing and usage data provided by the cloud providers can all provide challenges, even before considering the regular change and huge volume of data provided.



## Maturity Assessment
#### Crawl
* Match granularity of cost and usage data on incoming source files, though reporting separately
* Ensure metadata being applied to hierarchy and resources is consistent across cloud providers and data sources

#### Walk
* Ingest data from multiple data sources, normalizing cost metrics
* Use of a third party FinOps platform to normalize data
* Ability to create consistent reports for different clouds, possibly using different reports
* Integration of performance/utilization data

#### Run
* Consistent data lake of usage, cost, performance, utilization data
* Ability to run single report with multiple clouds




## Functional Activity
#### As someone in the FinOps team role, I will…
* Determine the list of data sources required to fulfill my current reporting and operational needs
* Determine the level of granularity required in each data source
* Establish a data model for normalization, mapping fields from various sources to one another
* Regularly and proactively validate data source content, and clearly understand when changes occur, react to them, adjust and re-document accordingly, and notify all those affected
* Ensure that the data sources and resulting repository of cost and usage information is kept accurately, is appropriately sized, backed up, and managed throughout its useful lifecycle
* Provide and ensure everyone with a need to access information can do so
* Work with every group to determine the right metrics, measures and metadata that should be included in “official” output
* Develop reporting output expectations document (update over time as maturity grows)

#### As someone in a Business/Product role, I will…
* Provide business or product level information as required by the FinOps function to create KPI or other information required

#### As someone in a Finance/Procurement role, I will…
* Provide access to data sources as required by the FinOps function
* Ensure Finance is using the most up to date and appropriate data sources for reporting and decision making
* Participate in or lead reconciliation and validation efforts to ensure invoices, usage data sources and other information map together as expected (typically monthly invoice reconciliation against usage data, and/or native cloud service provider tool data versus normalized data)

#### As someone in an Engineering/Operations role, I will...
* Provide access to performance and usage monitoring information within the purview of Engineering for use by the FinOps data repository

#### As someone in an Executive role, I will…
* Support the strategy for centralized data normalization, requests for access to information of various sorts as required by the FinOps function
* Encourage and communicate clearly regarding the need to have a single source of cloud usage and cost truth for reporting and decision making





## Measure(s) of Success
* Ingest time
* ETL time
* cost data from multiple cloud providers queryable from a common normalized data schema
* % of total cost available for reporting in normalized fashion
* % of matching metadata elements




## Inputs
* Cloud provider billing data
* Utilization data showing CPU, Memory, Disk, and/or Network utilization at a resource or resource group level
* Transactional data from logs or systems which record the number or quantity of use of types of resources (often shared resources)
* Value or outcome based reporting which provides data on the number of transactions or increments of value created by or represented by the operation of the systems. This information can provide the denominator for unit economics KPIs



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
