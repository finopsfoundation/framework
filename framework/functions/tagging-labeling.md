---

layout: default
tag: tagging-labeling

---

# Tagging & Labeling (Resource Level Meta Data)

## Introduction

Cloud service providers may call them different things, but fundamentally tags and labels both provide functionality to define metadata in the form of key/value pairs. These tags are then associated with the resources in a cloud account. The key is like the column heading on a spreadsheet, and a value is a row entry for that column. 

Think of it as describing a bunch of shirts. Each shirt might have a tag key of color, which has a tag value of red, blue, or green. If you wanted to find the cost difference between red shirts and blue, you could use the color tag to group your costs and show the difference. 

## Sample Implementation      

![image](https://user-images.githubusercontent.com/66805995/112911099-96466280-90a9-11eb-9443-a7d2ddb0ebfc.png)

## Common Approaches

Tags and labels can be used and various levels.

Common tags may include:
- Cost Center
- Application
- Environment
- Business Unit
- Product 
- VP

## Maturity Examples

How to get started and what great looks like.

- *Crawl* = Initial tagging strategy in place with manual tagging of resources
- *Walk* = Tag compliance governance well establish and automated tag hygiene monitoring place
- *Run* = Tag automation in CI/CD pipelines and tag-or-terminate policies in place

## Common KPIs

- Tagging coverage by spend
- Count of tagged resources

## Cautionary Tales

Most successful cost allocation strategies do not rely on tags but instead begin with an account/subscription/project approach depending on your cloud provider. While highly flexible, tags and label coverage is hard to enforce at scale.

## Related Functions

- Account Hierachy
- Shared Cost Management
- Post Bill Processing
- Continuous Improvement

{% include story-loop.md %}

## Resources

These links are provided as potentially relevant industry resources. The FinOps Foundation does not recommend any individual technology vendor and is not responsible for the content below.

### Open Source Tooling
### Cloud Native Tooling
### Cloud Specific Best Practices
### FinOps Certified Platforms
### FinOps Training Partners
### FinOps Certified Service Providers