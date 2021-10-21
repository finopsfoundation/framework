---

layout: wide
title: About the FinOps Foundation
description: The FinOps Foundation is a non-profit trade association made up of FinOps practitioners around the world - learn more today.


---

# About The FinOps Foundation

The FinOps Foundation is a program of the [The Linux Foundation](http://linuxfoundation.org) (alongside organizations like [Cloud Native Computing Foundation](http://cncf.io)) dedicated to advancing the discipline of cloud financial management through best practices, education and standards. The FinOps Foundation includes 4400+ individual members, representing more than 1500 companies. It provides a variety of training and certification programs including the [FinOps Certified Practitioner](/training-certification/finops-certified-practitioner/) designation. It counts dozens of major service and platform providers as part of our vendor certification programs such as [FinOps Certified Platform](/training-certification/vendor-certification/) and [FinOps Certified Service Provider](/training-certification/vendor-certification/) programs.

- Mission
- Structure
- Technical Advisory Council
- Governing Board
- Staff
- FAQs

## Mission of the FinOps Foundation

To build a **community** where we advance members by empowering them with **standards and best practices** through **education** so they can understand cloud financials as they shift over time.

We are here to advance the people who do cloud financial management:

- Central community for cloud financial management through virtual events, meetups, slack and other channels

- Advance careers of FinOps practitioners through career development, training and certification

- Define cloud financial management standards through open source collaboration


## How is the FinOps Foundation structured?

The FinOps Foundation includes a Governing Board and Technical Advisory Board, as well as a variety of committees such as education.

![](/img/pages/about.png?2)

## Technical Advisory Council (TAC)

The FinOps TAC is the technical governing body of the FinOps Foundation which oversees open source standards, best practices, curriculum and technical vision of the FinOps Foundation. TAC outputs are committed into an open source ecosystem to become standardized best practices.

10 Seats Initially - Mix of Practitioners, GB Appointed, and Premier Members

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for item in site.data.people %}
  {% if item.group == 'TAC' %}
     {% for person in item.people %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <div class="flex flex-col bg-gray-100 w-full items-stretch text-center p-2 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
        <div>
          <img src="{{ person.image }}" alt="{{ person.name }}" width="150" class="rounded-full inline-block" />
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

As defined by the Technical Charter, The Technical Advisory Council (the "TAC") will have ten members determined as follows:

* three individuals selected by vote of the Governing Board of the FinOps Foundation Fund, a directed fund of the Linux Foundation (the “Directed Fund”);
* up to three seats for Premier Members of the Directed Fund, with each Premier Member having the right to appoint a representative to the TAC until such point in time as there are more than three Premier Members of the Directed Fund, after which the Premier Members will nominate and elect among themselves three members of the TAC;
* three individuals that are FinOps Practitioners, as defined in the funding charter of the Directed Fund, selected or elected via a method to be determined by the Governing Board.
* the remaining number of seats to be filled in a manner as determined by the TAC.

## Governing Board

The FinOps Governing Board and Directed Fund supports the Technical Advisory Council and Practitioner community. It is made up of industry professional practitioners, vendors and cloud providers.

The GB currently consists of these representatives:

<div class="flex md:flex-row flex-wrap items-stretch p-4 rounded-md mt-4">
{% for item in site.data.people %}
  {% if item.group == 'GB' %}
     {% for person in item.people %}
     <div class="w-1/2 md:w-1/3 p-2 flex">
      <div class="flex flex-col bg-gray-100 w-full items-stretch text-center p-2 rounded-lg shadow-sm border-solid border-gray-200 border hover:-translate-y-1 hover:shadow-lg transition transform duration-500 hover:border-green-500">
        <div>
          <img src="{{ person.image }}" alt="{{ person.name }}" width="150" class="rounded-full inline-block" />
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

As defined by the FinOps Foundation Participation Agreement, the Governing Board voting members will consist of:

- Individuals that are FinOps practitioners (not associated with cloud vendors)
- The chair of the technical advisory council (the TAC)
- One representative appointed by each Premier Member
- Elected General Member representatives (one seat for for every 10 members)
- The Executive Director

Those on the Governing Board have no vote on the TAC and vice versa, with the exception of the TAC Chairperson who sits on both boards.

## FinOps Foundation Staff

- J.R. Storment, Executive Director
- Stacy Case, Director of Operations
- Rob Martin, Director of Learning
- Andrew Nhem, Content Strategist
- Kevin Emamy, Vendor Partner Advisor
- Tracy Roesler, Program Manager
- William Ospina, Ambassador Program
- Vas Markanastasakis, Principal, FinOps Practice Management
- Steve Trask, Director of Marketing

## FAQs

### Why are we a part of the Linux Foundation?

As part of the LF, FinOps has access to a large scale open source non-profit engine. The LF has over 200 employees and large scale training, marketing and events teams. Its work today extends far beyond Linux, fostering innovation in every layer of the software stack. The Linux Foundation hosts projects spanning enterprise IT, embedded systems, consumer electronics, cloud, networking, and more. A few of these high-velocity projects that are helping redefine what’s possible include Hyperledger for cross-industry blockchain technologies; Automotive Grade Linux, the open software platform for automotive applications; the Open Network Automation Platform project (ONAP) for real-time, policy-driven software automation of virtual network functions; and Kubernetes, the Cloud Native Computing Foundation project for production-grade container orchestration.

### What does this mean for the cloud financial management space?

By increasing awareness and education of FinOps, the Foundation’s efforts will help to grow this space and the opportunities for everyone. The focus of our work is on the practitioner, educating and empowering them to make a difference in their organizations and in their own careers. Similar to previously nascent but burgeoning disciplines like DevOps, when you empower the individual, the entire ecosystem benefits. We are solving the challenges of cloud financial management together, as a community, and there are opportunities for all contributors to this space to participate and grow.

### What was the former structure of the FinOps Foundation before joining Linux Foundation?

Prior to becoming a part of the Linux Foundation in June 2020, the FinOps Foundation (F2) was a standalone non-profit trade association seeking 501 C (6) designation from the IRS as a tax-exempt trade association. It had a board of directors and classes of members: practitioner members, charter members, consulting partners, and cloud service provider members.

### What is the history of the FinOps Foundation?

The FinOps Foundation was born out of Cloudability’s quarterly Customer Advisory Board meetings where many cloud practitioners expressed the need for a community of practitioners to discuss best practices beyond vendor tooling. Very few people know how to implement FinOps in an organization, and there’s not yet a commonly agreed set of published principals. So, in February 2019, it helped to found the FinOps Foundation (F2) with assistance in assisting initial underwriting legal and administrative support. FinOps is now made up of thousands of independent industry experts from companies as diverse as Nationwide, Spotify, Nike, MIT, Atlassian, HERE Technologies, Australia Post, Thermo Fisher Scientific, Just Eat, Pearson, Sainsbury's, Middle East Broadcasting Company, Tabcorp, Autodesk, Neustar, with dozens more joining each week. In June 2020, the FinOps Foundation merged with the Linux Foundation and closed its previous non-profit entity at the end of 2020.
