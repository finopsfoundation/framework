---

layout: wide

title: FinOps Capabilities
description: FinOps Capabilities represents functional areas of activity in support of their corresponding FinOps Domains.

---

# FinOps Capabilities

FinOps Capabilities represent functional areas of activity in support of their corresponding [FinOps Domain](/framework/domains/). Functional activities are tasks or processes that allow one to meet the demands of a FinOps practice iteratively through the [lifecycle phases](/framework/phases/). These functional activities and processes are intended to be in service of enablement, education, knowledge sharing, advocacy, actionable tasks, business objectives, and FinOps maturity improvement.


<div class="flex flex-col md:flex-row flex-wrap items-stretch bg-gray-200 p-4 rounded-md my-8">
{% assign sorted_capabilities = site.capabilities | sort:"order" %}
{% for capability in sorted_capabilities %}
<div class="md:w-1/2 flex items-stretch">
    <div class="m-2 p-6 w-full bg-white border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500 cursor-pointer transition duration-200" data-url="{{ capability.url }}">
      <h2 class="text-lg font-medium mt-0">{{ capability.framework-capability-title }}</h2>
      {% if capability.framework-capability-desc contains 'coming soon' %}
        <span class="text-white font-medium bg-green-500 rounded-md py-1 px-2 inline-block uppercase text-xs leading-tight">Help define</span>
      {% endif %}
      <p class="text-gray-600">{{ capability.framework-capability-desc }}</p>
      <a class="text-gray-600 hover:text-green-500 underline" href="{{ capability.url }}">Read more</a>
  </div>
</div>
{% endfor %}
</div>


View historical [Capabilities](/framework/archive/v0.1/)
