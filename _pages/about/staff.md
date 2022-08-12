---

layout: wide
permalink: /about/staff/
search: true

title: FinOps Foundation Staff
description: The FinOps Foundation staff support the community and related initiatives.

---

# FinOps Foundation Staff

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'staff' %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <div class="flex flex-col bg-gray-100 w-full items-stretch text-center p-2 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
        <div>
          <img src="/img/people/{{ person.image }}" alt="{{ person.name }}" width="150" class="rounded-full inline-block" />
        </div>
        <div class="flex-grow">
          <h3 class="mb-1 mt-2">{{ person.name }}</h3>
          <p class="px-2 mb-1 leading-snug">{{ person.job-title }}</p>
        </div>
        <a href="{{ person.linkedin-url }}" class="text-sm text-green-500 hover:text-green-600 transition-colors duration-200">Linkedin Profile</a>
      </div>
    </div>
    {% endif %}
{% endfor %}
</div>