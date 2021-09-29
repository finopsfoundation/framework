<!-- Assign variable to help identify if there are no stories -->
{% assign is_stories = false %}
<!-- Make variable with sorted oder -->
{% assign sorted_stories = site.stories | sort:"order" %}

<!-- Loop over all stories -->
{% for story in sorted_stories %}

{% if forloop.first == true %}
<h2>Related FinOps Stories</h2>
{% endif %}

<!-- Specific to capability page -->
{% if page.page-identifier contains 'capability' %}

{% for tag in story.framework-capabilities %}
{% if tag == page.page-identifier %}
{% assign is_stories = true %}
<h3>{{ story.title }}</h3>
{{ story.content | truncatewords: 50 | markdownify}}<a href="{{ story.url }}">read more</a>
{% endif %}
{% endfor %}

<!-- Specific to project page -->
{% elsif page.page-identifier contains 'project' %}

{% for tag in story.framework-projects %}
{% if tag == page.page-identifier %}
{% assign is_stories = true %}
<h3>{{ story.title }}</h3>
{{ story.content | truncatewords: 50 | markdownify}}<a href="{{ story.url }}">read more</a>
{% endif %}
{% endfor %}

{% endif %}

{% endfor %} <!-- End loop of stories -->

<!-- Output if no stories -->
{% if is_stories == false %}
* Willing to add your story - Contibute stories [here](https://github.com/finopsfoundation/fodo/tree/master/_stories) or reach out in the FinOps Foundation Slack
{% endif %}
