---

layout: story

title: One Way to Put it All Together
description:
story-title: One Way to Put it All Together
story-date: 2021-06-01
author: Chris Greenham
company: healthAlliance
company-size:
industry: Health Care
cloud-provider:
tooling-services:
framework-persona: Business/Product Owner
framework-maturity: Run
framework-capabilities:
- capability_shared-cost
framework-projects:
- project_shared-costs
order: 1
tags:
- cost-sharing
- cost-allocation
- cost-visibility

---

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
