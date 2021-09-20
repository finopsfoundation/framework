---

layout: default
tag: anomaly-detection

---

# Anomaly Detection

## Introduction

Anomaly detection allow the FinOps team to react early, in order to maintain the savings that an organization has come to expect. To quickly find those needles in your cloud haystack, using automated, machine learning–based anomaly detection is key. 

An unexpected anomaly occurs when teams deploy resources with the expectation that they will maintain budget, and then find they are trending over budget. An unexpected anomaly typically means something will need to change: either what was deployed, or the targets set for the team.

Sometimes teams need to make choices, and those choices will affect their budgets. Consider a case where one team is behind on a project. Their plan was to deploy smaller cloud resources to keep costs down, but in order to get the project back on track, they decide to deploy larger resources and complete things faster. This would result in a short-term breach of targets, but it would have a business benefit of getting the project delivered on time. This is what we classify as an expected anomaly. A decision is made ahead of time to exceed the planned budgets in order to achieve a desired business outcome.

You must also be able to track anomalies that might not directly result in a change in cloud spend. If one of your teams starts using a new cloud service offering, replacing the usual one, you can learn of this through anomaly reports that show your cost by cloud service offering. Anomalies in this report can be very significant for companies that require sign-off—for security or compliance reasons—before using new services.

- Mistakes happen
- Anomaly detection is crucial to any large-scale cloud operation
- In addition to security and operational monitoring, cost monitoring can provide crucial early warning signs

## Common Implementation

Consider various alerting schemes :
- Alert on $$ thresholds
- Alert on Standard Deviation thresholds (no need to put in $ amounts to watch for)
- Alert on specific tagged subsets of spending
- Alert quickly, automate alerting to email/monitoring/ticketing systems

With timely delivery of notifications to teams via:
- Email
- Jira 
- API 
- Slack

## Common KPIs


## Related Capabilities

- Account Hierachy
- Shared Cost Management
- Post Bill Processing
- Continuous Improvement

{% include story-loop.md %}
