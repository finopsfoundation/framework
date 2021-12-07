---

layout: story

title: An Introduction to GCP Committed Use Discounts
description: When you purchase Committed Use Discounts (CUDs), you receive discounted prices in exchange for your commitment to use either a minimum level of resources or spend a minimum amount, for a specified term of one or three years.
story-title: An Introduction to GCP Committed Use Discounts
story-date: 2021-11-29
author:
- Eric Lam
company: Google Cloud
company-size:
industry: Information Technology & Services
cloud-provider:
- GCP
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Walk
framework-capabilities:
- capability_commitment-discounts
framework-projects:
order:
tags:

---

## An Introduction to GCP Committed Use Discounts

When you purchase Committed Use Discounts (CUDs), you receive discounted prices in exchange for your commitment to use either a minimum level of resources or spend a minimum amount, for a specified term of one or three years.

There are two types of Committed Use Discounts available with Google Cloud: (1) Resource Based CUDs and (2) Spend Based CUDs.

#### Resource Based CUDs:

Resource-based committed use discounts provide a discount in exchange for your commitment to use a minimum level of Compute Engine resources in a particular region. It is ideal for predictable and steady state workload. By default CUDs are scoped at project level so that would be similar to Reserved instances being applied at account level. There is also an option to turn on CUD sharing which allows the discount to be shared across all projects tied to the billing account. The discount is proportional distribution attributes benefit and cost across business entities

Example: 50 vCPU for N2D in us-central1
* Applies vCPU, Memory, GPU, Local SSDs, images
* Services supported: Compute Engine, Dataproc,  GKE (standard)


#### Spend Based CUDs:

Spend-based committed use discounts provide a discount in exchange for your commitment to spend a minimum amount ($/hour) for a product or service. It is ideal for predictable spend; measured in $/hr of equivalent on-demand spend

Example: $50 / hour spend in Cloud SQL (Postgres) in us-central1
* Applies to aggregated spend for resources
* Services supported: Cloud SQL, Cloud Run, VMware Engine, GKE (Autopilot)

A useful CUD monitoring tool is the CUD analysis dashboard which helps you to visualize and evaluate the effectiveness and financial impact of the Committed Use Discounts that you have purchased. In addition, you can use the CUDs cost breakdown chart to monitor CUD costs and answer the ever so popular question”  how much money are CUDs saving me?”





>_Author: Eric Lam, Head of Cloud FinOps, Google_<br>
