{% assign sorted_domains = site.domains | sort:"order" %}
{% for domain in sorted_domains %}
{% for tag in domain.framework-capabilities %}
{% if tag == page.page-identifier %}
<a href="{{ domain.url }}">{{ domain.framework-domain-title}}</a>
{% endif %}
{% endfor %}
{% endfor %}