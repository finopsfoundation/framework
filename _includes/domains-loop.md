<div class="bg-gray-200 p-4 rounded-md my-8"> 
  <h2 class="text-sm font-semibold text-gray-700 tracking-wider uppercase mt-2 mb-4 m-2">Related Domains</h2>
  <div class="flex flex-col md:flex-row flex-wrap items-stretch">
  {% assign sorted_domains = site.domains | sort:"order" %}
  {% for domain in sorted_domains %}
      {% for tag in domain.framework-capabilities %}
        {% if tag == page.page-identifier %}
        <div class="md:w-1/2 flex items-stretch">
          <div class="m-2 w-full bg-white flex space-x-6 border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500  transition transform duration-200">
            <a class="text-base font-medium p-2 pl-4 block w-full text-gray-800" href="{{ domain.url }}">{{ domain.framework-domain-title}}</a>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  {% endfor %}
  </div>
</div>