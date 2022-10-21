---

layout: story
permalink: /stories/unchecked-vpc-endpoints/
title: Look for Unchecked VPC Endpoints
description: A story about how checking for unused VPC Endpoints can be a way to reduce cloud waste.
type: User Story
source: Community Contribution
story-title: Look for Unchecked VPC Endpoints
story-date: 2022-10-15
author: Keyur Desai
company: Infosys
industry: Software Services
cloud-provider: AWS
framework-persona: Engineering & Operations
framework-maturity: Walk
framework-capabilities:
- capability_rightsizing
weight: 100

---

One of our large customers had a huge AWS footprint. The organization had different platform support teams, cloud resources creation teams, networking teams, and application development teams.

App teams used to request account creations on a per application basis, while central cloud teams used to respond by creating an account with many default configurations. Each account had at least two VPCs for two regions and multiple endpoints irrespective of an application requirement.

### Identifying the waste

We observed that multiple endpoints were created in bulk and many endpoints were unused, while AWS charges still included them monthly that we had to pay. The challenge now was how to find unused endpoints.

The networking team was asked to observe VPC Flow Logs for a few days and find the unused ones for a sample account. The result was almost half the endpoints were unused for the app under observation and it went unchecked for months.

### Savings results

For our organization, almost $100-per-month USD savings were achieved for the just one VPC under observation. Imagine a large organization with hundreds of accounts with double the number of VPCs for resiliency requirements!
