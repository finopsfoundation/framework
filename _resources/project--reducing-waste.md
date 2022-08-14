---

layout: wide
permalink: /projects/reducing-waste/

title: Reducing Waste Opportunities
description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
page-identifier: reducing_waste
identifier: projects
project-title: Reducing Waste
project-description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
date-added: Oct 2021
type: Utility
source: FinOps Foundation
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:

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


<h2>Thank you to all of our Project contributors</h2>
<p>We're grateful for all of the work, time, and effort from the following FinOps practitioners:</p>
<ul>
  <li>Joe Daly</li>
  <li>Noel Crowley</li>
  <li>Mike Martin</li>
  <li>Bhups Hirani</li>
  <li>Eric Mulartrick</li>
  <li>Dennis Chang</li>
  <li>Pete Silva</li>
  <li>Andy Foley</li>
  <li>AJ Bothe</li>
  <li>Steph Gooch</li>
  <li>Noah Abrahams</li>
  <li>Scott Lapish</li>
  <li>Rich Hoyer</li>
</ul>

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'ambassador' %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <div class="flex bg-gray-100 w-full items-stretch p-4 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
        <div>
          <img src="/img/people/ambassadors/{{ person.image }}" alt="{{ person.name }}" width="75" class="rounded-full inline-block mr-4" />
        </div>
        <div class="flex-grow">
          <h3 class="mb-1 my-2 leading-tight">{{ person.name }}</h3>
          <a href="{{ person.linkedin-url }}" class="text-sm text-green-500 hover:text-green-600 transition-colors duration-200">Linkedin Profile</a>
        </div>
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>