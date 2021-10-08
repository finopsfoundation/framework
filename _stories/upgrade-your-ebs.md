---

layout: story

title: Upgrade your EBS Volumes
description:
story-title: Upgrade your EBS Volumes
story-date: 2021-10-08
author: Mike Martin
company: 
company-size: medium
industry: information technology & services
cloud-provider: AWS
tooling-services:
framework-persona:
framework-maturity: walk
framework-capabilities:
framework-projects:
order:
 
tags:
- reducing-waste

---

AWS is constantly updating their service offerings and [EBS](https://aws.amazon.com/ebs/) is no exception. AWS released [the EBS gp3 volume type (an upgrade from gp2) in December of 2020](https://aws.amazon.com/blogs/aws/new-amazon-ebs-gp3-volume-lets-you-provision-performance-separate-from-capacity-and-offers-20-lower-price/). Besides an increase in performance, there is also a 20% reduction in costs to use the drives (depending on use case of course).

We saved 20% on some of our EBS costs by migrating workloads from the gp2 to the gp3 EBS volume type. The process is quite simple for currently running resources - you can either change the type from the console, via AWS CLI, or (in our case) modify the underlying Terraform. [This article does a good job of explaining the migration process.](https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/) There is 0 downtime associated with this change, but as the article states it could take some time for the drive to actually move from gp2 to gp3. To be safe, we opted to spin up new instances by modifying the launch configuration of our auto scale groups to ensure a seamless upgrade.

We identified what workloads could be migrated from gp2 to gp3 in two phases. For the first phase, since a large chunk of our infrastructure is represented by code (as we mentioned, Terraform), by viewing what resources 

One thing to note - this is not always 20%. This cost reduction % can decrease if you need additional IOPS. However, we still saw a 9% decrease for heavily provisioned IOPS requirements.
