---

layout: story

title: Leveraging Shared Services in AWS
description:
story-title: Leveraging Shared Services in AWS
story-date: 2021-10-08
author: Girish Kurup
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

There were many Test accounts and Production account created in AWS by various teams categorized as 5 + Test accounts (~ 3k per month each )  and 5+ Prod accounts (~ 4K per month each). We rearchitecuted the AWS ecosystem by having a hub and spoke model. With shared services accounts as the hub for generic security, monitoring, risk, compliance, centralize DevOps and organization policies and spokes representing each tenant. For each tenant we organized PROD resources and TEST resources in separate VPCs under the same account. And set up shared generic services for each tenants. Savings of 15% plus at the same time centralized finance  and automated DevOps operations for central IT operations team. Cost saving optimization along with adoption of cloud native Tools like DevOps. Happy tenants and happy finance stakeholders..
 

