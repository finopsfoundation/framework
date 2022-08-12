---

layout: wide
permalink: /about/governing-board/
search: true

title: FinOps Foundation Governing Board
description: The FinOps Foundation Governing Board (GB) is responsible for business oversight and budget decisions for the FinOps Foundation.
---

# Governing Board

The FinOps Foundation Governing Board (GB) and Directed Fund supports the Technical Advisory Council and Practitioner community. It is made up of industry professional practitioners, vendors and cloud providers.

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'GB' %}
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
  {% endif %}
{% endfor %}
</div>

As defined by the FinOps Foundation Participation Agreement, the Governing Board voting members will consist of:

- Individuals that are FinOps practitioners (not associated with cloud vendors)
- The chair of the technical advisory council (the TAC)
- One representative appointed by each Premier Member
- Elected General Member representatives (one seat for for every 10 members)
- The Executive Director

Those on the Governing Board have no vote on the TAC and vice versa, with the exception of the TAC Chairperson who sits on both boards.