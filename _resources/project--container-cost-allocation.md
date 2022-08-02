---

layout: wide
permalink: /projects/container-cost-allocation/

title: Container Cost Labels and Dictionary
description: A collection of resources to help kickstart container cost allocation labeling, suggesting schemas to suit various personas and FinOps maturity levels.
page-identifier: container_cost_allocation
identifier: projects
project-title: Container Cost Labels and Dictionary
project-description: A collection of resources to help kickstart container cost allocation labeling, suggesting schemas to suit various personas and FinOps maturity levels.
date-added: Aug 2022
type: Utility
source: FinOps Foundation
label: 
cloud-provider: 
  - Multi-Cloud
framework-capabilities:
  - cost-allocation
---

# Container Cost Labels and Dictionary

Our Container Cost Allocation project is focused on providing guidance and best practices to practitioners around allocating cost of containers. 
A major goal is to provide suggested container labels that are ready to use, and to combine into useful schemas. We also want this resource to encourage  community debate about container cost allocation labeling, schemas, and best practices, inspiring contribution and future improvements.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IwVBmcaiY0M" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*We debuted this project as part of the March 2022 FinOps Summit.*

Our group decided to transform the most important parts of that presentation into an interactive tool for our FinOps community.

## How to use this resource

Use this dictionary to learn common container labeling that the Working Group (WG) has sourced from community contributions. Use combinations of these dictionary cards to build out schemas, and to learn of possible mapping variants via "Label alias", where similarly named labels might have similar purposes to one distinct label.

The source material for these labels, schemas, and definition are up for debate and constructive improvement on our [Working Group documentation](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-dictionary/README.md). If you also want to contribute to this page please <a href="javascript:void(0);" onclick="modalToggle('modal-contribute')">make a suggestion.</a>

**NOTE:** Container Cost Allocation labeling and schema may greatly differ between different organizations with different use cases, goals, optimizations, and cloud service providers. The goal here is to provide an opinionated example about how to tackle the challenge of allocating container costs.

<b>Filter by FinOps Persona:</b>
<fieldset data-filter-group class="mb-4">
  <button type="button" class="badge-dgrey" data-toggle=".executive">Executives</button>
  <button type="button" class="badge-dgrey" data-toggle=".business">Business/Product Owner</button>
  <button type="button" class="badge-dgrey" data-toggle=".engineering">Engineers/Operations</button>
  <button type="button" class="badge-dgrey" data-toggle=".finance">Finance/Procurement</button>
</fieldset>

<b>Filter by FinOps Maturity Level:</b>
<fieldset data-filter-group>
  <button type="button" class="badge-dgrey" data-toggle=".crawl">Crawl</button>
  <button type="button" class="badge-dgrey" data-toggle=".walk">Walk</button>
  <button type="button" class="badge-dgrey" data-toggle=".run">Run</button>
</fieldset>

<sup>Check out our community documentation on [FinOps Personas](/framework/personas) and [Maturity Model](/framework/maturity-model) for more information.
</sup>

<div class="flex flex-col md:flex-row flex-wrap items-stretch mt-4 js-waste" id="js-waste">
{% for item in site.data.container-cost-allocation %}
  <div class="md:w-1/2 p-3 flex items-stretch mix {% if item.label-name %}{% for label in item.label-name %}{{ label | downcase }} {% endfor %}{% endif %} {% if item.maturity == 'crawl' %} crawl {% elsif item.maturity == 'walk' %} walk {% elsif item.maturity == 'run' %} run {% endif %} {% if item.personas contains 'executive' %} executive {% endif %} {% if item.personas contains 'business' %} business {% endif %} {% if item.personas contains 'engineering' %} engineering {% endif %} {% if item.personas contains 'finance' %} finance {% endif %}">
    <div class="w-full bg-gray-100 rounded-lg px-6 py-8 border-solid border-gray-100 border hover:border-green-500 transition-colors duration-200 shadow-sm cursor-pointer">
      <h3 class="text-xl font-bold text-gray-700 mb-2 mt-0 leading-6">{{ item.label-name }}</h3>
      <h4 class="my-4 mt-0 text-base font-normal text-gray-700 tracking-tight">{{ item.label-definition }}</h4>
      <div class="my-2">
        {% if item.label-name %} 
          {% for maturity in item.maturity %}
            <div class="text-xs font-semibold text-gray-700 tracking-wider uppercase inline-block pr-4 py-px">{{ maturity }}</div>
          {% endfor %}<br>
          {% for personas in item.personas %}
            <div class="text-xs font-semibold text-gray-700 tracking-wider uppercase inline-block pr-4 py-px">{{ personas }}</div>
          {% endfor %}
        {% endif %}
      </div>
      <p><strong>Context:</strong> {{ item.context }}</p>
      <p><strong>Common Resources:</strong> {{ item.common-resources }}</p>
      <p><strong>Aliases:</strong> <em>{{ item.label-alias }}</em></p>
      <p><strong>Example:</strong> <code>{{ item.example }}</code></p>
      <div>
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
  </div>
{% endfor %}
</div>

## Help Wanted: User Stories!

We welcome any and all community user stories on how to best allocate and manage container costs at scale. User stories will be featured as links on all of these cards and be part of the greater FinOps Foundation collection of stories. Get in touch with our WG via [Community Slack channel](https://finopsfoundation.slack.com/archives/C0180PC67T2) if you're interested! Not a member yet? [Request access](http://finops.org/membership/) and join our project.

## Thank you to all of our Project contributors
<p>We're grateful for all of the work, time, and effort from the following FinOps practitioners (in alphabetical order):</p>
<ul>
<li>Bala kaliamurthy</li>
<li>Dan Casson</li>
<li>David Sterz</li>
<li>Erik Peterson</li>
<li>Hannah Raikes</li>
<li>Jonathan Morin</li>
<li>Kevin Mueller</li>
<li>Laila Majidi</li>
<li>Noah Abrahamas</li>
<li>Pavan Chavva</li>
<li>Roi Rav-Hon</li>
<li>Sean Pomeroy</li>
<li>Stephen Arthur</li>
<li>Stuart Davidson</li>
<li>Youssef Ibrahim</li>
</ul>
