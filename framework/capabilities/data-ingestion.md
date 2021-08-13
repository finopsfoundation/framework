---

layout: default
tag: data-ingestion

---

# Data Ingestion

## Introduction
Effective FinOps practice requires access to regular streams of detailed usage data, which can be categorized and analyzed to drive decision making. Unlike the world of on-premises data centers, there is no shortage of data on cloud usage. Cloud vendors produce massive amounts of very granular usage and cost data on which to base a FinOps practice. Monitoring platforms, security platforms, and business operations applications can also provide data that will inform on utilization, location, value and usage, oftentimes at similar levels of volume and granularity. 

So while the issue many data centers experienced was a lack of detailed data, the challenge faced by cloud users is oftentimes that there is too much. An effective strategy of data ingestion should strive to provide the FinOps team with the right combination of data from:
- the right source systems
- at the right timeliness to support the cadence of decision making
- at the right level of granularity to support aggregate reporting and drill down investigation
- with the appropriate standardization, augmentation, normalization, etc. 

The strategy for data ingestion will be driven largely by the needs of the reporting, cost allocation and optimization reporting needs. Data required to make decisions at a more coarsely-grained manner will not need as detailed or granular information. FinOps teams which manage or allocate costs at a resource level may require multiple sources of data to gather resource information for some clouds providers which don't natively provide it. 

## Sample Implementation
The basic data required for FinOps practice will typically come from the cloud provider's billing or cost and usage management systems.

For AWS, this will be data provided either via Cost Explorer interfaces or the Cost and Usage Report (CUR) at some level of granularity as exported to S3. (additional vendor data required here)
For Azure, this will typically be data which is provided via the Billing API, typically as accessed via PowerBI. (additional vendor data required here)
For GCP, this will typically be data provided in the Billing API as exported to BigQuery. (additional vendor data required here)

Additional data sources that may be required might include:
- Utilization data showing CPU, Memory, Disk, and/or Network utilization at a resource or resource group level
- Transactional data from logs or systems which record the number or quantity of use of types of resources (often shared resources)
- Value or outcome based reporting which provides data on the number of transactions or increments of value created by or represented by the operation of the systems. This information can provide the denominator for unit economics KPIs. 

## Common Approaches
List common approaches for using this function within a FinOps practice.

## Maturity Examples
Explain how this function may differ depending on the maturity level of the FinOps practice.

In each phase (crawl, walk, run) identify one incorrect practice that people are doing at this stage, to help them identify where they are at. If there are many, simply state the most common, easiest & most impactful one that will be identified by most organizations. Just state the incorrect practice, do not address why its bad or the impact. There will always be 1 incorrect practice at the crawl, there may not be incorrect practices at walk/run.
State the incorrect practice in a positive way - do not state the opposite of the best practice. Consider: Users are doing repetitve tasks manually. Do not use: Users are *not doing* things programatically.
 
Then state what customers should be doing at this stage to rectify the issue. If there are multilpe things to do - group them into a higher level concept, or state the most common and simple things. Each activity must result in a change or have something implemented, and be completed in the stage. Tasks like *Planning*, *considering*, or *producing* will not result in a change and should not be used. Partially completing an activity or completing an activity on a small scale such as *automate simple tasks* or *automate some tasks* followed by *automate all tasks* should not be used.
keep it simple, 1 or 2 sentences for each, focus on the outcomes or what is delivered, do not specify the busy tasks required to produce the output.

* **Crawl:**
* **Walk:**
* **Run:**

## Common KPIs
List and explain common KPIs that help track the effectiveness of the function. Alternatively, list favorable outcomes that represent success if specific KPIs aren’t clear enough.

## Cautionary Tales
Explain to users what to look out for or any pitfalls to avoid when building and implementing the function into their FinOps practice.

When looking at what they should do above, they can do the right things in the wrong way, or rely too much on one & not the other. Here you further guide them to ensure they're getting the right outcomes, by adding some more definition or calling out a way that a good thing can result in a bad result.

## Related Capabilities
List existing related functions and link to them here.
* [example]()
* [example]()
* [example]()

## Related FinOps Stories
** These stories are curated via site metadata and are sourced from the Stories repo. Visit that part of the FinOps Framework to contribute a story. **

## Resources
These links are provided as potentially relevant industry resources. The FinOps Foundation does not recommend any individual technology vendor and is not responsible for the content below.

** All of the below should be formatted as a list **
### Cloud-specific Best Practices
### Cloud-native Tooling
### Open Source
### Reading List
### Relevant FinOps-Certified Platforms
### Relevant FinOps-Certified Service Providers
### Relevant FinOps Training Partners
