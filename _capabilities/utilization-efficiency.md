---

layout: capability

title: Resource Utilization & Efficiency
description: In context to FinOps, resource utilization is about making sure you are getting sufficient business value for the cost. It is necessary to observe a resource's utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.
permalink: /framework/capabilities/utilization-efficiency/
page-identifier: capability_rightsizing
framework-capability-title: Resource Utilization & Efficiency
framework-capability-desc: In context to FinOps, resource utilization is about making sure you are getting sufficient business value for the cost. It is necessary to observe a resource's utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.
order: 9

---

# Resource Utilization & Efficiency

{% include contribute-capabiility.md %}

{% include domains-loop.md %}

## Definition
In context to FinOps, resource utilization is about making sure you are getting sufficient business value for the cost. It is necessary to observe a resource's utilization over time to understand if the performance, availability or other quality metrics are of value for the expense incurred.  

For example, there may be times when it is deemed that for performance or availability gains, average utilization may need to decrease and the extra expense incurred is worth the value creation the resource provides.  Or the opposite may be true and performance expectations can be lowered to improve cost.  For these decisions to be made, resource utilization, efficiency and cost must be looked at together.

The management of resource utilization and efficiency translates into identifying whether there is scope to reduce resource costs while maintaining the required performance and, if there is, making the changes required where it is economically worthwhile to do so.



## Maturity Assessment
#### Crawl
- Has some visibility of resource utilization using one or more sources such as cloud billing data, infrastructure monitoring tools, cloud provider insights/tools.
- Define a business efficiency metric - i.e. a metric that speaks to your business that can be used to measure how efficient a resource is

#### Walk
- Is able to put a $ value against costs that can be avoided by rightsizing underutilized resources.
- Measure the cost required in performing the action - i.e. it’ll cost 50 man hours to make this change at an hourly figure of xyz.
- Takes manual action to review recommendations and take appropriate action(s) to increase efficiencies.  

#### Run
- Uses cost and utilization data to drive automated processes to either:
- Alert humans to analyze. Outcomes could be to update the architecture/sizing of resources deployed or suppress the notifications for these resources as there are good reasons for running at levels that look suboptimal on the surface.
- Resize or stop/start the resources




## Functional Activity
#### As someone in a Business/Product role, I will…
- Clearly define service KPIs so that engineering are able to design efficient services within the defined boundaries
- Provide demand forecasts and information on the demand pattern profiles (daily/weekly/monthly/cyclic)
- Establish the business goals for the objective - i.e. release to customers as quickly as possible, release to customers w/ an availability of 99.99%, etc. (aka Business Value Creation!)

#### As someone in a Finance/FinOps role, I will…
- Highlight any opportunities to increase utilization and efficiency and work with the teams to review feasibility of alternative options
- Help create the reporting to track and report on the impact on value of underutilization and inefficiencies
- Partner with the Engineering organization to establish budgetary & efficiency targets

#### As someone in an Engineering/Operations role, I will...
- Architect services with the KPIs and forecasts guiding decisions
- Use elasticity best practices to automatically scale resources with the workload demands
- Build automation to output measure and metrics needed to measure utilization and efficiency
- Constantly regularly review utilization of resources

#### As someone in an Executive role, I will…
- Deliver the business value creation vision and strategy
- Provide executive level support in the defined KPIs, establishing credibility in the FinOps efficiency program




## Measure(s) of Success
_at least one measure of success; should be described in a context of cost; this could be an efficiency KPI or an agreed upon threshold or target._
_for example:_
>* idle resource costs will not exceed 3% of total monthly cloud spend
* anomaly costs will not exceed $150/month



## Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_


<!-- ####### Real World Resources ####### -->

{% include story-loop.md %}