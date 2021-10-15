---

layout: story

title: Cleaning Up Elastic IPs
description:
story-title: Cleaning Up Elastic IPs
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

Unattached EIPs cost $0.005 an hour. Over time this can compound into a waste of money. Using Cost explorer, we could see the rising cost of elastic IPs month over month. It grew to $300 a month and over time the waste cost about $1000. Once seeing this the customer could go in and remove the EIPs and identify the source of the where they were being unattached to stop this happening in the future. 

