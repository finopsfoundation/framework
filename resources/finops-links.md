---

layout: default
title: FinOps Resource Links

---

# Resource Links

{% for item in site.links reversed %}

<h3>{{ item.title }}</h3>
{{ item.description | truncatewords: 50 | markdownify}}<a href="{{ item.url }}">read more</a>

---
{% endfor %}
