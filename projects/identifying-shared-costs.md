---

layout: default

title: A Guide to Spreading Out Shared Cloud Costs
description: As organizations increase their adoption of public cloud resources, it becomes increasingly difficult to assign shared cloud resources to specific business owners.
page-identifier: project_shared-costs
project-title: A Guide to Spreading Out Shared Costs
project-description: As organizations increase their adoption of public cloud resources, it becomes increasingly difficult to assign shared cloud resources to specific business owners.

---

# A Guide to Spreading Out Shared Costs

Every organization has shared IT costs, and these span multiple business departments. As organizations increase their adoption of public cloud resources, it becomes increasingly difficult to assign shared cloud resources to specific business owners, to understand how to properly and fairly allocate costs, and to actually forecast future business unit budgets.

## Table of Contents
* [Before you begin](#begin)
<!-- * [Relevant FinOps Framwork components](#components) -->
* [Why allocated shared costs?](#why-allocate)
* [Who might care about shared cost allocation?](#who-cares)
* [How to take on this challenge?](#challenge)
* [How do you know you're on the right track?](#kpis)
* [Real world stories](#stories)
* [Acknowledgements](#acknowledgements)

<span id="begin"></span>

## Before you begin
You should understand the basics of how cloud computing works, know the key services on your cloud providers, including their common use cases, and have a basic understanding of billing and pricing models. Being able to describe the basic value proposition of running in the cloud and understand the core concept of using a pay-as-you-go consumption model are also necessary.

You’ll also need to have a base level of knowledge of at least one of the three main public cloud providers (AWS, Azure, Google Cloud). For AWS, we recommend AWS Business Professional training or, even better, the AWS Cloud Practitioner certification. For Google, check out the Google Cloud Platform Fundamentals course. For Azure, try the Azure Fundamentals learning path. Each can usually be completed in a full day workshop.

You should also have a solid understanding of several things within your company. First, you should know the high-level architecture of the technical systems within your company; be able to identify and understand them, as well as what may be used by more than one team. You should have a foundational understanding of how your Accounting and Finance departments handle IT Operation costs, specifically cloud.  You should be able to identify and understand your products and their usage internally. 

<!-- <span id="components"></span> -->

<!-- ## Relevant FinOps framework components
To get the most out of this document, please review the following first:
* [Tagging and labeling](/framework/capabilities/tagging-labeling/)
* [Cost allocation](/framework/domains/allocate/)
* [Budgeting and forecasting](/framework/domains/forecast)
* [Reserved instances, spot pricing, and savings plans](/framework/domains/rate-optimization)
* Enterprise discount programs
* Accounting Models
* Invoice and Billing Reporting
* [Chargeback and Showback Reporting](/framework/domains/report)
* ...and more (please feel free to add or correct any links as a contribution to this playbook)

If you have a strong handle on these subjects, continue on to better understand how to approach this challenge. -->

### Shared costs that this document covers
* Anything related to cloud: Support charges, shared services, etc
* AWS/GCP Marketplace costs
...and more in future revisions

<span id="why-allocate"></span>

## Why allocate shared costs?
A foundational principle of FinOps is: “everyone takes ownership for their cloud usage.” The true key to understanding total cost of ownership is built upon transparency and accuracy, but unallocated shared costs hinders both of these. Without appropriately splitting costs that are shared, engineers and product managers lack a complete picture of how much their products are really costing.

### Let’s think of it in terms of a pizza
Imagine Rajesh, Susan, and Marcus decide to have a private pizza party. Marcus books Palatable Pizza for $1,500 - which includes music, a private room, free drinks, and 90% discount on their mini pizzas, and then everybody pays for their own food, $5 per mini pizza. Rajesh buys 3 ($15), Susan buys 2 ($10), and Marcus buys 1 ($5).

After the party, Rajesh and Susan are excited to have another party because “it cost everybody less than $15!”; meanwhile the whole evening has cost $1,505 for poor Marcus. Because Rajesh and Susan didn’t understand that the cost of the venue was foundational to their party, they don’t know they grossly overpaid for pizza.

Failing to distribute shared costs and make them visible to the consumer can result in a disconnect between engineering (the consumer) and the financial impacts of their decisions. If costs are visible, consumption and ownership responsibility are aligned, and engineers are supplied with the feedback loop to guide them in making better decisions.

<span id="who-cares"></span>

## Who might care about shared cost allocation?

### Finance: Controlling
Chris, the leading digital controller from the finance department is supporting Executives to make better decisions. He loves to have all costs accurately allocated according to cause and their respective cost centers where special attention is paid to shared costs.

### Business: Program Manager
Sr. Program Manager Stacy is responsible for accurate reporting from all the products of her program she manages. Not having shared costs distributed correctly could create a financial disadvantage for product budgets.

### Business: Product Owner Platform
Quinn is the business owner of a shared platform which enables many product teams to deliver business value fast, reliable and secure. He has an obligation to showback or chargeback the costs that have been caused by the product teams by using his platform so he has not to pay the party on his own.

### Engineering: Software Engineer
The software engineer Linus had no clue until last month how much he owns of all the shared platform costs that have occurred. Nowadays cost optimization is simply part of a sprint delivery.

### Engineering: Engineering Manager or Director
Suchandra is responsible for all costs incurred in her team or department, including the portion of shared costs that her team is charged.

<div id="1"></div>
<span id="challenge"></span>

## How to take on this challenge
### Step 1: Identify what kinds of costs are shared 
For the purpose of this document, we are primarily concerned with shared cost as the total amount billed to a customer by a cloud provider. That is, a cloud bill is shared at the organizational level and must be allocated for accounting purposes. Shared cost may be allocated to a centralized budget within the technology org; alternatively it can be allocated to cost centers throughout the business and technology organizations. From a finance perspective, we may also refer to shared cloud costs as a type of direct operating expense.  

What classifies as a shared cost can vary from organization to organization, and also depend on the maturity and size within the company itself. However, there are a standard set of costs that generally appear on every company’s balance sheet, and it becomes the responsibility of the company to determine whether they should be considered shared or not. The company can even define different types of shared costs -- some shared costs apply to the entire organization, while others may be shared only among those cost centers that use them. In terms of accounting however, most cases of “shared costs” in the cloud are actually accrued and charged within one account, and it can be challenging to determine which costs should be shared.

Support charges are a typical example of this challenge. Cloud vendor support charges are generally applied at the parent account level. Some organizations choose to cover this charge with a Central IT/Cloud team’s budget, but that approach isn’t standard. More commonly, a Central IT/Cloud team is considered a supporting organization (being a cost center) and therefore needs to allocate its cost to its customers: business units or application owners.
Modern architecture has also introduced more shared costs with the rise of shared platforms. These platforms have multiple teams working with the same core resources, such as data lakes built in commonly shared S3 buckets or Kubernetes systems running on shared clusters. At first glance, chargeback and showback for these platforms can seem impossible, but proper tagging can help with splitting shared costs correctly.

#### Common types of shared costs are:
* Shared resources(network,shared-storage)
* Platform services (k8s, logging, etc)
* Enterprise level support
* Enterprise level discounts
* Licensing, 3rd party SaaS costs (out of scope for this document, but hope to add in a future revision)

<div id="2"></div>

### Step 2: Learn how to split up these costs
There are typically three ways to split up shared costs:
* Proportional: Based on relative percentage of direct costs
* Even split: Split total amount evenly across targets
* Fixed: User-defined coefficient (the sum of coefficients needs to be 100%)

Let’s consider an example. The table below shows how much each business unit of an organization consumed in a given month, and how the organization was charged $12,000 of enterprise support charge.

| **Business units**            | **Cost**  | **% of total (excluding enterprise support)** |
|---------------------------|-------|-------------------------------------------|
| Sales operations          | $50K  | 50%                                       |
| Engineering—QA            | $30K  | 30%                                       |
| Engineering               | $20K  | 20%                                       |
| Enterprise support charge | $12K  |                                           |
| Total                     | $112K | 100%                                      |

Without sharing the enterprise support charge, you can see that:
* Sales operations will be accountable for a total of $50,000.
* Engineering—QA will be accountable for a total of $30,000.
* Engineering will be accountable for a total of $20,000.
* The $12,000 enterprise support charge isn’t being distributed among teams and would need to be assigned to a central budget.

#### Proportional Cost Method

Following the proportional sharing model, the enterprise support charge ($12,000) will be distributed among the business units based on the percentage of their raw spend. Mature organizations tend to proportionally distribute shared costs among business units based on their direct charges.

| **Business units**   | **Total Cost** | **Shared Cost Allocation** |
|------------------|------------|------------------------|
| Sales operations | $56K       | 50%                    |
| Engineering—QA   | $33,6K     | 30%                    |
| Engineering      | $22,4K     | 20%                    |
| Total            | $112K      | 100%                   |

Sharing the enterprise support charge, you can see that:
* Sales operations will be accountable for a total of $56,000 ($50,000 direct cost + $6,000 support charge allocation).
* Engineering—QA will be accountable for a total of $33,600 ($30,000 direct cost + $3,600 support charge allocation).
* Engineering will be accountable for a total of $22,400 ($20,000 direct cost + $2,400 support charge allocation).
* The enterprise support charge has been distributed and does not impact a central budget.

#### Even Split Model
Under the even split model, the enterprise support charge ($12,000) will be shared evenly by all business units. Because of its simplicity, this model tends to be more popular in smaller organizations that have fewer business units.

| **Business units**   | **Total Cost** | **Shared Cost Allocation** |
|------------------|------------|------------------------|
| Sales operations | $54K       | 33.3%                  |
| Engineering—QA   | $34K       | 33.3%                  |
| Engineering      | $24K       | 33.3%                  |
| Total            | $112K      | 100%                   |

The even split model makes allocation of shared costs simple, but will impact some business unit’s budget more than others. In the above example, Engineering is paying 13% more for shared costs than under a proportional model:
* Sales operations will be accountable for a total of $54,000 ($50,000 direct cost + $4,000 support charge allocation).
* Engineering—QA will be accountable for a total of $34,000 ($30,000 direct cost + $4,000 support charge allocation).
* Engineering will be accountable for a total of $24,000 ($20,000 direct cost + $4,000 support charge allocation).
* The enterprise support charge has been distributed and does not impact a central budget.

#### Fixed Proportion Method
The fixed proportion method relies on using a set percentage to attribute shared costs month over month. Typically these ratios have been determined by evaluating past spend and arriving at a fair breakdown for allocating spend. Consider our $12,000 enterprise support charge example using these designated percentages.

| **Business units**   | **Total Cost** | **Shared Cost Allocation** |
|------------------|------------|------------------------|
| Sales operations | $55,4K     | 45%                    |
| Engineering—QA   | $33,6K     | 30%                    |
| Engineering      | $23K       | 25%                    |
| Total            | $112K      | 100%                   |

The fixed proportion model attempts to provide a more equitable distribution of shared costs than even split, but still leaves allocation easy to calculate. Unfortunately, it does rely on analysis of historical data to appropriately weight the allocations, but once done it can be a good approach.
* Sales operations will be accountable for a total of $55,400 ($50,000 direct cost + $5,400 support charge allocation).
* Engineering—QA will be accountable for a total of $33,600 ($30,000 direct cost + $3,600 support charge allocation).
* Engineering will be accountable for a total of $23,000 ($20,000 direct cost + $3,000 support charge allocation).

<div id="3"></div>

### Step 3: Apply Shared Cost Models
Combining multiple types of shared costs with multiple approaches to splitting shared costs can quickly become complicated. Not every type of shared cost needs to follow the same method to splitting shared costs. Some charges like support fees, might seem to work better under a proportional model, but other costs like shared resources, or dev/test environments might make sense under the even split or fixed proportion approach.
There is no best approach model; a company will need to decide what works best for them, and what makes the most sense based on their budgeting and accounting methodology. Typically, more mature organisations rely on proportional or direct usage based appropriations, but not always.
Don’t become frustrated if you are struggling to determine how to apply shared costs. In the 2021 State of FinOps report, companies across the Crawl, Walk, and Run states all listed allocating Shared Costs as the second biggest challenge they are facing. The best approach is usually iterative in nature, and becomes more robust over time.

Start with your organization’s largest shared costs and determine how to allocate the spend. Work with finance and accounting to develop a process for how these shared costs will show up on budgets. Communicate with the impacted business units so they understand what the change is, and why this change is good for them.
A good first approach to splitting costs is to use the even-split or fixed-proportion models because they are easier to manage month over month. Remember if you’re splitting $50,000 across 5 business units, the first few months will be difficult no matter how it’s allocated. After a couple of months, you can review any impacts the change has made to product decisions, and re-evaluate the approach currently being used.

#### How to apply discounts and credits to shared costs
AWS has switched to a model where enterprise discounts are applied on a per resource basis, so this ameliorates some of the burden of calculating discounts for shared costs. Discounts can be applied by the cloud service provider (CSP) at billing time against the Monthly Bill or at an Account Level where an Account Hierarchy is defined with the CSP.

So there may be no need to discount the Shared Cost amount, which is to be allocated to a Cost Center. The process may not be the same for GCP and Azure, however.

<div id="4"></div>

### Step 4: Reporting Shared Costs
If you are currently not allocating out 100% of the expense, it is important to bring attention to the unallocated shared costs through reporting. Without proper attention, shared costs can quickly grow from immaterial cost adjustments to extremely material budget overruns. Proper attention and management of shared costs can be driven by effective reporting.

Effective reporting on shared costs will show:
* Trend of the costs over time to indicate whether they are growing or shrinking
* Actuals vs budget vs forecast
* Identification of spend drivers - (perhaps service or group that is creating the spend) - essentially, this is a ‘showback’ of who/what is responsible of shared costs

The most important aspect of reporting is that it is reviewed by the teams and stakeholders who can drive the actions to manage the costs. The reporting must make clear the impact to the business and the actions that can be taken to either manage or mitigate the expense and continue to mature successful financial planning in the cloud space.

In some cases, our FinOps Foundation members report that even general shared cost reporting can help identify charges that may go underlooked by current enterprise accounting policies.

#### Overcoming challenges to accurate accounting
As Cloud Services are Moved, Added, Changed or Deleted (MACD) each month the fixed and one-off cost will vary. Due to MACD activity, tracking payment for shared costs managing budget changes over the lifetime of the Cloud Service can be very complicated.

Keeping track of these cost changes is handled through Bill Reconciliation, where Cloud Service Order Reports and Request for Change (RFC) Records are used to track the movement of charges. The effective End/Start Dates are checked against the Bill/Invoice Period to verify if change is reflected in the Bill Amount for the Invoice Period. If charge change can not be mapped to Invoice period, then Order and RFC records are held over to the next bill period reconciliation.The latter action may result in Credit Adjustments/Credit Notes for over charged periods.

One challenge to accurate accounting is knowing when to stop with shared costs.  It’s easy to say something is a shared cost and soon the bucket of shared costs that need to be split can get pretty large. You should have a scheduled, regular review of shared costs to make sure resources that have been marked shared are still relevant, and the resources still needed.  Since no one pays directly for these costs, it can be easy for these resources to be left on, because no one business unit feels the impact of their cost. Make sure you regularly challenge the need for those resources.

<div id="5"></div>

### Step 5: Sustaining Your Approach
You’ve done it. You figured out what your shared costs are, how you want to split them up, how it gets reported, and you have passed your first month where shared costs have been allocated. Nobody hoisted you on their shoulders in celebration, but everybody understands the new approach, appreciates the transparency, and is even on-board with the process.

It can be easy to relax and think the difficult work is over, but process sustainability is an essential part of spreading out shared costs. It’s essential to remain vigilant, and identify areas that can easily prevent fairly allocated costs to skew over time. As you work towards a long-running, sustainable shared cost model, consider a few of these questions:

* If the company has adopted a tagging standard for allocation, what is the process for ensuring that tags are correct? 
* How do you handle unallocated shared costs that may pop-up due to lack of appropriate tags? 
* What is your review process for when new cost centers or business units are introduced? 
* When using a fixed proportion model to be fair, how often are those ratios reviewed? 
* Is your data modeling approach sustainable? 
* How much documentation do you have for your processes?
* How many people know the system that has been implemented? Is there sufficient shared knowledge so it does not rest in too small of a group?

<span id="kpis"></span>

## How do you know you’re on the right track?

As mentioned above, the process of spreading out shared costs is iterative, and evolves over time. The goal of splitting these costs is that products have a complete and holistic view of their actual running costs. As the process becomes more mature, confidence in the accuracy of the distribution should grow. Cost centers or teams should have a greater ability to be able to optimize or influence these shared costs.

Tracking is essential to view progress on splitting shared costs. In addition to tracking cost splits, you should also develop KPIs that consider how much of the shared cost is accurately distributed, and not based on the models proposed above. Consider some example KPIs that correspond to the suggested approach above:

#### Shared vs. dedicated cost tagging and labeling coverage in %
*Try this to track success on [Step 1](#1)*

As the classification of shared vs. dedicated costs should result in tagging and labelling, this KPI can track the progress.

#### Shared cost model distribution in %
*Try this to track success on [Step 2](#2)*

Your company will employ different methods of shared cost over time: even split, fixed %, or proportional. To track the maturity of your modeling, you can track percentage spend under each approach, and match it against company goals. This approach will result in three or more values that will add up to 100%.

#### Applied shared cost distribution on all shared resources in %
*Try this to track success on [Step 3](#3)*

Having cloud resources only identified as shared and having them tagged as such does not mean they are allocated explicitly and accurately using an appropriated model so this KPI can track your completeness and maturity.

#### Shared vs. dedicated costs in % 
*Try this to track success on [Step 4](#4)*

This can be used for trending, and tracking whether your shared costs have exploded relative to your dedicated costs. It requires baseline evaluation before it can be accurately used.

#### Shared cost maturity aggregation of previously detailed KPIs
*Try this to track success on [Step 5](#5)*

An aggregation of the KPIs listed above, this one number gives a holistic view of all parts necessary in tracking shared cost.

The best way to know if you’re on the right track is to evaluate how the process fits in with your organization’s overarching approach to cost management. Is the process of splitting shared costs helping to drive innovative and understanding? This is an important consideration to make. While splitting shared costs is in itself a cultural shift, it should help everybody make better decisions about what they’re spending and why. 

We’ve worked out some milestones that we think make sense at the Crawl, Walk, and Run stage of your journey through shared costs; they may help you to consider how to approach shared costs if you’re just beginning. The model is not proscriptive, many companies have implemented walk strategies before crawl or vice versa.  Cost is complex and different costs have varying impacts depending on your company infrastructure. 

<table style="width:100%;">
<thead>
<th style="width:22.5%;"></th>
<th>Crawl</th>
<th>Walk</th>
<th>Run</th>
</thead>
<tbody>
<tr>
 <td>Focus</td>
<td>Identifying shared costs Developing cost split strategy</td>
<td>Applying shared cost models</td>
<td>Refining shared cost approach, Long-term strategy Automation</td>
 </tr>

<tr>
<td>Splitting shared cost approach</td>
<td>None or Even-Split</td>
<td>Fixed Proportion or Proportional</td>
<td>Proportional or Multi-Pronged</td>
</tr>

<tr>
<td>Shared costs that may be split</td>
<td>Enterprise support charges</td>
<td>Crawl + Platform Charges</td>
<td>Walk + cloud volume discounts, RIs and SPs</td>
</tr>

<tr>
<td>Challenges</td>
<td>Multiple CSP Bill Formats Cloud Product Charges Billing Models Tagging Reconciliation</td>
<td>Bill Reconciliation Bill Reporting Shared Cost Model Show Back Reporting Charge Back Reporting</td>
<td>Shared Cost Policy, Shared Cost Design Patterns</td>
</tr>
</tbody>
</table>

<span id="stories"></span>

## Real World Stories
Here is a collection of stories from FinOps teams of all shapes, sizes, cloud utilization level, and FinOps maturity. Read on to see how other teams take on the challenge of identifying shared costs at scale.

{% include story-loop.md %}

<span id="acknowledgements"></span>

## Acknowledgements

The FinOps Foundation extends a huge thank you to the members of the Special Interest Group that broke ground on this documentation:

- Tracy Roesler 
- Vik Saluja
- David Sterz
- Joe Daly
- Deana Solis
- Anthony Johnson
- Chris Greenham
- Eleni Siakagianni
- Neil May
- Tom Foegen
- Vasilio Markanastasakis

If we’ve missed anyone, let us know. We thank you all for your contributions.

## How to contribute more FinOps stories about this challenge
There are many more stories to tell. If you have your own perspectives on tackling this challenge, submit your story to the SIG, or contribute to the FinOps Framework GitHub repo.

See our [contribution guidelines](/introduction/how-to-contribute/) for more details.
