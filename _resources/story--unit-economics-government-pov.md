---

layout: story
permalink: /stories/government-organizational-perspective-unit-economics

title: "Unit Economics: A Government Organizational Perspective"
description: A common definition for is direct revenues and costs, associated with a particular business model, that are specifically expressed on a per-unit basis.
type: User Story
source: Community Contribution
story-title: "Unit Economics Playbook: A Government Organizational Perspective"
story-date: 2022-08-18
author: Jerry Hess
company: Hennepin County (MN)
industry:
cloud-provider:
  - Azure
framework-persona: FinOps Practitioner, Business/Product Owner, Finance
framework-maturity: Walk / Run
framework-capabilities:
  - capability_unit-costs
weight: 100

---

A common definition for [unit economics](https://www.finops.org/framework/capabilities/measure-unit-costs/) is direct revenues and costs, associated with a particular business model, that are specifically expressed on a per-unit basis.

A government organization (e.g., federal, state, county/parish, city) does not typically measure the value of its services in terms of revenue or profit. Value can be measured in terms of service to residents.  

Example measurements can be number of times an app is used by residents (e.g., on-line submittal replacing a paper form), cost of a service per unit (e.g., water/sewer cost), or measurable impact on a county objective (e.g., recycling rate).

While it is ideal to identify and measure value from a resident perspective or impact in relation to an overarching organizational objective (e.g., increase recycling), this can be difficult to measure from an IT or FinOps perspective. In this case, a unit metric based on an intermediate value can be measured and reported.

The following is a real-world unit economics example of a resident-facing Azure-based application used by residents to request literature aimed at increasing recycling. The KPI is computed by dividing the monthly Azure hosting cost by the number of resident app uses for that month. The higher rate KPI values in the initial months of the graph are primarily due to lower resident usage and secondarily by residual development cost.

See this graph below for more context:

![A graph indicating the unit economics of an Azure app](/../img/stories/unit-economics-government-unit-metrics.png)
