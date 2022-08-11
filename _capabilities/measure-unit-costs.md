---

layout: capability
permalink: /framework/capabilities/measure-unit-costs/
search: true
search-keywords:

title: Measuring Unit Costs
description: Unit economic metrics enable you to determine the revenue you’ll gain from a single unit of your business and the cost associated with servicing it, ultimately revealing the business value of your cloud spend.
page-identifier: capability_unit-costs
framework-capability-title: Measuring Unit Costs
framework-capability-desc: Unit economic metrics enable you to determine the revenue you’ll gain from a single unit of your business and the cost associated with servicing it, ultimately revealing the business value of your cloud spend.
label:
order: 10

---

# Measuring Unit Costs

{% include contribute-capabiility.md %}

## Domains
<!-- _x-ref to the FinOps Domain(s) to which this Capability corresponds_ -->
{% include domains-loop.md %}


## Definition
A common definition for unit economics is direct revenues and costs, associated with a particular business model, that are specifically expressed on a per-unit basis. Metrics enable you to determine the revenue you’ll gain from a single unit of your business and the cost associated with servicing it, ultimately revealing the business value of spend. For a customer-facing application, that unit might be a user or customer subscription; for an ecommerce platform, it might be a transaction; and for an airline, it might be a seat.

By calculating cloud spend for total revenue, you can attach growth in cloud spending to your overall business growth. When these are in line, it makes sense that cloud spend isn’t wasted. When cloud spend is growing faster than the business, there may be cause for concern.



## Maturity Assessment
#### Crawl
- Measure cloud spend for a particular application against the total revenue for that application or service (e.g., cloud spend is 9% of revenue)

#### Walk
- Tie outputs of a product or service to an associated unit of activity (e.g., each API call costs us $0.01)

#### Run
- Measure how much it costs to perform a revenue-producing activity (e.g., each transaction costs us $0.05)




## Functional Activity
#### As someone in a Business/Product role, I will…
- Make decisions using unit cost about what changes I can make to my application through the lens of the business value it brings

#### As someone in a Finance/FinOps role, I will…
- Be able to determine if spend is increasing due to waste or due to growth in the business and determine if cost variances are ‘good’ or ‘bad’

#### As someone in an Engineering/Operations role, I will...
- Separate increases in usage/waste from increases in rate so that I can determine the best architecture changes to make, and potentially even move to a more expensive service when associated revenue increases

#### As someone in an Executive role, I will…
- Move past trying to determine how efficient my teams are being and instead focus on increases the bottom line and understand how cloud decisions affect my margins and ultimately profitability




## Measure(s) of Success & KPI
Measures of success are represented in the context of cloud costs and may include one or more key performance indicators ( KPI ), describe objectives with key results ( OKR ), and declare thresholds defining outliers or acceptable variance from forecasted trends.

_at least one measure of success; should be described in a context of cost; this could be an efficiency KPI or an agreed upon threshold or target._
_for example:_
>* idle resource costs will not exceed 3% of total monthly cloud spend
* anomaly costs will not exceed $150/month



## Inputs
_the information used that contributes to the measure(s) of success listed above; information here may include specific datasources, reports or any relevant input_


<!-- ####### Real World Resources ####### -->

{% include story-loop.md %}


## FinOps Platforms & Service Providers
_Reference of cloud cost management platforms, tooling and service providers related to this Capability coming soon._


## FinOps Training
_Reference of courses and training partners related to this Capability coming soon._


---
