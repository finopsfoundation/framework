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

<div class="flex flex-col md:flex-row flex-wrap items-stretch">
{% for waste-card in site.data.reducing-waste %}
{% if waste-card.cloud-service == 'aws' %}
<div class="md:w-1/2 p-3 flex items-stretch">
<div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
<h3 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-product }} </h3>
<h4 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-service-name }} </h4>

<p>{{ waste-card.type }}</p>
<p>{{ waste-card.savings-potential }}</p>
<p>{{ waste-card.description }}</p>
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">More info</a>
{% if waste-card.code-url %}
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.code-url }}">Code example</a>
{% else %}
{% endif %}
</div>
</div>
{% endif %}
{% endfor %}
</div>

<h2>GCP</h2>

<div class="flex flex-col md:flex-row flex-wrap items-stretch">
{% for waste-card in site.data.reducing-waste %}
{% if waste-card.cloud-service == 'gcp' %}
<div class="md:w-1/2 p-3 flex items-stretch">
<div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
<h3 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-product }} </h3>
<h4 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-service-name }} </h4>

<p>{{ waste-card.type }}</p>
<p>{{ waste-card.savings-potential }}</p>
<p>{{ waste-card.description }}</p>
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">More info</a>
{% if waste-card.code-url %}
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.code-url }}">Code example</a>
{% else %}
{% endif %}
</div>
</div>
{% endif %}
{% endfor %}
</div>

<h2>Azure</h2>

<div class="flex flex-col md:flex-row flex-wrap items-stretch">
{% for waste-card in site.data.reducing-waste %}
{% if waste-card.cloud-service == 'azure' %}
<div class="md:w-1/2 p-3 flex items-stretch">
<div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
<h3 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-product }} </h3>
<h4 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-service-name }} </h4>

<p>{{ waste-card.type }}</p>
<p>{{ waste-card.savings-potential }}</p>
<p>{{ waste-card.description }}</p>
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">More info</a>
{% if waste-card.code-url %}
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.code-url }}">Code example</a>
{% else %}
{% endif %}
</div>
</div>
{% endif %}
{% endfor %}
</div>

<h2>Cross-cloud</h2>

<div class="flex flex-col md:flex-row flex-wrap items-stretch">
{% for waste-card in site.data.reducing-waste %}
{% if waste-card.cloud-service == 'cross-cloud' %}
<div class="md:w-1/2 p-3 flex items-stretch">
<div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
<h3 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-product }} </h3>
<h4 class="my-4 mt-0 text-lg font-normal text-gray-900 tracking-tight"> {{ waste-card.cloud-service-name }} </h4>

<p>{{ waste-card.type }}</p>
<p>{{ waste-card.savings-potential }}</p>
<p>{{ waste-card.description }}</p>
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.info-url }}">More info</a>
{% if waste-card.code-url %}
<a class="inline-flex justify-center py-2 px-2 border shadow-sm text-sm font-medium rounded-sm text-white bg-green-500 font-normal leading-none" href="{{ waste-card.code-url }}">Code example</a>
{% else %}
{% endif %}
</div>
</div>
{% endif %}
{% endfor %}
</div>