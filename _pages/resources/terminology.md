---

layout: wide
permalink: /resources/terminology/
search: true

title: FinOps Terminology
description: A glossary of FinOps concepts and terminology used by practitioners all over the world. This resources also includes terminology and definitions to help readers better understand FinOps Foundation educational and training content.

---

# FinOps Terminology
A glossary of FinOps concepts and related terminology used by practitioners all over the world. This resources also includes finance and business terminology and definitions to help readers better understand terms used across the FinOps Foundation website, educational and training content.

## Anomaly Management

Anomaly Management
> Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise.

## Cloud Cost Management Terminology
Allocation Metadata
> The information used to categorize costs and is encapsulated within CSP constructs like resource tags (AWS; Azure) or labels (GCP). In this context, metadata can be differentiated between "Resource Metadata" where an individual resource is tagged or labelled or "Hierarchy Metadata" where categorization is applied to some other construct that provides grouping of resources.  Examples of allocation metadata include:
* GCP "labels" and "billing accounts";
* AWS  "resource tags", "Linked Accounts" and "Organizations";
* Azure "Subscriptions", "Resource Groups" and "resource tags"

Commitment Based Discount
> Each CSP provides customers the ability to discount on demand rates for cloud services used in exchange for a commitment to use minimum level of resources for a specified term. Depending on CSP and the cloud services used, the commitment may be based on the upfront payment for a certain number of resource units, time units or monetary value,  with various payment options and timeframes.  Examples of commitment based discounts include:
* GCP "Committed Use Discount" (CUD) for Compute Engine and "Reservations" for BigQuery
* AWS "Reserved Instance" (RI) for EC2 and "Savings Plans" (SP) for SageMaker
* Azure "Reserved instances" (RI) for VMs

Cost & Usage Data
> The datasource to which CSPs publish and from which native cost data can be derived when billable cloud services are consumed.  Examples of datasources include:
* AWS CUR (Cost & Usage Report)
* Azure Consumption API; Azure Cost Management Exports
* GCP BigQuery Cloud Billing Data Tables; GCP Cloud Billing Report

Resources
> a generic term used to describe any service or instance of a service purchased from a cloud service provider

Vacancy
> the amount of a commitment-based discount that went unused for a given timeframe

Waste
> Any usage or cost of resources which provide no value to an organization


Chargeback
> Chargeback is an allocation strategy of actual consumption spend of IT services from finance systems back to user teams via an internal report or “invoice”. Chargeback is a method to hold business units directly accountable for IT spend and requires IT Finance Integration (to allocate spend to the appropriate cost centers and budgets).

> Both Chargeback and Showback reporting can be done in any subset of responsibility, at the P&L level, or a subset of that (application, business owner, etc.), or in cross-cutting views (like all Production systems, or all storage costs, etc.), the strategic decision of how to handle where the dollars are allocated differs the two strategies.

Showback

> Showback creates a structure in which actual consumption of IT services is shown to business units, while the spend is being charged to a different business unit. Typically used to generate awareness & accountability across the organization or business areas.

> Both Chargeback and Showback reporting can be done in any subset of responsibility, at the P&L level, or a subset of that (application, business owner, etc.), or in cross-cutting views (like all Production systems, or all storage costs, etc.), the strategic decision of how to handle where the dollars are allocated differs the two strategies.


Amortized costs
> Some cloud resources and reservations come with an upfront fee. The amortized cost of a resource takes this initial payment into account and distributes it out based on usage, attributing the prorated cost for each hour of billing.

Budgeting
> An estimate of revenues and expenses companies plan to spend within a time period. This allows for companies to continually track where they are financially.

Budget vs Actual (BvA)
> A FinOps team or practitioner can provide reporting on BvA vs forecast to establish trends and compare against variance KPIs.
Used to measure of how good a forecasting model is.

Capitalized expense (CapEx) versus operational expense (OpEx)
> When you capitalize something, it becomes an asset of the company, whether or not it gets expensed within a specific period. The test you can apply is: if an organization writes a check to acquire something, does that acquisition benefit future periods? If it does, then it can be capitalized. If it benefits only the current period, then it’s an expense that is expended in this period with no future benefit, making it an operational expense. Capitalization causes total outlays to differ from expenses in a similar period, with the delta being that which is capitalized.

Cost allocation
> The process of splitting up a cloud bill and [associating the costs to each cost center](/framework/capabilities/cost-allocation/). It’s important to have teams understand how costs are being allocated, and to have a centralized, controlled, and consistent cost allocation strategy. See also, *[Shared Costs](/framework/capabilities/manage-shared-cloud-cost/)*.

Cost estimation
> The process of quantifying every resource that will be required to complete a project also used to help create budgets.


Forecasting, also Forecast
> Forecasting is the practice of predicting future spending, usually based on a combination of historical spending and an evaluation of future plans, understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions. This capability also involves collaboration between stakeholder teams like Finance, Engineering, and Executives to build agreed upon forecast models and KPIs from which to establish budgets that align with business goals.

Fully-loaded costs
> Fully-loaded costs are amortized, reflect the actual discounted rates a company is paying for cloud resources, equitably factor in shared costs, and are mapped to the business’s organizational structure. In essence, they show the actual costs of your cloud and what is driving them.

Metrics
> A method or formula for measuring something with the purpose of obtaining results.

Unblended rates
> Some resources are charged in decreasing rates the more you use them. This means you’re billed different rates for resources as you use more, or for longer periods during the month. By examining your bill, you can see that some resource costs are larger than others, even for the same type of resource or an identical resource. When the rates are presented this way, they’re called unblended.

Workload
> The amount of work performed or capable of being performed usually within a specific period. In forecasting, a workload can be a type of unit measurement such as “ 1 workload = 8GB RAM + 50GB Storage or a similar configuration.” it could also be “1 workload cost = Rate*5 hours + Cost of 3 EC2 t3nano + cost of 100GB storage.” Whatever a workload for the organization is, ensure it is defined.

## Business Terminology
Cloud Center of Excellence (CCOE)
> Many companies refer to their FinOps team as a Cloud Center of Excellence or a Cloud Business Office.

FinOps
> FinOps is the practice of bringing together Finance, Business and Technology to master the unit economics of cloud for competitive advantage.

Cloud Service Provider (CSP)
> a provider of public cloud services. Examples include Amazon Web Services (AWS), Microsoft Azure, or Google Compute Platform (GCP)

Objectives & Key Results (OKR)
> a goal system used by Google and other tech companies originally to create alignment and engagement in a business around measurable goals.

Ownership
> One of the core principles of FinOps is that Everyone takes ownership for their cloud usage. If a team has ownership of an application, it should also have ownership of the costs incurred by that application and its resources, and practice good stewardship of those resources and costs. This concept is an important part of the message that should be carried in the process of evangelizing FinOps culture to an organization

## Public Cloud Terminology

Account (AWS)
> AWS services are housed within an Account. Accounts can be Master Payer accounts which contain billing data or Linked Accounts which do not. AWS Organizations and other services can be used to manage Accounts within AWS. Many AWS services can span Account boundaries.

AURI, PURI, NURI (AWS mostly)
> All Upfront Reserved Instance, Partial Upfront Reserved Instance and No Upfront Reserved Instance. Some people use these acronyms when referring to reserved instances, in case you hear them.

Availability Zone, AZ (AWS)
> sub-unit of a Region, there are typically multiple AZs per Region. An AZ is made up of multiple physical data centers but can generally be thought of as being very closely situated from a network latency and performance perspective. Terminology varies among CSPs.

Blended Rate
> AWS provides Blended Rate information on its invoice showing the effective rate for a group of resources with the same attributes where some of the resources are receiving a discount from reservations and some are not. This can help to eliminate the effects of reservations applying randomly to resources in multiple linked accounts, by providing a consistent rate for specific resources that would have been eligible to be covered by the reservation or savings plan.

Blob Storage (Azure)
> Azure’s object storage solution

Cloud Storage Buckets (GCP)
> GCP’s object storage solution

Compute (Azure)
> Azure’s virtual compute cloud offering

Compute Engine (GCP)
> GCP’s virtual compute cloud offering

Console, Dashboard, Portal
> Accessing cloud resources is done through types of online site provided by each CSP. Azure calls theirs the Azure Portal (Subscription Portal, Enrollment Portal, etc.), AWS calls theirs the AWS Console, and GCP calls theirs the GCP Dashboard

Convertible / Standard
> AWS terms referring to the ability to convert RIs for some resources to different specifications. Standard RIs cannot be converted or changed for their entire term. Convertibility reduces the discount offered by AWS. Azure and GCP also allow some flexibility in specific ways to their reservations using slightly different language

EC2 (AWS)
> Elastic Compute Cloud - AWS’ virtual compute cloud offering

Enrollment (Azure)
> When a customer has an Enterprise Agreement (EA) with Microsoft, they use an enrollment level portal to access all of their Microsoft licenses and high-level billing information, including for Azure use. Companies with an Enrollment manage this for themselves, and create Subscriptions, an analog to AWS Accounts or GCP Projects, underneath the Enrollment. Companies who buy Azure through a CSP Reseller receive their Subscriptions, but the reseller owns and controls the Enrollment level portal and information.

IAM (AWS and GCP)
> Identity and Access Management - helpfully the way that all three cloud providers refer to their system of granting and governing permissions within their cloud platforms

Instance Type, Family, Generation, Size (AWS)
> Instance is usually AWS specific and generally refers to a specific EC2 virtual machine. AWS supports a variety of instance families, designated by letter, an instance Generation designated by a number and optionally other letters, and instance sizes which follow a structure of nano, micro, small, medium, large, xlarge, 2xlarge, etc. The Instance type includes the entire designation, such as m5a.16xlarge which would be an “m” family, 5th generation, “a” for AMD chipset, 16xlarge sized instance. Azure also has virtual machines which they call VMs which have families, generation and size designators. GCP calls these machine types and has a more flexible size designation scheme.

Metadata, Tags, Labels
> Tags are metadata attached to a specific instance, bucket, resource group, account or other resource running in a cloud environment. AWS and Azure refer to these as Tags, while GCP refers to them as Labels. They are meant to provide contextual information about the resource. Tags can be created with the resource in most cases or added after the fact manually or systematically. Tags are useful for identifying the type of resource, the environment it supports (Dev, Prod, Test, etc.) the owner, the cost center, the operational parameters, etc. Tags can be queried or accessed in a wide variety of ways and can be used to drive automation, divide costs, or for other important purposes. Most large cloud-using organizations will at some point establish governance policies around tag use and require specific tags be used on all resources.

Preemptible Instances/VMs
>  many CSPs offer compute instances/VMs that can be created and used at deeply discounted rates from traditional on demand compute VMs; however, in exchange for the discounted costs, a characteristic of these VMs is that if the cloud provider requires access to the resources being used by preemptible VMs, they will stop those instances.   Examples of terms used to describe preemptible compute instances/VMs include:
* GCP Preemptible Compute Engine VM
* AWS Spot instance
* Azure Spot instance

Project (GCP)
> GCP services are housed within GCP Projects

Folder (GCP)
> GCP organizational resource hierarchy element. A Folder can contain one or more GCP Projects, and/or other GCP Folders. Folders exist within the context of one Billing Account.

Region
> A discrete geographic area made up of smaller units which in most cloud provider parlance can be thought of as one contiguous “data center” from a network latency, pricing, and service availability perspective. Generally, data transfer within a region is free, services are consistent within the region. Terminology varies among the various CSPs. Regions are generally guaranteed to be more than a minimum distance from one another to satisfy disaster recovery requirements.

Resource
> A general name for a virtual cloud service or services.

Resource Group (Azure)
> Azure services are additionally required to exist within a Resource Group, which is treated with permissions and policies, tagged, etc. affecting all resources within it. Resource Groups, or RGs, oftentimes serve the same function as AWS Accounts in terms of serving as a logical separation of applications, environments, billing responsibility or resource groupings.

RI - Reserved Instance
> a commitment to use a cloud resource, usually of a specific type, location and size, for some period of time, usually 1 or 3 years, in exchange for a discounted rate.

S3 (AWS)
> Simple Storage Service - AWS’ object storage solution

Subscription (Azure)
> Azure services are housed within Subscriptions, which are roughly analogous to AWS Linked Accounts. Azure Subscriptions typically roll up billing data to an Enrollment or Contract level which serves as the Master Payer analog to AWS. An organization might own its own Enrollment, or might purchase Subscriptions from a Cloud Service Provider (CSP) reseller who owns the Enrollment.

Unblended Rates/Cost
> AWS provides in its CUR file, unblended rates and unblended cost which are the actual costs being charged for each resource or portion of resource usage for the billing period as affected by any reservation or savings plan, but not including any negotiated credits. This cost may fluctuate as reservations or savings plans are applied to different resources in different time periods. So the cost of one EC2 instance, for example, for the same number of hours may have a different unblended rate or cost.

## Software Development & Operations Terminology
Agile
> a method of project management, used primarily for software development characterized by division of tasks to short phases of work (into sprints) and frequent reassessment of priorities and plans. Generally, leads to development of products or software incrementally beginning with a minimum viable product and then continually enhancing it from a backlog of requirements gleaned from user stories (requests)

Backlog
> in an Agile project, the list of work to be done in the future, generally grouped into Epics (major feature or workstreams) and User Stories (specific requirements or requests) from which the contents of a specific Sprint can be developed. Backlog prioritization is constantly going on as new requests are added, and sprints deliver on the items in the backlog

DevOps
> a set of practices that intends to break down traditional silos between developers and operators of computer systems, allowing combined teams to collaborate and deliver software in a more consistent, efficient and automated fashion.

Enterprise Architecture
> EA or Enterprise Architecture groups are traditionally tasked with outlining the structure of the systems an enterprise will build and maintain to achieve its business goals. Like physical architects, they provide the blueprints for how the various systems should be put together, the “materials” or software concepts that should be used to build them, and how the end results should look.

Epic
> in Agile, an epic is typically a grouping of User Stories all related to a specific large feature or workstream.

Lean
> adapted from efficient manufacturing processes, Lean software development is an umbrella term for using Agile and other methodologies to deliver incremental value as efficiently as possible.

Lift & Shift
> a method of migration involving moving an application as currently architected and built from one environment (an on-premises data center) to another (usually a public cloud). Lift & Shift migrations can usually be done more quickly as they often do not require substantial change to the application code or configuration. However, because they do not modify applications to use cloud native services, they tend to create situations where the cloud system is more expensive or difficult to run than the on-premises system had been. Lift & Shift migrations are typically used when time pressure to close a data center or other need outweighs the cost and quality issues that can ensue and should always plan a period of remediation in the cloud or target environment afterwards to address issues.

On-Premises (or On-Prem, but NOT on-premise)
> term used to refer to company owned or company-controlled data center space. Usually used to differentiate from public cloud environments where application migrations are targeting workloads. Most companies have an extensive on-premises infrastructure built over many years when they begin using the cloud, and there are often difficulties using systems, infrastructure or processes developed for the on-premises environment in the public cloud.  

Rightsizing
> Rightsizing is a form of optimization where measurements are taken over time to assess the periodic requirements of a workload running in the cloud, and to match it to a virtual resource which is sized to run it efficiently with a minimum of waste. It is important to measure actual workload demand in small increments rather than using average load figures to be sure that workloads requiring larger instances for peak demand are accommodated. Rightsizing can be used as a technique to save cost but must always involve technology oversight as well.

Sprint
> a short interval of work in an Agile project, usually a week or two weeks but sometimes more or less, during which time an agreed-upon amount of work will be delivered

User Story
> in Agile, user stories typically illustrate a desire or requirement for the software to fulfill.

Workload
> a generic name for an application or software system running on a computing or other platform. In a traditional website, there might be a web server, an application server and a database server, each running on an individual hardware-based server, or virtual machine in my data center. Each of those three elements of the application would be a workload running on that virtual server. If that website were moved to AWS, there might be an EC2 instance for each of the three servers, sized appropriately to the amount of computing, memory, data storage, and network required for the web server, application server and database server.

## Finance & Accounting Terminology

Amortization
> retiring a payment of capital gradually over time on a schedule which reflects the benefits the capital provides in each period. An upfront RI payment can be amortized over the useful lifetime (1 or 3 years) of the RI itself. Like depreciation, amortization typically applies to retirement of cash payments, where depreciation tends to apply to physical capital equipment

Balance Sheet
> A statement of financial position of the business on a specific date which indicates the value of all assets and liabilities as of that date, including the retained value of any undepreciated or unamortized capitalizable items. A company purchasing a 3-year RI at the beginning of a year would show that RI with ⅔ of its original value on the Balance Sheet on the last day of that year

Capital Expenditure (CapEx)
> the purchase of a capitalizable asset, such as a building or equipment meant to provide value over a long term and thus to be depreciated or amortized over that term. Purchasing a data center and using it over 30 years is considered a Capital Expenditure while paying to run a virtual server in the cloud for this month is not

Capitalization
> the ability to treat an investment or outlay as a capital item which will be depreciated or amortized in future periods

Cost of goods sold (COGS)
> Measures how many dollars of outlay it takes to generate revenues in a specific period. For example if a power company is trucking coal out of storage and into a power plant, it records the cost of the coal burned. That cost has no future benefit, so it’s going to be an expense that is directly traceable to revenue in that period, making it a COGS expense. The test of COGS is: are they directly expensed and directly related to revenues in the same period?

> For a company that uses cloud, the COGS are the monthly cloud bill to operate its cloud workloads, salesperson commissions, and support costs. Notably, cloud has the most variable spend model and has a high potential for optimization. You can’t usually materially turn down your sales commissions or terminate your support people, which leaves optimizing your cloud spend without reducing revenue.

COGS as capitalized assets
> There’s potential to reclassify COGS as capital expenses when it comes to how expenses are used. Let’s say a power company takes some of their coal and uses it to make diamonds. If it burned coal to generate power that was sold for revenue, the company accounts for the cost of the coal as COGS. But if it creates diamonds out of the coal, and those diamonds aren’t sold in the period but instead are put into storage as inventory for future periods, the cost of the coal would then be capitalized as an asset. However, as soon as those diamonds are sold, then the cost of the coal switches back to COGS during the period of the sale.

Cost Allocation
> In FinOps, the ability to identify and allocate costs to the appropriate cost categories in use by a customer. Ideally direct costs (the cost of resources running in my accounts), amortized costs (the amortization of prepaid costs paid upfront for RIs applied in my accounts), and shared costs (my share of common services accounts run by others on my behalf) can be allocated to individual budgeting categories for a clear view of the entire cost of running my application or workload in the cloud.

Depreciation
> retiring the cost of an asset gradually over time on a schedule which reflects the provision of benefits. Often this reflects the decrease in value of an asset over time due to wear and tear, decay or usefulness because of continued use in out periods.

EBITDA
> Earnings Before Interest, Taxes, Depreciation, and Amortization, an assessment of the earnings expected when subtracting only the cost of goods sold from the revenue achieved. Tracking the prepaid expense of a 3-year all-upfront Reserved Instance as a cash outlay that can be amortized over 3 years would affect EBITDA differently than if the resources were purchased using cash at on-demand rates.

Fixed Cost
> A cost which does not change with changes in business volume. The cost of a data center building mortgage is a fixed cost in that it does not vary regardless of whether there it is supporting 1 web server or 1,000,000 web servers driving the company’s revenue.

Income Statement (sometimes referred to as a P&L statement)
> a statement showing the company’s net profit or loss over a period of time (a month, a quarter, a year, etc.) The income statement would show expenses and amortization incurred during the period, so in year two of a 3-year RI, the amortization for the second year would show up as an expense against earnings in the period covered.

NPV
> Net Present Value - An assessment used to calculate the long-term profitability of a project made by adding together all the revenue it can be expected to achieve over its whole life and deducting all the costs involved, discounting both future costs and revenue at an appropriate rate. In a cloud business case, the net present value of all the cash flows of a no-upfront RI might be compared to the current cash value of the all-upfront RI for determining which is better for the business.

OpEx
> Operating Expenditure - a category of business expense made in a specific accounting period which provide benefits only in that accounting period. Purchasing on demand cloud services is considered an Operating Expenditure. Operating expenditures require no long-term tracking of depreciation or amortization but are subtracted from earnings in the period incurred.

Return on Investment (ROI)
> the amount of profit from an investment made, usually expressed as a percentage of the original total cost invested. In a cloud rightsizing business case, the ROI might be calculated as the savings in cloud expenditure expected less the engineering and other costs required to take the rightsizing action.

Variable Cost
> a cost which varies according to the business volume it supports. A company hosting websites would need to pay for more computers to host more websites, and so that cost per website is a variable cost.

Upfront Charge
> Reserved instances or service reservations in general can typically be purchased with a full upfront payment (All Upfront), a partial upfront payment plus a reduced periodic charge (Partial-upfront) or with no upfront charge (No-Upfront). The upfront charge may be amortized over the life of the RI. AWS allows all three models for some service reservations and only Partial for others. Azure has historically only offered VM Reservations as All-Upfront, and GCP doesn’t typically require upfront charges on reserved discounts. Upfront charges might be treated as Prepaid Expenses on the Balance Sheet (check with your accountants!)

Unit Economics
> the ability to directly compare my overall cost to the overall business benefit I am creating on a per unit basis. For example, if I understand that the overall cost of running my website infrastructure is $5,000,000 per month and is able to support 10,000,000 paid hosted web pages, then I can track a Webpage/$ metric of “2” which indicates how efficiently I run my service. Any future modifications to my cloud infrastructure can then be expressed in terms of the Webpage/$ metric to determine if they are helping or hurting, and opportunities for cost savings can be expressed in terms of how they impact Webpages/$.

WACC
> Weighted Average Cost of Capital - the rate the company is expected to pay on average to all its securities holders to finance the operation of the business. Importantly this is set by the external market (what the market is willing to pay for various forms of the company’s securities) not by management. The WACC, sometimes called the ICC or Internal Cost of Capital,  represents the internal cost of cash and can be used in a business case to compare the rates of return of an investment (such as an all-upfront RI payment) to determine if it is better to use cash, borrow cash, or forego the investment.

## TBM and FinOps

<span id="tbm-finops"></span>

<span id="tbm-taxonomy"></span>
TBM Taxonomy
> TBM provides a standard taxonomy to describe cost sources, technologies, IT resources (IT towers), applications, and services. Just as businesses rely on generally accepted accounting principles (or GAAP) to drive standard practices for financial reporting — and thus comparability between financial statements — the TBM taxonomy provides a generally accepted way of categorizing and reporting IT costs and other metrics. Cloud services can also be mapped to the taxonomy, as shown in this diagram.

Cloud FinOps
> Cloud FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get maximum business value by helping engineering, finance and business teams to collaborate on data-driven spending decisions.

IT Financial Management (ITFM)
> IT Financial Management (ITFM)is the oversight of expenditures that drives IT decision making  required to deliver IT products and services. IT financial management helps an IT organization determine the financial value of IT services provided to its customers. The discipline is based on traditional enterprise financial and accounting best practices, such as mandating documentation of expenses and requiring regular audits and reports. However, IT financial management methods and practices are adapted to address the particular requirements of managing IT services and solutions.

Technology Business Management (TBM)
> Technology Business Management (TBM) is a discipline that improves business outcomes by giving organizations a consistent way to translate technology investments to business value by defining the tools, processes, data, and people needed to manage the business of technology. Based on a set of standard taxonomy and ITFM best practices that can be used by technology, finance and business leaders, TBM enables organizations to react quickly to changing market dynamics, make data-driven decisions, and align organizations around a common business objective.

<span id="it-tower"></span>

IT Tower
> IT Tower is a technology function supported by IT spend in terms and groupings relevant to the owners and consumers of those functions.  Examples may be things like: End User, Network, Compute, Storage, IT Management. These towers are used in the hierarchy of cost allocation to tie together the costs in like-groupings that fit an organization's business model.

IT Sub-tower
> IT Sub-tower is a sub-component of an IT Tower. For example, the Tower “Network” could have Sub-towers of LAN/WAN, Voice or Transport.  

Chargeback
> Chargeback is an allocation strategy of actual consumption spend of IT services from finance systems back to user teams via an internal report or “invoice”. Chargeback is a method to hold business units directly accountable for IT spend and requires IT Finance Integration (to allocate spend to the appropriate cost centers and budgets). See main definition [above](#chargeback).

Showback
> Showback is an allocation strategy that creates a structure in which actual consumption of IT services is shown to business units, while a transaction of actual spend “invoice” is not directly allocated back to business units.Typically used to generate awareness & accountability across the organization or business areas. See main definition [above](#showback).

<span id="cmdb"></span>

Configuration Management Database (CMDB)
> CMDB - Configuration Management Database (a shared system of records) is a central repository that acts as a data warehouse, storing information about your IT environment and it is a purpose-built database for configuration management.

<span id="even-spread-cost-allocation"></span>

Even-spread cost allocation
> Even-spread allocation divides the total cost by the total number of units being charged. (i.e. $1,000 divided by 100 applications - 10 per application allocated).

Cost-weighted allocation
> Cost-weighted allocation times the total cost by weighted metric per unit being charged. (i.e. unit 1 = 60% weight, unit 2 = 40 % weight, therefore $1000 cost per weighted unit = $600 for unit 1, $400 for unit 2).

Logical Models
> Logical Models define the data needed by the business to achieve a given outcome, how that data is related, and the rules that allow interaction with or between the data. Logical Models also establish the structure of data elements and their relationships, similar to a blueprint for data. A logical data model incorporates all of the elements of information that are vital in the running of the day to day business. Three main components of a logical data model are Entities (a set of things, persons, or concepts relevant to a business), Relationships (an association between two of the above entities), and Attributes (characteristic or any other information that is useful to further describe an entity).

Total Cost of Ownership
> (TCO) a comprehensive assessment of information technology (IT) or other costs across enterprise boundaries over time. For IT, TCO includes hardware and software acquisition, management and support, communications, end-user expenses, labor, opportunity cost of downtime, and training and other productivity losses.

<span id="unit-economics">

## Unit Economics

Unit Economics
> A system of profit maximization based on assessing the impact of incremental costs relative to incremental revenue. The revenues and costs associated with a defined and measurable unit of a product or service. FinOps teams today strive to provide actionable unit costs to enable organizations to calculate unit economics for the products or services utilizing cloud services.

> In manufacturing, marginal economics help businesses optimize production levels and maximize profits. In the cloud, marginal economics helps us understand if engineering changes to products or services via changes to the architecture, development patterns, or cloud operations are delivering incremental business value.

Unit Cost
> The cost allocated to a defined and measurable incremental unit of a product or service is one of the more important concepts in unit economics. Unit cost is also sometimes referred to as the marginal cost specific to the development and delivery of cloud-based software or services.

Unit Metrics
> KPIs used in unit economics that indicate business value, technical value, or other important measurements.

Activity Based Costing
> A process establishing direct costs associated with specific tasks that can then be attributed to products and services based on demand. The tasks are staff-related (time required to perform task x hourly rate) but can also be related to machine time. Also referred to as Task-Oriented Costing.

Cost to Produce
> This is the total cost to produce for non-production workloads and is used as a measurement with other business metrics similar to how you would use the cost to serve. These metrics can be compared to similar tech stacks and non-production workloads to determine the efficiency of teams and cost controls.

> **Note:** This activity should not be confused with something akin to a tax write-off with Research & Development.
> * Financial - R&D costs and comparative costs by tech stack
> * Technology/Engineering - Unit rates per Cost to Produce (Is there fat in the cost in non-production), Future architecture deployment cost options based on service whitelist, etc.
> * Forecasting - Future production cost

Contribution Margin
> This is usually *revenue minus variable cost*. Can be performed at the unit or aggregate level, with the latter indicating the amount available to support the company’s shared costs. Typically applied at the product level, but can be applied to any dimension — e.g.: market, industry, etc..

Cost to serve
> Cost to serve kicks in once the application has been promoted to production and production begins. 
> * Sales - Tracking outliers that may be less profitable, or “abusive” customers
> * Operations - Identify professional services engagement (customer-facing) teams who are not using applications and/or storage  resources cost-effectively
> * Financial - Gross margins, the cost to service an application
> * Technology/Engineering - Unit rates (blended costs based on how you buy cloud)
> * Forecasting - Future growth and trending potential cost

Direct cost
> Costs — variable or fixed — that can be identified and attributed to a specific resource or group of resources that support the delivery of products or services to an internal or external customer.

Indirect cost
> An allocation of a general business expense that is not readily identifiable but necessary for the general operations of the organization.  

Shared cost
> Identifiable costs allocated to a pool of products or services through an agreed-upon distribution methodology.  

Demand driver
> A factor that has material influence over cloud resource usage. 

Cost attribution vs. cost allocation
> Attribution is based on cost-causative principles while allocation is generally arbitrary — i.e.: we could allocate costs and end up with different answers.
