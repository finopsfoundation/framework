{% for story in site.stories %}
	{% for tag in story.tags %}
		{% if tag == page.tag %}
		

## Related FinOps Stories
{{ story.content | markdownify }}


		{% endif %}
	{% endfor %}
{% endfor %}