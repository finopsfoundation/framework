---

layout: capability
permalink: /framework/capabilities/workload-management-automation/
search: true
search-keywords: change management optimization optimisation optimise optimize modernisation modernization trust AD IAM policy active directory governance reports reporting dashboards analysis audit
title: Workload Management & Automation
description: Workload Management & Automation focuses on running resources only when they are needed, and creating the mechanisms to automatically adjust what resources are running at any given time.
page-identifier: capability_workload-automation
framework-capability-title: Workload Management & Automation
framework-capability-desc: Workload Management & Automation focuses on running resources only when they are needed, and creating the mechanisms to automatically adjust what resources are running at any given time.
label:
order: 7

---

# Workload Management & Automation

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition

Workload Management & Automation focuses on running resources only when they are needed, and creating the mechanisms to automatically adjust what resources are running at any given time. This Capability gives FinOps teams the ability to match supply to demand most efficiently, and effectively optimize cloud usage through measurement of workload demand and provisioning capacity dynamically.

## Maturity Assessment

### Crawl
* Manually assign tags to all resources, e.g. `Environment = Test/UAT/Dev`.
* In general practice, Non-production instances not needed post working hours, so encourage engineers to manually stop and start the non-production instances when not needed.
* Build dashboard of resource state for respective environments.

### Walk
* Schedule automation to stop & start resources based on the tags.
* Automatically trigger alerts if resources don’t have the specific tags.

### Run
* *to be filled in by community members with real-world experience here*

## Functional Activity

### As someone in an Engineering/Operations role, I will:
* Stop the non-production resource by end of day (EOD)
* Start the non-production resource as business starts
* Make sure the required tags (Environment in this case) assigned to all the resources
* Work with automation team to automate stop & start the resources
* Introduce another tag to provide the exception to the schedule
    * a. e.g.: `StopResourceEOD: Yes/No`,
    * b. If No, then another tag with justification, `PurposeToAvoidStop: UAT is in Progress`
* Work with automation team to auto assign the required tags
* Build automation to send communication in advanced with list of resources being affected during business hours, to respective resource owner

### As a FinOps Practitioner, I will:
* Work with application owner to assign the missing tags to the resources
* Automate the communication of the statistics of the affected resources by the automation, non-tags resources

## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

Here are some crowdsourced measures of success from our community:

* Make sure resource dashboards build based on the specific tag values.
* Create threshholds for cost and usage that meet your requirements for balancing development and production workloads. For example, an organization might want to set a threshhold or alert to help prevent non-production usage cost from exceeding the 30% of PROD server cost.
    * Additionally, this same organization might create a measure of success where the critical testing phase cost shouldn’t exceed more than 30% of total non-production spending.

There are likely many more cases and examples out there, so please get in touch with recommendations, changes, and feedback.

## Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_

<!-- REAL WORLD RESOURCES, PROJECTS, PLAYBOOKS, GUIDES AND STORIES -->

{% include resources-loop.md %}

---
