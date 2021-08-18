{% assign is_stories = false %}
{% assign sorted_stories = site.stories | sort:"order" %}
{% for story in sorted_stories %}
    {% if forloop.first == true %}
## Related FinOps Stories	
    {% endif %}

    {% for tag in story.tags %}
        {% if tag == include.content %}
            {% assign is_stories = true %}
<h3>{{ story.title }}</h3>
{{ story.content | truncatewords: 50 | markdownify}}<a href="{{ story.url }}">read more</a>
        {% endif %}
    {% endfor %}
{% endfor %}
{% if is_stories == false %}
* Willing to add your story - Contibute stories [here](https://github.com/finopsfoundation/fodo/tree/master/_stories) or reach out in the FinOps Foundation Slack
{% endif %}