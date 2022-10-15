---

layout: story
permalink: /stories/unchecked-vpc-endpoints/

title: Unchecked VPC Endpoints
description: Unchecked and unused VPC Endpoints costing money
type: User Story
source: Community Contribution
story-title: Unchecked VPC Endpoints
story-date: 2022-10-15
author: Keyur Desai
company: Infosys
industry: Software Services
cloud-provider: AWS
framework-persona: Engineering and Operations
framework-maturity: Walk
framework-capabilities: Resource Utilization & Efficiency
weight: 100

---

One of our large customers had a huge aws footprint. The organization had different platform support teams, cloud resources creation teams, networking teams, and application development teams. App teams used to request account creations on a per application basis, while central cloud teams used to respond by creating an account with many default configurations. Each account had at least two vpc’s for two regions and multiple endpoints irrespective of an application requirement.

We observed that multiple endpoints were created in bulk and many endpoints were unused. While aws charges still included them monthly that we had to pay. The challenge now was how to find unused endpoints. The networking team was asked to observe VPC Flow Logs for a few days and find the unused ones for a sample account. The result was almost half the endpoints were unused for the app under observation and it went unchecked for months.

Almost $100/mo savings were achieved for the just one vpc under observation. Imagine a large organization with hundreds of accounts with double the number of vpc’s for resiliency requirements!
