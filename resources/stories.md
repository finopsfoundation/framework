---

layout: wide

---

# Member Stories

Stories are shared experiences from individuals or teams that have applied FinOps in a certain situation. They allow others who are facing similar challenges and circumstances to learn and gain insights into previous approaches. 


<div class="flex flex-col md:flex-row flex-wrap items-stretch bg-gray-100 p-4 rounded-md mt-4">
	{% for story in site.stories %}
  <div class="md:w-1/3 flex items-stretch" data-url="{{ story.url }}">
    <div class="m-2 p-6 bg-white w-full flex rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 cursor-pointer hover:border-green-500">
      <div>
        <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ story.story-title }}</h3>
        <p class="text-gray-600 w-80 text-sm">{{ story.company }}</p>
        <a class="text-sm hover:text-green-500 transition-colors duration-200" href="{{ story.url }}">View story</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
