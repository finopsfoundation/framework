---

layout: capability
permalink: /framework/capabilities/policy-governance
search: true
search-keywords: guardrail guardrails constraint constraints innovation alignment

title: Cloud Policy & Governance
description: Policy and Governance can be thought of as a set of statements of intent, with associated assurances of adherence.
page-identifier: capability_policy-governance
framework-capability-title: Cloud Policy & Governance
framework-capability-desc: Policy and Governance can be thought of as a set of statements of intent, with associated assurances of adherence.
label:
order: 16

---

# Cloud Policy & Governance

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
Policy and Governance can be thought of as a set of statements of intent, with associated assurances of adherence.

A "Cloud Policy" is a clear statement of intent, describing the execution of specific cloud-related activities in accordance with a standard model designed to deliver some improvement of business value.

"Cloud Governance" is a set of processes, tooling or other guardrail solution that aims to control the activity as described by the Cloud Policy to promote the desired behaviour and outcomes.

Combining good Policy and Governance provides us with a mechanism to orchestrate and direct our Cloud FinOps Activity.

It’s possible to imagine a world in which good things happen naturally, without any attention or control being applied to them. In most business situations though, the right things will only happen if people are directed to do them, the actions and their outcomes are monitored and there are some (positive or negative) consequences arising from their actions.

We often talk about a ‘FinOps Culture’, which we see as a set of attitudes and behaviours oriented to driving business value from cloud technology, and we recognize that transitioning to this from a data centre culture is one of the key challenges of FinOps. Policy and Governance is how we establish and sustain a FinOps culture.  In fact, it is the way in which all culture is established and sustained. Think of any organization with a recognizable ‘culture’ and you will see an effective Policy and Governance framework

So the simple answer to why Policy and Governance frameworks are important is that organizations cannot sustainably deliver business value from cloud without them.

Cloud policy and Governance are key components of successful Cloud FinOps. They work to align activities within Cloud to the business overall goals and strategies, control the deployment and usage of Cloud resources in order to maximise ROI. We are able to ensure our cloud costs are predictable and manageable, and we can use Cloud Policy & Governance to support the consistent adoption of best practices across the organisation, and support defence-in-depth against known threats and

## Maturity Assessment

In the early stages of cloud adoption, everything is new and everyone is a pioneer.  Bit by bit the organization learns how to make the best use of cloud technology and harness it to achieve its goals.  Policy & Governance is the primary mechanism for harnessing the power of cloud.

| Maturity | Description | Focus |
| -------- | ----------- | ----- |
| Crawl | Cloud Policy & Governance exists as part of overall business policy. Policies aim to control most significant risks to business value. | Basic usage & rate optimization, etc as they apply to individual engineering teams and products. |
| Walk | Cloud Policy & Governance measures are broadened and standardized. Best practices are now being distributed and adopted across the business. | Cross-functional collaboration. Integration with existing organizational policies and standards. |
| Run | Cloud Policy & Governance is now closely integrated with overall business strategy. | All levels of business now operate in a way that is aligned with the organization’s strategy and goals.


## Functional Activity
_written for each persona responsible for the functional activity and processes encapsulated by his Capability.  each one should be associated generally to one of the FinOps Phases (Inform, Optimize, Operate). for example:_
>As a [FinOps Persona], I will [functional activity] so that [desired outcome] is achieved.


## Measure(s) of Success

| Measures of CP&G | Crawl | Walk | Run |
| ---------------- | ----- | ---- | --- |
| Scope of CP&G | Across Engineering teams | Cross-functional, across Business, Technical & Finance teams | Across the organization, linking CP&G to strategic goals |
| Creating & Updating | Manually, ad-hoc, largely reactive policy creation | Regular review cadence, proactive FinOps policies | Ongoing automated policy compliance review, with trending |
|  Documenting & Communicating | Static, manually distributed content | KMS / training integrated solutions | Integration with new architectural concepts to ensure currency |
| Monitoring for Compliance | Manual analysis & reporting | Vendor-provided automated analytics (eg. AWS Config) | Multi-cloud/enriched normalised insights & automation solution |


#### Best Practice:

The 5 __FACES__ of Good Cloud Policy & Governance:

| Headline | Description |
| ---:| --- |
| **FOCUSED** | on achieving the objectives we seek |
| **ALIGNED** | with the organisations goals, strategy and principles |
| **CLEAR** | simply stated and easy for everyone to understand |
| **EFFICIENT** | low comparative cost of implementation vs benefit |
| **SUPPORTED** | by the authority required in order to enforce it |
| | |


## Inputs

#### Governance
Governance implements Policy through:
- __Guidelines__ - that set out best practice for policy implementation and how it can be achieved. These are advisory, rather than mandatory
- __Guardrails__ -  formal processes and structures that define mandatory pathways for policy-compliant action, possibly with consequences for non-compliance
- __Automation__ - processes that automate policy implementation and which therefore control how compliant actions are carried out.


#### Policy
If a policy is poorly conceived or expressed, of dubious authority, too broad or general to be useful in practice, or imposes a cost on the organization that is out of proportion to its benefit, it is a bad policy.
Some examples of good policy statements might be:
- “Our policy is to cover more than 80% of our optimised cloud usage with discounted pricing plans”
- “Our policy is to reduce wasted spend by decommissioning cloud resources that deliver no business value”


<!-- ####### Real World Resources ####### -->

{% include resources-loop.md %}



#### Cloud Providers Governance & Policy Resources
- [Management and Governance on AWS](https://aws.amazon.com/products/management-and-governance/)
- [Azure Governance](https://azure.microsoft.com/en-gb/solutions/governance/)
- [GCP Guide to Financial Governance](https://cloud.google.com/files/guide-to-financial-governance.pdf)


#### Cloud Providers Governance & Policy Tools
- AWS -  AWS Control Tower, AWS Organizations, AWS License Manager, AWS Service Catalog, AWS OpsWorks
- Azure - Azure Management Groups, Azure Blueprints
- GCP - Google Cloud Console

---
