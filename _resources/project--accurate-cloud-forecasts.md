---

layout: wide
permalink: /projects/forecasting-cloud-costs/

title: Forecasting Cloud Costs
description: A guide that walks through how finance, operations, and executives build models to forecast cloud spend and allocate budgets to business units.
page-identifier: project_forecast
search-keywords: cloud cost forecasting budgeting forecast budget reporting

identifier: projects
project-title: Accurate Cloud Forecasts
project-description: A guide that walks through how finance, operations, and executives build models to forecast cloud spend and allocate budgets to business units.
date-added: Sep 2021
type: Playbook
source: Foundation Contribution
label:
cloud-provider:
  - Multi-Cloud
framework-capabilities:
- capability_forecasting
weight: 10
---

# Accurate Cloud Forecasts

## Abstract

How finance, operations, and executives build models to forecast cloud spend and allocate budgets to business units.

## Introduction

You should understand the basics of how cloud works, specifically you should know the key services around compute and storage for the cloud providers your organization is using and their billing and pricing models. You will also need to understand financial processes around [forecasting](/framework/capabilities/forecasting), [budgeting](/framework/capabilities/budget-management/), procurement, and [allocations](/framework/capabilities/cost-allocation/).

Depending on the cloud providers your organization is using, you can gain some of this knowledge through training and certifications. Specifically for AWS we recommend the AWS Cloud Practitioner certification, for Google the Google Cloud Platform Fundamentals course, and for Azure, the Azure Fundamentals learning path.

<!-- ## Relevant FinOps Framework components
To get the most out of this document, please review the following first:
* [Tagging and labeling](/framework/archive/v0.1/capabilities/tagging-labeling/)
* [Cost allocation](/framework/archive/v0.1/domains/allocate/)
* Cost-centric ownership
* [Implementing FinOps training for engineers](/framework/capabilities/learning/)
* [Business metrics / KPIs](/framework/archive/v0.1/kpis/)
* [Building a FinOps culture](/framework/principles/)
* [Organizational Alignment](/framework/archive/v0.1/domains/organizational-alignment/)

If you have a strong handle on these subjects, please continue on to better understand how to approach this challenge.

See also, [Relevant Terms and Concepts](#appendix), now an appendix section to this project. -->

## How to address cloud forecasting?
Fundamentally there is a potential gap between engineers, finance, and procurement where finance has financial reporting responsibilities, and procurement has accounting responsibilities, and both need assistance from engineers and leadership to meet these obligations.

In this section we are going to analyze the challenge around [cloud forecasting](/framework/capabilities/forecasting) to identify how we can overcome it and we will also provide examples of how companies of different types and [FinOps maturity levels](/framework/phases/) tackle cloud forecasting.

## What are the challenges with cloud forecasting?
Unfortunately there is no one forecasting method that fits all situations.

Cloud spend is variable which is inherently difficult to predict. Specifically engineers can start workloads at any time typically without having to go through a procurement process.

Forecasting cloud-provider consumption as product or service consumption requires specific data and tooling to be consistently available. Billing and reporting from cloud providers is difficult to understand and explain to traditional finance teams.

Workloads need to be clearly defined whether through tagging or account structures so that cost can be [attributed back to them and their owners](/framework/capabilities/chargeback/).

## Breaking the challenge into addressable parts
### Tagging and cost allocation
[Tagging or labeling](/framework/capabilities/cost-allocation/) is the foundation of telling apart workloads in the cloud, identifying ownership, and attributing costs to teams. Depending on the maturity of the organization, tagging may be manual, use automated tag hygiene monitoring, or integrated in CI/CD pipelines with tag-or-terminate policies in place.

Even in a best case scenario where everything taggable has been tagged in the cloud, not all cloud resources support tagging. This means that untaggable costs, like network traffic, need to be apportioned to the workloads responsible for incurring their cost.

To be able to identify ownership and attribute cost back to teams, additional tags are needed like for example cost center, VP, business unit, department, or owner, which is typically the engineer or automation that launched the workload. Which of these tags your organization will use depends on the tagging standard and your organizational structure.

Tags may also change over time, when applications are decomposed into micro services, or when organizational changes require a renaming of tags. Any system relying on tags needs to be able to handle versioning of tags to follow these changes and represent cost data accurately.

### Communication
A key capability of FinOps is to enable communication between executives, finance, business, and engineers. FinOps practitioners need to strive to build a [culture of communication](/framework/capabilities/establish-finops-culture) to enable fast and high quality decision making.

A common challenge in cloud forecasting related to communication is that the people working on a forecast are not being included in decisions that substantially impact the forecast. This includes project scope changes that affect cloud spend.

### Forecast frequency
Finance will have specific requirements of when forecasting is due and how frequently forecast updates are needed. Most common is an annual forecast that is due close to the end of the fiscal year of the company. Intermediate forecasts may be necessary to update budgets based on business drivers.

### Forecasting models
Depending on the maturity of an organization, specific prediction models will be easier to implement, for example trend based forecasting versus driver based forecasting. Finance will also have requirements around forecast granularity and frequency depending on their fiscal reporting requirements.

### Forecast accuracy
Identifying workloads performing substantially over or under when comparing forecast to actuals. For driver based forecasting identifying why workloads scale differently from their drivers. Layering in [discounts](/framework/capabilities/manage-commitment-based-discounts/), optimizations, and prepayments.

Cloud spend materiality defines where the organization focuses their resources. Lack of cloud forecasting accuracy will not be addressed until it has become a larger problem and has executive attention and sponsorship.

### Estimating cloud cost
New cloud workloads that do not exist in the cloud yet, or new features of existing workloads that are a substantial addition, like high availability and disaster recovery or persistency models such as databases being added, will require manual estimating of these new costs.

All major cloud providers offer web-based cost calculators that allow modeling of non-existent workloads in the cloud and provide a cost estimate. However the cost estimate is only as good as the detailed model is. Typically the best resource to build the model is the engineer that is going to launch the new workload as they have in-depth subject matter knowledge.

The challenge here is that the engineer may not have a perfect view of how the actual cloud workload will look once it is launched. Common mistakes are to forget to model a specific aspect of the workload like data transfer, or to overprovision compute resources as utilization in the cloud is not yet known.

An iterative approach is recommended where the engineer revises the initial model and shares the updated estimates with the forecasting team so they can update the numbers in the forecast and layer in the new estimate.

### Accountability
Once a forecast is created FinOps can add value by configuring Budget alerts in AWS or spending quota in Azure to support accountability of actuals versus budget.

### Cost Optimization
You want to analyze your cloud cost and make sure people are [not wasting resources](/framework/capabilities/utilization-efficiency/). It is best to look at your data and see if there are any improvements that can be made to your infrastructure. This helps in getting an accurate baseline to be able to forecast from.

### Training and improving maturity
FinOps & Technology training (e.g. cheaper services replacing more expensive ones)

## Identifying ownership and accountability
Here are common FinOps roles and their responsibilities and expectations as they relate to building accurate cloud forecasts.

See also, [*Establishing a FinOps Decision & Accountability Structure*](/framework/capabilities/decision-accountability-structure)

### Executives
Are the primary sponsors for process improvements around cloud usage. FinOps needs their understanding, buy-in, and support so that improvements can trickle down the organizational hierarchy.

### Finance
Is the main consumer of forecasts and will drive frequency, granularity, and quality requirements around forecasting.

### Procurement
Has established processes that need to be extended to cloud services and prepayment products such as reservations, savings plans, and committed use discounts.

### Cloud Operations
Are engineers tasked with day to day operations in the cloud across all business units. They are responsible for implementing requirements from the FinOps team or Cloud Center of Excellence (CCoE) around governance, efficiency, and security.

### Cloud Analytics
Are engineers focussing on visibility and reporting in the cloud across all business units? They are responsible for building actionable, accurate, consistent, near real-time insights for engineers, leadership, and finance based on requirements from the FinOps team or CCoE.

### FinOps / CCoE
Gathers requirements for FinOps processes and practices, gets buy-in from executives, and communicates requirements and deliverables to engineering leaders.

### Engineering leaders
Communicate FinOps processes and practices to engineers, provide training opportunities, validate that processes are followed, and reward positive outcomes.

### Engineers
Are the front-line executioners of FinOps processes and practices. Finance relies on them for quality tagging for cost attribution to be accurate.

## How different forecasting methodologies apply to different maturity phases

### Forecasting (trend-based)
Uses historic trends to forecast future spend. Ideally this takes seasonality into consideration. Seasonality can include annual peaks during holidays but also daily peaks when more people are using a service during specific hours of the day.

Trend based forecasting will not be able to capture out-of-band events such as launching a new product or feature, launching in a new country, or the effect of TV commercials on consumer behavior.

### Driver based forecasting
Uses Key Performance Indicators (KPIs) to forecast the effect on business results. KPIs can be things like active accounts, widgets sold, ad impressions and so forth. The business will forecast the KPIs factoring in organic growth, like more people on the Internet, and inorganic growth, like new launches and marketing efforts. Cloud workloads that scale based on a specific business KPI are forecasted by applying the KPI growth on actual spend.

Driver based forecasting will not be able to forecast workloads that don't exist in the cloud yet but are planned to be launched in the future.

### Rolling Forecast

To predict next month, quarter, and year. It allows companies to adjust their plans based on any shifts in the business such as economic changes, COVID as an example. As the economy changed a rolling forecast would be adjusted to forecast that change and allow the company to alter their plans with the new data.

### Static Forecast
Predict for the fiscal year only with no adjustments.

### Special projects
Are planned cloud workloads that currently do not yet exist in the cloud. Their cost needs to be estimated by engineers and layered into trend or driver based forecasting to get a complete picture of future cloud spend. Special projects can also be costs that will not materialize on the cloud bill like licensing fees, professional services, or small workloads running on other cloud providers where automation isn't feasible.

## How tools can help with cloud forecasting
Tools are very helpful when it comes to forecasting because they have sophisticated algorithms to apply to your usage/cost data.

## Acknowledgements
The FinOps Foundation extends a huge thank you to the members of the Special Interest Group that broke ground on this documentation:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'forecasting-2021' %}
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

If we’ve missed anyone, let us know. We thank you all for your contributions.

## Appendix

### Relevant Terms and Concepts

Terms that were previously in this appexdix can be found on the [FinOps Terminology page](/resources/terminology/#forecasting).
