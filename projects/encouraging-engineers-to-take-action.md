---

title: Encouraging engineers to take action
description: We gathered our FinOps experts to address the challenge of encouraging and enabling engineers to get more involved. It's not just a challenge for engineers-- everyone has a role to play.
layout: default

---

# Encouraging engineers to take action

How finance, operations, and executives can work better together at encouraging more cloud cost optimization from their engineering teams.

## Before you begin
You should understand the basics of how cloud computing works, know the key services on your cloud providers, including their common use cases, and have a basic understanding of billing and pricing models. Being able to describe the basic value proposition of running in the cloud and understand the core concept of using a pay-as-you-go consumption model are also necessary.

You’ll also need to have a base level of knowledge of at least one of the three main public cloud providers (AWS, Azure, Google Cloud). For AWS, we recommend AWS Business Professional training or, even better, the AWS Cloud Practitioner certification. For Google, check out the Google Cloud Platform Fundamentals course. For Azure, try the Azure Fundamentals learning path. Each can usually be completed in a full day workshop.

## Relevant FinOps Framework components
To get the most out of this document, please review the following first:

* [Tagging and labeling](/framework/functions/tagging-labeling/)
* [Cost allocation](/framework/capabilities/allocate/)
* Cost-centric ownership
* [Implementing FinOps training for engineers](https://www.finops.org/certification/)
* [Business metrics](/framework/abilities/unit-economics/)
* [Automating savings](/framework/functions/automation/)
* [Autoscaling](/framework/functions/autoscaling/)
* Rightsizing
* [Building a FinOps culture]()
* … and more (please recommend some must-have framework components)

If you have a strong handle on these subjects, continue on to better understand how to approach this challenge.

---

## Addressing the challenge
When asked to identify the top [FinOps-related challenges](https://data.finops.org), the top answer was related to “how to get engineers to take action” (40.39% of respondents answered).

While it’s very easy to place a lot of the burden on engineers and developers when it comes to generating cloud costs, the practice of identifying, analyzing, allocating, and optimizing them falls upon all these roles. Let’s analyze this challenge to identify what’s needed to overcome it and some examples of how companies of different types and FinOps maturity levels take it on.

## Why is cloud cost optimization difficult to adopt?
FinOps is a multi-disciplinary practice and takes the dedication and cooperation of engineering, operations, product, finance, business management, and C-level leaders to perform effectively. Aside from building the practice culturally, there are costs to allocate and report, cloud service rates to optimize, and forecasts and budgeting to solve for.

FinOps is a deep practice that requires a lot of time and investment and it shouldn’t be a surprise that it’s difficult to adopt. Not only is building the practice a challenge, but also setting goals and giving guidance to large, scaling teams. There is a notable responsibility for executives to understand FinOps and use its metrics to guide teams toward success.

## Breaking the challenge into addressable parts
According to responses from the State of FinOps survey, we collected underlying reasons engineers do not always take action on cost saving opportunities. Following each reason are ways to overcome those concerns and the overall challenge.

* Identifying ownership and accountability
* Generating and sharing timely information 
* Focusing on business-driven priorities
* Implementing Solutions to Strengthen FinOps

Every business has a different level of cloud adoption, utilization, and cost to manage. The challenge of empowering more cost optimization will also differ by the practitioner's role and skillset. The following stories, whether named or anonymized, add real FinOps practitioner details and insights on how to address the challenge.

## Identifying ownership and accountability

### How We Identify FinOps Activities by Persona
*Jan Karstens, Blue Yonder*

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
*Riley Jenkins, Domo*

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

-   Who reports on cloud costs currently?

-   Who sets budgets for cloud costs?

-   Who is able to make configuration changes to your deployed
    > resources?

-   How are cost initiatives prioritized? By who?

-   How are inefficiencies identified? By who?

-   Who decides to act on committed spend decisions such as reservations
    > or savings plans?

#### Identify Opportunities

Shifting ownership takes careful deliberate work. In order to
prioritize, gain support, and change ownership, the reasons for making
such a change should be identified. Lack of ownership by those that use
the cloud can impact many areas of the business. Areas of consideration
include:

-   Where can better insight improve cost savings initiatives?

-   Does committed spend coverage suffer from split ownership?

-   Are their operational benefits?

-   Are their technical benefits?

-   Are goals difficult to achieve due to ownership challenges?

#### Formulate Your Plan

Understanding your current ownership paradigm and identifying
opportunities enables you to plan out phases to adopt usage based cost
ownership. Some areas of consideration:

-   Timeframe

-   Stakeholders

-   Phases

-   Foundational changes like tagging and reporting policies

-   Centralize function team\'s role (e.g. Cloud Infrastructure Teams)

-   KPIs to measure success

-   Kickoff

-   Approaches such as gamification

-   Training

#### Gain Leadership Buy Off

Without support and sponsorship from senior leadership, prioritization
and alignment amongst the stakeholders will make adoption of a
transformation of ownership much more difficult. Some changes can impact
the day to day work of your team. Cultural opposition from stakeholders
can lead to opposition among teams. Ensure that your leadership
understands the current state and what is to be gained by following your
plan. Some considerations:

-   Executive sponsorship

-   Messaging

-   Rollout amongst leadership

-   Feedback

#### Rollout

Making ownership changes can be met with many different challenges along
the way. As your initiative is progressing keep the following in mind:

-   What wins can you share with teams in flight?

-   What cost savings opportunities have been identified as a result?

-   Trainings and office hours

-   KPIs to ensure you are headed in the right direction

-   How quick is your feedback loop for improvement?

### How Tagging and Reporting Should Map to Ownership of Costs

What helps us at our organization is to implement what’s called “team centric cost ownership.” It  can be achieved using two components.

The agreed upon grouping criteria should be transparent as prepared by the FinOps team members. Many examples over the years have shown descriptors like Product Name, Project, Department, Cost Center, Business Unit, etc.. You can then map the current people names that have business leadership responsibilities and technical leadership accountability.

When you agree to assign or map a business owner and technical owner it provides a common ground upon which FinOps can set up new dashboards and widgets to show back the various costs, consumption, waste, suggestions, and shame/winners by these new team views during the monthly spend review process. The transparency from senior managers, VP/Directors, and the engineering community is to be open and understand that now the whole company has visibility into these costs and the potential amounts that are not efficient, and able to help drive management decisions around staffing up more people.

#### An example

Say you remove $50,000 per month of waste: what does this actually mean? With team-centric cost ownership, FinOps teams can help see a trend where the waste and spend is growing faster, and whether that is ok or action needs to be taken within a business context and/or a technical context. The ability to help prioritize the engineering staff tasks and priorities over the quarter is where these FinOps measures shine. You should be having open dialog with how the team will do which tasks to obtain the best value, or the most amount of work done per cloud dollar spent at the budget given.

---

### How Tagging and Reporting Should Map to Ownership of Costs
*Anonymous member*

Designing a tagging structure to meet a company's goals is one of the foundational steps of a healthy Finops practice. The structure of the organization’s tagging taxonomy must consider cloud spend ownership, system structure, and the needs of the business as whole. It also depends on your company's organizational structure, account structure, and team capabilities.  Keep in mind that tagging is not just a FinOps discipline. Resource tagging can affect usage tracking, monitoring, resource identification and even system functionality.

The difference in organizational structure is key when it comes to routing the waste, scaling, rightsizing, and service level optimization suggestions from FinOps tools and datasets to the proper technology or service layer owner who can take action. When you are able to align tag mapping with the way your business is staffed, your tagging hierarchies and mapping setup will help ensure a more self-service ability by the many different personas in the company.

The routing of the workload optimization recommendations getting to the right owner via reliable tagging structure also lends itself towards improving cloud cost visibility and accountability to specific teams, managers, projects, directors, or product code. Review how your company is currently estimating public cloud costs and spend approvals to ensure all parties involved are on the same layer of technologies and services being included.

**Example:** You have a $100 per month budget for a sandbox for the namespace tenant containerized application use, but who should specifically be seeing and managing cost allocation and showback for the idle resources? What about items that can’t be tagged, like egress, data transfer, etc.?

**Possible answer:** So you may have to tie your cloud spend estimates by a different tagging layer to services and then use a tenant tag to make it simpler for them to only find the item that they care about and work on. This helps abstract away all the complexities of the FinOps full cloud cost control and detailed service level costing mappings across the many different options for cost sharing that could be setup arbitrarily.

Keep it simple for your end users to get what they expect to see that they care about in a dashboard as self service. When you provide them visibility by the proper technology layers they own, the costs, recommendations, and budget awareness charts will make everyone much more productive and the program will grow more quickly.

---

### What to Do If FinOps Consists of Engineering?
*Riley Jenkins, Domo*

When I first heard that getting engineering to take action was a major challenge for other FinOps practices, I was a little surprised. After hearing the reasons from other members I began to realize that we have avoided much of those challenges because our FinOps practice is entirely within engineering and cost ownership lies with our engineering teams. 

Previous to this, RIs and cost tracking was loosely owned by Finance and a few technical groups throughout the org. Because of this departmental segmentation, we weren't able to optimize because these groups were using different reporting tools and even different terminology. Another difficulty was that each prioritized savings opportunities differently.  

From a high level our finance team helps us understand the financial goals of the business and track budgets for cloud spend. Our Finops practice as a part of engineering is responsible for enabling our teams to track their own budgets, provide data transparency, cost optimization through committed spend mechanisms (RI/Savings plans), and identify high value or cross team cost savings opportunities. 

Our FinOps practice is a function of our SRE group. This means we not only know how much our systems cost, but we know how they scale, where the inefficiencies are, and how they function. Because we have a good understanding of Finops constructs like RI/SP opportunities and we are in the trenches helping our teams ensure their systems are stable and scalable, when we make a cost saving recommendation our teams know that we aren't just looking at cost. We weigh cost savings with features, performance, and stability. 

Our teams understand that they own their code's infrastructure cost. This includes leadership, project management, and the engineer working on the next sprints deliverables. As such, cost savings initiatives take the form of tickets that are prioritized right along with bugs and product features. Our teams not only test their features in our dev/test environments, but can also see the impact of their changes on dev, giving early signals on cost changes in production.

---

## Generating and sharing timely information

### Starting with Nothing
*Riley Jenkins, Domo*

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
*Jan Karstens, Blue Yonder*

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
*Jeremy Campbell, SPINS LLC*

There are two dimensions I consider when thinking of this topic, that may be helpful in classification of practices:

#### Upstream vs. Downstream Activities
Upstream activities are those that are necessary for the hands-on engineers to be effective in ‘taking action’.  e.g., cost attribution and visibility, benchmarking unit costs, setting priorities, the act of developing practices to encourage cost optimization, defining easy to consume patterns to use platforms in a cost-effective way.

Downstream activities are practices that occur at the time of optimization, e.g., using that cost data to refine a feature, automation activities, using patterns and facilities for knowledge sharing, estimation/quantification activities, SME review and scoring practices, hunting for Optimization opportunities.

#### Optimization as Feature vs. Optimization of Feature
“Optimization as Feature” is the scenario of ‘looking for optimization opportunities’ where a business case, ROI, and justification may need to be developed for the efforts. Maybe it’s a specific team doing cost optimizations across products, and populating other teams backlogs with recommendations.

“Optimization of Feature” is a “as you’re building” consideration, where infra value is a non-functional requirement, similar to the consideration of Performance. Performance and cost optimization opportunities can go hand in hand, convincing a reluctant product team to dedicate time towards optimization as feature activities may be more aligned to their goals (like performance) than they realize at first glance, where the same project may better solve everyone's needs (e.g., caching).

This is an interesting and useful way to help distinguish between different FinOps activities that engineering teams may or may not be doing, or perhaps might be doing but other teammates aren’t aware of or have a means of classifying them.

---

## Implementing solutions to strengthen FinOps

### The entire FinOps team needs to set engineers up for success
*Anonymous member*

The cost optimization team's job is to identify the set of engineer-dependent opportunities, quantify them in a way that allows them to be compared apples-to-apples against competing business priorities, and if one is there, to make the case for action to engineering leadership. Once you've established these metrics for comparison, this can be done almost entirely through automated tooling on an ongoing basis.

Non-action against cost-saving opportunities doesn't mean the team has failed; they've only failed when they haven't uncovered and made clear the opportunities in the space. Where I am, I see groups taking action on opportunities providing good ROI, and back-burning others. This gives me a good sense Cost Opt has reached prioritized equilibrium against competing business pressures.

Developing this amount of maturity takes a lot of time, trial and error, nuance, and likely someone guiding that vision -- this is what I think our group should try to distill into actionable takeaways that accelerate that maturity for organizations who can implement our recommendations.

---

### Using Gamification to increase Engineer Engagement and Motivation
*Mike Bradbury, Juno*
*Special thanks to Chris Dulsky, Comcast*

Our analysis of the State of FinOps data showed that more than half of respondents (52%) were addressing the engineering action challenge with tactics that we categorised under the broad heading, ‘Culture, Change and Collaboration’. Among these, 30% cited ‘Celebrating Successes’  as one of the techniques they were using to improve engineers’ responsiveness, with Gamification one of the mechanisms they were using.

This is hardly surprising, since gamification is all about creating metrics-driven pathways to an ultimate goal through engaging experiences and motivational feedback – exactly what FinOps practitioners want to happen. Additionally, there is widespread recognition that changing well-established behaviours often requires a carefully-orchestrated, step-by-step approach which is a key element of effective gamification.  

With FinOps and cost optimisation in mind, gamification can be used to promote ownership/accountability and collaboration between finance, engineering, operations and business/executive teams in improving cloud efficiency and unit economics. Chris Dulsky of Comcast has demonstrated how a ‘Capture the Flag’ game format can increase engineer awareness of FinOps and engagement with the cost optimisation process.

The structures that organisations create to promote and manage engineering action on cloud cost optimisation fall into four categories: 

* Informational structures - designed to raise engineers’ awareness of costs and their significance to the organisation. Examples are showback reports, training workshops, etc.
* Accountability structures - designed to allocate and reinforce ownership and accountability of cloud usage and costs.  Examples are chargeback/shameback, KPIs/OKRs, budgets & forecasts, cost review meetings, etc. 
* Standardisation/Automation structures - designed to steer engineering activity on cost optimisation, make tasks easier to execute or enforce compliance with corporate policy
* Motivational structures - designed to encourage engineers to take action on cost optimisation initiatives, despite competing calls on their time.

Gamification techniques can be used in each of these four areas and are an  extremely useful and versatile tool for organisations looking to empower engineers to take more action on cloud cost optimisation.

#### How these programs work
Gamified training programmes, such as those being used by Chris Dulsky and Comcast have shown encouraging results in raising engineers’ awareness of cloud costs and their levels of knowledge about how they can be optimised. Gamification promotes ownership and accountability by putting engineers ‘in the driving seat’ and inviting them to manage cloud usage and costs to achieve specific, measurable goals within the gamified environment.

Gamified approaches can be designed as step-by-step journeys along a predetermined path towards the ultimate goal and can therefore incorporate the standard policies and processes that the organisation wishes to apply to these activities.  Indeed, gamification may be the absolute best way of encouraging engineers to follow these standard pathways.

Finally, gamification is all about motivation. The primary purpose of gamification is to engage the employee in an environment that is of interest to them, rather than being an instrument of corporate policy. The aim is to create intrinsic motivation to achieve goals and to reinforce this with ‘rewards’ that celebrate success.

#### Implementation tips
So, what are the key ingredients of effective gamification? I have extracted the following ideas from ’Gamify - How Gamification motivates people to do extraordinary things’, by Brian Burke and adapted them to the challenge of empowering engineers to take more action on cloud cost optimisation.

Define the business outcome and success metrics. What is the ultimate goal of our gamified solution?  To reduce wastage? To design cost-optimised architectures? To tag >90% of cloud resources?  Clarifying the business outcome and how progress will be measured is the key starting point for any gamification initiative.

* **Define the player goals.** Our gamified solution must motivate and direct the energy of the players by ensuring the goals are meaningful to them.  For our purposes, goals that may be meaningful to engineers are likely to include; achieving proficiency/mastery of a discipline, being recognised within the organisation as a ‘star’, enhancing their reputation among peers, etc.
* **Determine the player engagement model.**  The engagement model describes how the players will interact with the solution.
* **Define the play space and plan the player journey -** the play space is the environment you provide for the players to engage with the game and with each other. It can (and probably should) be kept as simple and basic as possible, consistent with showing players’ profiles and progress and providing access to the tools required. Gamified solutions are designed to lead players through a series of challenges, provide immediate feedback on their actions and deliver rewards (typically badges, moves to the next level or other forms of recognition) for successful completion.  
* **Define the game economy -** that is, the rewards the players receive for engaging with the game.  For most gamified solutions, the primary currency will be self-esteem and social capital and these need to be explicitly recognised and designed into the gamified experience at the outset.

In summary, gamification offers a clear and compelling route to empowering engineering action on cloud cost optimisation.  It can act as a purposeful way to create cost awareness, promote ownership and accountability, establish standardised approaches and policies and motivate engineers to embrace cost engineering as a key element in their cloud-enabled future.

---

## Acknowledgements
The FinOps Foundation extends a huge thank you to the members of the Special Interest Group that broke ground on this documentation:

* Riley Jenkins
* Jeremy Campbell
* John Renne 
* Stephen Arthur
* Jan Karstens
* Brent Eubanks
* Assaf Flatto
* Jason Rhoades
* Mike Bradbury

If we've missed anyone, let us know. We thank you all for your contributions.

---

## How to contribute more FinOps stories about this challenge
There are many more stories to tell. If you have your own perspectives on tackling this challenge, submit your story to the SIG, or contribute to the FinOps Framework GitHub repo.

See our [contribution guidelines](/introduction/how-to-contribute/) for more details.
