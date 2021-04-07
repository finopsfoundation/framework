{% for story in site.stories %}
	{% if forloop.first == true %}
## Related FinOps Stories	
	{% endif %}
	{% for tag in story.tags %}
		{% if tag == page.tag %}
<h3>{{ story.title }}</h3>
{{ story.content | truncatewords: 50 }}
<a href="{{ story.url }}">read more</a>
	
		{% endif %}
	{% endfor %}
{% endfor %}