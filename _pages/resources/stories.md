---

layout: wide
permalink: /resources/stories/
search: true

---

# Member Stories

Stories are shared experiences from individuals or teams that have applied FinOps in a certain situation. They allow others who are facing similar challenges and circumstances to learn and gain insights into previous approaches. If you also want to contribute to this page please <a href="javascript:void(0);" onclick="modalToggle('modal-contribute')">make a suggestion.</a>


<b>Filter by cloud provider:</b>
<fieldset data-filter-group class="mb-4">
  <button type="button" class="badge-dgrey" data-filter="all">ALL</button>
  <button type="button" class="badge-dgrey" data-filter=".aws">AWS</button>
  <button type="button" class="badge-dgrey" data-filter=".gcp">Google Cloud</button>
  <button type="button" class="badge-dgrey" data-filter=".azure">Azure</button>
</fieldset>


<div class="flex flex-col md:flex-row flex-wrap items-stretch mt-4 js-stories" id="js-stories">
{% for item in site.stories %}
  <div class="md:w-1/2 lg:w-1/3 p-3 flex items-stretch mix {% if item.cloud-provider %}{% for cloud in item.cloud-provider %}{{ cloud | downcase }} {% endfor %}{% endif %}}" data-url="{{ item.url }}">
    <div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
      <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ item.story-title }}</h3>
      <div class="my-2">
        {% if item.cloud-provider %} 
          {% for cloud in item.cloud-provider %}
            <div class="text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block pr-4 py-px">{{ cloud }}</div>
          {% endfor %}
        {% endif %}
      </div>
      <div>
        <a class="text-sm text-green-500 transition-colors duration-200" href="{{ item.url }}">View story</a>
      </div>
    </div>
  </div>
{% endfor %}
</div>


<!-- <div class="flex md:flex-row flex-wrap items-stretch bg-gray-100 p-4 rounded-md mt-4">
	{% for story in site.stories %}
  <div class="w-1/2 md:w-1/3 flex items-stretch" data-url="{{ story.url }}">
    <div class="m-2 p-6 bg-white w-full flex flex-col rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 cursor-pointer hover:border-green-500">
      <div class="flex-grow">
        <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ story.story-title }}</h3>
        <p class="text-gray-600 w-80 text-sm mb-0">{{ story.company }}</p>
      </div>
      <div class="my-2">
        {% if story.cloud-provider %} 
          {% for cloud in story.cloud-provider %}
            <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px">{{ cloud }}</div>
          {% endfor %}
        {% endif %}
      </div>
      <div>
        <a class="text-sm text-green-500 transition-colors duration-200" href="{{ story.url }}">View story</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div> -->