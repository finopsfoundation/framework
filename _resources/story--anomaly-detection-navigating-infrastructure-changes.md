---

layout: story
permalink: /stories/cloud-spend-anomaly-detection-at-scale-example/
title: Anomaly Detection at Multi-Million Dollar Cloud Spend Scale
description: How a remote engineering team at a multinational pharmaceutical company used anomaly detection to identify change in their three AWS EC2 x1e.32xlarge instances.
type: User Story
source: Community Contribution
story-title: Anomaly Detection at Scale
story-date: 2021-06-01
author: Anonymous Community Member
company: Pharmaceutical Company
industry: Life Sciences
cloud-provider:
- AWS
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_managing-anomalies
weight: 100

---

A remote engineering team at a multinational pharmaceutical company spun up three [AWS EC2 x1e.32xlarge](https://aws.amazon.com/ec2/instance-types/x1e/) instances in Sydney, Australia for the testing of in-memory databases. At that time, that goliath of an instance cost just over $44 per hour. Three instances operating together cost over $3,000 per day, or around $98,000 per month. These seem like big numbers until you consider that the organization's monthly cloud bill was over $3,500,000 USD. So, when a change happened to the x1e instances, it would have resulted in a paltry 2% increase in cloud spend and wouldn’t have been easily visible in high-level reporting.

Potentially further obscuring this spend anomaly, the central team had just purchased RIs for another set of machines, a transaction that effectively canceled out the spend delta of the new EC2 x1e’s. However, because the FinOps team had machine learning–based anomaly detection for their cloud costs, they found out about the use of the large instances the same day, and could have an immediate conversation about whether or not so much horsepower was needed. Unsurprisingly, it turned out that it was not.

Examples of this kind of setup might best relate to companies with a much more advanced FinOps maturity. FinOps teams at earlier stages of maturity might aim for simple daily spend visibility that shows teams their respective spend. Even that amount of visibility still begins to influence their behavior accordingly.
