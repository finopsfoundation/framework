---

layout: wide

title: FinOps Domains
description: FinOps Domains represents a sphere of activity or knowledge. Every organization adopting FinOps will perform activities in all FinOps Domains.

---

# FinOps Domains

FinOps Domains represents a sphere of activity or knowledge. Every organization adopting FinOps will perform activities in all FinOps Domains. Each FinOps Domain consists of FinOps [Capabilities](/framework/capabilities/). Capabilities outline functional activities that can be performed as part of that Domain. 

## FinOps Domain Model

Taken together, the FinOps Domains represent the [Capabilities](/framework/capabilities/) an organization must perform in the practice of FinOps. Every organization will leverage each Domain in their FinOps practice. The particular mix of capabilities implemented within each Domain may be unique for an organization and will depend on their [FinOps maturity level](/framework/maturity-model/). 

FinOps Domains are not exclusive to one another or process steps. Multiple Domains may be pursued during any phase of an organization's FinOps practice.

The Domains are interdependent, and together provide a high level overview of what functional activities are needed to run a FinOps practice. The results of an organization implementing these Domains, will show up in cost and usage reporting, will have an impact on performance, and will allow new opportunities to be identified that can serve as inputs to subsequent iterations through the FinOps Phases.

<!-- External contributors: do not edit handlebar functions-->

<div class="flex flex-col md:flex-row flex-wrap items-stretch bg-gray-200 p-4 rounded-md">
  {% assign sorted_domains = site.domains | sort:"order" %}
	{% for domain in sorted_domains %}
  <div class="md:w-1/2 flex items-stretch">
    <div class="m-2 p-6 bg-white flex space-x-6 border-solid border-gray-200 border rounded-lg shadow-sm">
      <div>
        <h3 class="text-xl font-bold mb-4 mt-0 leading-6">{{ domain.framework-domain-title }}</h3>
        <p class="text-gray-600 w-80 text-sm">{{ domain.framework-domain-desc }} <a class="text-sm text-gray-600 font-normal hover:text-green-500 transition-colors duration-200" href="{{ domain.url }}">Read more</a></p>
        <ul class="mt-4">
          {% assign sorted_capabilities = site.capabilities | sort:"order" %}
          {% for tag in domain.framework-capabilities %}
            {% for capability in sorted_capabilities %}
              {% if tag == capability.page-identifier %}
              <li><a class="text-gray-700 hover:text-green-500" href="{{ capability.url }}">{{ capability.framework-capability-title }}</a></li>
              {% endif %}
            {% endfor %}
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
