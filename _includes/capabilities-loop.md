<div class="bg-gray-200 p-4 rounded-md my-8"> 
  <h2 class="mt-2 mb-4 ml-2">FinOps Capabilities</h2>
  <div class="flex flex-col md:flex-row flex-wrap items-stretch">
  {% assign sorted_capabilities = site.capabilities | sort:"order" %}
  {% for tag in page.framework-capabilities %}
    {% for capability in sorted_capabilities %}
        {% if tag == capability.page-identifier %}
        <div class="md:w-1/2 flex items-stretch">
          <div class="m-2 w-full bg-white flex space-x-6 border-solid border-gray-200 border rounded-lg shadow-sm hover:border-green-500  transition transform duration-200">
            <a class="text-base font-medium p-2 pl-4 block w-full text-gray-800" href="{{ capability.url }}">{{ capability.framework-capability-title }}</a>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  {% endfor %}
  </div>
</div>