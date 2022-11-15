---

layout: story
permalink: /stories/anomaly-detection-example-from-jfrog/
title: How JFrog Handles Cloud Cost Anomaly Detection
description: An operating example of cloud cost management and anomaly detection from JFrog.
type: User Story
source: Community Contribution
story-title: How JFrog Handles Cloud Cost Anomaly Detection
story-date: 2022-09-28
author: Vlad Vinnik
company: JFrog
industry: Information Technology & Services
cloud-provider:
- AWS
framework-persona: FinOps Practitioner
framework-maturity: Walk
framework-capabilities:
- capability_anomalies
weight: 100

---
## What do we accomplish with cloud cost anomaly detection?
Cloud cost anomaly detection is an integral part of our FinOps practice at [JFrog](https://jfrog.com/). It involves our team identifying unexpected changes to the cloud cost and informs a business or a technical owner about an anomaly. While it sounds like a simple task, we have encountered multiple challenges that we should resolve to rely on the anomaly detection platform.

**Points that we have had to address while working on the system:**
* Discerning between cost versus usage monitoring
* Identifying different types of cost:
    * Amortized cost
    * Public cost
    * Unblended cost
* Usage
    * Measure different usage units to identify anomalies

## How we set cloud cost thresholds to yield actionable results from anomaly detection
As one of the main reasons to implement anomaly detection is timely detection of unexpected changes in ongoing cost, we want to make sure that the alerts that are sent out are real and actionable. As we were going through the configuration, we wanted to address the following points:
* How do we handle cost fluctuations between different time periods (e.g. business days versus weekends)
* How do we want to measure the cost changes:
    * Do we want to measure by the change of %?
    * Do we want to measure by the change of a specific $ amount?
* What is an acceptable delay in the alerts (e.g. real-time, a few hours delay, a few days delay)?
* Do we need to configure alerts for increase, decrease, or both?
* Who will be receiving the alerts? What actions will be performed?
* Do we need to define the severity of the alerts?

Other organizations with different cloud infrastructure and requirements might answer these questions differently than we do, but we find that these are common points to consider.

## Moving from native cloud service solutions to custom anomaly detection tooling
In the beginning, we started working with the cloud provider anomaly detection functionality. While the system helped us with identifying issues, we couldn’t fully rely on its accuracy. We continued doing manual monitoring (via daily dashboards) to identify unexpected changes in the cost.

We have developed custom scripts to compare usages for some services for a certain period of time. However, this method was not scalable and configuration maintenance was time-consuming.

Later on, we started using an anomaly detection mechanism of a 3rd party tool. It allowed us to configure alerts based at the service level with defined $/% thresholds (we configured both) based on the cost. The challenges that we had were that the alerting mechanism couldn’t be configured for a period of time, and the false-positive ratio was too high.

Currently, we are working on the configuration of the enhanced functionality with a more robust mechanism based on the weight system that allows us more accurate tuning of the alerts.
