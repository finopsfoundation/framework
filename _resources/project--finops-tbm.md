---

layout: wide
permalink: /projects/finops-tbm-navigating-coexisting-disciplines/
title: FinOps & TBM&#58; Navigating Co-Existing Disciplines
description: A guide that provides definitions and best practices on navigating the intersection of FinOps and Technology Business Management (TBM).
page-identifier: project_finops-tbm
search-keywords: tbm finops itfm integrations tco total cost ownership
identifier: projects
project-title: FinOps & TBM&#58; Navigating Co-Existing Disciplines
project-description: A guide that provides definitions and best practices on navigating the intersection of FinOps and Technology Business Management (TBM).
date-added: Nov 2022
type: Guide
source: Foundation Contribution
label:
cloud-provider:
  - Multi-Cloud
framework-capabilities:
- capability_it-asset-management-integration
weight: 10
---

# FinOps & TBM: Navigating Co-Existing Disciplines

## Abstract

Our Working Group (WG) gathered FinOps practitioners with experience in navigating both FinOps best practices alongside Technology Business Management (TBM) capabilities that organizations have already been using to govern IT spend. The goal of this working group is to research how practitioners use the disciplines together, and share our findings for use in other organizations evolving in a similar manner.

The group created this guide to define key terminology related to the intersection of FinOps and TBM, explain relevant taxonomy, and outline capabilities that every practitioner must be familiar with. Where we can, we’ll also explore common use cases where FinOps teams benefit from interaction with TBM teams as well as success stories and common pitfalls that teams may encounter when embarking on a joint endeavor.

## Contents
  * [Introduction](#introduction)
  * [Working at the intersection of FinOps and TBM](#working-at-the-intersection-of-finops-and-tbm)
  * [Exploring overlaps and gaps between FinOps and TBM](#exploring-overlaps-and-gaps-between-finops-and-tbm)
  * [Common Challenges](#common-challenges)
  * [Connections & Integrations](#connections--integrations)
  * [Taxonomy & Logical Models](#taxonomy--logical-models)
  * [Applying co-existing frameworks to use cases](#applying-co-existing-frameworks-to-use-cases)
  * [In Conclusion](#in-conclusion)
  * [Acknowledgements](#thank-you-to-all-our-project-contributors)
 
## Introduction
This guide aims to explore the interactions between the disciplines of FinOps and Technology Business Management (TBM) capabilities that organizations have already been using to govern IT spend. It will explain common use cases where FinOps teams benefit from interaction with ITFM/TBM teams, success stories and common pitfalls that teams may encounter when embarking on a joint endeavor.

**NOTE:** This guide is a work in progress and will evolve as content finalizes. In its final form, we’ll remove all of the “work in progress” context and this page will contain an initial version of the output.

### Get familiar with TBM and FinOps terminology
Please check out the [FinOps Foundation Glossary's TBM section](/resources/terminology/#tbm-finops) for more terminology and definitions that will help you better understand and utilize this guide.

### Perspective for this guide
For the purposes of this guide, we have simplified the terminology used as follows: “FinOps” refers to cloud financial management, inclusive of the FinOps discipline and cloud financial management best practices and “Technology Business Management (TBM)” refers to IT financial management, inclusive of the TBM discipline and ITFM best practices.

|                 | FinOps                                                                                                                                | Technology Business Management                      |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| **Roles Involved:** | CCOE, Cloud Practitioners                                                                                                             | OCIO, OFCO, TBM Office                              |
| **Spend Managed:**  | Cloud Program Spend (OpEx)                                                                                                            | Total IT Spend (CapEx & OpEx)                       |
| **Frequency:**      | Hourly costs, daily trends                                                                                                            | Monthly costs, quarterly trends                     |
| **Purpose:**       | Maximize business value by helping engineering, finance, technology, and business teams to collaborate on data-driven cloud spending. | Connecting Technology Investments to Business Value |
| **View:**           | Bottoms-up                                                                                                                            | Top-down                                            |

It is critical to note for readers that these disciplines are complementary to one another, and not meant as a replacement of one for another. Similarly, both disciplines work to help organizations understand the value being delivered through certain investments - TBM looks across the entire IT investment portfolio and FinOps maximizes the value of the public cloud program. 

Specifically, TBM accounts for all IT spend - inclusive of cloud costs - at a macro level to provide a top-down, fully burdened, comprehensive mapping of technology spend as it relates to specific business objectives and outcomes. Backed by a standardized taxonomy, TBM provides a single source of truth to IT, finance, and business teams so that they can make informed, data-driven technology investment decisions. It is not designed to address the complexities of managing and controlling public cloud spend, which is variable and dynamic - requiring a higher frequency to monitor and optimize. Enter FinOps, designed to meet the nuances of the public cloud while enabling teams to be flexible, agile, and efficient in making public cloud purchase decisions.

As this guide will explore in detail, when TBM and FinOps teams collaborate and share data, the overall output of each team can be strengthened, expanded and more precise. For most companies with both TBM and FinOps, they are owned and operated by two different - but collaborating - teams. TBM is usually owned by a TBM office or by IT finance; [FinOps is usually owned by teams embedded within engineering](https://data.finops.org/#q-reporting-structure).

However, they must collaborate on how consumers will be held accountable and how cost data will be used. For example, by aligning to a common allocation strategy, the TBM and FinOps teams can be sure their costs are consistent between both disciplines, enabling the TBM team to pull granular public cloud spend data from FinOps practice to tie to key business objectives and deliver a comprehensive, [accurate chargeback](/resources/terminology/#chargeback).

Alternatively, the FinOps team can pull in TBM general ledger data (labor, program cost, etc.) to deliver a fully burdened unit economic cost. As shown below, there are a number of common combined strategic outcomes TBM and FinOps can drive together, with the cloud-specific data inputs from each discipline.

## Working at the intersection of FinOps and TBM 
When approaching implementation of any new FinOps Capabilities it is important to not only consider the new cloud-focused agility, speed, & complexity we are trying to implement but also the pre-existing IT resources that are already present in the organization. These pre-existing assets / teams can help accelerate the delivery of FinOps capability through shared metadata, contacts, and business process knowledge.These discussions and work may provide unforeseen challenges through assumptions that they make on how FinOps ‘should’ work based on their existing TBM processes. Part of the FinOps team's challenge in this space is navigating what is helpful and/or necessary vs. what is unnecessary/inapplicable to operate effectively in the public cloud.

### TBM + FinOps : Translating Spend into Value

![A diagram that describes cloud related aspects that both FinOps and TBM share](/img/tbm/finops-tbm.png)

#### Organizational Improvements: 
* Business Alignment
* Shared Accountability
* Reduced waste and ability to reinvent
* Enhanced predictability


***Note:** visual does not represent full breadth of spend under management for TBM, only cloud-specific examples*

An example of this can be seen when we look at common reporting requests. For example, a TBM team may assume that all of the existing on-premise reporting also applies to public cloud. However, whilst there is some commonality, there can also be some significant differences.

Let’s look at this storage example: A common TBM ‘Storage’ report may focus on cost and also capacity available as from a TBM perspective, where we are paying for all of the storage we have physically purchased and when we may need to buy more, if tracked incorrectly, there is a risk of running out of storage and being at a work stoppage. 

This context shifts when adding the context of cloud storage and optimizing from a FinOps perspective, where CSPs have ‘unlimited’ storage capacity in the cloud and therefore give users the sense that they do not need to be concerned with additional capacity purchases as we are effectively operating ‘on-demand’. In this example, it is no longer necessary to track the need to buy more, as it is always available. However, it does become necessary to track growth rate and expected increases to ensure storage is being consumed and spent appropriately. Afterall, if storage ran out on-premise, there was no way for someone to simply buy 10 new storage appliances without proper approvals. Within the cloud, this can happen whether it was needed or not, and as such should be monitored. 

This is the intersection of teams and processes that can be approached to deliver the benefits of both TBM and FinOps.

## Exploring overlaps and gaps between FinOps and TBM
To better understand what practitioners are experiencing when navigating FinOps and TBM, we decided to reach out directly to our peers via a survey.

One of the first questions we asked ourselves when beginning this guide was to identify where overlaps and gaps between FinOps and TBM occur. Our survey results helped us answer this question as we looked at what users were attempting to address with the survey question, *“What are the uses cases / issues / processes you were trying to fix by collaborating between FinOps & TBM (For example Chargeback / TCO / Budgeting / Migration / Optimization)?”*

The results were quite interesting, with Chargeback being the majority at 28.6%. Forecasting, Optimization, and TCO tied at 19% each. Those four use cases combined make up 85.6% of use cases for using these models from our survey takers. Key insights include:
1. FinOps & TBM practitioners are encountering the same pain points and are looking for those solutions. They have shared goals regardless of which management methodologies they employ. 
2. While these methods are different, they seek to solve the same challenges and have overlap in areas where collaboration between the teams makes sense in order to derive a single holistic solution to very real challenges such as Chargeback or forecasting.

![A pie chart that displays joint use cases between FinOps and TBM](/img/tbm/joint-use-cases.png)

We were surprised at how low migration and ROI appeared; something we expected to see a little higher. Additionally, most of our respondents self-identified as either in the Pre-crawl or Walk maturity. Keeping this in mind, it is our belief that as maturity grows, ROI will become a higher priority to address. 

This does not address why migration seems to be less of a challenge highlighted but we hope to drive into these deeper insights through interviews, use cases, or future surveys to track the landscape trending over time.

## Common challenges

Where there are joint use cases trying to solve and collaborate on issues, there are also common challenges in implementation. Our survey respondents cited three main challenges they encountered. The majority fell into Competing Priorities (30.4%), followed by Stakeholder Engagement (21.7%) and Knowledge / Skills (13%).

The fact that for over 50% fall into Competing Priorities and Stakeholder Engagement demonstrates that we are still in an early stage of adoption for both disciplines, and that more education and communication is typically required to understand the value each discipline brings in its own right as well as the combined value and outcomes they can deliver.

![A pie chart that displays a breakdown of common challenges between FinOps and TBM](/img/tbm/common-challenges.png)

Communication and collaboration are the key to any successful implementation. This data speaks to the dynamic nature of people dealing with adopting these methods every day and are looking for the solutions - whether it is FinOps, TBM, or a combination. Any adoption inherently comes with a need to promote education and awareness while fostering a culture shift with education & training. All of this combined supports teams in their implementation efforts.

Having these common challenges presents an opportunity to have shared influence for prioritization. It also presents opportunities for education and integrated solutions which have a shared strategy. 

When adopting any framework, ensure you and your organization are looking at not just the implementation points, but the strategy and culture shift which will enable and empower the adopters. There is an [Adopting FinOps body of work available on finops.org](https://www.finops.org/projects/adopting-finops/) that is a great place to start a FinOps journey and can be applied across many frameworks. 

## Connections & integrations

With these overlaps in use cases and challenges, how does the connection and integration of these two work? Integrating FinOps and TBM processes ensures the total cost of applications and services in the public cloud are reflected the same way as on-prem applications and services.

This provides a means to rationally compare applications running on different platforms through a common TCO mechanism. And as public cloud spend increases and becomes a larger percentage of IT’s budget, this will be more important to IT leadership making strategic decisions as to where workloads should run.

To connect FinOps with TBM, three elements need to be in place:
1. A shared taxonomy
2. A mapping of cloud service provider’s resources to that taxonomy
3. Tagging apps/services/products to the resources in the cloud they consume

### Common Taxonomy
A common taxonomy provides a baseline and allows the FinOps and TBM processes to speak the same language. The taxonomy defines the elements needed for reporting across IT. Typically this taxonomy will come from the TBM team and is relatively static. For instance, a TBM team may use ATUM 4.0 and its associated taxonomy that defines Cost Pools, [Tower/sub-tower](/resources/terminology/#it-tower), etc. Typically, FinOps teams will adapt their spending and usage data to align with the existing IT logical model/governance used by the TBM team; this may evolve over time as cloud spend increases.

### Mapping to Taxonomy
Once the FinOps and TBM teams have agreed on a common language, a business mapping must be built to tie cloud service providers’ products/services to the taxonomy. This mapping provides the link between the cloud resources the engineering teams use and where those associated resources costs should go in the TBM model.

Although the mapping typically would be done collaboratively between the teams, the FinOps team would likely drive the process since they would have a deep understanding of the cloud services being used. As an example of the mapping, AWS EC2 costs would be mapped to Compute->Servers in the taxonomy; or AWS RDS would be mapped to Platform->Database. As new cloud services are used, the mapping would need to be updated.

The below is an image of TBM mapping with green overlays for where cloud would fall into the mapping exercise:

![This is a map of TBM taxonomy highlighting concepts shared with FinOps](/img/tbm/tbm-table.png)

The mapping of cloud services to the [TBM taxonomy](/resources/terminology/#tbm-taxonomy) allows the TBM team to consume cloud costs from the FinOps team. But those costs need to be allocated to business services or business units; to do that, resources running in the cloud need to be tagged appropriately.

### Tagging
Tagging typically requires the cloud resources with the application using those resources. It might also include company specific tagging for things like project codes. This tagging in the cloud should be no different than the tagging that is required for on-prem resources and requires ongoing attention. 

All of this requires coordination, collaboration, and agreement between the FinOps and TBM teams. The TBM team will provide relatively static data like the taxonomy used for their reporting, perhaps the organization’s financial structure (departments, cost centers, etc.). Both teams would need to source app codes and project codes from the same place; a shared record repository such as [Configuration Management Database (CMDB)](/resources/terminology/#cmdb) to ensure tagging on the FinOps side and reporting on the TBM side are accurate and insync.  FinOps will map cloud products/services to the taxonomy AND tag resources with the app codes, project codes, etc. 

With these elements in place, FinOps teams can regularly provide resource cost data that allows the TBM teams to allocate a cloud provider's costs to the correct infrastructure, platforms, and ultimately applications. With that, cloud costs can be allocated in a manner that is the same manner as its on-prem counterparts. 

## Taxonomy & Logical Models

As outlined above, tagging is a key element to have in place for TBM and FinOps Integration and has its own nuances which should be outlined. When TBM and FinOps teams collaborate and share data, the overall output of each team can be strengthened. Core in establishing the collaboration requires developing a framework that allows the teams to interact as seamlessly as possible.

That framework starts with identifying shared goals. Whether it is reducing cost or highlighting IT’s value to the business, understanding what are the teams trying to achieve and where there are the overlaps - and gaps - will lay the foundation for strong collaboration between the teams.

These shared goals will lead to common use cases such as chargeback, TCO, optimization, or  improved forecasting that FinOps and TBM teams can address together. Some of these are explored later in the playbook, but core to enabling the use cases is collaboratively establishing a shared language or common taxonomy that all parties agree to. 

And this is a common challenge when integrating TBM with FinOps: ensuring the two frameworks speak the same language.

ITFM relies heavily on cost centers and accounts as this is the way corporate finance manages the financials for the whole company. Practitioners need to make sure tagging / account structure and cloud bill reflect the corporate hierarchy, normally represented by cost centers.

Tags are even more important when a TBM or IT product model is implemented. Applications are critical components that collect cost and therefore are leveraged to understand total cost of ownership (TCO). Many companies have struggled to reconcile cloud and on-prem costs to present a unified cost view across technology because the tagging strategy and nomenclature was not aligned with the CMDB structure. Many times the tags set up in the cloud are not consistent with the structure already available on-prem, e.g. Application Family in the cloud vs Application Portfolio for on-prem in the CMDB.

In other cases tags are very useful but there is a limitation driven by allocating shared cost. For example many applications may be part of a platform like a data lake or kubernetes platform. In this particular example tagging is not enough as from the cloud perspective we will be able to cost the data lake but additional consumption data or logs will be required to allocate the cost to the business unit leveraging the data lake and make them accountable for the charge. 

All of this needs coordination across the various teams to make sure the consumers of the service have a good view on TCO that can be used not only to understand cost but also to make the product more efficient and potentially gain competitive advantage in the market.

## Applying co-existing frameworks to use cases
We’ve discussed to this point the value of five core themes when working at the intersection of TBM/FinOps Frameworks;
* Identify shared goals
* Lean into shared influence for prioritization
* Develop common terminology
* Shared systems of record (CMDB)
* Knowledge share often

In this next section, we will provide use cases and considerations for implementing alignment around both methodologies.

### Reconciling Financial Usage Data

When aligning cloud consumption data it is important to be aware of fundamental timing differences that will exist between both methodologies. FinOps practitioners and tools are used to working with near real time data. By contrast, TBM tools typically work with monthly (or less frequent) data updates.This challenge is most prevalent when tying in usage feed information (e.g. AWS CUR) to the invoice general ledger lines that the TBM team use as their authoritative source of cost. 

Depending on the accounting process/latency at your organization you may find that the usage data the FinOps team supplies is one or two months ahead of the invoiced amount being recognised in the general ledger. In this scenario, the TBM team can resolve this by ensuring that the FinOps supplied consumption data is offset/delayed by the required number of months so that it matches the invoiced amount for that accounting period. 

Alternatively the general ledger lines for cloud service provider invoicing may be deleted by the TBM team and replaced with the authoratitative usage data from the FinOps team for that time period. However, this is not a recommended approach and it breaks a key construct for TBM of ‘always tying back to the general ledger’.

The time lag in TBM driven by the ITFM business cycles timing is a challenge and an opportunity for the integration with FinOps. IT Management has learned over the years to "discount" the delay in financial data being presented as they make decisions impacting the business in the present time. FinOps real time capabilities enhance the support for business decisions with data that is current. The addition of consolidated financial statements (in the rears) and current FinOps data will improve the quality of business decisions that can take advantage of the two.

### Chargeback 
As the primary use case for integrating FinOps + TBM this may well feel natural to most practitioners. A common extension, once chargeback processes for cloud infrastructure have been established, is to extend the same concept to include other costs associated with maintaining the public cloud platform that are internal to the organization. The main goal here is to provide a fair and equitable mechanism for cost recovery of platform/shared services/SaaS/other vendor costs that are incurred as part of service delivery.

It is important to validate that the receiver of the cloud chargeback is the same entity/person as the service owner defined by TBM. If it is different, the TBM Office and FinOps will need to work together to resolve any ownership disputes. By nature of the visibility required for decision making FinOps chargeback tends to focus on individual application business owners and TBM focuses on the business service owner.

With a well managed FinOps data feed, we expect to be able to identify the application and business line end user as part of our visibility capability -  typically using a combination of account and tag information. It is important that these attributes are shared and preserved as part of the chargeback process so that the ITFM/TBM team are aware of the direct ownership of cloud spend and it is not accidentally shared/reallocated as part of any existing allocation rules.

#### Building up a comprehensive set of FinOps and TBM data

| **Minimum data supplied by FinOps team**                          | **Additional recommended fields (along with left)** | **TBM data to supplement even further**     |
|-------------------------------------------------------------------|-----------------------------------------------------|---------------------------------------------|
| Business Owner (the entity that will receive the charge)          | Application                                         | Business Org Structure                      |
| Cost                                                              | Cloud Service Provider Name                         | CMDB (Application & Services relationships) |
| Amortized Cost                                                    | Usage Hours                                         | Reference Taxonomy for Services             |
| Cloud Service Provider Vendor Name (in a multi-cloud environment) | Usage Quantity                                      | Relevant Cost Centers                       |
|                                                                   |                                                     | Relevant Business Contacts and Owners       |

It is important to note that Chargeback and Total Cost of Ownership (detailed below) are not automatically the same and that there may be fundamental differences that require these use cases to be addressed separately.

The purpose of chargeback is to provide a fair and equitable way of recovering centrally incurred shared costs from the consumers of those platforms, this may be as simple as an [even spread / cost weighted cost allocation](/resources/terminology/#even-spread-cost-allocation) to specific usage driven recovery. However the scope of this cost recovery is typically limited to the costs incurred by the FinOps / shared platform / Cloud Center of Excellence (CCoE) teams. This scope of cost would typically not constitute a Total Cost of Ownership as it excludes key cost elements that are incurred in other business areas.

By contrast,a Total Cost of Ownership view is also aiming to represent a fair and equitable distribution of shared costs, the scope is much broader as it needs to include other types of cost that contribute to the building and running of a given application / service. The largest of these is typically employee/labor costs that are not necessarily incurred within the FinOps team's chargeback scope but need to be included to ensure that we are representing all spending that is incurred in order to deliver a given application/ capability.

### Total Cost of Ownership - TCO 
Total Cost of Ownership (TCO) is often an extension or follow-up from chargeback. Typically, as costs begin to be charged back, or built into a model for chargeback, costs reveal themselves which need mapping and dissecting. This is where FinOps and TBM together can bring a holistic approach to both cloud and IT spend. 

TCOs are used to appraise full application development and to run cost and profitability models. As such, they need to incorporate a variety of variables as outlined below:

![A diagram that displays variables involved with Total Cost of Ownership](/img/tbm/tco.png)

Regardless of what costs become a part of a TCO, it is important to have normalization between the teams. FinOps data will typically come in variables such as Usage hours , quantity, cost per hour/month, and by a variety of tags (for instance by Application or Business Unit). Unless the tagging strategy has included TBM categories, there will be a need to normalize that data to align with TBM (or vice versa). For example, if TBM is pulling data every 6 months, then ensure that the cloud data pull also spans the same 6 months. Also ensure to clarify on amortization of cloud spend in the instances of commitment based discounts or other non-on-demand cloud services.

**Minimum data fields supplied by the FinOps team to support a TCO use case are:**
* Business Owner (the entity that will receive the charge)
* Application
* Cost
* Cost (amortized)
* Cloud Service Provider Vendor Name (in a multi-cloud environment)
* Cloud Service Provider Service Name
* Usage Hours
* Usage Quantity

**Recommended fields are Minimum (above) plus:**
* Tower (as per TBM/ITFM reference taxonomy)
* Sub-Tower (as per TBM/ITFM reference taxonomy)
* Cloud Service Provider Account Name

Just like FinOps is iterative, creating a TCO can also be iterative. Instead of spending an inordinate amount of time finding every single cost and accounting for it, start with the largest contenders and incorporate those. With the normalized data between the two sets, it will become clear which areas to focus on. Once those are integrated, continue to expand until all costs are included - and, most likely some hidden costs will be found along the way! 

### Forecasting 
There are many ways to do forecasting, which vary from industry to industry and even from business unit, program, or project. Traditionally, a TBM team focuses on a top-down strategic approach while a FinOps team focuses on a bottom-up approach. This is largely due to a CapEx (IT) v OpEx (Public Cloud) procurement model and the type of data available from the cloud. 
Whether an organization is focused on TBM, FinOps, or both, it is important to ensure all stakeholders are speaking the same language or have an agreed upon unit for forecasting.

In a bottom-up approach, one of the largest challenges in forecasting occurs when engineers, finance, and product owners are providing forecasts in different units. For example: An engineer might provide their forecast in GB/month, a finance person may be looking for cost, or assume it is GB/day, and a product manager may forecast how many widgets are being produced in a month.

In a top down approach the same is likely to occur but with finance or a program manager speaking in # of applications migrating in a year, without taking into account that each application may range in size and complexity.

In both scenarios, ensuring that all stakeholders understand and agree on the taxonomy is critical to success.

Another success measure is required accuracy. According to the [State of FinOps findings](https://data.finops.org/), mature FinOps practices report variances of +/- 5%, Finance driven budgets and forecasts may require anywhere between 3-5% accuracy. This may be another area to normalize language, expectations, and metrics as this may be a difficult threshold for FinOps practitioners. Communication and collaboration on this topic will help all stakeholders find a balance.

#### Forecasting for what? 
Similar to agreeing on terminology, have a shared understanding of what is being forecasted and why it is critical. A FinOps team is going to be able to provide critical insights into cloud spend and usage, but may not be much help for on-premise expenses.

Similarly, the data being collected will be different depending on factors such as if it is for a specific budget exercise, CapEx purchase or software/license renewal, etc..

For additional information on how to forecast, see the [Forecasting Playbook](https://finops.org/projects/forecasting-playbook).

### Migration / Hybrid
TBM organizations play a critical role in determining migration strategies as they are responsible for baselining TCO of resources between Cloud, on-premise, and hybrid. TBM dives into a detailed cost analysis based on where and how you’re spending on non-cloud IT spend. During Cloud migrations different Cloud providers and services will be considered. A critical step is to map current on-premises resources to cloud offerings. Leveraging variable spend modules and FinOps knowledge of cloud; this partnership can unlock cost granularity to perform cost-benefit analysis on Cloud. Which will lead organizations to better understand and predict future spend of Cloud and have timely trade-off discussions. These estimates can inform ROI and lead to approved business decisions that allocate funding on a schedule more closely aligned with expected actual variable spend. Multiple migration strategies might run concurrently or will need to be prioritized.

During migrations, FinOps teams can track and report on actual vs forecasted spend. Engaging FinOps teams early can help ensure chargeback is processed against the cost center where the budget is allocated. FinOps teams can generate forecasts using predictive models to understand variance against plan. Insights generated by a FinOps team should inform ITFM/TBM of the migration progress and notify key stakeholders of misalignments (budget, scope, timelines).

Post-migration, FinOps teams will engage with migrations stakeholders on optimization recommendations and begin deploying commitment strategies against stable workloads. While FinOps team will now focus on efficiency of the new workloads now running on Cloud; ITFM/TBM should be engaging in these post-migration conversations to begin on-prem asset housekeeping and tracking datacenter retirements.

## In Conclusion
Building a FinOps practice comes with many challenges and finding a partner with intersecting teams like security, procurement and especially ITFM/ TBM will only enhance the adoption. Embarking on a joint endeavor can benefit both practices and support your organizations to make better tradeoffs and unlock the value of Cloud.

With your help it can continue to evolve and become an even better resource. Come and join the conversation in the #chat-itfm-tbm-finops channel or get involved in the next sprints of this working group. Please get in touch in the Slack via the [ITFM/ TBM Channel](https://finopsfoundation.slack.com/archives/C032BA3DXAB) if:
* There is an area you would like to see more examples or detail on
* You have some content or an idea for content that you think should be included
* You have a intersection story that could be shared
* In fact we would love to hear from you with any feedback

### How to get involved
This current version of the guide represents the first handful of sprints completed by our WG. Here are some details on what we have planned next.

#### Remaining and planned sprints
* Publish foundational information, including reference taxonomy translation between TBM and Cloud Service Provider (CSP) services (e.g. AWS, Azure, GCP)
* Join us in building out future sections of our guide: Optimization & ITAM SAM integration
* Expanding guidance to address other CSPs
* Benchmarking and migration analysis 
* … and more, depending on community feedback and contributions

<a href="javascript:void(0);" class="inline-flex justify-center py-2 px-4 text-sm leading-relaxed font-medium rounded-sm text-white border border-green-500 font-normal bg-green-500 hover:bg-green-600 hover:border-green-600 transition-colors duration-200" style="text-decoration:none" onclick="javascript:modalToggle('modal-contribute')">
  Suggest changes
</a>

If improving FinOps skills and best practices (and other critical FinOps capabilities) is something you or your teammates have interest in, consider our [FinOps Certified Professional course](https://learn.finops.org/path/finops-certified-professional/). If you are reading this and aren't a FinOps Foundation member yet, [we welcome you to sign up and join](https://www.finops.org/membership/).  

## Thank you to all our Project contributors

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'finops-tbm' %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <a href="{{ person.linkedin-url }}" class="flex bg-gray-100 w-full items-stretch p-4 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
          <div>
            <img src="/img/people/{{ person.image }}" alt="{{ person.name }}" width="50" class="rounded-full inline-block" />
          </div>
          <div class="flex-grow pl-4">
            <h5 class="mt-2 mb-1 leading-tight font-bold">{{ person.name }}</h5>
            <p class="m-0 leading-tight text-sm">{{ person.company }}</p>
          </div>
          <div>
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path class="st0" d="M21.8,0H2.2C1,0,0,1,0,2.2v19.7C0,23,1,24,2.2,24h19.7c1.2,0,2.2-1,2.2-2.2V2.2C24,1,23,0,21.8,0z M7.4,20.7
                c0,0.3-0.3,0.6-0.6,0.6H4.1c-0.3,0-0.6-0.3-0.6-0.6V9.4c0-0.3,0.3-0.6,0.6-0.6h2.7c0.3,0,0.6,0.3,0.6,0.6V20.7z M5.5,7.8
                C4,7.8,2.9,6.6,2.9,5.2S4,2.6,5.5,2.6S8,3.8,8,5.2S6.9,7.8,5.5,7.8z M21.5,20.8c0,0.3-0.3,0.6-0.6,0.6H18c-0.3,0-0.6-0.3-0.6-0.6
                v-5.3c0-0.8,0.2-3.5-2.1-3.5c-1.8,0-2.1,1.8-2.2,2.6v6.1c0,0.3-0.3,0.6-0.6,0.6H9.8c-0.3,0-0.6-0.3-0.6-0.6V9.4
                c0-0.3,0.3-0.6,0.6-0.6h2.8c0.3,0,0.6,0.3,0.6,0.6v1c0.7-1,1.6-1.8,3.7-1.8c4.6,0,4.6,4.3,4.6,6.7L21.5,20.8L21.5,20.8z"/>
            </svg>
          </div>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>

Also, we'd like to thank our Technical Advisory Council (TAC) Liason, Jeremy Ung of Apptio.

### Thank our supporters and interviewees

Without the insights from these amazing community members, this guide would not be what it is today!
* Juan Jose Jarillo
* Paolo Baudino
* Ylanda Hill 
* David Adelkhanov

Lastly, a big thank you to the FinOps Foundation support team for helping us bring our work to life: Ashley Hromatko (Staff Sponsor), Samantha White (Program Management), Tom Sharpe (Design), and Andrew Nhem (Content).