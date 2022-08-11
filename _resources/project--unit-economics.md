---

layout: wide
permalink: /projects/introduction-cloud-unit-economics/

title: Introduction to Cloud Unit Economics
description: This project is an introduction to the practical application and a methodology of cloud unit economics and teaches how to quantify the associated cost and usage metrics of elasticity. 
page-identifier: project_unit-economics
identifier: projects
project-title: Introduction to Cloud Unit Economics
project-description: This project is an introduction to the practical application and a methodology of cloud unit economics and teaches how to quantify the associated cost and usage metrics of elasticity.
date-added: Aug 2022
type: Guide
source: FinOps Foundation
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:
  - capability_unit-costs

---

# Introduction to Cloud Unit Economics: A work in progress

## Overview

Our Working Group would like to introduce the results of our first sprint. Our mission is to create common ground, identify standards, and build a better understanding of what cloud unit economics are and how they can be leveraged by your organizations as part of a greater FinOps strategy.

## First sprint deliverables (presented during August 2022 Summit)
The WG gathered to collect information and create what we collectively defined as a white paper about cloud unit economics. The group scoped the following concepts and sections of the paper:
* What Is Cloud Unit Economics
* Terminology
* Why Cloud Unit Economics is Important
* How to Get Started
* When to Start
* Potential Challenges and Barriers to Adoption
* Survey Results

Users can find a working draft of completed sections of the white paper in a later section of this project.

### Supporting our work with user data

Our WG also conducted a survey to supplement the definitions and best practices that we're generating with real world data. We'll reveal the results of the survey during a future sprint.

### Informing and improving the "Measuring Unit Costs" Capability
The results of our first sprint also brought some interesting discoveries, definitions, and insights to help our community improve the Measuring Unit Costs Capability. In future sprints, we'll work with the Technical Advisory Council and FinOps Foundation staff to see how we can incorporate what we've learned to improve the Capability definition and supporting content.

### Future sprint work includes
* Presenting survey results
* Improving Measuring Unit Costs Capability
* Completing White Paper content
* Collecting and unveiling more user stories!

## White paper completed sections

## Abstract
The cloud's ability to scale resources up and down to align with current demand requirements, often referred to as *elasticity*, is simultaneously both one of the key benefits of cloud computing and its greatest liability. 

This elasticity and the cloud’s inherent variable cost structures (that made the emergence of FinOps inevitable) have created new financial and operational challenges that require the creation of systems and processes to measure the variable costs and usage metrics associated with these dynamic infrastructure changes.

This document focuses on the system of *Cloud Unit Economics* as one such system, which is the specific application of the broader concept of unit economics to the cloud computing domain. Below you will find an introduction to its practical application and a methodology to quantify the associated cost and usage metrics of elasticity. 

This document also covers how the application of unit economics can enable cloud-driven organizations to build more efficient systems and ultimately provide a common language to align both business and engineering leaders.

## What is Cloud Unit Economics?

> "One of the most important concepts in FinOps is unit economics" 

*- Chapter 1: What is FinOps, Cloud FinOps Book*

The FinOps Foundation has defined [six principles](https://www.finops.org/framework/principles/) that serve as guidance for the FinOps professional, but why is unit economics specifically called out separately, and why is it such an important concept? The answer lies in how unit economics is applied to the cloud, and its ability to directly support each principle, cloud unit economics is not a goal in and of itself but rather a powerful system for achieving the maximum return on your cloud investment in pursuit of the six principles of FinOps.

### But what exactly is Cloud Unit Economics, then?

Cloud Unit Economics is a system of profit maximization and provides an objective means to measure how well your organization is performing against not only its FinOps goals but how well it is performing as a business in the market. It achieves these noble goals by leveraging the measurement of marginal cost (aka unit cost metrics) specific to the development and delivery of cloud-based software and marginal revenue (aka unit revenue metrics). 

By calculating the difference between marginal cost and marginal revenue, you can determine where your cloud operations break even and begin to generate a profit, an important concept in economics overall and one of the most effective ways to make data-driven business decisions regarding your cloud investment. 

#### A note on applying cloud unit economics to non-profit companies or the public sector

This document is written mostly with commercial SaaS and cloud-driven commercial organizations in mind. Still, it doesn't mean that unit economics can't be applied to other types of organizations. While most companies typically measure their success in revenue or profit, a public sector organization (e.g., federal, state, or local government) or non-profit does not. Instead, value is typically measured in terms of the success (or failure) of the delivery of civic goods or services. 

In addition, the value may be derived through the accurate forecasting of overall spending to maximize the use of budgeted resources. If you want to apply unit economics to a non-profit or a public sector entity, simply replace the words *profit* or *revenue* with *value*.

## Why use Cloud Unit Economics?

Cloud unit economics can unlock the following benefits:

**Understand how your business functions.** Unit economics is an effective tool for a company’s management, investors, and employees to understand its financial performance better.

**Forecast profitability.** Based on a unit cost analysis, unit economics shows how profitable a business is or how soon it will achieve profitability, and what factors are affecting its margins.

**Build a plan for cloud cost optimization.** Unit economics allows companies to understand whether their product is overpriced or undervalued. This can help them identify what and how should be optimized. 

**Evaluate a product’s future potential.** Relying on unit economics, businesses can better understand what customers are using, making it easier to make changes to product roadmap and engineering priorities.

Ultimately, by quantifying the cost to produce or the cost to serve, **cloud engineers can articulate their contribution to gross profit margin** due to the architectural, development, and operating choices they make. For example, product teams will have a key data point to support pricing decisions, and the business will be able to forecast cloud costs better even though cloud resource consumption is variable.  

Unit economics also supports a broader set of metrics used to evaluate the profitability of products and customers. Amongst them are **contribution margin** - the gross profit derived from selling one more unit of a product or service, **customer lifetime value** - the total worth to the business of a customer’s relationship, and **customer acquisition cost** - the cost of winning over a customer to use your product or service which ties into the customer lifetime value metric.  

### Common Examples of Unit Economics in Use Today
One of the goals of this document is to help you learn how you might put unit economics to work for you and your organization. One of the most important details to determine upfront as part of your unit economics journey is what key metric best serves your business needs. Consider using the following examples to kick start that journey and to give you a taste of what is possible.

* A Financial RiskOps SaaS company might measure their cost per analyzed financial transaction, which is not only tied to the company's cost to serve but also to how they price and package their products.
* A Governmental organization launching an application to be used by residents to request literature might measure the cost per user to understand better how the site usage affects their costs.
* An Online Hotel Booking company might measure the cost of creating a reservation to learn how their costs change and forecast their costs during more popular travel times.
* A Rideshare company might measure the cost per ride by the time of day to determine the cost-effective times to transport customers.
* A Video Conferencing SaaS company might measure the cost per active user and track who their most expensive customers are.

## Terminology
Use this glossary of helpful terms to define better and understand the domain of Unit Economics. 

Unit Economics is a key way to communicate both the cost and the value of what an organization is doing in the cloud. As such, there are key interactions across all other FinOps domains.

* Data Analysis and Cost Allocation are key to measuring unit costs effectively.
* Forecasting and Budget management have clear intersections in terms of budgeting not only for expected cost but for the cost of supporting a demand that also must be forecast
* Our decision process should be largely driven by unit costs rather than total costs whenever possible.
* Our optimization activities are one of how to reach or maintain any unit metric target objectives.
* And, of course, FinOps culture, the way we incentivize our engineers, and the way we communicate about cloud cost and value should largely be in terms of unit metrics.

**Unit Economics:** A system of profit maximization based on assessing the impact of incremental costs relative to incremental revenue. The revenues and costs associated with a defined and measurable unit of a product or service. FinOps teams today strive to provide actionable unit costs to enable organizations to arrive at the unit economics for products or services utilizing cloud services.

In manufacturing, marginal economics helps a business to optimize production levels to maximize profits. In the cloud, marginal economics helps us to understand if engineering changes to products or services via changes to the architecture, development patterns, or cloud operations are delivering incremental business value.

**Unit Cost:** The cost allocated to a defined and measurable incremental unit of a product or service is one of the more important concepts in unit economics. Unit cost is also sometimes referred to as the marginal cost specific to the development and delivery of cloud-based software or services.

**Unit Metrics:** KPIs used in Unit Economics that indicate business value, technical, or otherwise important measurements.

**Activity Based Costing:** Establishes direct costs associated with specific tasks that can then be attributed to products and services based on demand. The tasks are staff-related (time required to perform task x hourly rate) but can also be related to machine time. Also referred to as Task Oriented Costing.

**Cost to Produce:** This is the total cost to produce for non-production workloads and is used as a measurement with other business metrics similar to how you would use the cost to serve. They can be compared to similar tech stacks and non-production workloads to determine the efficiency of teams and cost controls.

**Note:** This activity should not be confused with something akin to a tax write-off with Research & Development.

* **Financial** - R&D costs and comparative costs by tech stack
* **Technology/Engineering** - Unit rates per Cost to Produce (Is there fat in the cost in non-production), Future architecture deployment cost options based on service whitelist, etc.
* **Forecasting** - Future production cost

**Contribution Margin:** Revenue less variable cost. Can be performed at the unit or aggregate level, with the latter indicating the amount available to support the company’s shared costs. Typically applied at the product level, but for any dimension, e.g., market, industry.

**Cost to serve:** The cost to serve is once the application has been promoted to production and production begins.

* **Sales** - Tracking outliers that may be less profitable or abusive customers
* **Financial** - Gross margins, the cost to service an application
* **Technology/Engineering** - Unit rates (blended costs based on how you buy cloud)
* **Forecasting** - Future growth and trending potential cost

**Direct cost:** Costs - can be variable or fixed - that can be identified and attributed to a specific resource or group of resources that support the delivery products or services to an internal or external customer.

**Indirect cost:** An allocation of a general business expense that is not readily identifiable but necessary for the general operations of the organization.  

**Shared cost:** Identifiable costs allocated to a pool of products or services through an agreed-upon distribution methodology.  

**Demand driver:** A factor that has material influence over cloud resource usage. 

**Cost attribution vs. cost allocation:** Attribution is based on cost causative principles while allocation is generally arbitrary, i.e., we could allocate costs and end up with different answers.

## Why Cloud Unit Economics is Important

*More to come in a future sprint...*

## How Does Unit Economics Benefit FinOps?

*More to come in a future sprint...*

{% include story-loop.md %}

## Acknowledgements

The FinOps Foundation extends a huge thank you to the members of the Special Interest Group that broke ground on this documentation:

- people
- people
- people


If we’ve missed anyone, let us know. We thank you all for your contributions.

## How to contribute more FinOps stories about this challenge
There are many more stories to tell. If you have your own perspectives on tackling this challenge, submit your story to the SIG, or contribute to the FinOps Framework GitHub repo.

See our [contribution guidelines](/projects/overview/) for more details.
