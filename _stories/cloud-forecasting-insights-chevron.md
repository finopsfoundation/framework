---

layout: story

title: Cloud Forecasting Insights from Chevron
description:
story-title: Cloud Forecasting Insights from Chevron
story-date: 2021-06-01
author: Scott Linn
company: Chevron
company-size:
industry: Energy
cloud-provider:
- Azure
tooling-services:
framework-persona: Business/Product Owner
framework-maturity: Run
framework-capabilities:
- capability_forecasting
framework-projects:
- project_forecast
order:

tags:
- cost-allocation
- budgets
- forecasting

---

Scott Linn is a product manager for cloud optimization and modernization at Chevron where he has worked for 23 years and spent the last five and a half in the cloud space. Chevron’s cloud environment currently consists of applications and servers on-premises and in Azure – with the vision to migrate a much as possible to Azure.

Chevron’s first year in its journey to the cloud focused on certifying Azure services for use and building organizational capability. The next year with an increase in cloud utilization, there needed to be a focus on finding cost savings opportunities as well as a more accurate Azure consumption forecasting process.

The optimization and modernization team primarily uses Microsoft PowerBI for their data collection, cleansing, and reporting. The scope is large with PowerBI processing more than 400GB of cloud data each day. The diagram below represents the data flow from Azure to its end point in PowerBI.

![](/img/forecasting/chevron-1.png)

Machine learning was considered but the team was already heavily invested in using PowerBI for the business process of cloud spend reporting, which did not have native forecasting.  So, a custom exponential smoothing model was developed using data analytic expressions (DAX).  Data Analysis Expressions (DAX) – is a library of functions and operators that can be combined to build formulas and expressions in Power BI.

![](/img/forecasting/chevron-2.png)

![](/img/forecasting/chevron-3.png)

The team has two main goals for accurate forecasting:  
January YE forecast within +/- 5% of actual; and
May Y + 1E forecast +/-10% of actual

![](/img/forecasting/chevron-4.png)

<figure>Sample actual vs trend forecast model</figure>

While the accuracy of forecasting was high early in the project’s life cycle, exponential smoothing makes it difficult to predict inorganic changes resulting in a five to 10 percent variance.  

In conclusion, had we built from scratch, machine learning would have been the preferred route for forecasting.  Choosing to leverage PowerBI, exponential smoothing has proven to be effective within variance tolerance, especially with year-end forecast values.
