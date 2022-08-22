---

layout: story
permalink: /stories/managing-retention-in-cloudwatch/

title: Managing Retention in CloudWatch
description:
type: Member Story
source: FinOps Foundation
story-title: Managing Retention in CloudWatch
story-date: 2021-10-08
author: Bhupendra Hirani
company: 
industry: e-Commerce
cloud-provider: 
- AWS
framework-persona:
framework-maturity: walk
framework-capabilities:
weight: 100

---

When looking out for expensive Cloudwatch Log groups that could indicate no expiry being set, one log group in a development account stuck out. Breaking down the usage type, the costs were mainly for PutLogEvents API calls that are related to log ingestion. 

A test/dev Lamba was set with very verbose logging. 240kb json documents being written out ~1million times a day and costing >$1400 per month. The dump was probably put in for debugging but never commented out so stayed there for 2 years. In comparison, the monthly PutLogEvents costs of the equivalent production Lambda is <$100 a month. 

Updating the Lambda and setting a retention period resolved the issues.
