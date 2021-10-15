---

layout: wide

title: Reducing Waste
description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.
page-identifier: reducing_waste
project-title: Reducing Waste
project-description: A collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.

---

## Playbook Details
* Status: Graduated
* Slack room: https://finopsfoundation.slack.com/archives/C029SCMA50B

---

# Reducing Waste

This Project focuses on providing a collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools. You can sort each card by cloud service provider or savings potential.

**Filter by cloud provider:**
<br>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter="all">All</button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter=".aws">AWS<button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter=".gcp">Google Cloud<button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block px-2 py-px" data-filter=".azure">Azure<button>

**Filter by saving potential:**
<br>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter="all">All</button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter=".saving-1">&#36;<button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block mr-2 px-2 py-px" data-filter=".saving-2">&#36;&#36;<button>
<button type="button" class="bg-green-500 rounded-lg text-sm font-semibold text-white tracking-wider uppercase inline-block px-2 py-px" data-filter=".saving-3">&#36;&#36;&#36;<button>



<div class="flex flex-col md:flex-row flex-wrap items-stretch js-waste" id="js-waste">
{% for item in site.data.reducing-waste %}
  <div class="md:w-1/2 p-3 flex items-stretch mix {% if item.cloud-provider %}{% for cloud in item.cloud-provider %}{{ cloud | downcase }} {% endfor %}{% endif %} {% if item.savings-potential == '$' %}saving-1 {% elsif item.savings-potential == '$$' %} saving-2 {% elsif item.savings-potential == '$$$' %} saving-3 {% endif %}">
    <div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
      <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ item.cloud-service-name }}</h3>
      <h4 class="my-4 mt-0 text-base font-normal text-gray-700 tracking-tight">{{ item.cloud-product }} - {{ item.type | capitalize }}</h4>
      <div class="my-2">
        {% if item.cloud-provider %} 
          {% for cloud in item.cloud-provider %}
            <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px">{{ cloud }}</div>
          {% endfor %}
        {% endif %}
        <div class="bg-gray-200 rounded-lg text-sm font-semibold text-gray-700 tracking-wider uppercase inline-block px-2 py-px">{{ item.savings-potential }}</div>
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


## Thank you to all of our Project contributors
We're grateful for all of the work, time, and effort from the following FinOps practitioners:

* Joe Daly
* Noel Crowley
* Mike Martin
* Bhups Hirani
* Eric Mulartrick
* Dennis Chang
* Pete Silva
* Andy Foley
* AJ Bothe
* Steph Gooch
* Noah Abrahams
* Scott Lapish
* Rich Hoyer

### Get involved

If you'd like to add a waste or efficiency card, please feel free to suggest a contribution to this page using the link below or above.