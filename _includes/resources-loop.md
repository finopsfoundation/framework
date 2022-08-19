<!-- Assign variable to help identify if there are no stories -->
{% assign is_resources = false %}
{% assign count = 0 %}
<!-- Make variable with sorted oder -->
{% assign sorted_resources = site.resources | sort:"order" %}
<!-- Loop over all stories -->
{% for resource in sorted_resources %}
{% if forloop.first == true %}
<div class="flex mt-10">
  <div class="flex-grow">
    <h2 class="mt-0">Resources and Projects</h2>
  </div>
  <div>
    <a href="/resources/" class="badge-dgrey inline-flex items-center mr-0"><span>View All</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-px" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></a>
  </div>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 gap-8">
{% endif %}
{% if resource.type != 'Member Story' %}
{% for tag in resource.framework-capabilities  %}
{% if tag == page.page-identifier %}
{% if count < 3 %} 
{% assign is_resources = true %}
{% assign count = count | plus: 1 %}
<a class="block text-centre m-0 bg-white border-solid border-gray-200 border rounded-sm shadow-sm hover:border-green-500 cursor-pointer transition duration-200" href="{{ resource.url }}" data-ga-category="links" data-ga-action="internal link clicks" data-ga-label="reource - {{ resource.title }} {{ resource.type }}">
  <img src="/img/search-icons/{{ resource.type }}.png" alt="{{ resource.title }}" />
  <div class="p-4">
    <h2 class="text-base font-medium mt-0 mb-2 leading-tight flex-grow">{{ resource.title }}</h2>
    <p class="text-xs leading-tight m-0 mb-1 uppercase font-semibold">{{ resource.type }}</p>
    <p class="text-sm m-0 md:pr-8">{{ resource.description }}</p>
  </div>
</a>
{% endif %}
{% endif %}
{% endfor %}
{% endif %}
{% if forloop.last == true %}
</div>
{% endif %}
{% endfor %} <!-- End loop of stories -->
<!-- Output if no stories -->
{% if is_resources == false %}
* Willing to contribute resources? - [Suggest resources here](/resources/)
{% endif %}

<hr class="basic" />
