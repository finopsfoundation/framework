---

layout: default

---

# Architecture Refactoring

## Introduction

This article s about the following:

* The importance of training to understand cloud-native design opportunities
* Using cloud architectural principles and refactoring on-premises patterns  
* Avoid billing surprises by architecting with runtime cost factors in-mind

The example offered below is focused on Azure but, with modification for platform-specific technologies can also be applied to AWS and GCP.


Let's talk about cloud cost control and the ways it's linked to, and indeed, a central part of, good public cloud architecting principles.

Now that we're mostly past the stage of CIOs declaring a 'never cloud' policy there's a push for organizations of all sizes to reduce - or even completely eliminate - their on-premises data center footprint in favor of public cloud which chiefly means AWS, Azure and Google Cloud Platform.

But this push is not always accompanied by the knowledge or appetite for due diligence required to intelligently build cloud solutions with reduced friction, system resiliency and cost minimization.

Here's an example of what I mean; I've used this story several times before because it's an illustration of a pattern - how things go wrong with cloud adoptions - so it's worth telling again.

North American firm Poseidon Chocolates is a multinational seller of popular candies. Their products are found in stores around the world and they have a correspondingly complex and sprawling IT estate hosting a wide variety of applications - internal systems, partner facing applications and customer facing apps.

This means databases. Lots and lots of databases. So many databases and so complex and expensive to manage it wasn't a surprise that when the CIO said, 'we're moving to the cloud' IT's first migration target was the company's vast database estate.

## How Things Went Awry During Transition to the Cloud

Years of experience with on-premises database servers built on VMWare, and what I'll call a server-centric approach to application deployment led Poseidon's IT personnel to assume that building virtual machines in Azure (the platform of choice for their efforts) was the right approach.

To get started, two servers (in a failover configuration) were created in Azure with the following specifications:

* 8 CPUs
* 16 GB RAM
* Two SSD drives, 4 TB each

To provide the desired performance, Azure F-series virtual machines (which are compute optimized) were deployed with SQL Server installed on the VMs - exactly as would be done on-premises.

This configuration closely matched a database platform running on-premises which hosted a business critical SQL Server-based platform. The goal was to re-platform this environment to Azure and, it was assumed, enjoy a lower runtime cost.

To provide the desired performance, Azure F-series virtual machines (which are compute optimized) were deployed with SQL Server installed on the VMs - exactly as would be done on-premises.

From a purely on-premises technology stack point of view, this seemed like a fairly good set-up with performance, excess capacity for data and demand growth taken into account. The database and server engineering teams felt pretty good; as directed, they'd begun the process of 'moving to the cloud' with, they thought, a modest amount of upskilling required.

Then the bill came.

The monthly cost for two of these VMs was over ten thousand dollars. Poseidon Chocolates' database team built about 50 of these servers. The total runtime cost was dramatic, to say the least.

Of course, the CIO was angry and embarrassed (there were uncomfortable conversations with the CIO and CFO) and the server and database teams bounced between declaring public cloud financially unsustainable and blaming each other for a major mistake.

Where did Poseidon Chocolates go wrong?

Let's walk through the ways.

### One.) Lack of Training

No one in leadership or IT took seriously the need for upskilling. The assumption was that the years of experience gained architecting solutions on-premises was sufficient to build solutions in the cloud. Because of the IT team's server-centric approach, this seemed to be a reasonable assumption - after all, if you've been spinning up virtual networks and virtual machines on-premises for years, what's to learn? As it turned out, quite a lot.

### Two.) Not Using Cloud-native architectural design principles

Point two follows from point one as day follows night; the lack of training (and perhaps even more impactful, the lack of serious consideration for any type of deep learning while entering this new environment) meant that no one understood the full range of available options or the principles described in documents such as the AWS Well Architected Framework and the Azure Application Architecture Guide.

This lack of knowledge, combined with the server-centric approach mentioned earlier, led Poseidon's IT team away from a consideration of PaaS options such as Azure SQL or Cosmos DB and towards time tested - but not cloud-native - methods such as running databases from virtual machines.

## Three.) 

Powerful platform capabilities such as an Azure Web App combined with a PaaS database were nowhere in Poseidon's list of plans.

## Refactoring Infrastructure to be Cloud Native (and cost optimized)

The image below (from Cloud References) illustrates the type of cloud-native design I'm talking about. Here, instead of VM hosted web sites, there are geo-replicated Azure Web Apps served from behind Azure Traffic Manager which provides geo-relevant DNS servicing. Azure Redis Cache is deployed to improve responsiveness and Azure SQL PaaS acts as the database layer.

![Azure PaaS Pattern](https://acmpstor.blob.core.windows.net/acmpblob1/Azure-PaaS-Pattern.png)

To use this design pattern, you first have to know it's possible. And to know that, you must be trained.



## Maturity Examples
How to get started and what great looks like.

Crawl = 
Walk = 
Run = 

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



## Common KPIs

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



## Related Functions

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Resources

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Cloud Specific Best Practices

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.



