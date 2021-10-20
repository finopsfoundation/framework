---

layout: default

title: Encouraging Engineers to Take Action
description: We gathered our FinOps experts to address the challenge of encouraging and enabling engineers to get more involved. It's not just a challenge for engineers-- everyone has a role to play.
page-identifier: project_engineers-action
project-title: Encouraging Engineers to Take Action
project-description: We gathered our FinOps experts to address the challenge of encouraging and enabling engineers to get more involved. It's not just a challenge for engineers-- everyone has a role to play.

---

## Project Details

- Status: Graduated
- Slack room: https://finopsfoundation.slack.com/archives/G01NQLND9HR
- SIG Ownership:
- Chairperson:
- TAC Liaison: Riley Jenkins

# Encouraging Engineers to Take Action

How finance, operations, and executives can work better together at encouraging more cloud cost optimization from their engineering teams.

## Before you begin

You should understand the basics of how cloud computing works, know the key services on your cloud providers, including their common use cases, and have a basic understanding of billing and pricing models. Being able to describe the basic value proposition of running in the cloud and understand the core concept of using a pay-as-you-go consumption model are also necessary.

You’ll also need to have a base level of knowledge of at least one of the three main public cloud providers (AWS, Azure, Google Cloud). For AWS, we recommend AWS Business Professional training or, even better, the AWS Cloud Practitioner certification. For Google, check out the Google Cloud Platform Fundamentals course. For Azure, try the Azure Fundamentals learning path. Each can usually be completed in a full day workshop.

<!-- ## Relevant FinOps Framework components

To get the most out of this document, please review the following first:

* [Tagging and labeling](/framework/capabilities/tagging-labeling/)
* [Cost allocation](/framework/domains/allocate/)
* Cost-centric ownership
* [Implementing FinOps training for engineers](https://www.finops.org/certification/)
* [Business metrics](/framework/abilities/unit-economics/)
* [Automating savings](/framework/capabilities/automation/)
* [Autoscaling](/framework/capabilities/autoscaling/)
* Rightsizing
* [Building a FinOps culture]()
* … and more (please recommend some must-have framework components)

If you have a strong handle on these subjects, continue on to better understand how to approach this challenge. -->

---

## Addressing the challenge

The State of FinOps survey reveals that many FinOps practitioners are encountering difficulty in getting engineers to act on their cost optimization recommendations. In total, 40% of the survey respondents rated this their top FinOps-related challenge.

This Engineering Action Playbook aims to show how FinOps teams can address this problem and ensure that Engineering teams are playing an active role in optimising the value of cloud services to the enterprise.

The value of public cloud services is maximised when engineers are given the freedom to experiment with new approaches and allowed to ‘fail fast’. This requires decentralised decision-making, where engineers can quickly create new IT capabilities without recourse to formal procurement processes. Attempts to restrain this freedom risk demotivating engineers, reducing creativity and slowing everything down.

FinOps practitioners must be aware of this risk when proposing cost optimisation initiatives. They must strike the right balance between cultural measures, aimed at encouraging action through improved understanding and awareness, and governance measures, designed to control action through standardising and automating processes.

This playbook supports FinOps practitioners in finding this balance in their own organisations, so their cost optimisation initiatives align with the broader goal of helping engineers to get full advantage from the variable cost model of the cloud.

## Our goal for Engineering Action is Cost Avoidance

FinOps teams are clearly having trouble in ‘getting engineers to take action.’ Let’s first understand what this problem looks like in practice and how it arises. At a fundamental level, cloud spend is the product of usage and rate. A key objective of FinOps teams is to promote both ‘cost avoidance,’ which relates to usage, and ‘cost optimisation,’ which relates to rate. Most of the actions required for cost avoidance are engineer-dependent. If engineers are not receptive to FinOps initiatives aimed at cost avoidance, then nothing happens.

It is common for engineers to be unaware of cloud costs and to feel that cost is not their responsibility. Engineers may work in an environment where functionality and delivery deadlines are the primary drivers of effort and where the culture of the team reinforces this outlook. If this is where FinOps is starting from, it’s no surprise that engineers may resist being held accountable for cloud costs, even as they spiral out of control.

There are four types of action that FinOps practitioners want engineers to take to establish the level of ownership and accountability required for effective cost avoidance.

![](/img/engineering-action/cost-avoidance.png)

## The Two Drivers of Engineering Action - Culture & Governance

In general, FinOps teams will want to drive engineering action on cost avoidance through both cultural and governance initiatives. A cultural approach will emphasize education, training and support aimed at developing engineers’ awareness of costs and their readiness to pursue cost avoidance. Governance acts to channel engineering actions to ensure consistency, compliance and management of risk. FinOps teams should seek approaches that optimize the balance of these two drivers for their own organizations.

![](/img/engineering-action/two-drivers.png)

Both culture change and governance change are directed towards the achievement of the business’s goals and will reflect the relative importance of cost avoidance to the enterprise, in relation to other priorities. The scope and parameters of these change initiatives will be set by the FinOps team working closely with organizational leadership.

## Driving Culture Change - Breaking the challenge into addressable parts

According to responses from the State of FinOps survey, we collected underlying reasons engineers do not always take action on cost saving opportunities. Following each reason are ways to overcome those concerns and the overall challenge.

- Identifying ownership and accountability
- Generating and sharing timely information
- Focusing on business-driven priorities
- Implementing Solutions to Strengthen FinOps

Every business has a different level of cloud adoption, utilization, and cost to manage. The challenge of empowering more cost optimization will also differ by the practitioner's role and skillset. The following stories, whether named or anonymized, add real FinOps practitioner details and insights on how to address the challenge.

## Identifying ownership and accountability

Ownership and Accountability are fundamental to effective cost avoidance. For engineers to take action in pursuit of cost avoidance, they must have a sense of ownership and responsibility for the cloud resources they use and be accountable for the costs that result.

So engineers are accountable for their cloud usage and costs, but who, or what, are they accountable to?

Based on the State of FinOps survey data, we have identified three dimensions of accountability, each relating to one of the actions we want engineers to take:

1. Self-accountability, or ‘professional pride’. Once engineers can see what the costs are and how they are important to the organisation, most of them will want to create cost-efficient solutions
2. Financial accountability. As spenders of the organisation’s money, engineers who own cloud resources are accountable to Finance through the normal financial management process
3. Business Accountability. As employees of the organisation, engineers are accountable to the business for their performance and how it contributes to the organisation’s goals

Each component of ownership and accountability maps on to one of the actions we want engineers to take, as shown below:

![](/img/engineering-action/mapping.png)

## Actions that drive Ownership & Accountability

The State of FinOps survey showed the mechanisms that FinOps practitioners are using to strengthen Ownership & Accountability at each level:

![](/img/engineering-action/mechanisms.png)

### Actions that drive ownership

Ownership of cloud resources should reside with the users of those resources, and these will typically be engineers. Ownership only becomes meaningful when the costs of cloud resources and the need to manage them responsibly are made clear to the owners. The State of FinOps survey reveals a high proportion of FinOps practitioners’ efforts are directed to raising engineers’ awareness of cloud costs and reinforcing this key ownership message. You can help engineers take ownership through a program of education, information and support.

Ideally, the likely cost of cloud resources is visible to engineers as part of their normal design and build activities. Granting them insights into costs after deployment, or ‘upstream’ cost data enables engineers to take account of costs in their designs, reducing the need for remedial action later.

Data on actual costs is visible after the deployment of cloud resources and is most valuable when available in real-time, where it can encourage the so-called ‘Prius effect’ (where real-time awareness of consumption prompts immediate remedial action). For maximum effectiveness, cost data should be available at the level of granularity required for it to be actionable. Where cost information is insufficiently granular, it can be difficult to isolate the factors that are driving costs. Where cost data is too granular, the effort required to interpret it can be daunting.

### Actions that drive accountability

The State of FinOps survey data shows the 10 most significant tactics respondents are using to drive accountability are:

1. Education, Training and Awareness
2. Publicity, Recognition and Gamification
3. Tools, Dashboards and Showback
4. Collaboration - between Engineering, Finance and Product/Business teams
5. Focusing on Product, Business Value
6. Incentives and Disincentives
7. Executive Alignment and Engagement
8. Budgets, Forecasts, and Chargeback
9. Metrics, KPIs and Scorecards
10. Regular Reports, Meetings and Reviews

The tactics chosen will depend on the type of accountability practitioners want to promote. The table below shows the most popular initiatives for each tyype of accountability.

|     | **Self Accountability**         | **Financial Accountability**       | **Business Accountability**          |
| --- | ------------------------------- | ---------------------------------- | ------------------------------------ |
| 1   | Education, Training & Awareness | Budgets, Forecasts and Chargeback  | Publicity, Recognition, Gamification |
| 2   | Tools, Dashboards and Showback  | Focus on Product, Business Value   | Focus on Product, Business Value     |
| 3   | Collaboration                   | Regular Reports, Meetings, Reviews | Metrics, KPIs and Scorecards         |

In summary, Engineering Action initiatives based on driving culture change should be tailored to the type of accountability FinOps practitioners wish to focus on.

#### Self accountability initiatives

If your focus is Self-Accountability, a program of **education and cost awareness** training can help engineers to develop the sense of ownership of cloud usage and costs that underpins all Engineering Action strategies. Many practitioners take the view that the professional pride of their engineering teams will naturally seek to develop cost-efficient cloud solutions once they accept ownership of their cloud usage and costs.

Self-accountability can be emphasised and supported through **tools and dashboards** that provide real-time information on cloud usage and costs, in the form of ‘showback’ reporting. This prompt feedback of costs prompts engineers to consider the cost implications of their design choices and think about how to maximise their value.

Programs that forge **collaborative working relationships** between Engineers, Finance and Procurement teams and Product/Project Managers can accelerate progress towards engineering ownership and accountability. Collaboration fosters a more direct connection between solution design, product margin and cost that directs engineers towards cost-optimised solutions.

#### Financial accountability initiatives

Practitioners whose focus is financial accountability will want to join up the organization’s financial management processes with the dynamic and granular patterns of cloud spend. Allocating and reporting on costs, managing budgets and forecasting future cloud spend all need to be part of a coherent financial management structure that does not unduly restrict engineers’ technical freedom or agility.

**Chargeback** of cloud costs to the engineering and products teams that use the resources is a key element in developing engineers’ financial accountability. Practitioners should ensure that cost allocation and chargeback is at a level of timeliness and granularity that maximises its usefulness. Likewise for **budgets and forecasts**; the aim is to create an effective financial reporting feedback loop that serves to steer engineers’ activities towards cost avoidance.

Every business needs to know how profitable its products are. Connecting engineers with discussions around **product costs and margins** increases their business awareness and financial accountability.

**Regular reports and reviews** keep engineers engaged with the financial and business implications of their cloud usage and require them to justify their choices to the management team.

#### Business accountability initiatives

The cloud offers massive potential value to organizations in dynamic sectors where demand may change rapidly and where speed to market is a key factor. Engineers are the beating heart of these organizations and have significant impact on business agility, for better or worse.

FinOps practitioners looking to drive business accountability will want to **recognize, publicize and celebrate** engineering actions that contribute to business success. Many FinOps teams are making use of **gamification** initiatives to engage engineers in programs that have clear value to the organisation at large. These may be team-based events where friendly competition drives engineer enthusiasm and activity in pursuit of objectives that align with the organisation’s goals.

As for financial accountability, business accountability is strengthened when engineers see the direct connection between **product success** and their cloud solution designs. The cloud engineer of the future will understand this connection and recognise their own role in driving business success.

Ther State of FinOps survey data show an increasing use of metrics to steer engineers towards organizational goals. **Outward-looking metrics** may relate to product or customer factors (e.g. the cost of servicing each customer call, or the profit margin on each product), whereas **inward-looking metrics** such as **KPIs, OKRs, SLAs**, etc can be helpful in managing engineer performance. These may be incorporated into **scorecards** to make it easier to compare the performance of different teams.

## Driving governance change - breaking the challenge into addressable parts

Governance is an often required step in managing both the drive to push accountability specifically, and oversight of cloud cost management programs in general. There are three main forms of governance change that practitioners use to address the Engineering Action challenge. These support, and may sometimes blend into, the cultural changes described above.

**Guidelines** – describe best practice, corporate expectations, the standard (or approved) way of doing things.

**Policies** – are mandatory and dictate the standard way things must, or must not, be done with consequences for non-adherence.

**Automated Processes** – take the actions out of the engineers’ hands and guarantee they are standardized and consistent.

A combination of some or the use of all three of these elements may be applied to any engineering action challenge. Individual FinOps teams must figure out which blend of these elements will work best in their company.

### How We Identify FinOps Activities by Persona

_Jan Karstens, Blue Yonder_

Here are some ways to designate FinOps-related actions to encourage more engineering action. This designation and distinction works well at our organization, so your mileage may vary.

#### Actions for engineers

Build the right mindset into the engineering process: "Engineer for profitability". Assuming that Engineering teams can access details on costs, make 'cloud cost impact' a box to tick on their user story templates. This helps to build a mindset that costs are really just another boundary condition to optimize for.

#### Actions for operators

Communicate back to engineering: share back experience with engineering. Often best done by having the engineering and operate teams collaborate closely (-> link to DevOps culture).

Operators are usually in an excellent position to observe inefficiencies in system deployments. They will understand where over-capacity is in place for the right vs. the wrong reason. Need to share this information with engineering. Besides cloud infrastructure costs, the costs to operate (e.g. staff costs) are often a substantial contributing factor. Sometimes these can be lowered at the cost of higher infrastructure costs, but with a better TCO overall.

#### Actions for finance

Make engineering successful: provide insights from central FINOPS team to selected engineering teams. Concrete reports that show trends or large spending buckets (often VMs and Storage). Support Engineering teams in picking optimizations that have proven successful in the past (e.g. right-sizing or shutdown during off hours). Share the achieved savings with them (feels great to everyone) and distribute the success story in the complete engineering org.

#### Actions for C-level / leadership

Be open and share: share details on financial business goals and how they translate into the work performed by engineering teams. Eg expected costs per consumption, or targets for operating margins. That way, the cost optimization work becomes very meaningful and targeted, even gratifying.

Set very specific goals, e.g. if a specific team that is building a SaaS service on the cloud has the goal to maximize market share, segregate goals. In the short term, go for market share. Ok to (over)spend on cloud but only if there is a path towards profitability. So a free tier to gain market share is ok, but only if there is a path to monetization.

---

### How to Transition to Team-Centric Cost Ownership

_Riley Jenkins, Domo_

One of the foundational principles of FinOps is that \"everyone takes ownership of their cloud usage.\" For companies born in the cloud with a Devops culture, teams owning their systems cost can be natural, as
ownership is already centered on development teams. For a company
transitioning to the cloud or companies that have yet to push ownership
to their teams, transitioning ownership can be a challenging task to
complete.

Steps:

1.  Research

2.  Identify opportunities

3.  Formulate your plan

4.  Gain Leadership buy-off

5.  Roll out

#### Research

No matter where your company is at, a good starting point is to research
where ownership currently lies. Gaining answers to a few key questions
can highlight the current ownership of cloud costs from multiple
perspectives:

- Who reports on cloud costs currently?

- Who sets budgets for cloud costs?

- Who is able to make configuration changes to your deployed resources?

- How are cost initiatives prioritized? By who?

- How are inefficiencies identified? By who?

- Who decides to act on committed spend decisions such as reservations or savings plans?

#### Identify Opportunities

Shifting ownership takes careful deliberate work. In order to
prioritize, gain support, and change ownership, the reasons for making
such a change should be identified. Lack of ownership by those that use
the cloud can impact many areas of the business. Areas of consideration
include:

- Where can better insight improve cost savings initiatives?

- Does committed spend coverage suffer from split ownership?

- Are their operational benefits?

- Are their technical benefits?

- Are goals difficult to achieve due to ownership challenges?

#### Formulate Your Plan

Understanding your current ownership paradigm and identifying
opportunities enables you to plan out phases to adopt usage based cost
ownership. Some areas of consideration:

- Timeframe

- Stakeholders

- Phases

- Foundational changes like tagging and reporting policies

- Centralize function team\'s role (e.g. Cloud Infrastructure Teams)

- KPIs to measure success

- Kickoff

- Approaches such as gamification

- Training

#### Gain Leadership Buy Off

Without support and sponsorship from senior leadership, prioritization
and alignment amongst the stakeholders will make adoption of a
transformation of ownership much more difficult. Some changes can impact
the day to day work of your team. Cultural opposition from stakeholders
can lead to opposition among teams. Ensure that your leadership
understands the current state and what is to be gained by following your
plan. Some considerations:

- Executive sponsorship

- Messaging

- Rollout amongst leadership

- Feedback

#### Rollout

Making ownership changes can be met with many different challenges along
the way. As your initiative is progressing keep the following in mind:

- What wins can you share with teams in flight?

- What cost savings opportunities have been identified as a result?

- Trainings and office hours

- KPIs to ensure you are headed in the right direction

- How quick is your feedback loop for improvement?

### How Tagging and Reporting Should Map to Ownership of Costs

What helps us at our organization is to implement what’s called “team centric cost ownership.” It can be achieved using two components.

The agreed upon grouping criteria should be transparent as prepared by the FinOps team members. Many examples over the years have shown descriptors like Product Name, Project, Department, Cost Center, Business Unit, etc.. You can then map the current people names that have business leadership responsibilities and technical leadership accountability.

When you agree to assign or map a business owner and technical owner it provides a common ground upon which FinOps can set up new dashboards and widgets to show back the various costs, consumption, waste, suggestions, and shame/winners by these new team views during the monthly spend review process. The transparency from senior managers, VP/Directors, and the engineering community is to be open and understand that now the whole company has visibility into these costs and the potential amounts that are not efficient, and able to help drive management decisions around staffing up more people.

#### An example

Say you remove $50,000 per month of waste: what does this actually mean? With team-centric cost ownership, FinOps teams can help see a trend where the waste and spend is growing faster, and whether that is ok or action needs to be taken within a business context and/or a technical context. The ability to help prioritize the engineering staff tasks and priorities over the quarter is where these FinOps measures shine. You should be having open dialog with how the team will do which tasks to obtain the best value, or the most amount of work done per cloud dollar spent at the budget given.

---

### How Tagging and Reporting Should Map to Ownership of Costs

_Anonymous member_

Designing a tagging structure to meet a company's goals is one of the foundational steps of a healthy Finops practice. The structure of the organization’s tagging taxonomy must consider cloud spend ownership, system structure, and the needs of the business as whole. It also depends on your company's organizational structure, account structure, and team capabilities. Keep in mind that tagging is not just a FinOps discipline. Resource tagging can affect usage tracking, monitoring, resource identification and even system functionality.

The difference in organizational structure is key when it comes to routing the waste, scaling, rightsizing, and service level optimization suggestions from FinOps tools and datasets to the proper technology or service layer owner who can take action. When you are able to align tag mapping with the way your business is staffed, your tagging hierarchies and mapping setup will help ensure a more self-service ability by the many different personas in the company.

The routing of the workload optimization recommendations getting to the right owner via reliable tagging structure also lends itself towards improving cloud cost visibility and accountability to specific teams, managers, projects, directors, or product code. Review how your company is currently estimating public cloud costs and spend approvals to ensure all parties involved are on the same layer of technologies and services being included.

**Example:** You have a $100 per month budget for a sandbox for the namespace tenant containerized application use, but who should specifically be seeing and managing cost allocation and showback for the idle resources? What about items that can’t be tagged, like egress, data transfer, etc.?

**Possible answer:** So you may have to tie your cloud spend estimates by a different tagging layer to services and then use a tenant tag to make it simpler for them to only find the item that they care about and work on. This helps abstract away all the complexities of the FinOps full cloud cost control and detailed service level costing mappings across the many different options for cost sharing that could be setup arbitrarily.

Keep it simple for your end users to get what they expect to see that they care about in a dashboard as self service. When you provide them visibility by the proper technology layers they own, the costs, recommendations, and budget awareness charts will make everyone much more productive and the program will grow more quickly.

---

### What to Do If FinOps Consists of Engineering?

_Riley Jenkins, Domo_

When I first heard that getting engineering to take action was a major challenge for other FinOps practices, I was a little surprised. After hearing the reasons from other members I began to realize that we have avoided much of those challenges because our FinOps practice is entirely within engineering and cost ownership lies with our engineering teams.

Previous to this, RIs and cost tracking was loosely owned by Finance and a few technical groups throughout the org. Because of this departmental segmentation, we weren't able to optimize because these groups were using different reporting tools and even different terminology. Another difficulty was that each prioritized savings opportunities differently.

From a high level our finance team helps us understand the financial goals of the business and track budgets for cloud spend. Our Finops practice as a part of engineering is responsible for enabling our teams to track their own budgets, provide data transparency, cost optimization through committed spend mechanisms (RI/Savings plans), and identify high value or cross team cost savings opportunities.

Our FinOps practice is a function of our SRE group. This means we not only know how much our systems cost, but we know how they scale, where the inefficiencies are, and how they function. Because we have a good understanding of Finops constructs like RI/SP opportunities and we are in the trenches helping our teams ensure their systems are stable and scalable, when we make a cost saving recommendation our teams know that we aren't just looking at cost. We weigh cost savings with features, performance, and stability.

Our teams understand that they own their code's infrastructure cost. This includes leadership, project management, and the engineer working on the next sprints deliverables. As such, cost savings initiatives take the form of tickets that are prioritized right along with bugs and product features. Our teams not only test their features in our dev/test environments, but can also see the impact of their changes on dev, giving early signals on cost changes in production.

---

## Generating and sharing timely information

### Starting with Nothing

_Riley Jenkins, Domo_

Imagine this. No tags, no tracking, and no ownership. That is how we started. Previous to that time finance was basing cost tracking off invoices and had gone no deeper. Not many have a blank slate to start with from a tracking side of things. We began our efforts by meeting with stakeholders throughout the company in order to understand what tagging policy was needed to meet the needs of not only finance and engineering, but the company as a whole.

With the tagging policy identified, we immediately hit a wall with implementing the tags. Some teams adopted the new tagging policy, others didn't prioritize implementing a mechanism to tag their resources. After a few rounds of mass tagging we weren't able to sustain a good coverage percentage of our spend by a "you must tag '' sort of policy. This led to large holes in our data.

#### Making a change

We pumped the brakes and began working with our teams to see how instances were being set up, identifying which processes were automated and which were manual. Along the way we also identified that there was a need to unify our configuration under source control and that other areas, such as monitoring, would benefit from the same data our tagging policy would provide.

Realizing that we would need investment from many teams, we began to combine not only the limited data and challenges ahead, but also the potential benefit. We determined that efforts in reservations and rightsizing required clean and accurate data, and projected what sort of savings could be done as a first phase. Armed with this information we met with leadership across the company to ensure that we were aligned with the company goals and that we would receive their support.

#### A long path toward success

It took many iterations, training, and lots of analysis, but we were able to make it so tags are embedded into our deployment processes. Tag configuration is now under source control and part of our systems configuration. Engineers are setting up tags with little effort, oftentimes not even aware that they are tagging. Because of the benefits to their day to day, such as logging, monitoring, and cost tracking, they want to ensure their tags are right.

We now have a 99% spend coverage with our tagging policy. The resulting data has enabled us to provide near real time cost tracking to our teams that align with their monitoring data. We have been able to identify areas where we can rightsize, consolidate, and improve our systems. We have saved millions of dollars and it all started with investing in our system to improve our data.

---

## Focusing on business-driven priorities

### From License to SaaS

_Jan Karstens, Blue Yonder_

Switching from a software license to a software as a service business model is a substantial undertaking. Especially if you are transitioning a mature software license business with multiple hundred millions of annual software maintenance revenue.

We were quite successful in lifting and shifting our software onto the public cloud. The hosting division took on the task to define the deployment architecture and automation for the public cloud. This allowed the product engineering division to keep their focus on advancing the feature set of the product.

We made sure that when we started on this journey, we had a solid tagging strategy in place that allowed us to showback costs. After roaring success in winning existing on-prem customers to switch to our SaaS offering and winning net new customers, our cloud bill was growing and action was required to take our SaaS offering towards a healthy margin.

#### Here is where it got difficult

The hosting division has always been run as a profit and loss center. They were used to understanding the cost to operate. But to achieve the margin goals, they needed help from product engineering to modernize the product to benefit from the scalability capabilities of the public cloud. The engineering department has always been run as a cost center that was measured on new features. Thus, to product engineering the features requested by hosting were not attractive as they did not deliver incremental value to end users.

Even with revenue and costs nicely allocated, a solid margin calculation in place, and concrete proposals on how to change the product to improve margin, the actions of the departments could not get aligned.

#### How we found initial victories

First, people from hosting never gave up on winning over individuals from product engineering. By patiently explaining the financial mechanics and why engineering for profitability is a must in the SaaS business, key opinion leaders were won for margin improvements. This allowed us to create some small success stories that demonstrated that cloud cost savings driven by product engineering is possible. Second, senior management was briefed repeatedly on the success of SaaS revenue growth, but along with that on the financial risk of suboptimal margins.

This ultimately led to a substantial organizational change that fused the engineering and the hosting department and made margins a financial goal for the newly combined organization.

---

### Distinguishing and Understanding Optimization Activities

_Jeremy Campbell, SPINS LLC_

There are two dimensions I consider when thinking of this topic, that may be helpful in classification of practices:

#### Upstream vs. Downstream Activities

Upstream activities are those that are necessary for the hands-on engineers to be effective in ‘taking action’. e.g., cost attribution and visibility, benchmarking unit costs, setting priorities, the act of developing practices to encourage cost optimization, defining easy to consume patterns to use platforms in a cost-effective way.

Downstream activities are practices that occur at the time of optimization, e.g., using that cost data to refine a feature, automation activities, using patterns and facilities for knowledge sharing, estimation/quantification activities, SME review and scoring practices, hunting for Optimization opportunities.

#### Optimization as Feature vs. Optimization of Feature

“Optimization as Feature” is the scenario of ‘looking for optimization opportunities’ where a business case, ROI, and justification may need to be developed for the efforts. Maybe it’s a specific team doing cost optimizations across products, and populating other teams backlogs with recommendations.

“Optimization of Feature” is a “as you’re building” consideration, where infra value is a non-functional requirement, similar to the consideration of Performance. Performance and cost optimization opportunities can go hand in hand, convincing a reluctant product team to dedicate time towards optimization as feature activities may be more aligned to their goals (like performance) than they realize at first glance, where the same project may better solve everyone's needs (e.g., caching).

This is an interesting and useful way to help distinguish between different FinOps activities that engineering teams may or may not be doing, or perhaps might be doing but other teammates aren’t aware of or have a means of classifying them.

---

## Implementing solutions to strengthen FinOps

### The entire FinOps team needs to set engineers up for success

_Anonymous member_

The cost optimization team's job is to identify the set of engineer-dependent opportunities, quantify them in a way that allows them to be compared apples-to-apples against competing business priorities, and if one is there, to make the case for action to engineering leadership. Once you've established these metrics for comparison, this can be done almost entirely through automated tooling on an ongoing basis.

Non-action against cost-saving opportunities doesn't mean the team has failed; they've only failed when they haven't uncovered and made clear the opportunities in the space. Where I am, I see groups taking action on opportunities providing good ROI, and back-burning others. This gives me a good sense Cost Opt has reached prioritized equilibrium against competing business pressures.

Developing this amount of maturity takes a lot of time, trial and error, nuance, and likely someone guiding that vision -- this is what I think our group should try to distill into actionable takeaways that accelerate that maturity for organizations who can implement our recommendations.

---

### Using Gamification to increase Engineer Engagement and Motivation

_Mike Bradbury, Juno_
_Special thanks to Chris Dulsky, Comcast_

Our analysis of the State of FinOps data showed that more than half of respondents (52%) were addressing the engineering action challenge with tactics that we categorised under the broad heading, ‘Culture, Change and Collaboration’. Among these, 30% cited ‘Celebrating Successes’ as one of the techniques they were using to improve engineers’ responsiveness, with Gamification one of the mechanisms they were using.

This is hardly surprising, since gamification is all about creating metrics-driven pathways to an ultimate goal through engaging experiences and motivational feedback – exactly what FinOps practitioners want to happen. Additionally, there is widespread recognition that changing well-established behaviours often requires a carefully-orchestrated, step-by-step approach which is a key element of effective gamification.

With FinOps and cost optimisation in mind, gamification can be used to promote ownership/accountability and collaboration between finance, engineering, operations and business/executive teams in improving cloud efficiency and unit economics. Chris Dulsky of Comcast has demonstrated how a ‘Capture the Flag’ game format can increase engineer awareness of FinOps and engagement with the cost optimisation process.

The structures that organisations create to promote and manage engineering action on cloud cost optimisation fall into four categories:

- Informational structures - designed to raise engineers’ awareness of costs and their significance to the organisation. Examples are showback reports, training workshops, etc.
- Accountability structures - designed to allocate and reinforce ownership and accountability of cloud usage and costs. Examples are chargeback/shameback, KPIs/OKRs, budgets & forecasts, cost review meetings, etc.
- Standardisation/Automation structures - designed to steer engineering activity on cost optimisation, make tasks easier to execute or enforce compliance with corporate policy
- Motivational structures - designed to encourage engineers to take action on cost optimisation initiatives, despite competing calls on their time.

Gamification techniques can be used in each of these four areas and are an extremely useful and versatile tool for organisations looking to empower engineers to take more action on cloud cost optimisation.

#### How these programs work

Gamified training programmes, such as those being used by Chris Dulsky and Comcast have shown encouraging results in raising engineers’ awareness of cloud costs and their levels of knowledge about how they can be optimised. Gamification promotes ownership and accountability by putting engineers ‘in the driving seat’ and inviting them to manage cloud usage and costs to achieve specific, measurable goals within the gamified environment.

Gamified approaches can be designed as step-by-step journeys along a predetermined path towards the ultimate goal and can therefore incorporate the standard policies and processes that the organisation wishes to apply to these activities. Indeed, gamification may be the absolute best way of encouraging engineers to follow these standard pathways.

Finally, gamification is all about motivation. The primary purpose of gamification is to engage the employee in an environment that is of interest to them, rather than being an instrument of corporate policy. The aim is to create intrinsic motivation to achieve goals and to reinforce this with ‘rewards’ that celebrate success.

#### Implementation tips

So, what are the key ingredients of effective gamification? I have extracted the following ideas from ’Gamify - How Gamification motivates people to do extraordinary things’, by Brian Burke and adapted them to the challenge of empowering engineers to take more action on cloud cost optimisation.

Define the business outcome and success metrics. What is the ultimate goal of our gamified solution? To reduce wastage? To design cost-optimised architectures? To tag >90% of cloud resources? Clarifying the business outcome and how progress will be measured is the key starting point for any gamification initiative.

- **Define the player goals.** Our gamified solution must motivate and direct the energy of the players by ensuring the goals are meaningful to them. For our purposes, goals that may be meaningful to engineers are likely to include; achieving proficiency/mastery of a discipline, being recognised within the organisation as a ‘star’, enhancing their reputation among peers, etc.
- **Determine the player engagement model.** The engagement model describes how the players will interact with the solution.
- **Define the play space and plan the player journey -** the play space is the environment you provide for the players to engage with the game and with each other. It can (and probably should) be kept as simple and basic as possible, consistent with showing players’ profiles and progress and providing access to the tools required. Gamified solutions are designed to lead players through a series of challenges, provide immediate feedback on their actions and deliver rewards (typically badges, moves to the next level or other forms of recognition) for successful completion.
- **Define the game economy -** that is, the rewards the players receive for engaging with the game. For most gamified solutions, the primary currency will be self-esteem and social capital and these need to be explicitly recognised and designed into the gamified experience at the outset.

In summary, gamification offers a clear and compelling route to empowering engineering action on cloud cost optimisation. It can act as a purposeful way to create cost awareness, promote ownership and accountability, establish standardised approaches and policies and motivate engineers to embrace cost engineering as a key element in their cloud-enabled future.

---

## Acknowledgements

The FinOps Foundation extends a huge thank you to the members of the Special Interest Group that broke ground on this documentation:

- Riley Jenkins
- Mike Bradbury
- Jeremy Campbell
- John Renne
- Stephen Arthur
- Jan Karstens
- Brent Eubanks
- Assaf Flatto
- Jason Rhoades

If we've missed anyone, let us know. We thank you all for your contributions.

---

## How to contribute more FinOps stories about this challenge

There are many more stories to tell. If you have your own perspectives on tackling this challenge, submit your story to the SIG, or contribute to the FinOps Framework GitHub repo.

See our [contribution guidelines](/introduction/how-to-contribute/) for more details.
