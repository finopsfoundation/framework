<!-- Assign variable to help identify if there are no stories -->
{% assign is_stories = false %}
<!-- Make variable with sorted oder -->
{% assign sorted_stories = site.stories | sort:"order" %}
<!-- Loop over all stories -->
{% for story in sorted_stories %}
{% if forloop.first == true %}
  <h2>Real World Resources</h2>
{% endif %}
<!-- Specific to capability page -->
{% if page.page-identifier contains 'capability' %}
{% for tag in story.framework-capabilities %}
{% if tag == page.page-identifier %}
{% assign is_stories = true %}
<div class="bg-gray-100 p-4 rounded-md my-8">
  <h3 class="mt-2 mb-4">{{ story.title }}</h3>
  <div class="my-4">
  {% if story.cloud-provider %}
    {% for cloud in story.cloud-provider %}
      <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">{{ cloud }}</div>
    {% endfor %}
  {% endif %}
  {% if story.industry %}
    <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">Industry: {{ story.industry }}</div>
  {% endif %}
  {% if story.framework-persona %}
    <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">Persona: {{ story.framework-persona }}</div>
  {% endif %}
  </div>
  <em>{% if story.author %} by {{ story.author | join: " and " }}{% else %} by a Foundation Member{% endif %}{% if story.company %}, {{ story.company }}{% endif %}</em>
  <div>
    {% if story.description %} {{ story.description | truncatewords: 50 | markdownify}} {% else %} {{ story.content | truncatewords: 50 | markdownify}} {% endif %} <a class="text-green-500 text-sm" href="{{ story.url }}">Read more</a>
    <!-- {{ story.content | truncatewords: 50 | markdownify}} <a class="text-green-500 text-sm" href="{{ story.url }}">Read more</a> -->
  </div>
</div>
{% endif %}
{% endfor %}
<!-- Specific to project page -->
{% elsif page.page-identifier contains 'project' %}
{% for tag in story.framework-projects %}
{% if tag == page.page-identifier %}
{% assign is_stories = true %}
<div class="bg-gray-100 p-4 rounded-md my-8">
  <h3 class="mt-2 mb-4">{{ story.title }}</h3>
  <div class="my-4">
  {% if story.cloud-provider %}
    {% for cloud in story.cloud-provider %}
      <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">{{ cloud }}</div>
    {% endfor %}
  {% endif %}
  {% if story.industry %}
    <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">Industry: {{ story.industry }}</div>
  {% endif %}
  {% if story.framework-maturity %}
    <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px mr-2">Maturity: {{ story.framework-maturity }}</div>
  {% endif %}
  </div>
  <em>{% if story.author %} by {{ story.author | join: " and " }}{% else %} by a Foundation Member{% endif %}{% if story.company %}, {{ story.company }}{% endif %}</em>
  <div>
    {{ story.content | truncatewords: 50 | markdownify}} <a class="text-green-500 text-sm" href="{{ story.url }}">Read more</a>
  </div>
</div>
{% endif %}
{% endfor %}
{% endif %}
{% endfor %} <!-- End loop of stories -->
<!-- Output if no stories -->
{% if is_stories == false %}
* Willing to add your story - Contibute stories [here](https://github.com/finopsfoundation/fodo/tree/master/_stories) or reach out in the FinOps Foundation Slack
{% endif %}
