---

layout: story
permalink: /stories/gke-metering/

title: GKE Metering
description:
type: Member Story
source: FinOps Foundation
story-title: GKE Metering
story-date: 2021-10-08
author: Scott Lapish
company: 
industry: 
cloud-provider: 
- GCP
framework-persona:
framework-maturity:
framework-capabilities:
weight: 100

---

Consideration needs to be given to the capacity requirements of the containers running in a pod. If not provisioned based on actual workload then the pod can request more than the required capacity which will lead to waste as the autoscaler scales to the load. Alternatively the pod can be under-provisioned resulting in poor performance.

Configuring GKE metering and developing request versus consumption dashboards can help teams to adjust configurations to match actual usage. Workloads where the requested resources are consistently more than what is actually consumed will result in larger overall shared cluster costs and individual team costs when redistributing the metered costs through the chargeback process.