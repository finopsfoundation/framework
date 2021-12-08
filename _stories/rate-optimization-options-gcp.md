---

layout: story

title: Rate Optimization Options from Google Cloud Platform
description: Many rate optimization exercises can be quick wins, while others are transformative, long-term initiatives. As for CUDs, SUDs, and BigQuery reservations, understanding and better utilizing them are quick wins any GCP user can utilize.
story-title: Rate Optimization Options from Google Cloud Platform
story-date: 2021-06-01
author: Pathik Sharma
company: Google Cloud Platform
company-size:
industry: Internet and Cloud Computing
cloud-provider:
- GCP
tooling-services:
framework-persona: Business/Product Owner
framework-maturity: Run
framework-capabilities:
- capability_commitment-discounts
framework-projects:
order:
tags:
- rate-optimization

---

> “The better optics you have, the more equity you can pinpoint.”

Many rate optimization exercises can be quick wins, while others are transformative, long-term initiatives. As for CUDs, SUDs, and BigQuery reservations, understanding and better utilizing them are quick wins any GCP user can utilize.

## Talking CUDs and SUDs
Any FinOps practitioner interested in rate optimization needs to learn some basics on CUDs, SUDs, and PVMs. There's a practical side of it as well, as GCP users need to monitoring CUDs and analyzing their performance in the GCP self-serve console. For example, you can create cost breakdowns between CUD and SUDs from this view.

FinOps practitioners should also consider Preemptible VMs (PVMs), similar to Spot Instances on AWS. They're very affordable (as high as an 80% discount), ideal for batch jobs and fault-tolerant workloads, and with an average preemption rate that can vary between 5-15% per day, per project.

## Cost optimization considerations for GCP Big Query
GCP’s BigQuery is a serverless, highly scalable, and cost-effective multi-cloud data warehouse designed for business agility. Its pricing and performance is different than running databases on typical VMs. You can use BigQuery on-demand, but pay a much higher rate. Ideally, users want to use flat-rate discounts for the best cost efficiency.

![](/img/stories/gcp-overview.jpeg)

Many expert GCP users and FinOps pracitioners at scale recommend solving for how your cluster load behaves. It can be a combination of different reservations/commitments. If you need help, you can use Active Assist for rate optimization recommendations. It helps with committed use discounts to help identify bigquery slow reservations. Note that the tool is in its alpha stage, so be aware of that before creating actionable recommendations in GCP.
