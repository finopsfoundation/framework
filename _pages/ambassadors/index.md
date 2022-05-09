---
layout: wide
permalink: /ambassadors/
search: true
title: About the FinOps Foundation Ambassador Program
description: FinOps Ambassadors (FOAs) are practitioners who are passionate about the FinOps Foundation community, recognized for their expertise, and willing to help others learn and succeed. Get more information about how to become an Ambassador to help us continue to grow our community.

---
# About the FinOps Foundation Ambassador Program

<img src="http://placehold.jp/800x500.png">

* <strong><a href="">Meet our Ambassadors</a></strong> and get to know a bit of their FinOps stories and how they help our community.
* <strong><a href="">Learn more about the program</a></strong> and fill out an application to become a FinOps Foundation Ambassador.

---

## What Do FinOps Ambassadors Do?

FinOps Ambassadors (FOAs) are practitioners who are passionate about the FinOps Foundation community, recognized for their expertise, and willing to help others learn and succeed.

<img src="http://placehold.jp/800x500.png">

Successful ambassadors are FinOps Foundation members who enjoy communicating best practices, stories, and who challenge current practices to improve them for everyone. These people are bloggers, influencers, and evangelists who are already engaged with the FinOps Foundation in some way including contributing to the framework, participating in working groups, attending community events, and more.

The FinOps Ambassador program exists to empower community members with tools and resources needed to:
* Promote FinOps
* Educate and coach your local community on the FinOps Foundation mission
* Contribute to FinOps Framework, working groups and other projects

---

## Meet Our Ambassadors

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for item in site.data.people %}
  {% if item.group == 'ambassadors' %}
     {% for person in item.people %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <div class="flex flex-col bg-gray-100 w-full items-stretch text-center p-2 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
        <div>
          <img src="/img/people/{{ person.image }}" alt="{{ person.name }}" width="150" class="rounded-full inline-block" />
        </div>
        <div class="flex-grow">
          <h3 class="mb-1 mt-2">{{ person.name }}</h3>
          <p class="px-2 mb-1 leading-snug">{{ person.job-title }} at {{ person.company }}</p>
        </div>
        <a href="{{ person.linkedin-url }}" class="text-sm text-green-500 hover:text-green-600 transition-colors duration-200">Linkedin Profile</a>
      </div>
    </div>
     {% endfor %}
  {% endif %}
{% endfor %}
</div>

## Apply to Become an Ambassador Today
We take Ambassador membership seriously, so we invite every prospective member to check out our requirements, standards, and code of conduct before submitting an application. The more we can have experts take on the Ambassador role, the more we can strengthen our mission to improve FinOps best practices for the community.

[Get more details and apply today.](/ambassadors/apply/)