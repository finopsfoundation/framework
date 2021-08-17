---

layout: default
tag: optimization-recommendations

---

# Optimization Recommendations
## Introduction
Public cloud consumption is typically charged based on the size and type of provisioned resources, not how or even whether they are used. Optimization recommendations help ensure that cloud resources comprising a workload are provisioned to minimize cost while still providing the required performance and functionality. While it’s theoretically feasible to manually identify idle/overprovisioned resources, and determine the appropriate optimization action, in practice some sort of automated tooling that provides recommendations is normally used (with the appropriate business context such as tagging/mapping of resources), to assist with the scale and speed of resource management.
Optimizations may consist in areas of resource type, size and number, and also service selection.
In addition, organizations often find it challenging to actually execute or action recommendations, so consideration must be given to removing barriers.

## Sample Implementation
![image](/img/framework/optimization-recommendations.png)


## Common Approaches
-	Right sizing – the size of the resource is decreased to remove excess overhead
-	Right type/purpose – the type of resource is selected so that there is minimum overhead across all attributes of the resource (for example across CPU, memory and disk). Avoid using a generic resource for specialty tasks.
-	Right number – dynamically add/remove resources within groups (such as behind load balancers or through pools of compute) as demand fluctuates.
-	Service selection – Switch to managed services or serverless options that inherently perform the scaling.
- Right Level of use - Identify resources or services which are being used for intended purpose but may be overpriced based on the value received. See [this article for examples](https://www.linkedin.com/pulse/who-pays-watchmen-understand-your-azure-monitor-costs-jan-karstens).

## Maturity Examples
-	Crawl = Review and implement optimizations on an occasional basis, significant savings can be made by removing obvious waste. Initial choice of resources is based on non-workload data such as vendor datasheets. Most recommendations due to incorrect initial selection of resources or teams provisioning resources and forgetting to decommission them.
-	Walk = Optimization recommendations are available to delivery teams on-demand through an interactive tool and actioned regularly. Due to improved discipline, there is reduced opportunity to optimize with less recommendations providing a business saving due to cost of implementation. An increasing number of recommendations will be the result of additional resources/features becoming available after the workload was built.
-	Run = Rightsizing recommendations are automatically pushed to teams/engineers based on configurable policies that ensure there is adequate ROI. Barriers are removed by bringing generated recommendations into regular issue tracking software where work is prioritized and managed.

## Common KPIs
-	Additional cost due to non-optimized resources
-	Additional cost of non-optimized resources, where the cost of implementing the recommendation is less than the benefit received
-	Additional cost of non-optimized resources due to a confirmed business requirement

## Cautionary Tales
The effort involved in implementing an optimization recommendation may vary from workload to workload. It is important to balance the effort of the initial resourcing with potential future recommendations. Workloads that are more static, have larger resource costs, and larger costs of implementation/testing/verification should have larger investments in initial resourcing, and be potentially exempted from optimization recommendations. Smaller and more agile workloads will benefit more from optimization recommendations and have this factored into the workload architecture.

It is important to ensure that the data used for the recommendations covers the workloads normal usage cycles, ensure regular increases in activity such as end of month activities are factored into the data.

Factor in future growth/usage when analyzing recommendations. If the resources will require another change in a short period of time, the initial optimization work will most likely not provide a business saving.

Factor in the time it would take to undo the optimization and potential business impacts when optimizing. The business may decide to over-provision internet facing resources, as the time to scale up in the event of a crisis, and possible brand damage may outweigh the additional costs in resourcing

The correct approach with optimization recommendations is to implement recommendations where the cost of implementing the recommendation is less than the benefit received, this provides an overall saving to the organization.

As vendors create more resource types, there will potentially be an increasing amount of recommendations. It is important not to worry about the volume of recommendations and look at value only

## Related Capabilities


## Resources

-	Multi-Cloud – AWS Well-Architected https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/cost-effective-resources.html
-	Getting engineers to take action by implementing policy driven rightsizing https://www.apptio.com/blog/policy-driven-rightsizing/
- Strategies for rightsizing container workloads running on public cloud https://www.apptio.com/blog/control-kubernetes-costs-optimize-usage/

