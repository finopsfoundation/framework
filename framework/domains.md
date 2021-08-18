---

layout: wide

---

# FinOps Domains

FinOps Domains represents a sphere of activity or knowledge. Every organization adopting FinOps will perform activities in all FinOps Domains. Each FinOps Domain consists of FinOps [Capabilities](/framework/capabilities/);  Capabilities outline functional activities that can be performed as part of that Domain. 

## FinOps Domain Model

Taken together, the FinOps Domains represent the [Capabilities](/framework/capabilities/) an organization must perform in the practice of FinOps. Every organization will leverage each Domain in their FinOps practice. The particular mix of capabilities implemented within each Domain may be unique for an organization and will depend on their FinOps maturity level. 

FinOps Domains are not exclusive to one another or process steps. Multiple Domains may be pursued during any phase of an organization's FinOps practice.

The Domains are interdependent, and together provide a high level overview of what functional activities are needed to run a FinOps practice. The results of an organization implementing these Domains, will show up in cost and usage reporting, will have an impact on performance, and will allow new opportunities to be identified that can serve as inputs to subsequent iterations through the FinOps Phases.


<div class="flex flex-col md:flex-row flex-wrap items-stretch bg-gray-100 p-4 rounded-md">
	{% for domain in site.domains %}
  <div class="md:w-1/2 flex items-stretch">
    <a href="{{ domain.url }}" class="m-2 flex items-stretch">
      <div class="p-6 bg-white flex space-x-6 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-lg transition transform duration-500 cursor-pointer">
        <div>
          <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0">{{ domain.domain-title }}</h3>
          <p class="text-gray-600 w-80 text-sm">{{ domain.domain-desc }}</p>
        </div>
      </div>
    </a>
  </div>
  {% endfor %}
</div>


  
