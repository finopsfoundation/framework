---

layout: story

title: When Do Cloud Savings Start to Kick in?
description: In this post I’ll share why cloud can both save, and not save, depending on your stage of cost optimization maturity. For illustration purposes, the stages of maturity in this post are split into crawl, walk, and run.
story-title: When Do Cloud Savings Start to Kick in?
story-date: 2021-06-01
author: Peter Shi
company: Goldiserv
company-size:
industry: Internet
cloud-provider:
- AWS
- Azure
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_rightsizing
framework-projects:
order: 

tags:
- commitment-discounts
- usage-optimization
- rate-optimization
- organizational-alignment

---

When asking a room of IT and Finance professionals who use the cloud: “Is cloud cheaper than on-prem self-managed IT?” Typically, half the room responds “yes, cloud is cheaper” and the other half “no, cloud is more expensive”.

In all likelihood, both camps are correct.

In this post I’ll share why cloud can both save, and not save, depending on your stage of cost optimization maturity. For illustration purposes, the stages of maturity in this post are split into crawl, walk, and run.

For each stage detailed below, I’ll cover:

- how organisations typically improve cloud spend efficiency and unit costs,
- typical savings realised, and
- pros and cons of each stage

---

## The initial lift and shift
Many organisations start their cloud journey by lifting and shifting existing on-prem workloads to the cloud. Ignoring migration costs and assuming on-prem costs go to zero, the organisation will likely be paying [more than they used to](https://blogs.gartner.com/marco-meinardi/2018/11/30/public-cloud-cheaper-than-running-your-data-center/) on-prem.

Here, cloud does not save money compared to on-prem self managed IT as indicated by the chart below (bar height = total cost of ownership).

![](/img/stories/when-do-cloud-savings-start-kicking-in-1.png)

This pre-crawl stage can conclude in many ways. One of these ways is when someone in the organisation realizes the annual cloud IT budget has run out in just 3 months; a surprisingly common story. When this happens, two streams of effort typically begin: 1) a resource intensive investigation into why actual cost is different to estimated cost (outside of the scope of this blog), and 2) cost optimization.

## “Crawl stage” cost optimization
The crawl stage of cost optimization is characterized by reactive, non-invasive actions that require no cultural change. Typical activities include seeking discounts through enterprise agreements or programs, and using commitment for discount tools such as Reservations and Savings Plans.

These activities typically trim 20% off of the cost off of the lift and shift scenario.

Savings are typically limited to 20% because most organisations find it difficult to make 3-year commitments required to unlock greater discounts.

![](/img/stories/when-do-cloud-savings-start-kicking-in-2.png)

Pros and cons of the crawl stage include:

**Pros:**

- No-cultural change required
- Doesn’t require a FinOps team nor additional staff resourcing
- Relatively quick and easy to execute (although decisions can still be complex)
- Non-invasive hence no risk to performance and up-time

**Cons:**

- Limited savings
- Cloud may still cost more than on-prem
- Net-new inefficient cloud spend continues to be created

Moving beyond this crawl stage can be challenging as some process and culture change is required; and those responsible for driving cloud IT optimization (e.g. a central FinOps role) will find it difficult to influence the priorities and actions of edge-IT teams. However, it is important for most organisations to strive towards the walk stage.

From my experience observing hundreds of larger organisations who adopt cloud, staying in the crawl stage eventually leads to a view that cloud doesn’t deliver savings and/or the commercials to justify the migration business case do not stack up.

## “Walk stage” cost optimization
The walk version of cost optimization is characterized by reactive, but invasive actions that require a small amount of process or cultural change. In addition to crawl-stage activities, typical walk-stage activities include turning off non-production resources outside of work hours, some process to fit resource size to what’s needed (i.e. right-sizing), and general cleanup of unused resources.

These activities typically trim another 20-30% off of the cost off of the crawl-stage cost. Even if you use commercial off the shelf software that requires large instances, a 3-year reservation combined with licensing optimization and vendor negotiation can make the TCO stack up in most cases.

![](/img/stories/when-do-cloud-savings-start-kicking-in-3.png)

Pros and cons of the walk stage include:

**Pros:**

- May be running cheaper than on-prem and commercial business case for cloud likely stacks up
- Lower chance that cloud budgets are exceeded

**Cons:**

- Some tooling, process, or cultural change may be required
- Cost optimization work has a chance to impact speed to delivery, performance, and up-time
- Net-new inefficient cloud spend continues to be created

For organisations that have limited engineering resources whose time is better focused on delivering core-business value, it may make sense to stop here. However, for organisations where cloud IT cost is a limiting factor to gross margin or significantly impacts [runway](https://www.codingvc.com/how-much-runway-should-you-raise/#:~:text=In%20the%20startup%20world%2C%20runway,income%20and%20expenses%20stay%20constant.&text=If%20you%20raise%20too%20little,re%20wasting%20resources%20(equity).), it may be valuable to advance to the run-stage.

## “Run stage” cost optimization
The run-stage of cost optimization is characterized by proactive mechanisms that drive significant cost avoidance.

As organisations mature into the run-stage; training or onboarding, tooling, decision making, and operational process, roles, and culture may all evolve to be cognizant of cost and value.

In addition to walk-stage activities, run-stage cost optimization levers may include architectural decisions that balance cost, versus other business/customer requirements, installation of cost anomaly detection systems, use of serverless and spot, application of IT infrastructure automation, and a shift towards open-source and microservices.

These cost optimization levers can trim a further 60%+ off of the cost off of the walk-stage cost. An example of this comes from a customer in the banking industry who re-architectured an application to leverage serverless. The monthly run cost of the service fell from over $1M (per month) down to $150k, and although it cost over $2M to complete the work, the exercise delivered significant ROI.

![](/img/stories/when-do-cloud-savings-start-kicking-in-4.png)

Pros and cons of the run stage include:

**Pros:**

- Common knowledge across the organisation that cloud significantly reduces the total cost of ownership of IT when used efficiently
- Budgets may become soft targets that can be adjusted based on expected value of IT work
- Net-new cloud spend is more likely to be efficient and does not require costly (and difficult) reactive cost optimization work
- Reactive cost optimization work exists, but effort required is low due to streamlined processes and tooling

**Cons:**

- Significant investment in tooling, process, and cultural change is required
- Cost optimization work has a chance to impact speed to delivery, performance, and up-time

If you’re looking to achieve run-stage cost optimization results (especially in larger organisations) consider the following questions:

- Do I have founder and/or C-suite support to overcome technological and political barriers to drive FinOps change?
- Is cost saving and margin improvement considered to be business critical this year?
- Are the teams responsible for the spend well-trained in cloud technology?
- Are we prepared to implement chargeback to the business units that incur cloud costs?

If the answer to these questions is largely “yes”, then pursuing run-stage cost optimization may make sense for you and your organisation.

If however the answer to these questions is largely “no”, from my experience your organisation may be better off staying in the crawl/walk stage of cost optimization as better tooling, training, or FinOps headcount allocation may not deliver the expected ROI.

## Cloud can be much cheaper than self-managed IT
Cloud can be much cheaper than self-managed IT, when run in an efficient way. However travelling down the crawl-walk-run maturity curve can be challenging, and perhaps even questionable for organisations that should instead be focusing on areas such as agility, security, resilience, tech-debt reduction and/or product. Organisations in the crawl-stage of optimisation, despite the higher cost, may still see [positive ROI](https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/clouds-trillion-dollar-prize-is-up-for-grabs) if you consider all the business benefits that cloud brings.

That being said, organisations who invest in [FinOps](https://www.finops.org/) at the right time and in the right way will see the cost and effort of FinOps be paid back multiple times through cost savings; with some of these FinOps practices shared in the recent [State of FinOps report](https://data.finops.org/).

I encourage you to have a think about what stage of cost optimization is a good fit for your team or wider organisation, and if any change is warranted (and you’re willing to hop on the challenge that is the FinOps journey), start a conversation on how to make it happen. As I’ve learned over the years, when the timing and conditions are right – things tend to progress faster than you would think possible.
