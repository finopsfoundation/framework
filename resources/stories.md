---

layout: wide

---

# Member Stories

Stories are shared experiences from individuals or teams that have applied FinOps in a certain situation. They allow others who are facing similar challenges and circumstances to learn and gain insights into previous approaches. 


<div class="flex md:flex-row flex-wrap items-stretch bg-gray-100 p-4 rounded-md mt-4">
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
</div>