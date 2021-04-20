---

layout: default
title: Just the Links - Volume 7
persona: engineering

---

# Resource Links

## [Rightsizing Recommendations Script](https://github.com/daknhh/rightsizing-recommendation)
Automation is everyone’s best friend. Pulls the right-sizing recommendations from Cost Explorer.

## [Is cost optimization “Good Housekeeping” or not?](http://www.cloudbombe.com/blog/qa-engineering-action/)
(From Mike Bradbury at the FinOps Foundation) First off this post is just scratching the surface of some fairly tough subjects and to attempt to answer them in a single blog post is admirable but probably probably missing out on some of the nuance. Regardless there are definitely some good thoughts here to consider especially in the second point.

## [Four lessons in cloud sourcing and consumption](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/unlocking-value-four-lessons-in-cloud-sourcing-and-consumption)
(Credit goes to Joe Daly for finding this) As follows:

* Sourcing and managing consumption of the cloud is a dynamic exercise: constant review is needed to determine if the assets in use are useful
* Cloud economics is a demand rather than supply game: because there is so much more flexibility in CSPs than in the traditional data center
* Granular visibility and forecasting are needed to optimize consumption of the cloud: another case for tagging, and why it’s important to derive unit-cost economics
* Cross-functional FinOps is essential to manage cloud sourcing and consumption: empowering this team to affect change is the key component

## [AWS Cloud Economics: Where Every Dollar Counts](https://aws.amazon.com/blogs/apn/aws-cloud-economics-where-every-dollar-counts/)
This post seemed to be more of a recruiting tool for Cognizant than anything, but there are some gems in here: the [Cognizant Cloud Steps Transformation Framework](https://www.cognizant.com/services-resources/Services/cognizant-cloud-steps-transformation.pdf) is much better filled out than the “Three Rs” framework we know and somewhat love, puts emphasis on tagging, considers network and architecture limits, and (my favorite) promotes FaaS and containers.

## [Operating Lambda: Logging and custom metrics](https://aws.amazon.com/blogs/compute/operating-lambda-logging-and-custom-metrics/)
Any time Lambdas are mentioned I take notice (see above). This post gives some tips on how to identify the metrics and logs that matter the most to you, thereby reducing unnecessary costs.

## [Lower your Amazon EFS costs by 47% with One Zone storage classes](https://aws.amazon.com/blogs/storage/lower-your-amazon-efs-costs-by-47-with-one-zone-storage-classes/)
Mentioned in [JtL Volume 5](https://finopsforengineers.substack.com/p/just-the-links-d2d), this posts answers some commonly asked questions regarding use cases, costs, lifecycle management, etc.

## [How to Lower Your Azure File Shares Costs with Hot and Cool Tiers](https://charbelnemnom.com/how-to-lower-your-azure-file-shares-cost-with-hot-and-cool-tiers/)
There are four tiers to Azure File Shares: premium (SSD), transaction optimized (HDD), hot (general purpose), and cool (cost efficient archives). This post walks you through creating hot and cool shares using Powershell, the Azure portal, and the Azure CLI.

## [Azure Cost Management and Billing Updates - March 2021](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/)
Some good updates this month:

* [Forecasted cost alerts](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/#budgets)
* [New cost view for subscriptions](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/#views)
* [New stuff in Cost Management labs](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/#labs)
* [Demystifying cloud economics](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/#pricing)
* [New ways to save](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-march-2021/#optimize): including saving on Azure Data Factory with reservations, improved spot virtual machines, and changing storage tiers with no downtime

## [Check, please! Billing in Cloud Storage](https://cloud.google.com/blog/topics/developers-practitioners/check-please-billing-cloud-storage)
A high level overview of the cloud storage pricing components and how to set their budgets. Don’t bother with the video, just read the post.

## [AWS Unit metrics in practice - lessons learned](https://aws.amazon.com/blogs/aws-cost-management/unit-metrics-in-practice-lessons-learned/)
The latest in the AWS series for unit cost/unit metric economics. Advocates for something known as the BoR (Book of Record) which is really just a service catalog plus usage from what I can tell, and how to frame that usage for our finance partners.

## [Rethinking ‘rehost, replatform, rearchitect’: Cloud migration for the real world](https://cloud.google.com/blog/products/cloud-migration/real-world-cloud-migration-strategies)
I’ve long been highly skeptical of the <Dr Evil Quotes>simplicity</Dr Evil Quotes> behind ‘rehost, replatform, rearchitect’, and this post from a CSP actually shores some of that up. It breaks it down into two primary yet expansive categories that are much more philosophical than prescriptive.

## [Using AWS CUR and Cost Tags to understand VPC Flow Logs data ingestion costs to S3](https://aws.amazon.com/blogs/mt/using-aws-cost-usage-reports-cost-allocation-tags-to-understand-vpc-flow-logs-data-ingestion-costs-in-amazon-s3/)
How to set up your flow logs to allocate costs appropriately.

## [AWS Budgets now supports CloudFormation for budget actions](https://aws.amazon.com/about-aws/whats-new/2021/04/aws-budgets-announces-cloudformation-support-for-budget-actions/)
You can now enforce budget limits via CF templates/stacks/stack sets. Useful in your IaC world.

## [Building Cost-Effecting Data Pipelines on GCP](https://aws.amazon.com/about-aws/whats-new/2021/04/aws-budgets-announces-cloudformation-support-for-budget-actions/)
Of the ingest/process/deliver, focuses more on the processing portion. Know the tools, do the math, and drop what you don’t need. You know, simple stuff.

## [Azure SQL - Saving Costs](https://blobeater.blog/2021/04/01/azure-sql-saving-costs/)
How, from the Azure portal, to enable Azure Hybrids.

## [Fault Tolerant Multi-AZ EC2 on a beer budget](https://cloudstep.io/2021/03/25/multi-az-ec2-live/)
Warning: this is a 40-something minute video with useful nuggets buried throughout. HA/DR has some pretty deep economic ramifications, and the war story here does a pretty good job of explaining that.

## [5 Ways to Save Costs on AWS Fargate](https://charbelnemnom.com/5-ways-to-save-costs-on-aws-fargate/)
Savings plans, spot instances, resource tagging, right sizing, and auto-scaling. Goes for so many things…

## [AWS Cost Categories now supports inherited and default values](https://aws.amazon.com/about-aws/whats-new/2021/03/aws-cost-categories-now-supports-inherited-and-default-values/)
Rules defined for accounts, tags, services, charge types to categorize appropriately. Inherited values allow the cost category to dynamically inherit its values from the selected dimensions, while also allowing you to define values with default values.

## [Managing Costs in AWS](https://wiprodigital.com/2021/03/29/managing-costs-in-aws/)
Plan, Optimize, Remediate, Rinse, Repeat. That’s the way it’s done right?

## [CapEx vs OpEx: Capital Expenditures & Operating Expenses Explained](https://www.bmc.com/blogs/capex-vs-opex/)
As if we needed another reason to understand the benefits of OpEx over CapEx. I think this is more for our finance friends.
