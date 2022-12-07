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
type: Playbook
source: Foundation Contribution
label:
cloud-provider:
  - Multi-Cloud
framework-capabilities:
  - capability_unit-costs
weight: 10
---

# Introduction to Cloud Unit Economics

## Abstract
Our Working Group introduces this practical guide about cloud unit economics. Our mission with this project is to create common ground, identify standards, and build a better understanding of what cloud unit economics are and how they can be leveraged by your organizations as part of a greater FinOps strategy.

## Contents
* [Executive Summary](#executive-summary)
* [What Is Cloud Unit Economics?](#what-is-cloud-unit-economics)
* [FinOps Capabilities and Terminology to Review](#finops-capabilities-and-terms-to-review)
* [Why Cloud Unit Economics Is Important](#why-cloud-unit-economics-is-important)
* [When to Start](#when-to-start)
* [How to Get Started](#how-to-get-started)
* [Potential Challenges and Barriers to Adoption](#potential-challenges-and-barriers-to-adoption)
* [Closing Thoughts](#closing-thoughts)

*Future sprints will add new content based on community suggestions and feedback.*

## Executive Summary
The cloud's ability to scale resources up and down to align with current demand requirements, often referred to as *elasticity*, is simultaneously both one of the key benefits of cloud computing and its greatest liability. 

This elasticity and the cloud’s inherent variable cost structures (that made the emergence of FinOps inevitable) have created new financial and operational challenges that require the creation of systems and processes to measure the variable costs and usage metrics associated with these dynamic infrastructure changes. This document focuses on *Cloud Unit Economics* as one such system that can bring a number of solutions.

Cloud Unit Economics is the specific application of the broader concept of unit economics to the cloud computing domain. Below you will find an introduction to its practical application and a methodology to quantify the associated cost and usage metrics of elasticity. 

This document also covers how the application of unit economics can enable cloud-driven organizations to build more efficient systems and ultimately provide a common language to align both business and engineering leaders.


## What is Cloud Unit Economics?

> "One of the most important concepts in FinOps is unit economics"

*- Chapter 1: What is FinOps, Cloud FinOps: Collaborative, Real-Time Cloud Financial Management*

The FinOps Foundation define [six principles](https://www.finops.org/framework/principles/) that serve as guidance for the FinOps professional. Why do they specifically call out unit economics? What makes it such an important concept?

In short, it’s because Cloud Unit Economics directly supports each principle. Just like the FinOps practice as a whole, Cloud Unit Economics is not a goal in and of itself, but rather a powerful system for achieving the maximum return on your cloud investment in pursuit of the six principles of FinOps.

### So, what exactly is Cloud Unit Economics?

Cloud Unit Economics can be defined as a system of profit maximization based on objective measurements of how well your organization is performing against, not only its FinOps goals, but as a business in the market. Cloud Unit Economics achieves these noble goals by leveraging the measurement of marginal cost (a.k.a., unit cost metrics) specific to the development and delivery of cloud-based software and marginal revenue (a.k.a., unit revenue metrics). 

By calculating the difference between marginal cost and marginal revenue, you can determine where your cloud operations break even and begin to generate a profit — an important concept in economics overall and one of the most effective ways to make data-driven business decisions regarding your cloud investment.

#### A note on cloud unit economics to non-profits or the public sector

This document was written mostly with commercial SaaS and cloud-driven commercial organizations in mind. But, Cloud Unit Economics can be applied to other types of organizations. While most companies measure their success in revenue or profit, a public sector organization (e.g., federal, state, or local government) or nonprofit does not. Instead, value is typically measured in terms of the success (or failure) of the delivery of civic goods or services. 

In addition, the value may be derived through the accurate forecasting of overall spending to maximize the use of budgeted resources. If you want to apply Cloud Unit Economics to a non-profit or a public sector entity, simply replace the words *profit* or *revenue* with *value*.

### Using Cloud Unit Economics?

Cloud unit economics can unlock the following benefits:

**Quantify the cloud’s role in your financial performance.** Cloud Unit Economics is an effective tool for a company’s management, investors, and employees to understand its financial performance.

**Forecast profitability.** Based on a unit cost analysis, unit economics shows how profitable a business is or how soon it will achieve profitability, and what factors are affecting its margins.

**Build a plan for cloud cost optimization.** Cloud Unit Economics allows companies to understand whether their product is overpriced or undervalued. This can help them identify what should be optimized, and how.

**Evaluate a product’s future potential.** Relying on Cloud Unit Economics, businesses can better understand what products and features customers are using, making it easier to make changes to product roadmap and engineering priorities.

**Drive more responsible use of cloud resources by end users.** Cloud Unit Economics can be used to measure the impact of end-user behavior on cloud costs, and to drive more cost-conscious behavior. If the end users are internal (employees), unit economics can spotlight opportunities for improved usage, such as not retaining too many copies of files, etc. If the end users are external (customers), unit economics can spotlight areas where usage may need to be shaped/governed via throttling, incentives to change behavior, etc.

Ultimately, by quantifying the cost to produce or the cost to serve, **cloud engineers can articulate their contribution to gross profit margin** due to the architectural, development, and operating choices they make. Product teams will have key data points to support pricing decisions, and the business will be able to forecast cloud costs better even though cloud resource consumption is variable.

Cloud Unit Economics also supports a broader set of metrics used to evaluate the profitability of products and customers. These include:

* **Contribution margin** - [Contribution margin](/resources/terminology/#unit-economics) is the gross profit derived from selling one more unit of a product or service
* **customer lifetime value (LTV)** - the total worth to the business of a customer’s relationship
* **customer acquisition cost (CAC)** - the cost of winning over a customer to use your product or service which ties into the customer lifetime value metric.  

## FinOps Capabilities and Terms to Review
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Cloud Unit Economics is a key way to communicate both the cost and the value of everything an organization is doing in the cloud. As such, it depends on key interactions across all other FinOps domains, and understanding their definitions is important. We recommend reviewing the following Capabilities before proceeding with the rest of the playbook.</em></p>
</div>

  * **[Data Analysis](https://www.finops.org/framework/capabilities/analysis-showback/)** and **[Cost Allocation](https://www.finops.org/framework/capabilities/cost-allocation/)** are fundamental to effective unit cost measurement
  * **[Forecasting](https://www.finops.org/framework/capabilities/forecasting)** and **[Budget Management](https://www.finops.org/framework/capabilities/budget-management/)** have clear intersections in terms of budgeting not only for expected cost but for the cost of supporting a demand that also must be forecast
  * **[Strategic decision-making](https://www.finops.org/framework/capabilities/decision-accountability-structure)** should be driven more by unit costs than total costs whenever possible
  * **[Optimization activities](https://www.finops.org/framework/capabilities/utilization-efficiency/)** should be aligned to reach or maintain unit metric target objectives
  * **[FinOps culture](https://www.finops.org/framework/capabilities/establish-finops-culture)** — the way we incentivize our engineers, the way we communicate cloud cost and quantify value — is best expressed in terms of unit metrics

To get the most value and understanding from this playbook, review [relevant Unit Economics and general FinOps terms](/resources/terminology/#unit-economics) before proceeding. Important terms will also be linked to definitions throughout the playbook.

## Why Cloud Unit Economics is important
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Measuring <a href='/resources/terminology/#unit-economics'>Unit Economics for Cloud IT</a> is as important as it is complex. The ability to understand current costs, and to predict what future costs will be and should be, is directly tied to an organization’s Unit Economics capabilities.</em></p>
</div>

More specifically, Unit Economics capabilities are critical to understanding:

  * The connection between current business demand and cloud costs, at levels such as per customer, per feature, per product, etc.
  * How predicted changes in business demand will impact future cloud costs, based on maintaining status quo consumption, architecture, provisioning patterns, etc.
  * What your future cloud costs should be – if wasted spend is minimized by optimization, improved end-user consumption, and more efficient architectural patterns.

Complexity stems from many sources, including variable cost models, shared resources, on-demand provisioning, and disparate/siloed data sets. But organizations that effectively address this complex problem space will be rewarded with insights that will empower them to maximize the business advantage they obtain in the cloud.

### Common Examples of Unit Economics in Use Today
One of the goals of this document is to help you learn how you might put Cloud Unit Economics to work for your organization. One of the most important details to determine upfront as part of your Cloud Unit Economics journey is what key metric best serves your business needs. 

Consider using the following examples to kick start that journey and to give you a taste of what is possible:

* A Financial RiskOps SaaS company might measure their cost per analyzed financial transaction, which is not only tied to the company's [cost to serve](/resources/terminology/#unit-economics), but also to how they price and package their products.
* A Governmental organization launching an application to let residents request literature might measure the cost per user to understand better how the site usage affects their costs.
* An Online Hotel Booking company might measure the cost of creating a reservation to learn how their costs change and forecast their costs during more popular travel times.
* A Rideshare company might measure the cost per ride by the time of day to determine the most cost-effective times to transport customers.
* A Video Conferencing SaaS company might measure the cost per active user and track who their most expensive customers are.
* A professional services firm might measure the cost per engagement team, and identify which teams are driving high costs with excessive discretionary application usage and/or file storage.

Cloud Unit Economics is a universally useful system, but there’s no one-size-fits-all approach to metrics. The right metrics are a product of what you do, who you serve, how big you are, and any other defining factors about your business.

Another way to look at cost to produce is managing and tracking costs of non-production costs. 

* **Financial -** R&D costs and comparative costs by tech stack
* **Technology/Engineering -** Unit rates per [Cost to Produce](/resources/terminology/#unit-economics) (Is there fat in the cost in non-production), Future architecture * deployment cost options based on service whitelist, etc.
* **Forecasting -** Future production cost

And Cost to serve is once the promotion to production begins.

* **Sales -** Tracking outliers that may be less profitable or abusive customers
* **Financial -** Gross margins, cost
* **Technology/Engineering -** Unit rates (blended costs based on how you buy cloud)
* **Forecasting -** Future growth and trending potential cost

## How Cloud Unit Economics Benefits FinOps?
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Cloud Unit Economics metrics provide a common language that enables Engineering, Finance and Business stakeholders to understand and discuss cloud spend in a meaningful way. They translate the esoteric language of the cloud bill into units of business value that resonate with stakeholder groups.</em></p>
</div>

In so doing, they become the fuel that powers the inter-departmental collaboration required for FinOps to succeed. Conversations about absolute spend can move to focusing on the amount of business value achieved per unit of cloud spend:

  * Cost per transaction/customer
  * Cost per release
  * Cost per acquired customer during a Marketing campaign

By tying cloud spend to business value, Cloud Unit Economics metrics provide insights that enable stakeholder groups to make informed decisions about how best to use the cloud to maximize business advantage. In an organization with mature Cloud Unit Economics capabilities, these measurements should function as primary drivers for business decisions, increasing the value of FinOps to the organization.

Cloud Unit Economics metrics also enable organizations to benchmark the performance of internal teams and the organization as a whole, when compared to industry competitors. They make it easier to identify areas for improvement and to establish efficiency targets:

  * Reduce cost per unit sold by x%
  * Increase revenue per dollar of cloud spend by y%
  * Improve margins by z% through more cost-effective architectural patterns

Additional motivations to practice Cloud Unit Economics in FinOps include:

![A chart of motivations to include unit economics in your FinOps practice](/img/unit-economics/unit-economics-3.jpg)

  * Quantify the impact of cloud spend on business performance at granular levels
  * Improved forecasting capabilities
  * Improved data for product strategy and pricing decisions
  * Identify market segments and products in which to invest, and those which should perhaps be de-emphasized or exited altogether
  * Generate cost-to-produce and cost-to-serve value measurements
  * Use uniform broad measurements to compare the performance of products and teams.
  * Expose the level of elasticity in cloud costs (the extent to which cost changes correspond to demand changes)
  * Fair Showback and Chargeback
  * Distinguish cost changes due to architectural changes from those due to demand changes
  * Identify optimization levers

Examples of Cloud Unit Economics by measurement categories include:

| **BUSINESS   (Sales based on the way products are sold)** | **FINANCIAL (Service component value indicator)** | **TECHNICAL (Sum of FinOps tactics and engineering choices at infra value layer)** |
|-----------------------------------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------|
| Cost per weekly active user                               | Cost per core hour                                | Cost variance reductions                                                           |
| Cost per million transactions                             | Cost per GB of RAM                                | Spend risk reductions                                                              |
| Cost per million in revenue                               |                                                   |                                                                                    |

## When to Start
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Unit Economics should be discussed at the very beginning of the FinOps Journey; it will provide a stronger link with several stakeholders, especially at the business level when the only information they receive is a big cloud bill (and potentially growing month on month).</em></p>
</div>

As the “How to Get Started” chapter explains, there are different stages during the adoption until it’s fully mature, nevertheless the discussions about defining the key metric(s) should begin as soon as the stakeholders are engaged. 

Identifying the key metric(s) must be a priority and to be done as early as possible to allow the building of a prototype of how to collect and represent the outcome, but also will allow engineers to enable integration between the different systems to capture the data in a consistent and recurrent way, and give business stakeholders a clear view of what is contained and represented.

Once the key metric(s) are defined and tested, it’s time to start a journey of evolving them, by creating a systematic way to collect and process the information, and by enriching the core metric(s) with additional information (e.g performance, location, date/time, behavior).

The metric(s) should not be static, and should evolve according to business objectives, additional insights gained during time or any other reason that would bring clearer visibility about unit economics; this could imply changing the definition of the key metric(s), creating new ones, or even stop tracking.

Delaying this workstream has some additional downsizes, such as potential loss of revenue margin due to higher cloud-related costs, hide real cost of running a system in cloud, demotivation of the teams (e.g. business teams don’t understand the costs, engineers won’t be seeing a direct impact on cost reductions, finance teams will see an invoice getting bigger and bigger).

## How to Get Started
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Oftentimes, Unit Economics starts with sales and marketing to better understand cost per customer, cost of customer acquisition or cost of customer retention, using profit and loss numbers like revenue, COGS, or expenses as part of the Unit Economics calculations. Cloud Unit Economics uses cloud infrastructure <a href='/resources/terminology/#unit-economics'>unit cost</a> as part of the value measurement calculation.</em></p>
</div>

Building a sustainable Cloud Unit Economics practice starts with a strong unit cost model. Seek out people in your organization who are already thinking about or doing it at some level, even if not in the area of cloud spend. Enlist their support to build momentum for this important work. Courage is required; don’t be afraid of publishing a draft version of a model that has deficiencies. Sharing work early and widely is important to obtaining the feedback necessary to improve future iterations. 

Planning should start as early as possible to identify the metric or metrics needed to collect meaningful data.  This may give direction to engineering teams on the necessary data points to be collected later. Collecting and processing the data should happen as customers start onboarding a system.

### Who defines the first metric?

![Aligning key principles to help define unit economics metrics](/img/unit-economics/unit-economics-4.jpg)

**Key principles:**
* There is most likely no single metric to rule them all
* [Unit metrics](/resources/terminology/#unit-economics) should be as close to the user’s workflow as possible
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

#### Walk: Cloud + SaaS + Licenses
This could include things like Datadog, ServiceNow, or PagerDuty or BYOL (Bring Your Own License) like Windows or SQL Server which are run on cloud infrastructure. Once you start bringing in SaaS tools or Licenses, you may need to work with the team responsible for that product to understand the KPIs they care about and how they quantify time spent such as the SAM or ITAM team.

#### Run: Cloud + SaaS + Hybrid Costs + Human Capital
This is bringing in costs like labor or even on-premise costs that support a particular product or service. The run phase is typically when a firm starts collecting more than one metric for various parts of a complex system getting more granular over time.

*Above is courtesy of Cloud FinOps, Fuller & Storment, 2022.*

### Do what's right for your organization
In other situations, engineering might play a more central role in your FinOps organization, and you can leverage engineering time to produce the necessary metrics. This might be where organizations start their journey, or it might be where you ultimately end up. Regardless of the resources you have at your disposal, start small and focus on clear metrics that will be tangible to all stakeholders. 

Through all of this, the centralized function of FinOps should be apparent: the FinOps team should be responsible for maintaining the Cloud Unit Metrics repository and be capable of clearly articulating their business value. Without it, a company can end up with “one metric to rule them all” or a bunch of clashing metrics.

## Who Should Own Unit Economics in the Organization?
<div class="flow-root bg-green-500 rounded-lg px-6 border-solid border-gray-100 border">
<p class="text-base text-white"><em>
Unit Economics typically will fall into several categories that follow FinOps personas. If you aren't familiar with FinOps personas involved with building and operating your practice, <a href='https://www.finops.org/framework/personas/'>catch up on the personas page</a>.</em></p>
</div>

|                 |                                                      **BUSINESS**                                                      |                                           **BUSINESS**                                          |                                                                **TECHNOLOGY**                                                               |                                    **FINANCE**                                   |                                              **FINOPS**                                              |
|-----------------|:----------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
|                 |                                                       <img src="/img/framework/persona-executive.svg">Executives|<img src="/img/framework/persona-product.svg" width="131">Product Owner|<img src="/img/framework/persona-engineer.svg" style="width:75%">Engineering and Operations|<img src="/img/framework/persona-finance.svg" style="width:75%">Finance/Procurement| <img src="/img/framework/persona-finops.svg">FinOps                                                |
|  **INPUT**  | A CTO/ CIO / CFO should own the initiative of Unit Economics and determine scope as it relates to coverage of Products | VP of Product / Product Owners should collaborate with Finance to determine key product metrics | VP Engineer collaborate with Product Owners define input requirements for metrics to best determine how to collect metric data from systems | Finance should collaborates with Product Owners to determine key product metrics | FinOps should be aware of executive scope and identify gaps in cost allocation alignment to strategy |
| **OUTPUT** |                             Actioning on business decisions as a result of cost metric data                            |            Define frequency of reviewing unit cost and determine benchmark thresholds           |                                  Support solutioning automation and identify blockers to outputting metrics                                 |          Actioning on business decisions as a result of cost metric data         |                              Integrate cost allocation with cost metrics                             |

**NOTE:** This table is best viewed on a wide viewport, like a desktop or tablet.

## Potential Challenges and Barriers to Adoption

### What do we measure?
It is important to clearly define what is being measured. For example, let’s say you are storing customer data so you decide to measure the cost-per-GB. Then, one of your engineers figures out a new way to further compress the data, cutting your storage needs by about 30 percent.

In this scenario, your cost-per-GB does not change even though your storage costs have decreased. Instead, it would be more meaningful to measure something like a cost-per-stored-item (whatever that may be). Using a cost-per-stored-item as a unit of measure in this same scenario would show a 30 percent reduction because you are storing the same amount of data with fewer GBs of storage.

Collaborating with all of the necessary organizational stakeholders to first determine what drives business value is essential to getting this part right. 

### Which financial inputs do we include?

Defining and agreeing on the type of costs to report (e.g.: include or not discounts, negotiated rates, optimizations, [shared costs](/resources/terminology/#unit-economics), support, any other operational related cost)
Once you’ve decided what to measure, it is imperative that you clearly delineate what financial inputs make up your unit costs.

Is your organization receiving an enterprise discount? Do you have a private pricing agreement with one of your vendors? Are you receiving bulk discounts on licensing costs? Do you amortize upfront payments for commitments? Regardless of which stage your organization is at in the crawl-walk-run cycle, it is important to consider these types of questions when measuring and reporting your unit costs.

### How many metrics are needed?

Expecting perfection when starting out is a huge barrier to success. Don’t let perfect be the enemy of good. Most often, a single metric can provide better information than a “peanut butter spread” allocation methodology for a product or service. A single metric based on usage is always better than taking total cloud spend and dividing it by a KPI like total number of customers. The unit metric has the ability to provide more nuanced information, like which customer is driving the most spend based on usage. A single metric may not be perfect, but it is a great place to start on your journey toward Cost-per-X. Integrate by observing your first unit metric and making an informed decision about whether there is a need for another metric.

The law of diminishing returns for investing in new metrics can happen quickly. Again, good enough is oftentimes substantially easier to achieve than perfection. Some firms may need several metrics to get to a solid Cost-Per-X while another firm might need only one.  Overcomplicating at the beginning will prevent you from starting and getting a return on investment for your efforts quickly.

## Closing Thoughts

Our WG hopes that by the time you read this, you have a better understanding of Cloud Unit Economics. It’s the start of a longer journey toward the practical application of unit economics best practices and building a methodology to quantify the associated cost and usage metrics of elasticity. 

There’s still much more to improve throughout this document as we socialize it with the rest of the community. Get in touch on [our Slack channel](https://finopsfoundation.slack.com/archives/C03P6FLHW3G) to:
  * Provide feedback on improving this playbook
  * Share content ideas that help us better define and explain unit economics
  * Recommend a working example of unit economics for us to work into this playbook
  * Discuss anything else or provide other types of feedback

<a href="javascript:void(0);" class="inline-flex justify-center py-2 px-4 text-sm leading-relaxed font-medium rounded-sm text-white border border-green-500 font-normal bg-green-500 hover:bg-green-600 hover:border-green-600 transition-colors duration-200" style="text-decoration:none" onclick="javascript:modalToggle('modal-contribute')">
  Suggest changes
</a>

### References and Sources
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

Lastly, a big thank you to the FinOps Foundation support team for helping us bring our work to life: Ashley Hromatko (Staff Sponsor), Samantha White (Program Management), Tom Sharpe (Design), and Andrew Nhem (Content).