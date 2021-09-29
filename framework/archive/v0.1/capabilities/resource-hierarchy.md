---

layout: default
tag: resource-hierarchy

---

# Resource Hierarchy (Accounts, Subscriptions and Projects)

## Introduction 

All cloud vendors offer a form of key/value pair tags (or labels) that can be applied to a resource, as well as hierarchy-based accounts/subscriptions/projects/folders/resource groups in which resources are run. 

Some cloud service providers even provide solutions that allow you to group and build deeper hierarchy-based allocations. GCP folders and Azure resource groups can be used in addition, or even as an alternative, to tags on individual resources. AWS provides the ability to tag accounts and GCP allows tags on projects. This capability may be available from other providers soon. 

The most successful FinOps practitioners we’ve seen tend to use a combination of both approaches—tag-based and hierarchy-based—in their allocation strategy, but it’s not required. In fact, depending on the complexity of your infrastructure, you could possibly do allocation without tags/labels. Or you could do it without accounts/subscriptions/folders. 

Accounts are mutually exclusive, whereas tags are not. Accounts should be your primary index, and labels are secondary. A common best practice structure is to use accounts to split out the most important primary divisions, then use tags to dig down deeper into those accounts for more fine-grained visibility.

## Sample Implementation


In this common cost allocation strategy for AWS accounts, we’re using accounts to break out individual products and their respective environments. This is important, because different products or applications often represent different cost centers or budgets.    

![image](/img/framework/resource-hierarchy.png)

## Common Approaches

Account hierarchy can be used for these types of divisions:

- Cost Center
- Application
- Environment
- Business Unit
- Product 
- VP

## Maturity Examples

How to get started and what great looks like.

- *Crawl* = 
- *Walk* = 
- *Run* = 

## Common KPIs

- 
-

## Cautionary Tales

Most successful cost allocation strategies do not rely on tags but instead begin with an account/subscription/project approach depending on your cloud provider. While highly flexible, tags and label coverage is hard to enforce at scale.

## Related Capabilities

- Tagging / Labeling
- Shared Cost Management
- Post Bill Processing
- Continuous Improvement

# Resources

These links are provided as potentially relevant industry resources. The FinOps Foundation does not recommend any individual technology vendor and is not responsible for the content below.

### Cloud Specific Best Practices

- [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html)
- [GCP Resource Hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
- [Azure Subscription Management](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/organize-subscriptions)

### Platform Best Practices & Features
- Cloudability [Account Groups](https://support.cloudability.com/hc/en-us/articles/205000517-Accounts-Account-Groups-) and [Business Mappings](https://support.cloudability.com/hc/en-us/articles/360012211374-Business-Mapping-Allocating-Costs-Using-Business-Dimensions)
- Cloudhealth [Perspectives](https://www.cloudhealthtech.com/blog/understanding-cloudhealth-perspectives)

### Consultancies Best Practices
- Blogs or Docs or Capabilities etc

### Open Source


### Education & Training
- [FinOps Certified Practitioner (FOCP)](https://www.finops.org/certification/)

### Books

- [Cloud FinOps Chapters 8 & 9](https://www.amazon.com/Cloud-FinOps-Collaborative-Real-Time-Management/dp/1492054623)

### Contributors to this page:


