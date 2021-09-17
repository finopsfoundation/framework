---

layout: default
tags: multi-cloud-tools
description: A guide that translates native cost management tool concepts across multiple cloud service providers.

---


# Multi-Cloud Tools and Terminology

## Abstract

Ensure that there are materials that help translate core tools and terminology concepts across multiple cloud service providers.

## Before you begin

You should understand the basics of how cloud computing works, know the key services on your cloud providers, including their common use cases, and have a basic understanding of billing and pricing models. Being able to describe the basic value proposition of running in the cloud and understand the core concept of using a pay-as-you-go consumption model are also necessary.

You'll also need to have a base level of knowledge of at least one of the three main public cloud providers (AWS, Azure, Google Cloud). For AWS, we recommend AWS Business Professional training or, even better, the AWS Cloud Practitioner certification. For Google, check out the Google Cloud Platform Fundamentals course. For Azure, try the Azure Fundamentals learning path. Each can usually be completed in a full day workshop.

## Relevant FinOps Framework components
To get the most out of this document, please review the following first:
* [Tagging and labeling](/framework/capabilities/tagging-labeling/)
* [Cost allocation](/framework/domains/allocate/)
* [Accurate Cloud Forecasts](/framework/projects/accurate-cloud-forecasts/)
* Invoice and Billing Reporting
* Reserved Instances, spot pricing and savings plans
* [Organizational Alignment](/framework/domains/organizational-alignment/)

If you have a strong handle on these subjects, please continue on to better understand how to approach this challenge.

## FinOps Tools Matrix
Each Cloud Service Provider has different tools available to help FinOps practitioners learn and practice efficient utilization of cloud resources.  There are tools and reports available that can help FinOps practitioners and companies plan their potential cost in advance of consumption, understand invoices, complete billing analysis, govern cost and optimize cost.  These tools have been enumerated in the FinOps Tools Matrix.

|  | GCP        | AWS           | Azure  |
| ------------- | ------------- | ------------- | ------------- |
| **Cloud Cost Planning** | GCP Pricing Calculator | GCP Pricing Calculator | Azure Pricing Calculator |
|  |  |  | Azure Pricing Calculator |
| **Billing and Reporting** | Google Cloud Billing Reports | AWS Cost Explorer | Azure Cost Management + Billing |
|  | Billing Export (BigQuery) | AWS Cost and Usage Reports | Azure usage and charges report |
|  | Pricing Export (BigQuery) | AWS Detailed Billing Reports |  |
|  |  | AWS Purchase Order Management |  |
|  |  | AWS Consolidated Billing |  |
|  |  | AWS Credits |  |
| **Detailed Billing Analysis** | Datastudio (BigQuery and BI Engine) | AWS Quick Sight | Azure Power BI |
|  | Looker Analytics Dashboard |  |  |
| **Invoicing** | Cost Table | AWS Invoices | Azure Invoices |
|  | Cost breakdown |  |  |
| **Forecasting** | Billing Forecast |  |  |
| **Tagging** | Resource Hierarchy | AWS Tag Editor | Azure Policy |
| **Alerts and Notications** | Budget Alerts | AWS Budgets | Azure Budgets |
| **Template Driven Deployment** | Terraform | AWS Cloud Formation | Azure Resource Manager |
| **Controls** | Quotas and Rate Limit APIs | Service Limits |  |
|  |  | AWS Instance Scheduler |  |
|  |  | Amazon Data Lifecycle Manager |  |
| **Recommendations** | Recommender | AWS Cost Explorer | Azure Advisor |
|  | Active Assist | Trusted Advisor | Azure Monitor |
|  | Google Cloud's operations suite (formerly Stackdriver) |  |  |
|  | Commitment Analysis |  |  |
| **Insights** | Billing Health Checks | CloudWatch |  |
|  |  | CloudTrail |  |
|  |  |  |  |



## Cost Management Terminology
Cloud Service Providers utilize different terms to mean the same or similar things.  This can make understanding cloud concepts across providers difficult.  This terminology generated from this project was created to help FinOps practitioners translate these common terms across Cloud Service Providers and has been incorporated into [the FinOps Terminology page here](https://www.finops.org/resources/terminology/).


#### Three Letter Acronyms
Cloud cost management is not void of its own set of TLA's.  As a community the goal is to collect a list of three letter acronyms that are relevant and frequently used in daily cloud cost management.  

| TLA |	Meaning |
|---:|:---|
| AWS	| Amazon Web Services |
| CSP	| Cloud Service Provider |
| GCP	| Google Cloud Platform |
| KPI	| Key Performance Indicator |
| TAC	| Technical Advisory Council |


## Real-world stories
We're still editing our user stories for this project. Hang tight. Thanks to everyone who contributed a story!

{% include story-loop.md content='multi-cloud-tools' %}

## Acknowledgements
The FinOps Foundation extends a huge thank you to the members of the Working Group that broke ground on this documentation:
* Kim Wier
* Ron Tatro
* Vivek Enniriyil
* Amitai Rottem
* Eric Lam
* Kym Martin
* Nathan King

If we’ve missed anyone, let us know. We thank you all for your contributions.
