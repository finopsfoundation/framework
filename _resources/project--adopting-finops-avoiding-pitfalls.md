---

layout: wide
permalink: /projects/adopting-finops-avoiding-pitfalls/

title: Adopting FinOps - Pitfalls to Avoid
description: Imagine that you are on the beginning of a journey. At this point there are many uncertainties and unknown that increases the sensation of not knowing where to start. When you get to this point, sometimes all that you are looking for is for a piece of advice.
page-identifier: project_adopting
identifier: projects
project-title: Adopting FinOps - Pitfalls to Avoid
project-description: Imagine that you are on the beginning of a journey. At this point there are many uncertainties and unknown that increases the sensation of not knowing where to start. When you get to this point, sometimes all that you are looking for is for a piece of advice.
date-added: May 2022
type: Guide
source: FinOps Foundation
label:
cloud-provider:
  - Multi-Cloud
framework-capabilities:
---

# Adopting FinOps - Pitfalls to Avoid

<div class="bg-gray-200 p-4 rounded-md my-8">

  <p><em>Imagine that you are on the beginning of a journey. At this point there are many uncertainties and unknown that increases the sensation of not knowing where to start. When you get to this point, sometimes all that you are looking for is for a piece of advice: What to invest and what to avoid, together with some stories that can help inspire the way you are about to make.</em></p>

  <p><em>The FinOps journey is not different. Maybe you are looking for some insights on getting started or, maybe you are a few steps into the journey itself and just want to bounce ideas off. No matter where you are on this important journey, this article will help by providing you with some key points to take into consideration. It is not intended to be exhaustive, but at least will provide you with some valuable advice from those that have been in this trench for a while.</em></p>

  <p><em>This guide was created by the the <b>Adopting FinOps</b> working group aiming to be an evolving set of materials aiming to provide practical guidance, education and enablement that helps organizations of all sizes and cloud maturity adopt FinOps as the standard for Cloud Financial Management.</em></p>

  <h3>Resources</h3>
  <ul>
    <li>Discussion Slack: <a href="https://finopsfoundation.slack.com/archives/CMZG5KZ8Q">#adopting-finops</a></li>
  </ul>
</div>


## Understand the difference between optimization and cost management
Making the distinction between cost management and optimization is crucial as it highlights how you benefit from the cloud, Cost management focuses on waste reduction (removing unused resources, cleaning old data etc`) and commitments, while optimization ensures you only buy the minimal resources that provide the best money for value and answer the business requirement, not the developer assumptions on requirements.

Thinking about it in medical terms, cost management is treating the symptom while optimization is studying the source issue and dealing with that.

### Optimization:
Working with Product, Architects, Developers and Business to define the new software while tailoring the cloud resource to match the need and efficiency of the product (not the resources as they are used in the development environment).

#### Real-world story:

> A gaming company wanted to launch a new feature in the game to allow users to communicate with other players, to do that they planned on using AWS SQS to deliver ~50,000 messages in a second.
> When submitting the HLD, the FinOps and the Architect used the AWS calculator to forecast the cost of the SQS for a month, the estimated value was around $49,419.
> The FinOps suggested to use the Bulk feature of the SQS to reduce the number of messages in the queue, which required a change in the code and consumption, when the developers worked on the code to use the bulk consumption they realized that the message payload was small enough that they can send 15 game data messages in 1 JSON and then using the Bulk feature to submit 300 messages in 1 call, thus reducing the amount of calls to the SQS from 50000 to 166 and the expected cost went does accordingly $174.08  month

### Cost Management:
Removing waste and applying commitments on existing workload, Buying RI’s or Shutting down resources during off hours, to reduce cost on same used resources, is managing the expanses but does not optimize the usage of the cloud resources.

#### Real-world story:

> A gaming company wanted to have a buffer of instances that will support a failure in the game, they run a 100 m5.4xlarge instance in On-demand in an elastic group (min 100).
> When first we approached management about reducing the group they rejected the notion as this was the “safety buffer” in case the game had an outage.
> Studying the metrics of the group we found that the average CPU usage of the group for a month of 18%. We presented that to management and after evaluating the usage versus spike risk, we reduced the minimum value to 90 and waited 2 weeks to ensure the group is stable, we did the iterations till the group was at 60 instances (minimal limit Management was willing to reach), with 25% running on Spot instances and the rest covered by Reserved instances. Overall CPU usage of the group rose to 33% monthly.


___

## Embrace Internal Competition
Healthy competition is very beneficial to FinOps because it can help increase motivation to launch successful stakeholder capabilities, which can increase performance from gathering requirements, seeking feedback, demoing, and adding a pipeline for feature requests. Healthy competitions can speed up adoption by joining individuals around goals and missions that are mutually beneficial.

It is important for FinOps teams to not solely focus on their performance but recognize purpose and success as part of the greater whole.

+ Take the time to understand internal policies and leverage existing policies
  + Example : Cloud Vendor marketplaces help with agility to access SaaS tools, training, and consulting resources. Challenges will arise from how to allocate and amortize those purchases. As a FinOps driver you will need to adhere to Procurement and Software Asset Management corporate guidelines and work closely with those teams to adopt workflows to integrate sign-offs and transparency.
+ Don’t fear internal competition, going back to FinOps Principal : Teams need to collaborate, it is important to build off motivations that align between teams. Cloud cost transparency & Cloud cost optimization is good for the organization and you can achieve economies of scale by working with teams or individuals focused on the mission of FinOps.
+ Do use peers to cross check your FinOps practice. FinOps teams will be building new capabilities, new reports, and processes. Ensure you are using peers at all levels to champion, critic, and challenge. This will lead to improvements and adoption.
  + Example: A FinOps team recently challenged engineers to clean up unused EBS volumes. A dashboard was created showing waste by teams. The FinOps team consulted with an Engineer to validate the findings. The engineer noticed the dashboard was missing capturing attached EBS volumes associated with stopped EC2 instances. Together the teams worked on scope and the Engineer that identified the opportunity wrote a script for the FinOps team to utilize with the entire organization.

#### Real-world story:

> Business operating models evolve overtime, at a major education enterprise company the operating model shifts toward individual business units making decisions on which core services to build or leverage centrally. The enterprise already had an established FinOps function centrally. Most individual business units recognized the economics of scale of working with the centralized team and had an established trusted relationship. However, for a while a single business unit advocated for a decentralized approach. The centerzlied FinOps team was able to educate the decentralized team & provide resources (dashboards, tooling) to support them. To avoid friction the two teams began regular cadences and sharing feedback. This allowed the decentralized team to build off of what the centralized team had and also provide a customer feedback loop for improvements. These two teams over time gained trust in one another. This relationship was not without some turbulence, however having the attitude that embracing internal competitions and understanding that healthy competition where the focus is for greater good goal can be very valuable for FinOps teams.


___

## Be an advocate for engineers
FinOps must engage, collaborate with domain experts before sharing recommendations with wider teams. Many of the ‘Quick Wins’ or ‘Low hanging fruit’ when looking to optimize costs are in the realm of engineering teams. What look on the surface as good actions to take may not be as appealing to do once you consider the context.

+ Don’t shut off resources without consulting Engineering teams
  + Example: Attempting to create automation to stop/terminate compute instances out of hours for non-production environments may not have any impact for instances that are part of an autoscaling/self-healing setup. You could also interrupt valid soak tests that run outside usual working hours or teams working in different timezones who use the environments
+ Presenting cost optimization savings to leadership without consulting Engineering teams
  + Example: savings opportunities are highlighted in native CSP features and 3rd party tools. Not all of the opportunities can be realized and some may not be relevant (e.g. recommendations for a service your org will be decommissioning). Always have context.
+ Avoid accidentally conflict by not getting consensus from business units or functional areas
  + Example: Purchasing commitments for an specific OS / Instance type without discussing with the infrastructure team.
+ Treat recommendations from tools as recommendations. Have the discussions to decide if they are valid for your use cases.

#### Real-world story:

> The FinOps team for a company spending $ tens of millions a year was able to rank Virtual Machine recommendations by potential savings and prioritize which engineering teams they should start talking to.
>
> When talking to the team with the largest potential rightsizing savings, it transpired that the team were just starting to use cloud and used another team’s Infrastructure as Code repo as a template for their service. The template repo was for a team that needed to use VMs that were optimized for CPU-bound workloads. The team with large right-sizing opportunities had workloads that were memory-bound. To meet the memory requirements for their application nodes, they scaled up the size of the instances in the template.
>
> The discussion with the engineering team highlighted that there are other instance types, including instances that have a higher ratio of memory to vCPU. After some quick tests, the changes were implemented giving a 50% reduction in the cost of running the instances.
>

![Sample chart showing changes implemented giving a 50% reduction in the cost of running the instances](/img/adopting-finops/adopting-finops-avoiding-pitfalls-image1-20220517.png "Sample chart showing changes implemented giving a 50% reduction in the cost of running the instances")
*Changes implemented giving a 50% reduction in the cost of running the instances*


___

## Expectation on setting targets
Knowing what you aim for is important and that is why you need to set goals, be them cost reduction ( easy wins) or a way to forecast budget and unit economics, all this needs to be outlined up front, so you can engage with stakeholders and understand what the desired outcome is.

It is also very important to set realistic expectations, [ ex. 8% cost reduction on Q1] and not “cut cloud cost by 50%” so you can communicate them to the teams and coral them to the effort.

+ Easy wins = savings, as you become more mature you aren’t chasing savings but culture change and unit cost metrics  **(1)**
+ Set expectations around service requests, turn around time, custom asks **(2)**
+ Don’t try to boil the ocean - practice crawl, walk, run **(3)**
+ FinOps is not only about reducing your cloud bill. Everyone should be clear on that. **(4)**


#### Real-world story:

> **(1,2)** A customer wanted to understand why his cloud spend increased so much in the last 3 months when he is selling an on-premise appliance and not a cloud service.
>
> When we started to investigate we noticed that the cost arose from the fact that the CI account spiked.Turns out he hired 15 new developers and each was bringing the equivalent of a client appliance in the cloud and leaving it on even on the weekends. We implemented a short script that stops all VM’s on Thursday evening and starts them on Sunday Morning, that enables the developers to have the systems up when they get in the morning without needing to wait, the next step was to do the shutdown every night and the weekends.
>
> There was a reduction but not as the customer expected. As we looked again we noticed that the CI was running on On-Demand load, we brought in Spot instances and that helped, then some of the developers complained that sometimes their test machines crashed, as can happen with spot, when we explained that to the VP R&D he simply told the development team “If that happens - go get a coffee, it will resume by the time you are done” and that in fact sped up production as the developers stopped waiting for CI to work on one branch while the started working on other tasks.

> **(3)** A customer wanted to create a budget prediction for the next fiscal year.
> When asked for his growth prediction, he provided only the increased users (end users) expectation, neglecting the R&D and other departments growth, when explaining to him that building a forecast, we need to account for those cost he tried to dismiss the R&D cost in the cloud as trivial, when we presented to him the figures he was startled to learn that a bulk of his cloud spend was development and QA, while his production was 35% of the cloud cost.

> **(4)** see the section about optimization above.


___

## Tooling Considerations
The quantity of data that FinOps teams need to understand and analyze is vast. The raw billing data is unfit for human consumption and quickly exhausts the capabilities of general office suite applications. Tools can help surface the key information from all the data as well as automate activities allowing you to reduce cycle times in the FinOps lifecycle loop. Implementing tools is not a silver-bullet solution. There are many other considerations that need to be evaluated and processes to set up to get the best value from tools.

+ Carefully assess the build vs buy vs native Cloud Service Provider tooling vs combination of options to choose the right option for you for now. The choice may change as you move along your Cloud and FinOps journeys.
+ Avoid the urge to spend money on vendor tools before you are ready to implement everything else that’s needed to practice FinOps (culture, training, time, exec buy in, etc).
+ Don't underestimate FinOps time to implement and get value out of 3rd party or in-house tools.
  + Example: Using a 3rd party tool providers Professional Services consultancy, you can get the tool set up with feeds from your cloud providers and some initial dashboards for different personas/insights. All of this is of no value if the teams in your organization are not using the tools and acting upon the insights.
+ Recommendations from tools are just recommendations - don’t immediately act on all of them, but use the recommendations to have conversations with relevant teams. The recommendations are often only based on the past data with no insights into your future business plans.
  + If a tool suggests buying commitments, don't just do it. Have a conversation with right stakeholders who understand the applications and architecture.
  + Don't just pass "over the fence" the recommendations from the tool. An initial assessment of the viability of implementing and how valid the recommendations are before socializing them will be useful for the teams FinOps work with. If a recommendation can not be acted on, mute it for an agreed period of time to cut out noise.
+ Have clear guidelines on what cost metrics should be used by different personas.
  + Should engineering teams see costs with centralized discounts or should they work on list costs? If including discounts, the teams should be aware that even with no changes to their infrastructure / usage, their costs could vary day-to-day due to factors outside their control such as the way commitment-based discounts (RIs, CUDs) are applied. Using list costs, fluctuations due the centralized discounts are removed but this does not reflect what the organization is actually invoiced.


#### Real-world story:

> A few years ago, back on 2020, a major marketplace company that is cloud native decided to invest in a solution mainly for showback. After researching the market for a SaaS solution, the evaluation was that the available options were not robust enough to cover the company’s complexity, especially those related to multi-cloud providers and cost split of shared resources. Based on this, the company decided to build its own solution. After the first MVP (minimum viable product) was deployed, every year, the FinOps team assess the market to check how the available solutions have evolved. Even with all the development employed, the “buy” option is still over the table. By adopting an existing solution, you will have a chance to speed up the company’s FinOps roadmap. An “in-house” solution gives more flexibility and control over the tool evolution. There is no right or wrong, just a matter of balancing the benefits and costs of every option.


___

## Decision making
When adopting finops you do not just want to jump right in without important decision making.
The initial step to start can be overwhelming if you just try to consume it all in one go.  You want to carefully assess the current state of your organization so you can make the right decisions for your organization while knowing what to push back and what to embrace as your first steps.
(Group - need to clarify the insights first)

**Do’s of adopting and decision making**
+ Start with the crawl phase to enable you to keep pace with the demand of new capabilities and taking on new service requests.
+ Assess where you are at today within the finops framework (baseline) - you will need a starting point to be able to build upon
+ Begin with awareness and level set what is FinOps within your organization - teams cannot adopt finops and make decisions without awareness.  
+ Determine intersections between a FinOps practice and other teams (ITAM, SAM, Finance, CCOE)  These teams may vary as every organization is unique
+ Determine what access to data you need in your role. You will need the data to be able to make decisions trade-offs


**Don’t of adopting and decisions making**
+ Don’t make decisions on behalf of others
+ Don’t only just listen to engineering - they only have a narrow view of what you are trying to accomplish
+ Don’t rush to make decisions - When adopting Finops you want to be careful you understand all impacts of the decisions you make
+ Don’t back down to opposition from management - it’s easy for management to oppose what they don’t understand.
+ Don’t get locked into decisions you make - lots of iterations as you learn more information


#### Real-world story:

> The best way to build trust and gain traction in the company is to show immediate results, and those happen with the low hanging fruit, which can manifest in easy tasks. At a gaming company that first task was going over all the storage (Disk) and cleaning the unused ones ( unattached), That initial swap removed $1400 of the monthly consumption, then they enabled a life cycle on the long term storage (S3/ Storage accounts) and that reduced the billing from $64,000 a month to $56,000.
>
> At the monthly meeting of cost evaluation, after the BI team presented the growth and company intake, the FinOps team presented the cloud expanse and showed that even though the cloud usage grew that month by 3% (roughly 150,000 players) , due to the actions done by the FinOps team, cloud costs shrunk by 1.5%. This gave the management the confidence that the FinOps team is doing a responsible job in maintaining the cloud cost under supervision while ensuring that none of their business goals and activities are hindered.


#### Real-world story:

> As a new FinOps Driver, we were very set on getting the raw recommendations from tooling into the hands of engineers to take action. We created an automated workflow that would pull recommendations from a Cloud providers recommendation engine and create ServiceNow tickets that would be ready to approve via change management process. We took a waterflow approach to building this automation out over 6 weeks. The entire thing worked perfectly, or so we thought. Once we started piloting it we found that most of the recommendations were not actionable per the engineering teams. This caused a lot of tickets within the change process that were not actionable, yet required engineers to clean the tickets up because they were noisey.  We missed the most important element of designing a new FinOps capability, which was to engage with the engineering teams on building a tool they would be the end users for.


___

## Conclusion
The intent of this article is not to be exhaustive, but to give some points to think about when implementing FinOps in your organization. It is not a “silver bullet” or a “one-size-fit-all” solution. But the key success factor is to identify the principles that run behind each of the topics mentioned above. With the help of the real case stories, you have another opportunity to have an idea on how the principles are applied in a specific environment that may not be like yours. We hope that with this article you will, at least, eliminate the idea of starting from scratch and have some talking points to discuss within your organization in order to have a successful FinOps implementation.

You can also count with the help of the FinOps community. Access finops.org and get to know how to be part of this community of thousands of practitioners. You will be surprised to see that you are not alone on this journey.
