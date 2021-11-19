---

layout: wide

title: A Guide for Adopting FinOps in Your Organization
description: One of the biggest challenges in starting a FinOps practice is getting broad executive support and buy-in to dedicate the time and resources needed for the cultural change.
story-title: A Guide for Adopting FinOps in Your Organization
story-date: 2021-10-01
author: F2 Working Group
company: FinOps Foundation
company-size:
industry: Internet
cloud-provider:
- AWS
- Azure
- GCP
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_establish-finops-culture
framework-projects:
order:
tags:

---

## Adopting FinOps: Understanding Personas
When proposing the adoption of a FinOps function within an organization, there will be a need to brief a variety of personas among the executive team to gain approval, buy-in, and involvement in conducting FinOps and achieving its goals.

Each Executive team persona is described below, in terms of their goals, concerns, key messaging and useful KPIs. By understanding the motivations of each executive persona, a FinOps champion will be able to describe the value of FinOps more effectively, minimizing the time and effort to gain alignment. Please see [the main Adopting FinOps](/projects/adopting-finops) section for more context.


{% for persona in site.data.personas %}

<div id="{{ persona.identifier }}">

  <h2>{{ persona.name }}</h2>
  <p><b>Primary Goal</b> {{ persona.primary-goal }}</p>


  <div class="flex flex-col md:flex-row flex-wrap items-stretch">
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col rounded-lg p-2">
        <h4 class="text-center my-4">Objectives</h4>
        <ul>
          {% for item in persona.objectives %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">Frustrations</h4>
        <ul>
          {% for item in persona.frustrations %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">Key Metrics</h4>
        <ul>
          {% for item in persona.key-metrics %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">FinOps Benefits</h4>
        <ul>
          {% for item in persona.finops-benefits %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>

</div>

{% endfor %}
