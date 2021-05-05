---

layout: collection
title: Just the Links - Volume 9
description: Originally published May 5, 2021 at https://finopsforengineers.substack.com/p/just-the-links-volume-9
persona: engineering

---

## [Managing Infrastructure Costs as Your Company Grows](https://www.intercom.com/blog/managing-infrastructure-costs/)
This is largely targeted towards startups and high-growth areas. It breaks down into the following:

1. Take a reactive approach to cost management: “ship first and optimize later”
2. Prioritize by impact: go after the big boulders first
3. Centralize governance: a centralized group to help manage the cloud presence, similar or overlapping with a CCOE
4. No surprises: constant monitoring and diligence
5. Zero touch costs: automation is key
6. Empowering your engineering teams: translating your findings to actionable inputs to the engineering teams

Again, please note that this is targeted towards startups and organizations that are in a growth trajectory. Once your organization moves out of that startup and growth phase it’s important to shift the perspective in several ways including being very proactive, increasing automation in every way possible, enabling the centralized finops team to make changes, and more. I’ve been thinking about the finops model as it relates to business growth phases and will probably be releasing a blog post on it pretty soon.

## [Using Cost Explorer to Help Reduce AWS S3 Costs](https://aws.amazon.com/premiumsupport/knowledge-center/s3-reduce-costs/)
A step by step guide to setting up tags and cost allocation tags to report bucket usage in to AWS Cost Explorer.
How to Create An Amazon EC2 AutoScaling Policy Based on Memory Utilization Metric in ## [Windows](https://aws.amazon.com/blogs/mt/create-amazon-ec2-auto-scaling-policy-memory-utilization-metric-linux/">Linux</a> and <a href="https://aws.amazon.com/blogs/mt/create-amazon-ec2-auto-scaling-policy-memory-utilization-metric-windows/)
AutoScaling groups are a great way of scaling compute resources to meet demand, and to scale them down when they’re not in use thus minimizing unnecessary costs. Both posts come with example CF stacks that will deploy compute and scales appropriately given memory inputs. The appropriate CloudWatch agents must also be installed to capture these memory metrics.

## [Google Releases DocAI to Cut Document Processing Time and Costs](https://cloud.google.com/blog/products/ai-machine-learning/get-more-value-from-your-documents-with-docai-and-industry-solutions)
This platform reduces document processing costs up to 60%.

## [How Do I Reduce Cloud Costs?](https://evertise.net/how-do-i-reduce-cloud-costs/)
Valid points that we’ve covered before, but are always worth reviewing:

* Resizing to what’s needed (right-sizing)
* Scheduling the workloads and work (scaling)
* Removing unutilized and deprecated items (cleanup)
* Take advantage of spot instances (pricing)
* Reviewing the usage and utilizing analytics (reviewing)

## [How Unit Metrics Help Create Alignment Between Business Functions](https://aws.amazon.com/blogs/aws-cost-management/unit-metrics-help-create-alignment-between-business-functions/)
The last post in the unit metric series it looks at the different roles and facets that have an interest in unit metric, such as product owners, marketing, planning. It makes the case that the unit metric can be used as the central point in a data driven organization.

## Getting Started With Serverless for Developers [Part 1](https://aws.amazon.com/blogs/compute/getting-started-with-serverless-for-developers-part-1), [Part 2](https://aws.amazon.com/blogs/compute/getting-started-with-serverless-for-developers-part-2-the-business-logic), [Part 3](https://aws.amazon.com/blogs/compute/getting-started-with-serverless-for-developers-part-3-the-front-door/)
A very hands-on series that, while somewhat seemingly entry-level, will get you up to speed on building and deploying a serverless application. 

## [Azure Cost Management and Billing Updated - April 2021](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/)
New updates for April:

* [The retail API now supports non-USD currencies](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#pricing)
* [New date picker in the cost analysis preview](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#analysis)
* [What’s new in Cost Management Labs](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#labs)
* [Deploy key design principals with enterprise-scale architecture](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#caf)
* [Empowering operators on their cloud migration journey](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#operators)
* [New ways to save money with Azure](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#optimize)
* [New videos](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#learn) and [documentation](https://azure.microsoft.com/en-us/blog/azure-cost-management-and-billing-updates-april-2021/#docs)

## [Optimizing Cost for Your High Availability SQL Server Deployments on AWS](https://aws.amazon.com/blogs/storage/optimizing-cost-for-your-high-availability-sql-server-deployments-on-aws/)
This guide walks you through establishing a performance baseline (using a tool called HammerDB) given your deployment and then considering different instance families that are most cost efficient from those finding.s

## [Cost Optimization with SQL BYOL Using License Included Windows Instance on Amazon EC2 Dedicated Hosts](https://aws.amazon.com/blogs/mt/cost-optimization-sql-byol-license-included-windows-instance-amazon-ec2-dedicated-hosts/)
With EC2 dedicated hosts you can have [full Windows Server compliance](https://aws.amazon.com/about-aws/whats-new/2020/04/announcing-ability-to-run-windows-server-license-included-instances-on-ec2-dedicated-hosts/) with SQL server BYOLs. This post goes into some pricing details and examples using this type of set up.

## [Please Fix the AWS Free Tier Before Somebody Gets Hurt](https://cloudirregular.substack.com/p/please-fix-the-aws-free-tier-before)
The AWS free tier is fundamentally broken - especially for students and new engineering practitioners wanting to learn the platform.

## [The Hidden Costs of Cloud Storage: AWS vs Azure](https://www.ryadel.com/en/cloud-storage-hidden-costs-aws-vs-azure/)
Great points in here, and things of which you should always be aware:

* Data transfer charges
* Idle instances
* Unattached volumes
* Snapshots without volumes (aka orphaned snapshots)
* Underutilized reserved capacity

## [KOPS on EC2 vs EKS](https://www.cloudysave.com/aws/kops-vs-eks-pricing-characteristics/)
[KOPS](https://kops.sigs.k8s.io/) is the tool used to spin up Kubernetes on cloud providers (technically, only AWS is supported but DigitalOcean, GCE, Azure, and OpenStack are being developed). There are pricing differences between running k8s on EC2 and EKS and this post outlines those.

## [AWS Cost Management - Using Unit Metrics](https://www.cloudysave.com/aws/aws-cost-management-using-unit-metrics/)
Unit metrics are all the rage these days, and this gives some good characteristics.

## [Decrease Your Machine Learning Costs with Instance Price Reductions and Savings Plans for Amazon SageMaker](https://aws.amazon.com/blogs/aws/slash-your-machine-learning-costs-with-instance-price-reductions-and-savings-plans-for-amazon-sagemaker/)
Pricing drops in many ml-type instance families as well as notebook instances, SageMaker Studio instances, training instances, batch transform instances, and more.

## [Infracost Integration with Jenkins](https://github.com/infracost/infracost-jenkins/)
An example of how to integrate Infracost by creating a Jenkins stage to execute it and build the diff output. It’s so important to have infrastructure costs built out as part of your CICD pipeline. Automation is key.

## [The AWS Bill Heard Round the World](https://chrisshort.net/the-aws-bill-heard-around-the-world/)
Another data transfer horror story in someone's personal AWS account. Alerts are so important.

This material provided in association with the [FinOps for Engineers](https://finopsforengineers.substack.com/p/just-the-links-volume-9) newsletter. Like what you see? Consider signing up!
