---

layout: story

title: Avoid and Simplify Shared Costs
description:
story-title: Avoid and Simplify Shared Costs
story-date: 2021-06-01
author: Joseph Daly
company: Nationwide
company-size:
industry: Financial Services
cloud-provider:
- AWS
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_shared-cost
framework-projects:
- project_shared-costs
order: 1
tags:
- shared-cost
- cost-allocation
- cost-visibility

---

Nationwide's strategy to handle shared costs is to avoid them as much as possible. We do this through our account and tagging strategies.  We segment or accounts by department and sometimes by application so that if there are any untaggable expenses are at least identifiable to the account owner. We work with finance to make sure that each account has a default cost center so that 100% of all costs are allocable to the owner.

For shared platforms,like containers, we primary leverage a label strategy for cost allocation. We allocate cluster costs in proportion of each cost center label’s usage. Sometimes, depending on the application, we will dedicate clusters similarly as we do accounts. That way one department or application is being charged for the costs incurred as opposed to being spread out amongst the rest.

Due to company accounting policy and a desire to make our direct chargeback as transparent as possible, we do not allocate 100% of our bill directly through chargeback. Chargeback covers the vast majority of our expenses. For the remainder, items like enterprise support and accounts setup for management of the cloud, we set a budget and provide showback reporting to make these charges visible. They are not charged back directly, but we know who/what/where the costs are being driven from. Providing this keeps us aligned with enterprise accounting policies and keeps our chargeback simple and transparent.

---
