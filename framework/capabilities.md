---

layout: wide

title: FinOps Capabilities
description: FinOps Capabilities represents functional areas of activity in support of their corresponding FinOps Domains.

---

# FinOps Capabilities

FinOps Capabilities represents functional areas of activity in support of their corresponding [FinOps Domain](/framework/domains/). Functional activities are tasks or processes that allow one to meet the demands of a FinOps practice iteratively through the [lifecycle phases](/framework/phases/). These functional activities and processes are intended to be in service of enablement, education, knowledge sharing, advocacy, actionable tasks, business objectives, FinOps maturity improvement.


<div class="flex flex-col md:flex-row flex-wrap items-stretch bg-gray-200 p-4 rounded-md my-8">
{% assign sorted_capabilities = site.capabilities | sort:"order" %}
{% for capability in sorted_capabilities %}
<div class="md:w-1/2 flex items-stretch">
    <div class="m-2 w-full bg-white flex space-x-6 border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500  transition transform duration-200">
      <a class="text-base font-medium p-2 pl-4 block w-full text-gray-700" href="{{ capability.url }}">{{ capability.framework-capability-title }}</a>
  </div>
</div>
{% endfor %}
</div>


View historical [Capabilities](/framework/archive/v0.1/)
