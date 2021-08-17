---

layout: default
tag: modernize-resources

---

# Modernize Resources

## Introduction
The pace of innovation in the public cloud is rapid. New services and features are launched by the thousands every year. These new releases often have an impact on cost, or on the architecture and design options available to public cloud customers. 

Historically, more modern versions of public cloud resources, such as new generations of compute instances, make available more powerful and capable resources for a lower price than previous generation offerings. 

In addition, public cloud providers can and do deprecate older-generation services and resources after a finite period of time, often more rapidly than equipment or software would be refreshed in an on-premises data center environment. 

FinOps teams must be able to track and follow these changes from the cloud providers and react to them by modernizing resources. There is often a financial or cost performance benefit to doing so as well. 

## Sample Implementation
An example of resource modernization can be seen in upgrading the compute instances from older generation to newer. Each of the public clouds denotes generations of compute resources differently. 

### AWS Example
Memory-optimized compute resources are in the "r" family. "r3" denotes the third generation of this compute family. In 2019, AWS began to offer the "r5" generation of this compute instance. An equivalent (similar memory, similar number of processor cores) r5 instance costs, on average, 24% less than an r3 instance. In addition, the r5 instance is running on physical hardware and with memory and processors using faster clock speeds which makes them more performant per processor core. So there can be an advantage of moving from r3 instances to r5 instances not only in cost, but in performance. If an application uses 10 r3 instances to handle peak workload, scaling might only need to create 8 r5 instances, increasing the savings. 

The process of determining when to modernize would follow several steps:
* Identification of "older" resources in the public cloud being used
* Reporting on current use to identify previous generation resources in use
* Comparison of newest generation resources to previous generation resources in use
* Identification of significant opportunities for savings (that meet an established threshold for action)
* Evaluation of the capability to upgrade with engineering teams responsible for the current use (any technical blockers, schedule blockers, etc.)
* Mini-Business Case for modernization including current cost compared to expected cost, and any anticipated savings from rate reduction, anticipated savings from usage reduction, labor time to test and evaluate, labor time to adjust scripting/automation/scaling/resource templates, implementation costs, impact of outages to update resources, etc.
* Approvals, scheduling, implementation details

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

{% include story-loop.md content='modernize-resources' %}

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
