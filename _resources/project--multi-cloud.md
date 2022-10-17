---

layout: wide
permalink: /projects/multi-cloud-tools-and-terminology/

title: Multi-Cloud Tools and Terminology
description: A guide that translates native cost management tool concepts across multiple cloud service providers.
page-identifier: project_multi-cloud
identifier: projects
project-title: Multi-Cloud Tools and Terminology
project-description: A guide that translates native cost management tool concepts across multiple cloud service providers.
date-added: Sep 2021
type: Guide
source: Foundation Contribution
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:
weight: 10
---

# Multi-Cloud Tools and Terminology

## Abstract

Ensure that there are materials that help translate core tools and terminology concepts across multiple cloud service providers.

## Before you begin

You should understand the basics of how cloud computing works, know the key services on your cloud providers, including their common use cases, and have a basic understanding of billing and pricing models. Being able to describe the basic value proposition of running in the cloud and understand the core concept of using a pay-as-you-go consumption model are also necessary.

You'll also need to have a base level of knowledge of at least one of the three main public cloud providers (AWS, Azure, Google Cloud). For AWS, we recommend AWS Business Professional training or, even better, the AWS Cloud Practitioner certification. For Google, check out the Google Cloud Platform Fundamentals course. For Azure, try the Azure Fundamentals learning path. Each can usually be completed in a full day workshop.

## FinOps Tools Matrix
Each Cloud Service Provider has different tools available to help FinOps practitioners learn and practice efficient utilization of cloud resources.  There are tools and reports available that can help FinOps practitioners and companies plan their potential cost in advance of consumption, understand invoices, complete billing analysis, govern cost and optimize cost.  These tools have been enumerated in the FinOps Tools Matrix.

|  | GCP        | AWS           | Azure  | OCI          |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **Cloud Cost Planning** | [GCP Pricing Calculator](https://cloud.google.com/products/calculator) | [AWS Pricing Calculator](https://calculator.aws/) | [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/) | [OCI Cost Estimator](https://www.oracle.com/cloud/costestimator.html) |
| **Billing and Reporting** | [Google Cloud Billing Reports](https://cloud.google.com/billing/docs/reports#billing-reports-tutorial) | [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) | [Azure Cost Management + Billing](https://docs.microsoft.com/azure/cost-management-billing/cost-management-billing-overview) | [OCI Cost Analysis](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm) |
|  | [Standard Billing Export to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#standard-usage-cost-data-schema) | [AWS Cost and Usage Reports](https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/)  | Azure usage and charges report | [OCI Cost and Usage Reports](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm) |
|  | [Detailed Billing Export to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#detailed-usage-cost-data-schema) | [AWS Detailed Billing Reports](https://docs.aws.amazon.com/cur/latest/userguide/detailed-billing.html) |  |  |
|  | [Pricing Export to BigQuery](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#pricing-data-schema) | [AWS Purchase Order Management](https://aws.amazon.com/aws-cost-management/aws-purchase-order-management/) |  |  |
|  |  | [AWS Consolidated Billing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html) |  |  |
|  |  | [AWS Credits](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-credits.html) |  |  |
| **Detailed Billing Analysis** | [Datastudio](https://cloud.google.com/billing/docs/reports#custom-reports) ([GitHub Solution](https://github.com/GoogleCloudPlatform/professional-services/tree/main/examples/cost-optimization-dashboard)) | [AWS Quick Sight](https://aws.amazon.com/quicksight/) | [Azure Power BI](https://docs.microsoft.com/power-bi/connect-data/desktop-connect-azure-cost-management) | [OCI Cost Governance and Performance Insights Solution](https://cloudmarketplace.oracle.com/marketplace/en_US/listing/83101510) |
|  | [Looker Analytics Dashboard](https://looker.com/platform/blocks/source/cloud-cost-management) ([GitHub Solution](https://github.com/llooker/gcp_billing_block)) |  |  |  |
| **Invoicing** | [Cost Table Report](https://cloud.google.com/billing/docs/reports#cost-table-report) | [AWS Invoices](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/getting-viewing-bill.html) | [Azure Invoices](https://docs.microsoft.com/azure/cost-management-billing/understand/download-azure-invoice) | [OCI Invoices](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/invoices.htm) |
|  | [Cost Breakdown Report](https://cloud.google.com/billing/docs/reports#cost-breakdown-report) |  |  | [OCI Payment History](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/paymenthistory.htm) |
|  | [Pricing Report](https://cloud.google.com/billing/docs/reports#pricing-table-report) |  |  | [OCI Billing Schedule](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/subscriptions.htm#subscription_billing_schedule) |
| **Forecasting** | [Billing Forecast](https://cloud.google.com/billing/docs/how-to/reports#cost-forecast) | [AWS Cost Explorer (Self-Service)](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html#reading-forecasts) |  | [Forecasting in Cost Analysis](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm#forecasting_costs) |
|  | | [AWS Budgets (Event-Driven)](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-view.html) | | | |
| **Tagging** | [Resource Hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy) | [AWS Tag Editor](https://docs.aws.amazon.com/ARG/latest/userguide/tag-editor.html) | [Azure Policy](https://docs.microsoft.com/azure/governance/policy/tutorials/govern-tags) | [OCI Tags](https://docs.oracle.com/en-us/iaas/Content/Tagging/home.htm) |
| **Alerts and Notications** | [GCP Budget Alerts](https://cloud.google.com/billing/docs/how-to/budgets) | [AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/) | [Azure Budgets](https://docs.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets) | [OCI Budget Alerts](https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/managingalertrules.htm) |
| **Template Driven Deployment** | [Terraform](https://cloud.google.com/docs/terraform) | [AWS CloudFormation](https://aws.amazon.com/cloudformation/) | [Azure Resource Manager](https://docs.microsoft.com/azure/azure-resource-manager/) | [Terraform](https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-provider/01-summary.htm) |
|  | [Cloud Deployment Manager](https://cloud.google.com/deployment-manager/docs#docs) |  |  |  |
| **Controls** | [Quotas and Rate Limit APIs](https://cloud.google.com/compute/quotas) | [Service Quotas](https://aws.amazon.com/cloudformation/) |  | [Quotas](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcequotas.htm) |
|  |  | [AWS Instance Scheduler](https://aws.amazon.com/solutions/implementations/instance-scheduler/) |  | [Enforcing Budgets using Functions and Quotas](https://blogs.oracle.com/cloud-infrastructure/post/enforced-budgets-on-oci-using-functions-and-quotas) |
|  |  | [Amazon Data Lifecycle Manager](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html) |  | |
| **Recommendations** | [Recommender](https://cloud.google.com/recommender/docs/recommenders) | [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) | [Azure Advisor](https://docs.microsoft.com/azure/advisor/) | [OCI Cloud Advisor](https://docs.oracle.com/en-us/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm)  |
|  | [Active Assist](https://cloud.google.com/solutions/active-assist) | [Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/?track=costma) |  |  |
|  | [Google Cloud's operations suite](https://cloud.google.com/products/operations#section-8) (formerly Stackdriver) |  |  |  |
|  | [Commitment Analysis Report](https://cloud.google.com/billing/docs/reports#cud-analysis-reports) |  |  |  |
| **Insights** | Billing Health Checks | [CloudWatch](https://aws.amazon.com/cloudwatch/) | [Azure Monitor](https://docs.microsoft.com/azure/azure-monitor/) |  |
|  |  | [CloudTrail](https://aws.amazon.com/cloudtrail/) |  |  |
|  |  |  |  |  |



## Cost Management Terminology
Cloud Service Providers utilize different terms to mean the same or similar things.  This can make understanding cloud concepts across providers difficult.  This terminology generated from this project was created to help FinOps practitioners translate these common terms across Cloud Service Providers and has been incorporated into [the FinOps Terminology page here](https://www.finops.org/resources/terminology/).


#### Three Letter Acronyms
Cloud cost management is not void of its own set of TLA's.  As a community the goal is to collect a list of three letter acronyms that are relevant and frequently used in daily cloud cost management.  

| TLA | Meaning |
|---:|:---|
| AWS | Amazon Web Services |
| CSP | Cloud Service Provider |
| GCP | Google Cloud Platform |
| KPI | Key Performance Indicator |
| OCI | Oracle Cloud Infrastructure |
| TAC | Technical Advisory Council |


## Resources

-  Google Cloud
   - [Google Cloud Architecture Framework: Cost optimization](https://cloud.google.com/architecture/framework/cost-optimization/){:target="_blank"}
   - [Cost Management on Google Cloud](https://cloud.google.com/cost-management#section-6){:target="_blank"}
- AWS
  - [AWS Well-Architected Framework: Cost Optimization Pillar](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html){:target="_blank"}
- Azure
  - [Microsoft Azure Well-Architected Framework: Cost Optimization Pillar](https://docs.microsoft.com/azure/architecture/framework/#cost-optimization){:target="_blank"}


## Thank you to all our Project contributors

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'multi-cloud' %}
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