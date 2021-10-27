---

layout: story

title: Managing EBS Snapshots
description:
story-title: Managing EBS Snapshots
story-date: 2021-10-08
author: Eric Mulartrick
company: Dell Boomi
company-size:
industry: Computer Software
cloud-provider: AWS
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_rightsizing
framework-projects:
- project_reducing-waste
order:
tags:
- rightsizing
- utilization
- storage
- ebs
- snapshots
- backups

---

AWS EBS (and other services) snapshots are backups of a system at a current state.  Without using a policy, snapshots will continue to grow and grow in quantity.  Before you know it, you could be sitting on thousands of unused snapshots (waste?) that have no business value.  Do you need a snapshot from 3 years ago?  Is that without your RPO?  If not, then it’s likely a waste.  

We had no governance or requirement to keep snapshots for a period of time, especially in non-production.  Because of the lack of policy, there were tens of thousands of unused snapshots dating back years.  My recommendation is to work with your CCOE and establish a working governance and policy for snapshots in a non-production environment.  (and production).  Collaborate with your engineering peers and come up with a mechanism to automate the removal of snapshots.  Ideally, AWS Data Lifecycle Manager will be used for automatic removal, using AWS native tools.  Otherwise, look at a third party software like [cloud custodian](https://cloudcustodian.io/) to enforce governance.  Be careful with redundant automation systems stepping on each other, though!  

Another recommendation would be to have an opt-out that will allow snapshots to remain longer than the designated schedule, leveraging a tag.  

**Real world example:**  We had 30,000+ snapshots sitting in an legacy AWS account, dating back years.  I worked with the engineering team to establish a 30 day policy in this account, communicated the policy, and leveraged a third party tool for automation.  The 30,000 snapshots were removed, saving thousands of dollars a month.  And the account now has a governance of 30 days max to keep snapshots.
