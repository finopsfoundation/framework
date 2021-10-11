---

layout: story

title: Watch Your AWS Marketplace Licenses!
description:
story-title: Watch Your AWS Marketplace Licenses!
story-date: 2021-10-08
author: Eric Mulatrick
company: 
company-size:
industry: 
cloud-provider: AWS
tooling-services:
framework-persona:
framework-maturity:
framework-capabilities:
framework-projects:
- project_reducing-waste
order:

---

Watch your AWS Marketplace licenses!  As a user of the AWS marketplace, you’ll find software vendors offer different license packages - i.e. t-shirt sizes w/ small/medium/large.  An example would be - a software storage vendor has a license model for small (1 TB of storage), medium (10 TB), and large (368 TB).  Each one has a different cost, with the smallest being the cheapest, which also runs on a smaller set of EC2 instances.  

Our engineering team automated the deployment and destruction of pay-as-you-go(paygo)  marketplace software.  The engineering team hard coded the edition to be medium size, regardless of whether or not the workload was a test environment < 1 TB of space, or a production environment (10 TB).   I did some investigation into the licensing model, and discovered that the small license would be suitable for test needs.  Doing so was ⅓ of the cost of the production workload license.  

Also, because we were using pay-as-you-go licenses, we automated the pause and resume of the software.  We were able to use what we needed, when we needed it, instead of overbuying licenses and storing them in a license pool.  We’d be able to scale up and scale down, limiting license pool waste, and the overhead of purchasing and managing licenses.  

**Cost Savings:**  $1M/year for us
**Effort:**  could be substantial - i.e. refactoring application, working w/ vendor to negotiate private offer, understanding licensing models