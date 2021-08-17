---

layout: default
tag: tagging-labeling

---

# Tagging & Labeling (Resource Level Meta Data)

## Introduction

Cloud service providers may call them different things, but fundamentally tags and labels both provide functionality to define metadata in the form of key/value pairs. These tags are then associated with the resources in a cloud account. The key is like the column heading on a spreadsheet, and a value is a row entry for that column. 

Think of it as describing a bunch of shirts. Each shirt might have a tag key of color, which has a tag value of red, blue, or green. If you wanted to find the cost difference between red shirts and blue, you could use the color tag to group your costs and show the difference. 

## Sample Implementation      

![image](/img/framework/tagging-labeling.png)

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

## Related Capabilities

- Account Hierachy
- Shared Cost Management
- Post Bill Processing
- Continuous Improvement

{% include story-loop.md content='tagging-labeling' %}

## Resources

These links are provided as potentially relevant industry resources. The FinOps Foundation does not recommend any individual technology vendor and is not responsible for the content below.

### Cloud Specific Best Practices

- [AWS](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)
- [GCP](https://cloud.google.com/resource-manager/docs/creating-managing-labels)
- [Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/tag-portal)

### Cloud Native Tooling

- [AWS Organizations](https://aws.amazon.com/organizations/)
- [GCP Resource Manager](https://cloud.google.com/resource-manager)

### Relevant FinOps Certified Platforms

- [Cloudability Business Mappings](https://www.cloudability.com/product/features/business-mapping/)
- [Cloudhealth Perspectives](https://www.cloudhealthtech.com/blog/understanding-cloudhealth-perspectives)
- [Densify Grouping Billing Data](https://www.densify.com/docs/Content/Densify_Com/Grouping_and_Filtering_Your_Billing_Data.htm)
- [PyraCloud Tagging](https://help.pyracloud.com/knowledge-base/managing-tags-and-resources/)

### Relevant FinOps Certified Service Providers


### Relevant FinOps Training Partners
- [FinOps Certified Practitioner (FOCP)](https://www.finops.org/certification/)

### Open Source
- [Cloud Custodian Tag Compliance](https://cloudcustodian.io/docs/aws/examples/tagcompliance.html)

### Reading List

- [Cloud FinOps Chapters 8 & 9](https://www.amazon.com/Cloud-FinOps-Collaborative-Real-Time-Management/dp/1492054623)
