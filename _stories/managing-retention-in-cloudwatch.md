---

layout: story

title: Managing Retention in CloudWatch
description:
story-title: Managing Retention in CloudWatch
story-date: 2021-10-08
author: Bhupendra Hirani
company: 
company-size: large
industry: e-Commerce
cloud-provider: AWS
tooling-services:
framework-persona:
framework-maturity: walk
framework-capabilities:
framework-projects:
- project_reducing-waste
order:

---

When looking out for expensive Cloudwatch Log groups that could indicate no expiry being set, one log group in a development account stuck out. Breaking down the usage type, the costs were mainly for PutLogEvents API calls that are related to log ingestion. 

A test/dev Lamba was set with very verbose logging. 240kb json documents being written out ~1million times a day. The dump was probably put in for debugging but never commented out so stayed there for 2 years. In comparison, the monthly PutLogEvents costs of the equivalent production Lambda is <$100 a month. 

Updating the Lambda and setting a retention period resolved the issues.