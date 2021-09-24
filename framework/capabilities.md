---

layout: default

---

# FinOps Capabilities

FinOps Capabilities represents functional areas of activity in support of their corresponding [FinOps Domain](/framework/domains/). Functional activities are tasks or processes that allow one to meet the demands of a FinOps practice iteratively through the [lifecycle phases](/framework/phases/). These functional activities and processes are intended to be in service of enablement, education, knowledge sharing, advocacy, actionable tasks, business objectives, FinOps maturity improvement.

## List of Capabilities



{% assign sorted_capabilities = site.capabilities sort:"order" %}
{% for domain in sorted_capabilities %}


<a class="text-lg hover:text-green-500 transition-colors duration-200 p-4" href="{{ domain.url }}">{{ domain.title }}</a>


{% endfor %}

- [Cost Allocation (Metadata & Hierarchy)](fc-cost-allocation-metadata-and-hierarchy)

- [Manage Anomalies](fc-manage-anomalies)

- [Manage Shared Cost](fc-manage-shared-cost)

- [Data Visualization and Showback](fc-data-visualization-and-showback)

- [Forecasting](fc-forecasting)

- [Budget Modeling](fc-budget-modeling)

- [Workload Management & Automation](fc-workload-management-and-automation)

- [Commitment Based Discounts](fc-commitment-based-discounts)

- [Resource Utilization & Rightsizing](fc-resource-utilization-and-rightsizing)

- [Unit Economics](fc-unit-economics)

- [Data Normalization](fc-data-normalization)

- [IT Asset Management](fc-it-asset-management)

### Historical Capabilities
- [Resource Metadata (Tagging/Labeling)](tagging-labeling)
- [Resource Hierarchy (Accounts, Subscriptions & Projects)](resource-hierarchy)
- [Shared Cost Management](shared-cost-management)
- [Anomaly Detection](anomaly-detection)
- [Commitment Discounts (Reservations, Savings Plans, CUDs)](commitment-discounts)
- [Optimization Recommendations](optimization-recommendations)
- [Automation](automation)
