---

layout: story

title: How to Allocate Meter Charges by Type
description:
story-title: How to Allocate Meter Charges by Type
story-date: 2021-06-01
author: Tom Foegen
company: Mayo Clinic
company-size:
industry:
cloud-provider:
tooling-services:
framework-persona:
framework-maturity:
framework-capabilities:
framework-projects:
order: 1

---

To date, Mayo Clinic is allocating all meter charges to projects. Charges are broken down a few ways:

* General costs - These are costs that apply to all projects. An example would be security logging costs.  These costs are applied proportionately to the charges.
* Service costs - Projects are broken down into various service categories such as web app stack, IaaS, data science virtual machine, etc. There are some costs that apply only to each service and those costs for a particular service are allocated only to the costs for that service. An example would be training instances. These are set up to teach customers how to use the tools.
* Reserved instances - Reserved instance costs (Azure) are directly allocated to each project based on using the meter categories in the billing export for reserved instances.

These costs are applied at a detailed row level within the billing export data in order to be able to rollup up the costs multiple ways. The customer only sees the cost after the costs are allocated. To date, we have not been challenged from anyone on those costs.

Currently we apply these costs at the end of the month but since customers are now starting to receive regular reports (daily, weekly and monthly) we are going to start to apply the overhead costs on a daily basis as charges come in.  The challenge is that the projects need to be defined upfront in order to determine what service category they apply too.

The alternative discussed recently is to use a standard percentage to apply the categories and then true up these costs on a regular basis, maybe quarterly.