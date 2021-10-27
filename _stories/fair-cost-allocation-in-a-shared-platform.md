---

layout: story

title: Fair cost allocation in a shared Platform (as a Service)
description: A central Platform Team is the enabler for the Product Teams to develop value faster and compliant by providing shared platform services as a product (VCS, Container Registry, CI/CD) on a shared deployment target (Kubernetes) along with shared operational services (Dashboarding, Log-management, Metrics, and Tracing + APM, etc.)
story-title: Fair cost allocation in a shared Platform (as a Service)
story-date: 2021-06-01
author: David Sterz
company: Mindcurv
company-size:
industry: information Technology & Services
cloud-provider:
tooling-services:
framework-persona: Engineering & Operations
framework-maturity: Run
framework-capabilities:
- capability_shared-cost
framework-projects:
- project_shared-costs
order: 1
tags:
- cost-sharing
- cost-allocation
- cost-visibility

---

## Setup
* The public cloud mimics the actual organization, departments, teams,products.
* Dedicated cloud accounts for teams that are mapped 1:1 to an organisational units
* Shared cloud accounts form their own organisational unit(s)
* 1 Platform Team provides a shared platform and services
* 20+ Product Teams have dedicated cloud resources, some are shared between them

![](/img/shared-costs/david-story.png)

## Goals
* Business: Provide accurate cloud costs per product to be consumed as part of a Unit Metric Aggregation
* Finance: 80%-100% direct cost allocation to cost center codes from public cloud spent across Foundation- and  Product Teams
* Engineering: Cost ownership through full transparency and enablement to optimize themself towards business KPIs

## Story

A central Platform Team is the enabler for the Product Teams to develop value faster and compliant by providing shared platform services as a product (VCS, Container Registry, CI/CD) on a shared deployment target (Kubernetes) along with shared operational services (Dashboarding, Log-management, Metrics, and Tracing + APM, etc.)

The shared platform services are a mix of cloud resources, Kubernetes Deployments and as a 3rd Party SAAS that are consumed by most product teams.

The cloud resources that are needed by the product teams are provisioned by the central platform team into the product teams accounts which frees up the product teams from the heavy lifting and the operational responsibilities so they can focus more on their application development.

While organisational units and the account per team setup gives a good baseline for cost transparency there are various shared costs almost everywhere.

### Product Team Accounts
Most costs can be allocated directly to the product team on product level. Higher granularity down to application and sub-service level is achieved through tagging and labeling.

A small percentage of costs occur in every product team account which is part of the platform teams tooling that provide observability, security and compliance services as part of the platform services.

**Examples**
* Monitoring Agent per Account as part of shared observability costs
* Thread Detection introduced by a central security team
* Compliance checks against policies and best practices

### Platform Team Accounts

As the platform for the product teams is shared most of the resources in the platform account is shared.

**Examples**
* DNS with many records split in nonproduction and production
* Secret Management via kubernetes integration with cloud providers secret service
* Kubernetes cluster infrastructure (storage,compute,ram,network)
* Kubernetes workloads in shared cluster from all teams
* The CD system is shared across all Teams deploying new Releases
* Dashboards and Alerting is shared
* Metrics & Tracing, shared and big differences in usage and costs per team and read/write
* Log-Management where teams ingest different volumes and velocity along with different usage/query patterns

**Example of shared cost allocation strategy for Log-Management**

| Strategy     | Crawl                            | Walk                                 | Run                            |
|--------------|----------------------------------|--------------------------------------|--------------------------------|
| Proportional |                                  | Log-Mgmt Costs / Directcost-per-Team |                                |
| Even split   | Log-Mgmt Costs / Number-of-Teams |                                      |                                |
| Fixed        | Log-Mgmt Costs by Traffic %      | Log-Mgmt Costs by Log-Storage %      | Log-Mgmt Costs by Read/Write % |

## Shared Accounts
Other Accounts provide services that are shared across all teams.

**Examples**
* The version control system (VCS) is used by many teams where they store source code, build artifacts and documentation
* A central container registry holds images for every team
* The CI runners are building software for various teams, some of them are dedicated to a team as they have specific requirements

---
