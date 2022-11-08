---

layout: capability
permalink: /framework/capabilities/asset-management/
search: true
search-keywords: ITAM ITSM ITFM TBM TBMC SAM hardware software license licenses lifecycle procurement procured configuration CI taxonomy

title: FinOps Intersection with other Frameworks
description: This capability examines the intersection between FinOps with other standards. Widespread use of public cloud creates new challenges for traditional processes and the intention for this capability is to provide a place to capture FinOps' interactions with existing IT and financial standards being used by your organization.
page-identifier: capability_asset-management
framework-capability-title: FinOps Intersection with other Frameworks
framework-capability-desc: This capability examines the intersection between FinOps with other standards. Widespread use of public cloud creates new challenges for traditional processes and the intention for this capability is to provide a place to capture FinOps' interactions with existing IT and financial standards being used by your organization.
label:
order: 15

---

# FinOps Intersection with other Frameworks

This capability examines the intersection between FinOps with other standards. Widespread use of public cloud creates new challenges for traditional processes and the intention for this capability is to provide a place to capture FinOps' interactions with existing IT and financial standards being used by your organization.

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## FinOps & ITAM

### Definition
FinOps & ITAM examines the integrations required between FinOps and IT Asset Management (ITAM), including software asset management (SAM), and with the related but separate discipline of IT Service Management (ITSM) including configuration management.

IT Asset Management is a discipline used by organizations for lifecycle tracking and reporting on assets --  hardware, software, software licenses, and other assets both tangible and intangible -- used in the IT infrastructure to deliver value. Typically IT Asset management focuses costs (purchase, support), risks (ensuring that assets are used in accordance with regulatory and contractual requirements), and value/ROI of these assets for the organisation.

ITSM configuration management tracks configuration items (CIs) and their relationships to IT services. The scope of ITSM configuration management is primarily focused on asset configuration (settings, relationships, and groupings) during the _use phase_ of the lifecycle. ITSM also focuses on ensuring that IT services and their components are tracked and manage to support the provision of high quality IT services to the organisation, from when they are procured or created until the time they are retired from use.

Both disciplines provide inventory information to allow organizations to satisfy security, legal, regulatory, financial and operational use cases where it is necessary to know what hardware, license, or software element existed, was used, was accessed, or was disposed of - a single pane of glass for all technology components in use within an organisation

Widespread use of public cloud creates new challenges for both ITAM and configuration management organizations in several regards:
* The number of virtual IT assets created in cloud may be far larger than physical assets tracked traditionally
* A number of different cloud providers may be used making it difficult to provide a comprehensive view of what is in use within an organisation
* Virtual cloud assets may be created and destroyed rapidly, making them more ephemeral than physical assets
* An increasing number of cloud services are not composed of “assets” which have real world analogs and as such may be more ambiguous than real-world assets
* Software licensing models may differ between cloud and on-premises environments
* Software utilised by cloud instances may be wholly or partially licenced as part of cloud payments, making it difficult to track license requirements and manage software licensing compliance.

Intersections between the FinOps team, ITSM configuration management and ITAM teams in an organization then will typically be complementary. ITAM teams will face challenges tracking virtual assets in the cloud without the help of FinOps functions to interpret the broad and detailed data. FinOps teams will face challenges meeting the comprehensive asset reporting requirements satisfied by existing and mature ITAM teams.

Not every organization maintains a mature IT Asset Management or configuration management organization and it is common for the two roles to be performed by a single team


IT Asset Management as a discipline is defined within the ISO 19770 family of standards and is maintained by working group 21 within ISO.

ITSM Configuration Management is defined within the ISO20000 family of standards.




### Maturity Assessment
#### Crawl
* FinOps, ITSM configuration management and IT asset management both have their own individual understanding of what assets / resources are in which cloud and how they are being used, including:
  * How they are licensed (for ITAM) (PaaS / marketplace vs IaaS plus bring your own licenses (BYOL))
  * which IT / business services the resource / assets support
  * Whether there are any associated contracts e.g., software support & maintenance, the cloud provider contract / account itself.


#### Walk
* All three disciplines have a shared understanding of what assets / resources are in which cloud and regularly reconcile them to provide a ‘single pane of glass’ for the organisation.


#### Run
* There is a common taxonomy for the management of costs that is used across all CIs, Assets and cloud resources to enable an organisation to build an understanding of the total cost of ownership (TCO) and return on investment of IT and business services.



### Functional Activity
_written for each persona responsible for the functional activity and processes encapsulated by his Capability.  each one should be associated generally to one of the FinOps Phases (Inform, Optimize, Operate). for example:_
>As a [FinOps Persona], I will [functional activity] so that [desired outcome] is achieved.

#### As a *FinOps Practitioner*, I will...
*

#### As an *Engineering Manager*, I will...
*

#### As a *Finance/Procurement Manager*, I will...
*

#### As a *Business/Product Manager*, I will...
*




### Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

_at least one measure of success; should be described in a context of cost; this could be an efficiency KPI or an agreed upon threshold or target._
_for example:_
>* idle resource costs will not exceed 3% of total monthly cloud spend
* anomaly costs will not exceed $150/month



### Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_



<!-- REAL WORLD RESOURCES, PROJECTS, PLAYBOOKS, GUIDES AND STORIES -->

{% include resources-loop.md %}


---
