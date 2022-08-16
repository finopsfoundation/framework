---

layout: wide
permalink: /about/technical-advisory-council/
search: true

title: FinOps Foundation Technical Advisory Council
description: The FinOps Foundation Governing Board (GB) is responsible for business oversight and budget decisions for the FinOps Foundation.

---

# Technical Advisory Council


The FinOps Technical Advisory Council (TAC) is the technical governing body of the FinOps Foundation which oversees open source standards, best practices, curriculum and technical vision of the FinOps Foundation. The TAC outputs are committed into an open source ecosystem to become standardized best practices.

10 Seats Initially - Mix of Practitioners, GB Appointed, and Premier Members

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for person in site.data.people %}
  {% if person.groups contains 'TAC' %}
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

As defined by the Technical Charter, The Technical Advisory Council (the "TAC") will have ten members determined as follows:

* three individuals selected by vote of the Governing Board of the FinOps Foundation Fund, a directed fund of the Linux Foundation (the “Directed Fund”);
* up to three seats for Premier Members of the Directed Fund, with each Premier Member having the right to appoint a representative to the TAC until such point in time as there are more than three Premier Members of the Directed Fund, after which the Premier Members will nominate and elect among themselves three members of the TAC;
* three individuals that are FinOps Practitioners, as defined in the funding charter of the Directed Fund, selected or elected via a method to be determined by the Governing Board.
* the remaining number of seats to be filled in a manner as determined by the TAC.