---

layout: story

title: Runaway Cost in BigQuery Capacity Commitments
description:
story-title: Runaway Cost in BigQuery Capacity Commitments
story-date: 2021-10-08
author: Scott Lapish
company: Telus
company-size:
industry: Telecommunications
cloud-provider: GCP
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_rightsizing
- capability_commitment-discounts
framework-projects:
- project_reducing-waste
order:
tags:
- rightsizing
- utilization
- database
- dynamodb

---

Failure to purchase org level capacity commitments for BigQuery can result in runaway costs due to on-demand query costs. Purchasing an org level capacity commitment and enabling idle capacity at the org level can ensure stable BigQuery costs across the organization. Consideration also needs to be given to whether the location supports multi-region commitments or if separate commitments will need to be purchased for each region or location where workloads are provisioned.

Prior to having org level commitments we experienced situations where poorly constructed queries resulted in thousands of dollars of overspend which led to the need to seek out credits from Google to offset the resulting costs. While query optimization can help to reduce the possibility of this occurring, developers are not infallible and despite your best efforts mistakes can and will happen. This can be managed in one of two ways. Aggressive quotas that may be too restrictive and granular to manage or by purchasing org level commitments that can be distributed at the org, folder or project level with idle capacity available to the entire org to ensure that cost overruns will not occur.

The following are examples of different capacity commitment assignment scenarios:

![](/img/reducing-waste/bigquery-1.png)

![](/img/reducing-waste-bigquery-2.png)

Consideration also needs to be given to the availability of multi-region capacity commitments in your region. Some locations offer single region commitments only. Others (US, EU) provide multi-region capacity commitment capabilities. Your strategy will need to take this into account by locking workloads to a single region or by purchasing commitments for each region separately.
