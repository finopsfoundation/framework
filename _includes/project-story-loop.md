Test

{% if page.page-identifier contains 'capability' %}

capability

{% elsif page.page-identifier contains 'project' %}

project

{% endif %}


{% assign is_stories = false %}
{% assign sorted_stories = site.stories | sort:"order" %}

{% for story in sorted_stories %}
{% if forloop.first == true %}
<h2>Related FinOps Stories</h2>
{% endif %}





{% for tag in story.framework-project %}
{% if tag == 'capability_forecasting' %}
{% assign is_stories = true %}
<h3>{{ story.title }}</h3>
{{ story.content | truncatewords: 50 | markdownify}}<a href="{{ story.url }}">read more</a>
{% endif %}
{% endfor %}



{% endfor %}

{% if is_stories == false %}
* Willing to add your story - Contibute stories [here](https://github.com/finopsfoundation/fodo/tree/master/_stories) or reach out in the FinOps Foundation Slack
{% endif %}
