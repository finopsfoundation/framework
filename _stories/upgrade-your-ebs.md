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
- project_reducing-waste
order:

---

AWS is constantly updating their service offerings and [EBS](https://aws.amazon.com/ebs/) is no exception. AWS released [the EBS gp3 volume type (an upgrade from gp2) in December of 2020](https://aws.amazon.com/blogs/aws/new-amazon-ebs-gp3-volume-lets-you-provision-performance-separate-from-capacity-and-offers-20-lower-price/). Besides an increase in performance, there is also a 20% reduction in costs to use the drives (depending on use case of course).

We saved 20% on some of our EBS costs by migrating workloads from the gp2 to the gp3 EBS volume type. The process is quite simple for currently running resources - you can either change the type from the console, via AWS CLI, or (in our case) modify the underlying Terraform. [This article does a good job of explaining the migration process.](https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/) There is 0 downtime associated with this change, but as the article states it could take some time for the drive to actually move from gp2 to gp3. To be safe, we opted to spin up new instances by modifying the launch configuration of our auto scale groups to ensure a seamless upgrade. We identified what workloads could be migrated from gp2 to gp3 by breaking it down in two passes. 

For the first pass, since a large chunk of our infrastructure is represented by code (as we mentioned, Terraform), we performed a global "find and replace" to see where gp2 was in use. For nearly all of our development environments, we simply made the change in launch configurations and individual instances from gp2 -> gp3. For production services, we first tested launching new instances on gp3 and evaluated if there was a requirement to update IOPS due to this switch. Keep in mind, you do get more base IOPS for smaller drives, but IOPS do not increase as drive size increases like it did in gp2.

For the second pass, we simply went in to the [AWS EC2 console and sorted EBS drives by type](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#Volumes:sort=volumeType), and used the console to "Modify Volume" to switch from gp2 -> gp3. This can also be done with the AWS CLI ([as mentioned in the AWS blog above](https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/)).

Obviously, some workloads take more investigating to determine if the upgrade from gp2 -> gp3 is 'safe'. You can always tackle the low hanging fruit first and still realize significant cost savings per month.

One thing to note - this is not always 20%. This cost reduction % can decrease if you need additional IOPS (as I mentioned earlier). However, we still saw a 9% decrease for heavily provisioned IOPS requirements.
