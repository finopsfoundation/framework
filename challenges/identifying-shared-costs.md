---

layout: default

---

*NOTE: This playbook is in a draft format and is not final. It is published to preview for an upcoming member demonstration, but undergoing review by the Technical Advisory Council. Expect more changes to come.*

# A Guide to Spreading Out Shared Costs

Every organization has shared IT costs, and these span multiple business departments. As organizations increase their adoption of public cloud resources, it becomes increasingly difficult to assign shared cloud resources to specific business owners, to understand how to properly and fairly allocate costs, and to actually forecast future business unit budgets.

## Table of Contents
* [Before you begin](#begin)
* [Relevant FinOps Framwork components](#components)
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

<span id="components"></span>

## Relevant FinOps framework components
To get the most out of this document, please review the following first:
* [Tagging and labeling](https://framework.finops.org/framework/functions/tagging-labeling/)
* [Cost allocation](https://framework.finops.org/framework/capabilities/allocate/)
* [Budgeting and forecasting](https://framework.finops.org/framework/capabilities/forecast)
* [Reserved instances, spot pricing, and savings plans](https://framework.finops.org/framework/capabilities/rate-optimization)
* Enterprise discount programs
* Accounting Models
* Invoice and Billing Reporting
* [Chargeback and Showback Reporting](https://framework.finops.org/framework/capabilities/report)
* ...and more (please feel free to add or correct any links as a contribution to this playbook)

If you have a strong handle on these subjects, continue on to better understand how to approach this challenge.

### Shared costs that this document covers
* Anything related to cloud: Support charges, shared services, etc
* AWS/GCP Marketplace costs
...and more in future revisions

<span id="why-allocate"></span>

## Inntroduction: what are shared costs?

Examining two completely opposite (and over simplified) examples of cloud costs will illustrate what are and are not shared costs. Example #1: A web application is run on a single compute instance with both the web server and the datbase running locally. The compute instance only hosts this one, simple web application. As a general practice, the enterprise running the web application charges back costs based on product. In this case, the costs for both the compute instance and its attached block storage is not a shared cost: they are both charged back to the product owner of the single Web applicaiton running on the compute instance. Example #2: a single compute instance hosts a number of compute containers. The containers running on the compute instance run components of several different web applications and serve several different customers. The cloud provider bills the enterprise for the compute instance's run time and for the allocated block storage attached to the compute instance. The enterprise running these web applications charges back costs based on product. Because several different products run on the single computee instance, the costs for its run time and attached storage are shared costs for the enterprisee, which would like to develop an approach for splitting up the cost for the compute instance and charging the split costs back to the product owners.

## Why allocate shared costs?
Practitioners often struggle with which shared costs should and shoold not be split up and charged (or shown) back to cloud users. A foundational principle of FinOps is: “everyone takes ownership for their cloud usage,” which would argue that 100% of shared costs should be charged or shown back. However, a counter argument would be that cloud service users should only be "charged" with costs that they arguably have control over generating. Which is correct? One helpful framework for deciding when to charge back shared costs and when not to might be this: the two purposes of charging back ANY costs (cloud or not) are 1) to measure team performance and 2) to incentivize good behavior on the part of resource consumers. Because the process of charging back shared costs involves investment of time and effort, only those shared costs over which team members can exert at least partial control should be charged back. Here's a test for when and when not to charge back: "if I charge back this shared cost, will the resulting data cause any cloud consumers to change their consumption in a way that benefits the organization?" If there are no conceivable scenarios where they would, the shared cost should not be split and charged back. If there are meaninful scenarios involving material amounts of spend where they would, then the cost should be split and charged back. The key to understanding total cost of ownership is built upon transparency and accuracy, and unallocated shared costs over which cloud users have control hinder both of these. Without appropriately splitting such shared costs, engineers and product managers lack a complete picture of how much their products are really costing.

### Let’s think of it in terms of a pizza
Here's an example of how unallocated shared costs can distort behavior. Imagine Rajesh, Susan, and Marcus decide to have a private pizza party. Marcus books Palatable Pizza for $1,500 - which includes music, a private room, free drinks, and 90% discount on their mini pizzas, and then everybody pays for their own food, $5 per mini pizza. Rajesh buys 3 ($15), Susan buys 2 ($10), and Marcus buys 1 ($5).

After the party, Rajesh and Susan are excited to have another party because “it cost everybody less than $15!”; meanwhile the whole evening has cost $1,505 for poor Marcus. Because Rajesh and Susan didn’t understand that the cost of the venue was foundational to their party, they don’t know they grossly overpaid for pizza.

Failing to distribute shared costs and make them visible to the consumer can result in a disconnect between engineering (the consumer) and the financial impacts of their decisions. If costs are visible, consumption and ownership responsibility are aligned, and engineers are supplied with the feedback loop to guide them in making better decisions.

<span id="who-cares"></span>

## Who might care about shared cost allocation?

### Finance: Controlling
Chris, the leading digital controller from the finance department is supporting Executives to make better decisions. He loves to have all costs accurately allocated according to cause and their respective cost centers where special attention is paid to shared costs.

### Business: Program Manager
Sr. Program Manager Stacy is responsible for accurate reporting from all the products of her program she manages. Not having shared costs distributed correctly could create a financial disadvantage for product budgets.

### Business: Product Owner Platform
Quinn is the business owner of a shared platform which enables many product teams to deliver business value fast, reliably and securely. He has an obligation to showback or chargeback the costs that have been caused by the product teams by using his platform so he does not have to pay the party on his own.

### Engineering: Software Engineer
The software engineer Linus had no clue until last month how much he owns of all the shared platform costs that have occurred. Nowadays cost optimization is simply part of a sprint delivery.

### Engineering: Engineering Manager or Director
Suchandra is responsible for all costs incurred in her team or department, including the portion of shared costs that her team is charged.

<div id="1"></div>
<span id="challenge"></span>

## How to take on this challenge
### Step 1: Identify what kinds of costs are shared 
For the purpose of this document, we are primarily concerned with shared cost as the total amount billed to a customer by a cloud provider. That is, a cloud bill is shared at the organizational level and must be allocated for accounting purposes. Shared cost may be allocated to a centralized budget within the technology org; alternatively it can be allocated to cost centers throughout the business and technology organizations. From a finance perspective, we may also refer to shared cloud costs as a type of direct operating expense.  

What classifies as a shared cost can vary from organization to organization, and also depend on the maturity and size within the company itself. However, there are a standard set of costs that generally appear on every company’s income statement, and it becomes the responsibility of the company to determine whether they should be considered shared or not. The company can even define different types of shared costs -- some shared costs apply to the entire organization, while others may be shared only among those cost centers that use them. In terms of accounting however, most cases of “shared costs” in the cloud are actually accrued and charged within one account, and it can be challenging to determine which costs should be shared.

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
| Sales operations | $56K       | 33.3%                  |
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

### Avoid and Simplify
*Joseph Daly, Nationwide*

Nationwide's strategy to handle shared costs is to avoid them as much as possible. We do this through our account and tagging strategies.  We segment or accounts by department and sometimes by application so that if there are any untaggable expenses are at least identifiable to the account owner. We work with finance to make sure that each account has a default cost center so that 100% of all costs are allocable to the owner.

For shared platforms,like containers, we primary leverage a label strategy for cost allocation.  We allocate cluster costs in proportion of each cost center label’s usage.   Sometimes, depending on the application, we will dedicate clusters similarly as we do accounts.  That way one department or application is being charged for the costs incurred as opposed to being spread out amongst the rest.

Due to company accounting policy and a desire to make our direct chargeback as transparent as possible, we do not allocate 100% of our bill directly through chargeback.  Chargeback covers the vast majority of our expenses.  For the remainder, items like enterprise support and accounts setup for management of the cloud, we set a budget and provide showback reporting to make these charges visible.  They are not charged back directly, but we know who/what/where the costs are being driven from.  Providing this keeps us aligned with enterprise accounting policies and keeps our chargeback simple and transparent.

---

### Non-technical/Market/Environmental/Corporate Governance Influencing Factors on How to Track, Process and Share Costs
*Neil May, FinOps Director, Wish Star*

**Vendor pricing strategies** - complex, ever evolving software and service licensing models from multiple vendors to flow through predictions and usage accounting.

**Centralized Procurement In Multi-National Companies** - due to corporate strategy for controls and/or seeking economies of scale from full company buying power 
* Pulls all costs into one regional billing point, persistent monthly stream of usage data to couple with billing data for real-time analysis, validation against exceptions rules such as tag validation, clean digital identity integrity with budgets/cost centres and bill to entities in group, contracted rates within contracted commits and/or accurate overage rates etc, etc, etc...
* Validated charges to be re-rated (+ any internal finance admin charge) and cross border currency forex applied from what base, local tax jurisdiction treatments service by service (i.e. SaaS vs. IaaS vs Telecoms vs Network and accounting for withholding taxes incurred where international tax-treaties don’t support (i.e. WHT from Brazil to the UK is ~30% - who takes this cost/cashflow hit? how to account/apportion? How does this change corporate policy decisions to decentralized billing (from local vendors) to centralized vs. reduced economies of scale?

**Exceptions** - E.g. Pandemic causing sharp fluctuations in resourcing (human or otherwise with Furlough, contracting, burstable cloud services) creating exceptional usage patterns and the need to ensure flexible subscription plans are scrutinised for integrity with joiners/movers/leavers and project/process suspensions etc. 

**Pattern spotting** - Building up the significant data lakes with triangulated data points between related services, allows for build up of benchmarking industry costs and utilisation models for total cost analysis of LOB App and solutions for apportionment.  Data science and analysis can surface insights to help drive down costs as well as apportionment norms and the shared cost data can also aid prescription for quality of experience for user adoption etc etc. (different network provider data, compute data etc - optimising cost to performance for better apportionment)

---

### One Way to Put it All Together
*Chris Greenham, healthAlliance*

Shared Costs should be identified upfront as part of Service Design. Just as the Service Design is subject to design approval, the Shared Cost Model needs approval from FinOps.

FinOps should own the Cloud Shared Cost model(s) on behalf of the Business Cost Centre Owners, for both Business as Usual (OpEx) and Projects (CapEx). FinOps should define the Cost Model Design Patterns that best suits the Cloud Deployment, Service Model and CSP Pricing and Discounting Structures that are to be made available to the business.

During the Service Design phase ‘Compare Price and Quote’ are performed to determine what the Total Cost of Deployment ‘TCD’, and Total Cost of Ownership ‘TCO’ are to be before ordering any cloud services.  Cloud Service Decision Tree should then be applied to determine the deployment for Colocation, Private, Public or Hybrid.  

When designing a new cloud service the cost model requirements are identified and agreed upon by the Project and Business Owners. The Project shared cost model may be completely different to the Business Operations shared cost model. The Cost Model Design Patterns are used to guide the shared cost decision.

To manage the Cloud costs ownership over the lifetime of the Cloud Service. FinOps should implement a Change Control mechanism to manage the Change of Ownership and Change of Cost Model, between Project CapEx Budgets to BAU OpEx Budgets, where the latter may split across multiple Business Owner Cost Centres.  

This Change Control provides the audit reporting and visibility required by Finance to enable the tracking of change in cloud cost ownership, and the when and how cloud shared costs were applied. The Stop/Start Date can then be used to determine how proration of charges should be applied, when the change ownership occurs part way through a CSP Billing Period.

The final stage is the Reconciliation of Charges between ‘Actuals and Expected’. This step is to ensure all CSP Cloud Charges that have been apportioned against a Shared Cost Model, all balance out against the CSP Month Bill.  Once the balance of charges has been confirmed and approved by FinOps, then Showback and/or Chargeback reports should be issued to each of the cost centres outlining a breakdown of their monthly cloud charges, for the Cloud Bill Period. 

Acting as a Cloud Service Broker (CSB) to support IaaS and Public Cloud Solutions, for multiple District Hospitals. Finance manages the General Ledger, which supports a set of Accounts with Cost Centre Codes. The Cost Centres cover Projects (CapEx) and BAU (OpEx) budgets under a set of Accounts. Each Hospital sets their planned Cloud Budgets CapEx and OpEx, for the year, which is then divided across Cloud and IT Services that  each Hospital requires to operate with. 

The CSP bill (invoice) is received by Finance and posted to the Accounts Payable Account, for each CSP (Bill to Pay). The CSP (Statement of Charges/Billing Report) is then retrieved from each CSP at the end of each bill period. The set of charges are then normalised (currency conversion), for local handling, which includes reconciliation of Actuals vs Expected (Cloud Moves, Adds Changes and Deletes aka MACD’s over the bill period). The Billing report includes a Machine ID, which is recorded in CMDB under an Implementation. Each Implementation is then appended with a Charge Code Config Item.    

The reconciled charges are then apportioned to a Charge Code Item(s) identified for the Implementation item in CMDB. This identifies the active Charging Party over the Bill Period (Caters for Proration of Charges for Project to BAU Handover). The Charge Code Item is stored in a CMDB as a Configuration Item (CI). The Charge Code CI is attached to each Implementation (CI), which inturn is linked to each VM Instance (CI) for IaaS CSP. 

The Charge Code item contains a number of attributes, which are configured as part of the provisioning process for service establishment. CSP Orders are noted with the VM Instance and Charge Code (CI.s). Order Reports are generated to reconcile the Bill for any Cloud MACD changes that occurred during the bill period to verify the Actuals with Expected.

![](/img/shared-costs/chris-story.png)

<figure>Charge Code Configuration Item (CMDB)</figure>

The VM instance design includes specifying the Charge Code CI attributes for Charge Category (Project/BAU) Charge Periods From/To Date, Charge Owner, Bill Status (Active, Suspended, Terminated), Charge Code (Cost Centre, Project Code, or GL Code), Charge Method (Purchase Order,  Project, Funded), Charge Type (Dedicated, Shared), Charge Split (% or $ Amounts), Charge Owner, Charge Contact (Send Alerts), Budget Amount, Budget Period, and Charge Reporting (Showback, Chargeback).

The Charge Code CI remains against the Implementation, for the duration of life as a 1:many association. For a Shared Charging Model, the Charge Type Attribute must be set to ‘Shared’ so that multiple Charge Code CI’s can be created against the Implementation.  Each Charge Code CI is then configured for each Shared Charge Entity for Owner, Contact, Budget, %/$ Amounts, and Chargeback. The result should be 100% cost allocation across the Charge Code CI’s.

The above Charge Code Item attributes are then changed as required over the lifetime of the Implementation. Charge Control (RFC) is the mechanism used to request and authorise the change actions.  Charge config attributes change as the Product Instance moves between Project CapEx (Non-Prod) and BAU (Prod) OpEx. The Owner's/Roles, Budgets, Shared Amounts are some of the attributes that will change over the lifetime of the implementation. The RFC provides an audit trail on the financial transactions to meet Account and Audit compliance requirements.  

The above process supports hybrid cloud that employs an aggregation model. The build process includes a financial modelling scenario that identifies how the cost allocation is to be configured before deployment. A showback report can be provided with dummy charge data to validate the shared charge model is applied as expected. The Project/Business owner is then required to accept responsibility for the receipt of charges as identified for shared costs, for the agreed charge period that is to be tracked against an agreed monthly spend budget….’Responsible Cloud Spending’.

### How to Allocate Meter Charges by Type
*Tom Foegen, Section Head - IT Business Services, Mayo Clinic*

To date, Mayo Clinic is allocating all meter charges to projects. Charges are broken down a few ways:
* General costs - These are costs that apply to all projects. An example would be security logging costs.  These costs are applied proportionately to the charges.
* Service costs - Projects are broken down into various service categories such as web app stack, IaaS, data science virtual machine, etc. There are some costs that apply only to each service and those costs for a particular service are allocated only to the costs for that service. An example would be training instances. These are set up to teach customers how to use the tools.
* Reserved instances - Reserved instance costs (Azure) are directly allocated to each project based on using the meter categories in the billing export for reserved instances.

These costs are applied at a detailed row level within the billing export data in order to be able to rollup up the costs multiple ways. The customer only sees the cost after the costs are allocated. To date, we have not been challenged from anyone on those costs.

Currently we apply these costs at the end of the month but since customers are now starting to receive regular reports (daily, weekly and monthly) we are going to start to apply the overhead costs on a daily basis as charges come in.  The challenge is that the projects need to be defined upfront in order to determine what service category they apply too.

The alternative discussed recently is to use a standard percentage to apply the categories and then true up these costs on a regular basis, maybe quarterly.

---

### Fair cost allocation in a shared Platform (as a Service)
*David Sterz, Solutions Architect and FinOps Lead, Mindcurv*

#### Setup
* The public cloud mimics the actual organization, departments, teams,products.
* Dedicated cloud accounts for teams that are mapped 1:1 to an organisational units
* Shared cloud accounts form their own organisational unit(s)
* 1 Platform Team provides a shared platform and services
* 20+ Product Teams have dedicated cloud resources, some are shared between them

![](/img/shared-costs/david-story.png)

#### Goals 
* Business: Provide accurate cloud costs per product to be consumed as part of a Unit Metric Aggregation
* Finance: 80%-100% direct cost allocation to cost center codes from public cloud spent across Foundation- and  Product Teams
* Engineering: Cost ownership through full transparency and enablement to optimize themself towards business KPIs

#### Story

A central Platform Team is the enabler for the Product Teams to develop value faster and compliant by providing shared platform services as a product (VCS, Container Registry, CI/CD) on a shared deployment target (Kubernetes) along with shared operational services (Dashboarding, Log-management, Metrics, and Tracing + APM, etc.)

The shared platform services are a mix of cloud resources, Kubernetes Deployments and as a 3rd Party SAAS that are consumed by most product teams.

The cloud resources that are needed by the product teams are provisioned by the central platform team into the product teams accounts which frees up the product teams from the heavy lifting and the operational responsibilities so they can focus more on their application development.

While organisational units and the account per team setup gives a good baseline for cost transparency there are various shared costs almost everywhere.

##### Product Team Accounts 
Most costs can be allocated directly to the product team on product level. Higher granularity down to application and sub-service level is achieved through tagging and labeling. 

A small percentage of costs occur in every product team account which is part of the platform teams tooling that provide observability, security and compliance services as part of the platform services.

**Examples**
* Monitoring Agent per Account as part of shared observability costs
* Thread Detection introduced by a central security team
* Compliance checks against policies and best practices

##### Platform Team Accounts

As the platform for the product teams is shared most of the resources in the platform account is shared. 

**Examples**
* DNS with many records split in nonproduction and production
* Secret Management via kubernetes integration with cloud providers secret service
* Kubernetes cluster infrastructure (storage,compute,ram,network)
* Kubernetes workloads in shared cluster from all teams
* The CD system is shared across all Teams deploying new Releases
* Dashboards and Alerting is shared
* Metrics & Tracing, shared and big differences in usage and costs per team and read/write
* Log-Management where teams ingest different volumes and velocity along with different usage/query patterns

**Example of shared cost allocation strategy for Log-Management**

| Strategy     | Crawl                            | Walk                                 | Run                            |
|--------------|----------------------------------|--------------------------------------|--------------------------------|
| Proportional |                                  | Log-Mgmt Costs / Directcost-per-Team |                                |
| Even split   | Log-Mgmt Costs / Number-of-Teams |                                      |                                |
| Fixed        | Log-Mgmt Costs by Traffic %      | Log-Mgmt Costs by Log-Storage %      | Log-Mgmt Costs by Read/Write % |

#### Shared Accounts
Other Accounts provide services that are shared across all teams. 

**Examples**
* The version control system (VCS) is used by many teams where they store source code, build artifacts and documentation
* A central container registry holds images for every team
* The CI runners are building software for various teams, some of them are dedicated to a team as they have specific requirements

---
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

See our [contribution guidelines](https://framework.finops.org/introduction/how-to-contribute/) for more details.
