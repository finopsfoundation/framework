---

layout: wide
permalink: /projects/container-cost-allocation/

title: Container Cost Allocation Labels and Dictionary
description: A collection of resources to help kickstart container cost allocation labeling, suggesting schemas to suit various personas and FinOps maturity levels.
page-identifier: container_cost_allocation
identifier: projects
project-title: Container Cost Allocation Labels and Dictionary
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

# Container Cost Allocation Labels and Dictionary

## Introduction

Our Container Cost Allocation project focuses on creating guidance and best practices to practitioners around allocating cost of containers. 
Our project provides suggested container labels that are ready to use and can be combined into useful schemas. We also want this resource to encourage community debate about container cost allocation labeling, schemas, and best practices, inspiring contribution and future improvements.

<iframe width="560" height="315" src="https://www.youtube.com/embed/q0iuFU7qh8M?start=3868" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*We debuted this project as part of the March 2022 FinOps Summit.*

Our group decided to transform the most important parts of that presentation into an interactive tool for our FinOps community.

## How to use this resource

Use this dictionary to learn common container labeling that the Working Group (WG) has sourced from community contributions. Use combinations of these dictionary cards to build out schemas, and to learn of possible mapping variants via "Label alias", where similarly named labels might have similar purposes to one distinct label.

* **Click each filter** to sort cards by the parameters that you choose.
* **Unclick filters** to change how you're sorting the cards, e.g. unclicking the *crawl* parameter will remove the filter seeking cards with the *crawl* label.

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
        <a class="py-1 px-2 shadow-sm text-sm rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 mb-1 inline-block" href="{{ item.code-url }}">On GitHub</a>
      {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

## Ways to contribute
FinOps practitioners can contribute in two ways. This collection of cards is maintained separately from the working group repository that handles more of the raw information and scripts. While we work on a future where we'll source all of this content from one source of truth, everyone's welcome to contribute to either of these repos.

**In short:**
* Contributing to [this repo](https://github.com/finopsfoundation/framework) edits the website content (the above cards)
* Contributing to [this repo](https://github.com/finopsfoundation/sig-containers) edits code examples and raw Working Group content

It can get a little complicated with regards to how we manage the site data. Feel free to fill out issues to communicate your recommendations or <a href="javascript:void(0);" onclick="modalToggle('modal-contribute')">Make a Suggestion</a> to suggest edits to the site.

You can also get in touch with our WG via [Community Slack channel](https://finopsfoundation.slack.com/archives/C0180PC67T2) if you have more questions or want to contribute, or add Issues on the [Working Group's GitHub repo](https://github.com/finopsfoundation/sig-containers).

Thanks for your patience as we improve how we welcome community contributions to our more advanced projects.

## Help Wanted: User Stories!

We welcome any and all community user stories on how to best allocate and manage container costs at scale. User stories will be featured as links on all of these cards and be part of the greater FinOps Foundation collection of stories.

Here's an example of a [User Story](https://www.finops.org/stories/avoid-and-simplify/) and how it connects with other similar User Stories. These stories help us add practical real-world flavor to these Working Group projects, showing how real practitioners solve real FinOps problems.

Get in touch with our WG via [Community Slack channel](https://finopsfoundation.slack.com/archives/C0180PC67T2) if you're interested!

**Not a member yet?** [Request access](http://finops.org/membership/) and join the community!

## Thank you to all of our Project contributors
<p>We're grateful for all of the work, time, and effort from the following FinOps practitioners (in alphabetical order):</p>
<ul>
<li>Bala Kaliamurthy</li>
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

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'container-cost-allocation' %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <a href="{{ person.linkedin-url }}" class="flex bg-gray-100 w-full items-stretch p-4 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
          <div>
            <img src="/img/people/ambassadors/{{ person.image }}" alt="{{ person.name }}" width="50" class="rounded-full inline-block" />
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