---

layout: default

---
# Tagging & Labelling

## Introduction

Whether it’s via tags, linked accounts, folders, or labels, cost allocation is essential for cloud financial management. Without a consistent allocation strategy, you have a big pool of costs with no way to split them up or to identify what costs belong to which team.

Although tags, labels, and accounts provide many benefits, one major advantage is that they add business dimensions and context into your billing data for cost allocation. Throughout this chapter, we’ll cover the two major methods of allocating costs: hierarchical account separation and tagging. We’ll cover how they each contribute to cost allocation, and we’ll describe some successful strategies we have seen.

## How it relates to other cost allocation

There are three core methods for adding cost allocation data to usage and billing data:
 
Resource-level tag
Applied by engineers or the cloud platform provider directly to the cloud resources.

Accounts/projects/subscriptions
Provided by the vendor and represented in the bill.

Post bill data constructs
Uncovered by mutating the billing data and supplementing in extra detail using a third-party analytics tool like Apptio Cloudability or self-managed data processing.

## Tags vs Labels vs Projects 
Cloud service providers may call them different things, but fundamentally tags and labels both provide functionality to define metadata in the form of key/value pairs. These tags are then associated with the resources in a cloud account. The key is like the column heading on a spreadsheet, and a value is a row entry for that column. 

Think of it as describing a bunch of shirts. Each shirt might have a tag key of color, which has a tag value of red, blue, or green. If you wanted to find the cost difference between red shirts and blue, you could use the color tag to group your costs and show the difference.      

![image](https://user-images.githubusercontent.com/66805995/112911099-96466280-90a9-11eb-9443-a7d2ddb0ebfc.png)

## Common Approaches

- Environment
- Business Unit
- Product 
- VP

## Maturity & Stories

How to get started and what great looks like.

- Crawl = Initial strategy etc etc
- Walk = Tag compliance governane etc etc
- Run = Tag automation in CI/CD etc etc

## Common KPIs

- Tagging coverage by spend
- Count of tagged resources

## Related Functions

- Account Hierachy
- Shared Cost Management
- Post Bill Processing
- Continuous Improvement

## Resources

These links are provided as potentially relevant industry resources. The FinOps Foundation does not recommend any individual technology vendor and is not responsible for the content below.

### Cloud Specific Best Practices

- https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html
- https://cloud.google.com/compute/docs/labeling-resources
- https://docs.microsoft.com/en-us/azure/virtual-machines/tag-portal

### Platform Best Practices
- https://support.cloudability.com/hc/en-us/articles/360004517234-Tag-Explorer (KB)
- https://www.cloudhealthtech.com/blog/creating-multicloud-tagging-strategies (blog)
- XYZ

### FCSP Consultancies
- Blogs or Docs or Capabilities etc

### Open Source
- [www.cloudcustodian.com](Cloud Custodian)

