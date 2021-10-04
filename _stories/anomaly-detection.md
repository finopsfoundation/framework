---

layout: story

title: Anomaly Detection at Scale
description:
story-title: Anomaly Detection at Scale
story-date: 2021-06-01
author:
company:
company-size:
industry: Life Sciences
cloud-provider:
- AWS
tooling-services:
framework-persona:
framework-maturity: Run
framework-capabilities:
framework-projects:

tags:
- tagging-labeling
- anomaly-detection

order: 1

---

A remote engineering team at a multinational pharmaceutical company spun up three x1e.32xlarge instances in Sydney for testing of in-memory databases. At the time, that goliath of an instance cost just over $44 per hour. The three of them together cost over $3,000 per day, or around $98,000 per month. These seem like big numbers until you consider that their monthly cloud bill was over $3,500,000. So, this change would have resulted in a paltry 2% increase in spend and wouldn’t have been easily visible in high-level reporting.

Potentially further obscuring this spend anomaly, the central team had just purchased RIs for another set of machines, a transaction that effectively canceled out the spend delta of the new x1e’s. However, because the FinOps team had machine learning–based anomaly detection, they found out about the use of the large instances the same day, and could have an immediate conversation about whether or not so much horsepower was needed. Unsurprisingly, it turned out that it was not.

Granted, this is a story of a Run stage company. A Walk stage company typically starts with simple daily spend visibility that shows teams their respective spend. Even that amount of visibility still begins to influence their behavior accordingly.
