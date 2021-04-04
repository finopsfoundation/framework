{% for story in site.stories %}
	{% if forloop.first == true %}
## Related FinOps Stories	
	{% endif %}
	{% for tag in story.tags %}
		{% if tag == page.tag %}
	
{{ story.content | markdownify }}    
	
		{% endif %}
	{% endfor %}
{% endfor %}