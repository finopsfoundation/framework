---

layout: default
github-link: false
title: FinOps Terminology
description: A glossary of FinOps concepts and terminology.

---

# FinOps Terminology

## Cloud Cost Management Terminology
Allocation Metadata
> The information used to categorize costs and is encapuslated within CSP constructs like resource tags (AWS; Azure) or labels (GCP). In this context, metadata can be differentiated between "Resource Metadata" where an individual resource is tagged or labelled or "Hierarchy Metadata" where categorization is applied to some other construct that provides grouping of resources.  Examples of allocation metadata include:
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
* Azure Consuption API; Azure Cost Management Exports
* GCP BigQuery Cloud Billing Data Tables; GCP Cloud Billing Report

Resources
> a generic term used to describe any service or instance of a service purchased from a cloud service provider

Vacancy
> the amount of a commitment-based discount that went unused for a given timeframe

Waste
> Any usage or cost of resources which provide no value to an organization

## Business Terminology
Cloud Center of Excellence (CCOE)
> Many companies refer to their FinOps team as a Cloud Center of Excellence or a Cloud Business Office.

FinOps
> FinOps is the practice of bringing together Finance, Business and Technology to master the unit economics of cloud for competitive advantage.

Cloud Service Provider (CSP)
> a provider of public cloud services. Examples include Amazon Web Services (AWS), Microsoft Azure, or Google Compute Platform (GCP)

Objectives & Key Results (OKR)
> a goal system used by Google and other tech companies originally to create alignment and engagement in a business around measurable goals.

## Public Cloud Terminology

Account (AWS)
> AWS services are housed within an Account. Accounts can be Master Payer accounts which contain billing data or Linked Accounts which do not. AWS Organizations and other services can be used to manage Accounts within AWS. Many AWS services can span Account boundaries.

AURI, PURI, NURI (AWS mostly)
> All Upfront Reserved Instance, Partial Upfront Reserved Instance and No Upfront Reserved Instance. Some people use these acronyms when referring to reserved instances, in case you hear them.

Availability Zone, AZ (AWS)
> sub-unit of a Region, there are typically multiple AZs per Region. An AZ is made up of multiple physical data centers but can generally be thought of as being very closely situated from a network latency and performance perspective. Terminology varies among CSPs.

Blended Rate
> AWS provides Blended Rate information on its invoice showing the effective rate for a group of resources with the same attibutes where some of the resources are receiving a discount from reservations and some are not. This can help to eliminate the effects of reservations applying randomly to resources in multiple linked accounts, by providing a consistent rate for specific resources that would have been eligible to be covered by the reservation or savings plan.

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
> When a customer has an Enterprise Agreement (EA) with Microsoft, they use an enrollment level portal to access all of their Microsoft licenses and high level billing information, including for Azure use. Companies with an Enrollment manage this for themselves, and create Subscriptions, an analog to AWS Accounts or GCP Projects, underneath the Enrollment. Companies who buy Azure through a CSP Reseller receive their Subscriptions, but the reseller owns and controls the Enrollment level portal and information.

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

Opex
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
> Weighted Average Cost of Capital - the rate the company is expected to pay on average to all its securities holders to finance the operation of the business. Importantly this is set by the external market (what the market is willing to pay for various forms of the company’s securities) not by management. The WACC, sometimes called the ICC or Internal Cost of Capital,  represents the internal cost of cash and can be used in a business cases to compare the rates of return of an investment (such as an all-upfront RI payment) to determine if it is better to use cash, borrow cash, or forego the investment.
