---

layout: story

title: Provisioning Storage in GCP
description:
story-title: Provisioning Storage in GCP
story-date: 2021-10-08
author: Scott Lapish
company: 
company-size:
industry: 
cloud-provider: GCP
tooling-services:
framework-persona:
framework-maturity:
framework-capabilities:
framework-projects:
- project_reducing-waste
order:

---

When provisioning storage in GCP, careful consideration needs to be given to object versioning and lifecycle management. Costs can quickly balloon if multiple obsolete versions of objects are being stored with no consideration to the number of versions required and to how to manage the lifecycle of those object versions through the various storage classes (Nearline, Coldline, Archive) and multiple regions. 

A team new to Google cloud developing a large scale data warehouse system had missed changing the object versioning strategy on a set of data that was generated during ingestion. While they thought they were cleaning up old objects by deleting them, based on the versioning strategy, these objects were not actually removed resulting in continued ballooning costs attributed to a large and continually growing volume of unwanted data. After adjusting for the desired behaviour the costs in the non-production environment dropped by 60%.