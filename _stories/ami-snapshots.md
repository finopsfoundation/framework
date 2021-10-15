---

layout: story

title: Removing AMI Snapshots
description:
story-title: Removing AMI Snapshots
story-date: 2021-10-08
author: Stephanie Gooch
company: AWS
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

Upon reviewing the amount of snapshots a customer had we found a large proportion of them were created from AMIs. This was found by listing all available amis in and connecting them back to the snapshot using the description.  However, many of the AMIs that created them had been released. This meant that the snapshots were now unusable and therefore a true waste item. By removing these snapshots they were able to identify savings of $2.3M/yr. 
