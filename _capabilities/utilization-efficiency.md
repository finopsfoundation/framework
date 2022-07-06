---

layout: capability
permalink: /framework/capabilities/utilization-efficiency/
search: true

title: Resource Utilization & Efficiency
description: In context to FinOps, resource utilization is about making sure you are getting sufficient business value for the cost. It is necessary to observe a resource's utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.
page-identifier: capability_rightsizing
framework-capability-title: Resource Utilization & Efficiency
framework-capability-desc: In context to FinOps, resource utilization is about making sure you are getting sufficient business value for the cost. It is necessary to observe a resource's utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.
label:
order: 9

---

# Resource Utilization & Efficiency

{% include contribute-capabiility.md %}

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
In context to FinOps, resource utilization is about ensuring there is sufficient business value for the cloud costs associated with each class or type of resource being consumed. It is necessary to observe a resource’s utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.


For compute resources, there may be times when it is deemed that for performance or availability gains, average utilization may need to decrease and the extra expense incurred is worth the value creation the resource provides. Or the opposite may be true and performance expectations can be lowered to improve cost. For these decisions to be made, resource utilization, efficiency and cost must be looked at together.


By comparison, for storage resources, it is necessary to estimate the latent inefficiency in the stored data, and by extension the potential gross savings that can be realized by removing, or rightsizing, that inefficiency. Keep in mind that different data sets have unique latent inefficiencies and require tailored approaches. For example, highly compressible (yet uncompressed) data has relatively high latent inefficiency, whereas encrypted data has relatively low (or no) latent inefficiency. And data that is infrequently accessed but stored in a high cost, high performance storage class (or tier) also has relatively high latent inefficiency. It is then necessary to estimate the cost of applying data efficiency infrastructure to thus realize net savings, along with the performance and availability impact of that infrastructure to ensure it meets the needs of users and applications.


The management of resource utilization and efficiency translates into identifying whether there is scope to reduce resource costs while maintaining the required performance and, if there is, making the changes required where it is economically worthwhile to do so.




## Maturity Assessment
#### Crawl

- Has some visibility into resource utilization and efficiency using one or more sources such as cloud billing data, infrastructure monitoring tools, data efficiency tools, cloud provider insights/tools.
- Define a business efficiency metric - i.e. a metric that speaks to your business that can be used to measure how efficient a resource is

#### Walk

- Able to put a $ value against costs that can be avoided by rightsizing underutilized or inefficient resources.
- Able to measure the cost required in performing the action, summing costs across people, infrastructure, and paid solutions. For example:  "it will cost 50 man hours to make this change at an hourly rate of X”, or “it will cost $0.01/GB for a data efficiency platform to surface the savings potential of the data”.
- Measure the cost required in performing the action - i.e. it’ll cost 50 man hours to make this change at an hourly figure of xyz.
- Takes manual action to review recommendations and take appropriate action(s) to increase efficiencies.  

#### Run
- Uses cost and utilization data to drive automated processes to either:
  - Alert humans to analyze. Outcomes could be to update the architecture/sizing of resources deployed or suppress the notifications for these resources as there are good reasons for running at levels that look suboptimal on the surface.
  - Resize or stop/start compute resources
  - Apply tailored storage class and data efficiency changes




## Functional Activity
#### As someone in a Business/Product role, I will…
- Clearly define service KPIs so that engineering are able to design and/or purchase efficient services within the defined boundaries
- Provide demand forecasts and information on the demand pattern profiles (daily/weekly/monthly/cyclic)
- Establish the business goals for the objective - i.e. release to customers as quickly as possible, reduce the effective storage rate by >20%, release to customers w/ an availability of 99.99%, etc. (aka Business Value Creation!)

#### As someone in a Finance/FinOps role, I will…
- Highlight any opportunities to increase utilization and efficiency and work with the teams to review feasibility of alternative options
- Help create the reporting to track and report on the impact on value of underutilization and inefficiencies
- Partner with the Engineering organization to establish budgetary & efficiency targets

#### As someone in an Engineering/Operations role, I will...
- Architect and/or purchase services with the KPIs and forecasts guiding decisions
- Use elasticity best practices to automatically scale resources with the workload demands
- Build and/or purchase automation to output measure and metrics needed to measure utilization and efficiency
- Regularly review utilization and efficiency of resources, and identify opportunities to improve

#### As someone in an Executive role, I will…
- Deliver the business value creation vision and strategy
- Provide executive level support in the defined KPIs, establishing credibility in the FinOps efficiency program




## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

- Data efficiency is applied to at least 50% of stored data (i.e. net savings coverage is >50%)
- Effective $/GB/mo storage rates are reduced by at least 30% relative to the S3 Standard baseline.




## Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_


<!-- ####### Real World Resources ####### -->

{% include story-loop.md %}


## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._


---
