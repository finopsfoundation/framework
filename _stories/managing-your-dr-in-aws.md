---

layout: story

title: Disaster Recovery in AWS
description:
story-title: Disaster Recovery in AWS
story-date: 2021-10-08
author: Eric Mulatrick
company: 
company-size:
industry: 
cloud-provider: AWS
tooling-services:
framework-persona:
framework-maturity:
framework-capabilities:
framework-projects:
- project_reducing-waste
order:


---

Years ago, when we migrated to AWS from another hosting provider, we automated the standup of mysql on aurora - with two regional clusters, one as active, and the second as passive (DR).  Data replicated from one region to another leveraging native mysql log shipping.  The requirement for this type of cluster replication is for the instance sizes to match -- i.e. running potentially a r5.12xlarge in DR to accept log shipping from the active r5.12xlarge.  As you can imagine, the resources and connections on the DR instances would show up as idle, and without connection. 

Fast forward to years later, AWS released a concept called [Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-getting-started.html).  With global databases, you can have a stretched cluster between two regions, using _**EBS storage replication**_, which gives you block level replication (instead of using log shipping).  This is much more efficient and timely, and allows you to curtail the DR cluster members to different sizes.  Given the ability to use different sizes, you can shrink the instance sizes, and lift them as needed (i.e. for DR testing).  

So - you’ll receive efficiency increases from the cost, speed, reliability (too much data in a log shipping world may prevent you from successfully shipping logs in a time to meet your RPO).  Plus you can DR test with production data while your active cluster stays online!

