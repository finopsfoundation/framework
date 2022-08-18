---

layout: wide
permalink: /projects/introduction-cloud-unit-economics/

title: Introduction to Cloud Unit Economics
description: This project is an introduction to the practical application and a methodology of cloud unit economics and teaches how to quantify the associated cost and usage metrics of elasticity. 
page-identifier: project_unit-economics
identifier: projects
project-title: Introduction to Cloud Unit Economics
project-description: This project is an introduction to the practical application and a methodology of cloud unit economics and teaches how to quantify the associated cost and usage metrics of elasticity.
date-added: Aug 2022
type: Guide
source: FinOps Foundation
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:
  - capability_unit-costs

---

# Introduction to Cloud Unit Economics: A work in progress

## Overview

Our Working Group would like to introduce the results of our first sprint: the start of a practical guide about cloud unit economics. Our mission with this project is to create common ground, identify standards, and build a better understanding of what cloud unit economics are and how they can be leveraged by your organizations as part of a greater FinOps strategy.

## First sprint deliverables (presented during August 2022 Summit)
Our WG gathered to collect information and create the overall outline and fill out sections about cloud unit economics. The group scoped the following concepts and sections of the guide:
* [What Is Cloud Unit Economics?](#what-is-cloud-unit-economics)
* [Terminology](#terminology)
* [Why Cloud Unit Economics is Important? (Work in progress)](#why-important)
* [How to Get Started](#how-to-get-started)
* [When to Start](#when-to-start)
* [Potential Challenges and Barriers to Adoption (Work in progress)](#potential-challenges-and-barriers-to-adoption)
* Survey Results (Work in progress)
* User Stories (Work in progress)

While the guide is a work in progress by group members, finished sections will be published on this WG output project.

### Supporting our work with user data

Our WG also conducted a survey to supplement the definitions and best practices that we're generating with real world data. We'll reveal the results of the survey during a future sprint.

### Informing and improving the "Measuring Unit Costs" Capability
The results of our first sprint also brought some interesting discoveries, definitions, and insights to help our community improve the Measuring Unit Costs Capability. In future sprints, we'll work with the Technical Advisory Council and FinOps Foundation staff to see how we can incorporate what we've learned to improve the Capability definition and supporting content.

### Future sprint work includes
* Including community and practitioner feedback
* Presenting survey results
* Improving Measuring Unit Costs Capability
* Completing guide content
* Collecting and unveiling more user stories!

## Cloud Unit Economics Guide: Completed Sections

## Executive Summary
The cloud's ability to scale resources up and down to align with current demand requirements, often referred to as *elasticity*, is simultaneously both one of the key benefits of cloud computing and its greatest liability. 

This elasticity and the cloud’s inherent variable cost structures (that made the emergence of FinOps inevitable) have created new financial and operational challenges that require the creation of systems and processes to measure the variable costs and usage metrics associated with these dynamic infrastructure changes.

This document focuses on the system of *Cloud Unit Economics* as one such system, which is the specific application of the broader concept of unit economics to the cloud computing domain. Below you will find an introduction to its practical application and a methodology to quantify the associated cost and usage metrics of elasticity. 

This document also covers how the application of unit economics can enable cloud-driven organizations to build more efficient systems and ultimately provide a common language to align both business and engineering leaders.

## What is Cloud Unit Economics?

> "One of the most important concepts in FinOps is unit economics" 

*- Chapter 1: What is FinOps, Cloud FinOps: Collaborative, Real-Time Cloud Financial Management*

The FinOps Foundation define [six principles](https://www.finops.org/framework/principles/) that serve as guidance for the FinOps professional. Why do they specifically call out **unit economics**? What makes it such an important concept?

In short, because Cloud Unit Economics directly supports each principle. Just like the FinOps practice as a whole, Cloud Unit Economics is not a goal in and of itself, but rather a powerful system for achieving the maximum return on your cloud investment in pursuit of the six principles of FinOps.

### So, what exactly is Cloud Unit Economics?

Cloud Unit Economics is a system of profit maximization based on objective measurements of how well your organization is performing against not only its FinOps goals but as a business in the market. Cloud Unit Economics achieves these noble goals by leveraging the measurement of marginal cost (a.k.a., unit cost metrics) specific to the development and delivery of cloud-based software and marginal revenue (a.k.a., unit revenue metrics).

By calculating the difference between marginal cost and marginal revenue, you can determine where your cloud operations break even and begin to generate a profit — an important concept in economics overall and one of the most effective ways to make data-driven business decisions regarding your cloud investment. 

#### A note on applying cloud unit economics to non-profit companies or the public sector

This document was written mostly with commercial SaaS and cloud-driven commercial organizations in mind. But, Cloud Unit Economics can be applied to other types of organizations. While most companies measure their success in revenue or profit, a public sector organization (e.g., federal, state, or local government) or nonprofit does not. Instead, value is typically measured in terms of the success (or failure) of the delivery of civic goods or services.

In addition, the value may be derived through the accurate forecasting of overall spending to maximize the use of budgeted resources. If you want to apply unit economics to a non-profit or a public sector entity, simply replace the words *profit* or *revenue* with *value*.

## Why use Cloud Unit Economics?

Cloud unit economics can unlock the following benefits:

**Quantify the cloud’s role in your financial performance.** Cloud Unit Economics is an effective tool for a company’s management, investors, and employees to understand its financial performance.

**Forecast profitability.** Based on a unit cost analysis, unit economics shows how profitable a business is or how soon it will achieve profitability, and what factors are affecting its margins.

**Build a plan for cloud cost optimization.** Cloud Unit Economics allows companies to understand whether their product is overpriced or undervalued. This can help them identify what should be optimized, and how.  

**Evaluate a product’s future potential.** Relying on Cloud Unit Economics, businesses can better understand what products and features customers are using, making it easier to make changes to product roadmap and engineering priorities.

Ultimately, by quantifying the cost to produce or the cost to serve, **cloud engineers can articulate their contribution to gross profit margin** due to the architectural, development, and operating choices they make. Product teams will have key data points to support pricing decisions, and the business will be able to forecast cloud costs better even though cloud resource consumption is variable.

Cloud Unit Economics also supports a broader set of metrics used to evaluate the profitability of products and customers. These include: 

* **Contribution margin** - the gross profit derived from selling one more unit of a product or service, 
* **customer lifetime value** - the total worth to the business of a customer’s relationship, and 
* **customer acquisition cost** - ...the cost of winning over a customer to use your product or service which ties into the customer lifetime value metric.

### Common Examples of Unit Economics in Use Today
One of the goals of this document is to help you learn how you might put Cloud Unit Economics to work for your organization. One of the most important details to determine upfront as part of your Cloud Unit Economics journey is what key metric best serves your business needs. 

Consider using the following examples to kick start that journey and to give you a taste of what is possible:

* A Financial RiskOps SaaS company might measure their cost per analyzed financial transaction, which is not only tied to the company's cost to serve but also to how they price and package their products.
* A Governmental organization launching an application to let residents request literature might measure the cost per user to understand better how the site usage affects their costs.
* An Online Hotel Booking company might measure the cost of creating a reservation to learn how their costs change and forecast their costs during more popular travel times.
* A Rideshare company might measure the cost per ride by the time of day to determine the most cost-effective times to transport customers.
* A Video Conferencing SaaS company might measure the cost per active user and track who their most expensive customers are.

Cloud Unit Economics is a universally useful system, but there’s no one-size-fits-all approach to metrics. The right metrics are a product of what you do, who you serve, how big you are, and any other defining factors about your business.

## Terminology
Use this glossary of helpful terms to define better and understand the domain of Cloud Unit Economics. 

Cloud Unit Economics is a key way to communicate both the cost and the value of everything an organization is doing in the cloud. As such, it depends on key interactions across all other FinOps domains.

* Data Analysis and Cost Allocation are fundamental to effective unit cost measurement
* Forecasting and Budget Management have clear intersections in terms of budgeting not only for expected cost but for the cost of supporting a demand that also must be forecast
* Strategic decision-making should be driven more by unit costs than total costs whenever possible
* Optimization activities should be aligned to reach or maintain unit metric target objectives
* FinOps culture — the way we incentivize our engineers, the way we communicate cloud cost and quantify value — is best expressed in terms of unit metrics

**Unit Economics:** A system of profit maximization based on assessing the impact of incremental costs relative to incremental revenue. The revenues and costs associated with a defined and measurable unit of a product or service. FinOps teams today strive to provide actionable unit costs to enable organizations to calculate unit economics for the products or services utilizing cloud services.

In manufacturing, marginal economics help businesses optimize production levels and maximize profits. In the cloud, marginal economics helps us understand if engineering changes to products or services via changes to the architecture, development patterns, or cloud operations are delivering incremental business value.

**Unit Cost:** The cost allocated to a defined and measurable incremental unit of a product or service is one of the more important concepts in unit economics. Unit cost is also sometimes referred to as the marginal cost specific to the development and delivery of cloud-based software or services.

![Measuring Unit Costs, part of Unit Economics, is a key FinOps Domain to master](/img/unit-economics/unit-economics-1.png)

**Unit Metrics:** KPIs used in unit economics that indicate business value, technical value, or other important measurements.

**Activity Based Costing:** A process establishing direct costs associated with specific tasks that can then be attributed to products and services based on demand. The tasks are staff-related (time required to perform task x hourly rate) but can also be related to machine time. Also referred to as Task Oriented Costing.

**Cost to Produce:** This is the total cost to produce for non-production workloads and is used as a measurement with other business metrics similar to how you would use the cost to serve. These metrics can be compared to similar tech stacks and non-production workloads to determine the efficiency of teams and cost controls.

**Note:** This activity should not be confused with something akin to a tax write-off with Research & Development.

* **Financial** - R&D costs and comparative costs by tech stack
* **Technology/Engineering** - Unit rates per Cost to Produce (Is there fat in the cost in non-production), Future architecture deployment cost options based on service whitelist, etc.
* **Forecasting** - Future production cost

**Contribution Margin:** This is usually *revenue minus variable cost*. Can be performed at the unit or aggregate level, with the latter indicating the amount available to support the company’s shared costs. Typically applied at the product level, but can be applied to any dimension — e.g.: market, industry, etc..

**Cost to serve:** Cost to serve kicks in once the application has been promoted to production and production begins.

* **Sales** - Tracking outliers that may be less profitable or abusive customers
* **Financial** - Gross margins, the cost to service an application
* **Technology/Engineering** - Unit rates (blended costs based on how you buy cloud)
* **Forecasting** - Future growth and trending potential cost

**Direct cost:** Costs — variable or fixed — that can be identified and attributed to a specific resource or group of resources that support the delivery of products or services to an internal or external customer.

**Indirect cost:** An allocation of a general business expense that is not readily identifiable but necessary for the general operations of the organization.  

**Shared cost:** Identifiable costs allocated to a pool of products or services through an agreed-upon distribution methodology.

**Demand driver:** A factor that has material influence over cloud resource usage. 

**Cost attribution vs. cost allocation:** Attribution is based on cost causative principles while allocation is generally arbitrary — i.e., we could allocate costs and end up with different answers.

## Why Cloud Unit Economics is Important

Measuring Unit Economics for Cloud IT is as important as it is complex. Complexity stems from many sources: variable cost models, shared resources, on-demand provisioning, and so on. The organization needs to track how much cloud usage vs. cloud spend is profitable and sustainable.

  ***More to come in a future sprint...***

## How Does Unit Economics Benefit FinOps?

Cloud Unit Economics provides a common language for all levels of the organization so stakeholders can discuss cloud spending in a meaningful way. A goal for Cloud Unit Economics is to relate cost/spend to business value. Organizations that are cloud dependent  Cloud Unit Economics metrics as primary metrics for business decisions.

  ***More to come in a future sprint...***

## How to Get Started

Building a sustainable Cloud Unit Economics practice starts with a strong unit cost model. Seek out people in your organization who are already thinking about or doing it at some level. 

Planning should start as early as possible to identify the metric or metrics needed to collect meaningful data. This may give direction to engineering teams on the necessary data points to be collected later. Collecting and processing the data should happen as customers start onboarding a system.

### Who defines the first metric?

**Key principles:**
* There is most likely no single metric to rule them all
* Unit metrics should be as close to the user’s workflow as possible 
* Ideally, the metric should be defined by a FinOps expert together with the representatives of the end-user team (EM if this is an engineering team, Finance Manager for FP&A, etc.)
* The metric set should be maintained centrally by FinOps team with the premise that it is dynamic by nature
  * All unit metrics should be actionable; if a unit metric is not actionable for a specific team, it should be changed
* The proposed metric(s) should have an acceptable level of correlation between its value and use of cloud-based resources

### Who collects the data (push vs. pull)?
* This depends on the culture of the company and even on a specific team that is an end-user of the metric
* Usually, pull is a more user-friendly approach, but it is not always possible (especially if the unit metric denominator is something complex, like logs, and the central FinOps team does not have engineering capabilities or expertise to process the data)
* If you are considering push, think about which system components will need to push data to some type of centralized log or database
* Regardless of the collection approach you choose, bringing the metrics you use into a central location for processing, analysis and reporting will be necessary

In the beginning, the most important thing is to get started! With your first unit cost metric identified and the data necessary to calculate it flowing, be prepared to learn a few new things about your system and its use. Preparing the data and sharing those insights can be a powerful way to build support and encourage your organization to more broadly incorporate unit cost metrics into your cloud operations. 

With your first metric under your belt, use the Cloud Unit Economics maturity model as a guide to planning your next steps and achieving more impactful use and adoption.

![Here's a look at unit cost by FinOps maturity level](/img/unit-economics/unit-economics-2.png)

The path you take will ultimately be dependent on the architecture of your organization. During the crawl phase of adopting Cloud Unit Economics, it is best to start with metrics that can be supported by existing data sources such as logs, data warehouses, or APM platforms. 

### Example: Cost per Customer

Cost per-customer (or cost-per-tenant) is a common goal that can typically be applied to most organizations and is often a good metric to start with. Using the maturity model as a guide, you could achieve cost-per-customer using the following process:

#### Crawl: Cloud Only
Depending on the complexity of the application, this may also be done in multiple phases, where some cloud costs are handled initially as “direct” and others “shared.”

#### Walk: Cloud + SaaS
This could include things like Datadog, ServiceNow, or PagerDuty. Once you start bringing in SaaS tools, you may need to work with the team responsible for that product to understand the KPIs they care about and how they quantify time spent. Using ServiceNow as an example, the support team may be tracking usage based on the number of comments instead of the number of tickets. Or placing different SLAs on different types of tickets. 

#### Run: Cloud + SaaS + Human Capital
Depending on the organization and emphasis on professional services, this may be an earlier phase. This is bringing in costs like technical support or account management.

The run phase is typically when a firm starts collecting more than one metric for various parts of a complex system getting more granular over time.

### Do what's right for your organization
In other situations, engineering might play a more central role in your FinOps organization, and you can leverage engineering time to produce the necessary metrics. This might be where organizations start their journey, or it might be where you ultimately end up. Regardless of the resources you have at your disposal, start small and focus on clear metrics that will be tangible to all stakeholders. 

Through all of this, the centralized function of FinOps should be apparent: the FinOps team should be responsible for maintaining the Cloud Unit Metrics repository and be capable of clearly articulating their business value. Without it, a company can end up with “one metric to rule them all” or a bunch of clashing metrics.

## Who Should Own Unit Economics in the Organization?

Unit Economics typically will fall into several categories that follow FinOps personas. If you aren't familiar with FinOps personas involved with building and operating your practice, [catch up on the personas page](https://www.finops.org/framework/personas/).

|                 |                                                      **BUSINESS**                                                      |                                           **BUSINESS**                                          |                                                                **TECHNOLOGY**                                                               |                                    **FINANCE**                                   |                                              **FINOPS**                                              |
|-----------------|:----------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
|                 |                                                       <img src="/img/framework/persona-executive.svg">Executives|<img src="/img/framework/persona-product.svg" width="131">Product Owner|<img src="/img/framework/persona-engineer.svg" style="width:75%">Engineering and Operations|<img src="/img/framework/persona-finance.svg" style="width:75%">Finance/Procurement| <img src="/img/framework/persona-finops.svg">FinOps                                                |
|  **INPUT**  | A CTO/ CIO / CFO should own the initiative of Unit Economics and determine scope as it relates to coverage of Products | VP of Product / Product Owners should collaborate with Finance to determine key product metrics | VP Engineer collaborate with Product Owners define input requirements for metrics to best determine how to collect metric data from systems | Finance should collaborates with Product Owners to determine key product metrics | FinOps should be aware of executive scope and identify gaps in cost allocation alignment to strategy |
| **OUTPUT** |                             Actioning on business decisions as a result of cost metric data                            |            Define frequency of reviewing unit cost and determine benchmark thresholds           |                                  Support solutioning automation and identify blockers to outputting metrics                                 |          Actioning on business decisions as a result of cost metric data         |                              Integrate cost allocation with cost metrics                             |

**NOTE:** This table is best viewed on a wide viewport, like a desktop or tablet.

## When to Start

  ***More to come in a future sprint...***

## Potential Challenges and Barriers to Adoption

  ***More to come in a future sprint...***

{% include story-loop.md %}

## How to contribute more FinOps stories about this challenge
There are many more stories to tell. If you have your own perspectives on tackling this challenge or topic, submit your story to our WG, or contribute to the FinOps Framework GitHub repo.

See our [contribution guidelines](/projects/overview/) for more details.

## References and Sources
* [What is a Unit Metric, AWS](https://aws.amazon.com/blogs/aws-cloud-financial-management/what-is-a-unit-metric/)
* [Selecting a Unit Metric to Support Your Business, AWS](https://aws.amazon.com/blogs/aws-cloud-financial-management/selecting-a-unit-metric-to-support-your-business/)
* [Unit Metrics in Practice: Lessons Learned, AWS](https://aws.amazon.com/blogs/aws-cloud-financial-management/unit-metrics-in-practice-lessons-learned/)
* [Unit Metrics Help Create Alignment Between Business Functions, AWS](https://aws.amazon.com/blogs/aws-cloud-financial-management/unit-metrics-help-create-alignment-between-business-functions/)
* [What Are Unit Economics?, Lighter Capital](https://www.lightercapital.com/blog/what-are-unit-economics)
* [How to Calculate Unit Economics for Your Business, Masterclass](https://www.masterclass.com/articles/how-to-calculate-unit-economics-for-your-business)
* [A Guide to Unit Economics, FundSquire](https://fundsquire.com.au/guide-unit-economics/)

## Thank you to all our Project contributors

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'unit-economics' %}
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