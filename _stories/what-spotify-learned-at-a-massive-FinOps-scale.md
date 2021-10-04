---

layout: story

title: What Spotify Learned at a Massive FinOps Scale
description:
story-title: What Spotify Learned at a Massive FinOps Scale
story-date:
author:
- Scott Meyer
- Brendan Greenley
company: Spotify
company-size:
industry:
cloud-provider:
- GCP
tooling-services:
framework-persona:
framework-maturity:
framework-capabilities:
framework-projects:
order: 1

tags:
- cloud-migration
- google-cloud-platform
- organizational-alignment
- cost-visibility
- rate-optimization

---

Here are a few tips that we've learned at Spotify as we utilizes GCP at a massive scale. Even at a massive scale of utilization, we're only  in the step of automating their cost optimization.

Cost optimization is part of our “doing it responsibly” mission. Our leadership recognizes the importance of FinOps and cost optimization, aligning it with a positive impact on gross margin. It’s important to Spotify as a cloud-native company to pay attention to these growing costs.

As we grow, that organic growth throws complexity into this process and feeds into what we call our “CUD problem.” Using a laddering system of CUDs helps us find the minimal cost. Investigating migrating to more efficient services is also a way to reduce costs.

Part of the strategy is to combine one-year, three-year CUDs, and SUDs to find the right balance. Taking in risk and business logic helps adjust utilization to make the right decisions. This risk can include the introduction of newer technologies and offerings by GCP.

Seasonality of jobs help work out CUD strategy as well. Our FinOps teams track daily, monthly, annual seasonality of workload. This causes Spotify to always be purchasing CUDs (monthly!), prioritizing CUD utilization over SUD. Due to sustained growth, a “CUD ladder” makes the most sense at our scale of utilization.

![](/img/stories/spotify.jpeg)

With a custom tooling, Spotify graphs their CUD and SUD with color coded charts and watermarks to help identify how efficiently their utilizing savings rates. This process across different services and assists our FinOps teams with calculating, monitoring, and forecasting how we utilize CUDs and SUDs.
