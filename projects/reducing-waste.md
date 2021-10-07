---

layout: default

title: Reducing Waste
description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
page-identifier: reducing_waste
project-title: Reducing Waste
project-description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.

---

# Reducing Waste

<h2>AWS</h2>

<div class="flex flex-wrap items-stretch mt-6 mb-10">
{% for waste-card in site.data.reducing-waste %}
	<div class="md:w-1/3 p-3 flex items-stretch">
	  <div data-url="{{ waste-card.url }}" class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
	    <h3 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight">{{ waste-card.cloud-product }}</h3>
        <h4 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight">{{ waste-card.cloud-service-name }}</h3>
            <p>{{ waste-card.type }}</p>
            <p>{{ waste-card.savings-potential }}</p>
            <p>{{ waste-card.description }}</p>
        <a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">More info</a>
        <a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">Code example</a>
</div>
</div>
{% endfor %}
</div>