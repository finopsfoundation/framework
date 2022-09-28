---

layout: wide
permalink: /projects/reducing-waste/

title: Reducing Waste Opportunities
description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
page-identifier: project_reducing_waste
identifier: projects
project-title: Reducing Waste
project-description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
date-added: Oct 2021
type: Guide
source: Foundation Contribution
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:
weight: 10
---

<h1>Reducing Waste</h1>

<p>This Project focuses on providing a collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools. You can sort each card by cloud service provider or savings potential. If you also want to contribute to this page please <a href="javascript:void(0);" onclick="modalToggle('modal-contribute')">make a suggestion.</a></p>

<b>Filter by cloud provider:</b>
<fieldset data-filter-group class="mb-4">
  <button type="button" class="badge-dgrey" data-toggle=".aws">AWS</button>
  <button type="button" class="badge-dgrey" data-toggle=".gcp">Google Cloud</button>
  <button type="button" class="badge-dgrey" data-toggle=".azure">Azure</button>
</fieldset>

<b>Filter by saving potential:</b>
<fieldset data-filter-group>
  <button type="button" class="badge-dgrey" data-toggle=".saving-1">&#36;</button>
  <button type="button" class="badge-dgrey" data-toggle=".saving-2">&#36;&#36;</button>
  <button type="button" class="badge-dgrey" data-toggle=".saving-3">&#36;&#36;&#36;</button>
</fieldset>

<div class="flex flex-col md:flex-row flex-wrap items-stretch mt-4 js-waste" id="js-waste">
{% for item in site.data.reducing-waste %}
  <div class="md:w-1/2 p-3 flex items-stretch mix {% if item.cloud-provider %}{% for cloud in item.cloud-provider %}{{ cloud | downcase }} {% endfor %}{% endif %} {% if item.savings-potential == '$' %}saving-1 {% elsif item.savings-potential == '$$' %} saving-2 {% elsif item.savings-potential == '$$$' %} saving-3 {% endif %}">
    <div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
      <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ item.cloud-service-name }}</h3>
      <h4 class="my-4 mt-0 text-base font-normal text-gray-700 tracking-tight">{{ item.cloud-product }} - {{ item.type | capitalize }}</h4>
      <div class="my-2">
        {% if item.cloud-provider %} 
          {% for cloud in item.cloud-provider %}
            <div class="text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block pr-4 py-px">{{ cloud }}</div>
          {% endfor %}
        {% endif %}
        <div class="text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px">{{ item.savings-potential }}</div>
      </div>
      <p>{{ item.description }}</p>
      {% if item.story-url %}
        <a class="py-1 px-2 shadow-sm text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 mb-1 inline-block" href="{{ item.story-url }}">Read the story</a>
      {% endif %}
      {% if item.related-url %}
        <a class="py-1 px-2 shadow-sm text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 mb-1 inline-block" href="{{ item.related-url }}">Related material</a>
      {% endif %}
      {% if item.code-url %}
        <a class="py-1 px-2 shadow-sm text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 mb-1 inline-block" href="{{ item.code-url }}">Code example</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Thank you to all our Project contributors

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'reducing-waste' %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <a href="{{ person.linkedin-url }}" class="flex bg-gray-100 w-full items-stretch p-4 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
          <div>
            <img src="/img/people/{{ person.image }}" alt="{{ person.name }}" width="50" class="rounded-full inline-block" />
          </div>
          <div class="flex-grow pl-4">
            <h5 class="mt-2 mb-1 leading-tight font-bold">{{ person.name }}</h5>
            <p class="m-0 leading-tight text-sm">{{ person.company }}</p>
          </div>
          <div>
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path class="st0" d="M21.8,0H2.2C1,0,0,1,0,2.2v19.7C0,23,1,24,2.2,24h19.7c1.2,0,2.2-1,2.2-2.2V2.2C24,1,23,0,21.8,0z M7.4,20.7
                c0,0.3-0.3,0.6-0.6,0.6H4.1c-0.3,0-0.6-0.3-0.6-0.6V9.4c0-0.3,0.3-0.6,0.6-0.6h2.7c0.3,0,0.6,0.3,0.6,0.6V20.7z M5.5,7.8
                C4,7.8,2.9,6.6,2.9,5.2S4,2.6,5.5,2.6S8,3.8,8,5.2S6.9,7.8,5.5,7.8z M21.5,20.8c0,0.3-0.3,0.6-0.6,0.6H18c-0.3,0-0.6-0.3-0.6-0.6
                v-5.3c0-0.8,0.2-3.5-2.1-3.5c-1.8,0-2.1,1.8-2.2,2.6v6.1c0,0.3-0.3,0.6-0.6,0.6H9.8c-0.3,0-0.6-0.3-0.6-0.6V9.4
                c0-0.3,0.3-0.6,0.6-0.6h2.8c0.3,0,0.6,0.3,0.6,0.6v1c0.7-1,1.6-1.8,3.7-1.8c4.6,0,4.6,4.3,4.6,6.7L21.5,20.8L21.5,20.8z"/>
            </svg>
          </div>
      </a>
    </div>
  {% endif %}
{% endfor %}
</div>