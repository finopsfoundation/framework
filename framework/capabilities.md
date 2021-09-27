---

layout: default

---

# FinOps Capabilities

FinOps Capabilities represents functional areas of activity in support of their corresponding [FinOps Domain](/framework/domains/). Functional activities are tasks or processes that allow one to meet the demands of a FinOps practice iteratively through the [lifecycle phases](/framework/phases/). These functional activities and processes are intended to be in service of enablement, education, knowledge sharing, advocacy, actionable tasks, business objectives, FinOps maturity improvement.

## List of Capabilities



{% assign sorted_capabilities = site.capabilities | sort:"order" %}

{% for capability in sorted_capabilities %}

<a class="text-lg hover:text-green-500 transition-colors duration-200 p-4" href="{{ capability.url }}">{{ capability.framework-capability-title }}</a>

{% endfor %}


View historical [capabilities](/framework/archive/v0.1/)
