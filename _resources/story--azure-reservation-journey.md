---

layout: story
permalink: /stories/azure-reservation-journey/

title: Azure Reservation Journey
description:
type: Member Story
source: FinOps Foundation
story-title: Azure Reservation Journey
story-date:
author:
- Brad Payne
company: 
industry:
cloud-provider:
- Azure
framework-persona:
framework-maturity:
framework-capabilities:
weight: 100

---

Following our migration into Azure, which had generated a large “bubble cost”, cost management and optimization became crucial to the Product and Engineering organization. To ensure that we were responsible with our spend in the cloud we needed to decrease the daily cost of hosting the application while maintain customer experience. 

The nature of our workload was such that “scheduled scaling” of resources was not immediately accessible to us. Our initial cost optimizations therefore focused on three other areas: waste-reduction, right-sizing, and reserved instances. The following outlines our journey in understanding, implementing, and maturing how we manage reserved instances in Azure as part of our FinOps strategy.

Our initial approach to purchasing reserved instance within Azure was to “measure often and cut small.” We had not yet developed a system to best understand our utilization, and honestly, looking back, did not yet fully understand the pricing model and how it related to our workloads. Additionally, we knew we were “oversized” when it came to our VM fleets and needed to be mindful to not over-purchase as right-sizing initiatives were simultaneously underway. 
Therefore, our initial RI purchases were for small percentages of virtual machines which had known and predictable usage. The only measure we employed was simply a percentage of the known number of instances deployed. 

Theses initial purchases were made regardless of the date of purchase. Rather than being timed to the start of the month, we made them as soon as an opportunity had been assessed, reviewed, and approved. Timing of purchases became important to us as reservations made mid to late in the month began to have the opposite affect on our invoice. The purchase charge appeared immediately on the invoice, and it would not be until the following month that we would observe the full amount of savings.
We have since progressed from needing to time our purchases, but at a time when scrutiny of the monthly invoice was high, this was important. 

One thing we did get right early on with our reservations was making use of the flexibility groups and purchasing reservations for the smallest VM size. This gave the reservations flexibility to attach to instances across the subscription and ensure we did not leave any of the commitment unused.

By observing the impact our reservations were having to our invoice, understanding how reservations are more precisely a commitment to 24 hours of utilization per core per day, and confronting where we made inaccurate purchases, we began to calculate the “weighted cores.” Weighted cores became our expression of the total number of cores hours we utilized divided into chunks of 24 for a particular VM family.

The charge and utilization file from Azure allowed us to understand the number of hours we were being charged for by each virtual machine per day. The total number of hours consumed (quantity on the charge and utilization file) for a VM series in a given day divided by 24 gave us our weighted cores value. 

> Sum of Hours / (24*Number of Days)

A small, single day dataset, example below shows us how we better understood the number of reservations to purchase to cover our M32ms fleet. 

| MeterName | UnitOfMeasure  | Quantity |
| --------- | -------------- | -------- |
| M32ms     | 1 Hour         | 17.45    |
| M32ms     | 1 Hour         | 24.00    |
| M32ms     | 1 Hour         | 24.00    |
| M32ms     | 1 Hour         | 6.55     |
| M32ms     | 1 Hour         | 7.53     |
| M32ms     | 1 Hour         | 16.47    |
| M32ms     | 1 Hour         | 0.00     |
| M32ms     | 1 Hour         | 16.47    |
| M32ms     | 1 Hour         | 6.55     |
|           |                |          |
|           | Total Hours    | 119.02   |
|           | Weighted Cores | 4.96     |


If each instance of the M32ms virtual machines were running 24 hours a day (216 core hours) then we would be able to effectively purchase 9 reservations.

However, as the majority of the VMs do not run for 24 hours a day, we are better to make a reservation for only 4 or 5 instances. 

The weighted cores calculation allowed us to purchase more accurately and confidently. We now had an improved measure as to what could and should be reserved in a particular subscription. 

Again, starting conservatively, we purchased reservations for a quantity of cores that would slowly increase our coverage. We moved from 50% coverage to 75% on key subscriptions and then higher. 

Even with the weighted core calculation some workloads were “illusive” and a portion of our purchases would go unutilized. This is when we began exploring exchanges and returning cores to make a corresponding purchase for a different VM. To this day there is still a specific VM family that, mostly out of superstition, I will avoid making reservations for.

To support purchasing we built a set of reports in PowerBI.  By consuming data from the charge and utilization file these reports provide us the standing of our VM fleets in all subscriptions. 

By having this situational awareness (number of cores, weighted cores, average cores / month, existing cores reserved, etc.) to the fleets we know what purchases to make next or if exchanges are required. 

Inevitably workloads change. Whether there is a decrease in utilization, or a decision to switch to a new VM family is made, reservations that were once thought to be covering stable and predictable workloads begin to go underutilized. We set a strict bar for ourselves of not wanting to let more than 5% of an RI go to waste in any given month. As we increased our commitment to reservation and started covering workloads that we knew were inherently less predictable longer term we began to make use of exchanges more frequently to ensure we did not have reservation coverage going to waste.

Exchanges moved from being a very tactical exercise for us – where we might shuffle a handful of instances to offset a dip in utilization - to a strategic one when a significant re-architecture opportunity arose. 

One year after our migration and twelve months into many thirty-six-month term reservations the Cloud Engineering Team began optimizing our AKS clusters with a new VM family. The new architecture allowed us to use half the number of instances while maintaining the same performance. Additionally, the new VMs also cost less. A FinOps dream! The challenge now was what to do with the balance of many three-years reservations.

Exchanges became strategic for us when we started to use the remaining commitment dollars to purchase reservations in other subscriptions and for workloads not previously covered. It became common for us to exchange a set of RIs to cover the new AKS pattern and use the remaining commitment dollars to cover workloads for emerging projects in other subscriptions. 
This was when we began to truly see the power of centralizing reservation purchasing with the FinOps team. Centralizing allowed us to manage these exchanges, and any subsequent ones, quickly and quietly. The Cloud Engineering team had a high degree of confidence that their VM workloads were cost effective, and they could focus on optimization without having to manage cost. 

## Observations and Conclusions
* We missed an opportunity to not cover a small (30-50%) portion of our VM fleets during migration activities. 

* Understanding flexibility groups and purchasing the smallest VM size ensured that our reservations would have 100% utilization across all workloads in a subscription. 

* We established common patterns specifying a VM families for specific purposes. Exceptions to these patterns would likely not be considered for RIs. 

* When utilization of a reservation dipped, we would act quickly to understand why, assess the duration and impact of the dip, and make exchanges quickly to mitigate lost savings.

* Developing tools and automated reporting to inform purchasing decreased the need for vigilance.


| Maturity | Characteristics                                                                                                                                              | Outcomes                                                                                                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Level 1  | Make purchases for stable and predictable workloads.<br><br><br>Covering low percentages of overall instances.<br><br><br>Measure often and make small cuts. | Allowed for initial purchases and cost savings.<br><br><br>Safe. Ensured we did not lose money on wasted reservations.<br><br><br>Conservative and not aggressive enough.<br><br><br>Low understanding of the “concepts.” |
| Level 2  | Better understanding of reservation principles.<br><br><br>Developing a weighted core calculation.<br><br><br>Make exchanges when necessary.                 | Ensured that as we approached more significant coverage, we were covering the right thing.<br><br><br>Weighted core calculation could be incorrect, or misleading based on spikes or significant changes.                 |
| Level 3  | Systematize your learnings. Create tools and reports to monitor the fleet, inform and calculate purchases.<br><br><br>Use exchanges tactically.              | Purchase take dramatically less time, are data driven.                                                                                                                                                                    |
| Level 4  | Balance savings from reservations with other methods of reducing cost.                                                                                       | Balance cost savings without making large or long-term commitments to your cloud service provider<br><br><br>Use what you need vs. saving on what you don’t.                                                              |