---

layout: capability
permalink: /framework/capabilities/measure-unit-costs/
search: true
search-keywords: unit economics gamefication business value benchmark benchmarks scorecard scorecards KPI KPIs OKR OKRs nirvana

title: Measuring Unit Costs
description: Cloud unit economic metrics enable you to determine the revenue you’ll gain from a single unit of your business and the cost associated with servicing it, revealing the business value of your cloud spend.
page-identifier: capability_unit-costs
framework-capability-title: Measuring Unit Costs
framework-capability-desc: Cloud unit economic metrics enable you to determine the revenue you’ll gain from a single unit of your business and the cost associated with servicing it, revealing the business value of your cloud spend.
label:
order: 10

---

# Measuring Unit Costs

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
When practitioners address measuring unit costs, it's often in the context of Cloud Unit Economics. Our practitioners define Cloud Unit Economics as a system of profit maximization based on objective measurements of how well your organization is performing against not only its FinOps goals, but as a business overall. Cloud Unit Economics achieves these goals by leveraging the measurement of marginal cost (a.k.a., unit cost metrics) specific to the development and delivery of cloud-based software and marginal revenue (a.k.a., unit revenue metrics).

By calculating the difference between marginal cost and marginal revenue, practitioners can determine where cloud operations break even and begin to generate a profit. This is an important concept in economics overall and it's one of the most effective ways to make data-driven business decisions regarding your cloud investment. For further details on defining, implementing, and building upon Cloud Unit Economics with your FinOps teams, please check out our [playbook on implementing the Capability](/projects/introduction-cloud-unit-economics/).


## Maturity Assessment
Cloud Unit Economics can be implemented in many different ways, depending on the size of organization and the scale of its cloud spend. From research by our community, and according to the [Cloud FinOps book](/community/finops-book/), **cost per-customer (or cost-per-tenant)** is a common goal that can typically be applied to most organizations and is often a good metric to start with to assess maturity level of how the organization is adopting unit economics.

### Crawl
- **Cloud-only Cost-per-customer:** Depending on the complexity of the application, this may also be done in multiple phases, where some cloud costs are handled initially as “direct” and others “shared.”

### Walk
- **Cloud, Software-as-a-Service (SaaS), Licenses-based Cost-per-customer:** This could include things like Datadog, ServiceNow, or PagerDuty or BYOL (Bring Your Own License) like Windows or SQL Server which are run on cloud infrastructure. Once you start bringing in SaaS tools or Licenses, you may need to work with the team responsible for that product to understand the KPIs they care about and how they quantify time spent such as the SAM or ITAM team.

### Run
- **Cloud + SaaS + Hybrid Costs + Human Capital-based Cost-per-customer:** Advanced teams bring in costs like labor or even on-premise costs that support a particular product or service. The run phase is typically when a firm starts collecting more than one metric for various parts of a complex system getting more granular over time.

### Do what’s right for your organization
In some cases, engineering might play a more central role in your FinOps organization, and you can leverage engineering time to produce the necessary metrics to determine measurements like Cost-per-customer. Regardless of the resources you have at your disposal, start small and focus on clear metrics that will be tangible to all stakeholders.

Through all of this, the centralized function of FinOps should be apparent: the FinOps team should be responsible for maintaining the Cloud Unit Metrics repository and be capable of clearly articulating their business value. Without it, a company can end up with “one metric to rule them all” or a bunch of clashing metrics.


## Functional Activity

The following table maps functional input and output activities related to cloud unit economics by persona:

|                 |                                                      **BUSINESS**                                                      |                                           **BUSINESS**                                          |                                                                **TECHNOLOGY**                                                               |                                    **FINANCE**                                   |                                              **FINOPS**                                              |
|-----------------|:----------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------:|
|                 |                                                       <img src="/img/framework/persona-executive.svg">Executives|<img src="/img/framework/persona-product.svg" width="131">Product Owner|<img src="/img/framework/persona-engineer.svg" style="width:75%">Engineering and Operations|<img src="/img/framework/persona-finance.svg" style="width:75%">Finance/Procurement| <img src="/img/framework/persona-finops.svg">FinOps                                                |
|  **INPUT**  | A CTO/ CIO / CFO should own the initiative of Unit Economics and determine scope as it relates to coverage of Products | VP of Product / Product Owners should collaborate with Finance to determine key product metrics | VP Engineer collaborate with Product Owners define input requirements for metrics to best determine how to collect metric data from systems | Finance should collaborates with Product Owners to determine key product metrics | FinOps should be aware of executive scope and identify gaps in cost allocation alignment to strategy |
| **OUTPUT** |                             Actioning on business decisions as a result of cost metric data                            |            Define frequency of reviewing unit cost and determine benchmark thresholds           |                                  Support solutioning automation and identify blockers to outputting metrics                                 |          Actioning on business decisions as a result of cost metric data         |                              Integrate cost allocation with cost metrics                             |

**NOTE:** This table is best viewed on a wide viewport, like a desktop or tablet.

### Additional persona activities

#### As someone in a Business/Product role, I will…
- Make decisions using unit cost about what changes I can make to my application through the lens of the business value it brings

#### As someone in a Finance/FinOps role, I will…
- Be able to determine if spend is increasing due to waste or due to growth in the business and determine if cost variances are ‘good’ or ‘bad’

#### As someone in an Engineering/Operations role, I will...
- Separate increases in usage/waste from increases in rate so that I can determine the best architecture changes to make, and potentially even move to a more expensive service when associated revenue increases

#### As someone in an Executive role, I will…
- Move past trying to determine how efficient my teams are being and instead focus on increases the bottom line and understand how cloud decisions affect my margins and ultimately profitability


## Measure(s) of Success & KPI
Cloud Unit Econmics measures of success will differ company to company.

An example KPI that could fit most cases could be how one a team stores customer data: **cost-per-GB**. Measuring cost-per-GB alone sets up initiatives to optimize storage costs, such as engineers figuring out a new way to further compress the data, e.g. cutting your storage needs by about 30 percent. In this scenario, *your cost-per-GB does not change* even though your storage costs have decreased.

Instead, it would be more meaningful to measure something like a **cost-per-stored-item** (whatever that may be). Using a cost-per-stored-item as a unit of measure in this same scenario would show a 30 percent reduction because you are storing the same amount of data with fewer GBs of storage.

Collaborating with all of the necessary organizational stakeholders to first determine what drives business value is essential to getting this part right.

This is one example of many. We welcome additions to build out all the possible ways to measure the efficacy of a cloud unit economics practice.


## Inputs

Defining and agreeing on the type of costs to report (e.g.: include or not discounts, negotiated rates, optimizations, shared costs, support, any other operational related cost) Once you’ve decided what to measure, it is imperative that you clearly delineate what financial inputs make up your unit costs.

Is your organization receiving an enterprise discount? Do you have a private pricing agreement with one of your vendors? Are you receiving bulk discounts on licensing costs? Do you amortize upfront payments for commitments? Regardless of which stage your organization is at in the crawl-walk-run cycle, it is important to consider these types of questions when measuring and reporting your unit costs.

[Please see the full playbook](/projects/introduction-cloud-unit-economics/) for more details on how to implement Cloud Unit Economics with your FinOps team.

<!-- REAL WORLD RESOURCES, PROJECTS, PLAYBOOKS, GUIDES AND STORIES -->

{% include resources-loop.md %}


---
