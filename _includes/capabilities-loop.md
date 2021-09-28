{% assign sorted_capabilities = site.capabilities | sort:"order" %}
{% for tag in page.framework-capabilities %}
{% for capability in sorted_capabilities %}
{% if tag == capability.page-identifier %}
<a href="{{ capability.url }}">{{ capability.framework-capability-title }}</a>
{% endif %}
{% endfor %}
{% endfor %}