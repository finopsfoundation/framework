---

layout: story

title: The Case of too Many EBS Volumes
description:
story-title: The Case of too Many EBS Volumes
story-date: 2021-10-08
author: Joe Daly
company: Nationwide
company-size:
industry: Financial Services
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

---

Forgetting to delete EBS volumes is extremely common for engineers just starting their cloud journey. At a small scale, they accumulate slowly and most third party cloud cost management platforms can identify and even terminate them for you. However, all it takes is one buggy autoscaling group that doesn’t properly cleanup after itself after it scales down and you could be spending thousands of dollars a day in abandoned EBS volume waste.

We identified this problem through the use of our third party cloud cost management tool, which identified unattached EBS volumes and recommended we terminate them. We quickly incurred a problem with keeping up with all of the unattached EBS volumes.

Our cloud engineering team wrote a script that identified abandoned EBS volumes and tagged them with the date they were abandoned. Then 5 or 14 days later, depending on what environment they are in, a snapshot is taken and they are terminated.

One of the benefits of this method is that it is easy to create a visualization to track wasteful spend due to the abandoned tag date.  This also makes it easy to determine if the script stops working or if there are any unanticipated spikes in abandoned EBS volumes.  When abandoned EBS costs seem like they are running high, I run a report on their detach date in order to check the script is still working

Resources opt-in to this script by default. In the rare case that abandoned EBS volumes are a feature rather than waste (it happens), the app teams have to opt-out. They can tag their resources to not be included in the script.

It is important to note: when abandoned EBS volumes are growing exponentially, it is a symptom of a problem. Make sure you treat the symptom so you stop your cloud bill from bleeding, but it’s important to identify the problem causing the unattached EBS volumes. Is it an autoscaling group gone wild? Is it a faulty AMI? Lean in and treat the source.
