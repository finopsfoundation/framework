---

layout: story
permalink: /stories/zone-approach-ri-buying/

title: The Green Zone/Red Zone Approach to RI Buying
description: Dave Van Hoven from HERE Technologies spoke about Green Zone/Red Zone approach to buying Reserved Instances (RIs) centrally — and distributing RIs to product teams across a massive estate of over 10 million unique instances annually.
type: User Story
source: Community Contribution
story-title: Avoid and Simplify Shared Costs
story-date: 2019-05-29
author: Dave Van Hoven
company: Here Technologies
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
weight: 100

---

On a [previous FinOps Summit](https://www.youtube.com/watch?v=6DbBEMijdcY) call with, Dave Van Hoven from HERE Technologies spoke about their Green Zone/Red Zone approach to buying Reserved Instances (RIs) centrally — and distributing RIs to product teams across a massive estate of over 10 million unique instances annually.

HERE Technologies is the world’s #1 location platform with 8,000 employees and 200+ offices globally. They collect billions of GPS points every day with over 700,000 probe data points collected per second per car, all to enable autonomous driving and location intelligence for fleet management. Dave Van Hoven is the Principal Business Analyst for the FinOps team working under FinOps Foundation board member Jason Fuller, who is the head of Cloud Management for HERE.

When Dave and Jason joined a few years back, they entered an environment with over 500 accounts operating independently to make their own financial optimization decisions. RI coverage was very low at 10% overall coverage. They started with limited reporting abilities and a wide variety of instance families in use which made coverage even more challenging.

To change the status quo, they assembled a team of analysts, engineers and project managers focused on cost optimization. This team began to put together a plan for how to cross-charge, do reserved instance planning, and pull the management away from the distributed teams and into the central FinOps team. They defined specific KPIs they wanted to hit around RI coverage and vacancy.

One of the first steps was to move teams away from a siloed view of RIs. The teams felt they owned the RIs, some assumed they never left their accounts and as a result, treated them like pets instead of cattle that could be traded.

## Lesson #1: Build Out Multiple KPIs and a System to Track RI Use
The two primary KPIs they focus on are RI coverage levels and RI vacancy levels. RI vacancy represents unused RI hours, sometimes referred to as RI waste. The HERE FinOps team calls these the green line (coverage) and red line (vacancy) levels. They’re focused on being accountable to meeting green line levels, but keep red line levels under control.

Based on an evaluation of savings, the team opted to go with all upfront RIs and to front the upfront fee of the RI purchases from a single cost center. Using a cloud cost management tool, they’re able to track RIs as they floated around from account to account then charge them back.



![Centralized RI purchasing plan](/img/stories/RI-Buying-Process.png)
*Dave provided this sneak peek into their internal process for RI purchasing.*

## Lesson #2: Differentiate Between Safe and Risky RI Purchases
HERE’s RI strategy focuses on a red zone/green zone plan aimed to de-risk purchases and look for the highest likelihood of re-use.

To determine where to purchase RIs, Dave’s team first looked at green zone regions where they could buy regionally-scoped reserved instances. The vast majority of their instance usage exists in three primary regions (us-west-1, us-east-1, and eu-west-1), and they went weapons free in these regions due to the flexibility provided by regional-scoped RIs. Then they look at instance families in those regions and set a percentage of usage within those green zone regions. Anything utilized at 5% or more of their total estate is deemed part of the green zone.

Green zone buys are purchased from a central linked account with no infrastructure running in it, so all reservations are equally offered up for use by the other linked accounts. The green zone reservations managed centrally make up around 70% of the RI purchases they needed to make.

Red zone RI opportunities are maintained by the teams themselves. If a team wants to use an instance family or region that falls below their 5% usage threshold — say a G3 instance in Singapore — it’s up to that team to determine if there’s a need and an expectation of use during the majority of the term. Red zone purchases are put into the team’s individual linked account rather than the central RI account.

## Lesson #3: Push for More Efficiency, Greater Communication and Stronger Infrastructures
The green zone approach removed the need to go out and coordinate with each team to determine which RI purchases to make. As a result, they greatly reduced the time needed for RI planning, enabling engineering teams to focus on the infrastructure and the FinOps team to fully centralize the RI buying at the fleet level. To prevent double buying, they locked down individual teams from making direct purchases of RIs using the Organizations feature in AWS. Red zone RI purchases must be executed by the central team, adding that extra level of coordination.

By standardizing the ordering process to a monthly bulk RI ordering, they’re able to ensure consistency with the process and ensure they’re being billed appropriately for discounted rates. This consistency and easy monthly reporting of commitments also adds the clarity needed to make the Finance team happy.

## A few other takeaways:
* Weekly FinOps team meetings. The FinOps team of analysts, engineers and project managers meet every week to review savings opportunities including rightsizing, storage and other optimizations.
* Monthly cross-charge based on usage of RIs. The last thing to develop was a plan to flow back vacancy. For central green zone purchases, the cost of the vacancy is spread across all teams, which slightly reduces savings for all without penalizing individual teams. For red zone vacancy, if the team doesn’t take advantage of a reservation, and no other team finds a use for it, then the entire cost of the vacancy will go back to the team who made the original request/commitment.

## Results
The green zone/red zone approach that Dave and Jason’s team implemented allowed them to go from 10% to 85% coverage and zero vacancy of RIs, with a long term target to keep vacancy under 5%. This translates to tens of millions of dollars of cumulative savings over the three years the program has been in place. The next step is to bleed in more and more convertible RIs to provide more flexibility into the process as the fleet starts to adjust to newer instance families over time.

This FinOps meeting was the first time we broke 60 participants in the regular meeting. A lively discussion followed Dave’s presentation and we look forward to continuing the conversation with all of you.
