---

layout: wide

---

# Personas

<div class="flex flex-col md:flex-row bg-gray-100 p-4 mb-6">
  <div class="flex-none">
    <img src="/img/framework/persona-finops.svg" alt="FinOps Executive Persona" width="150" class="relative" />
  </div>
  <div class="p-4">
    <h2 class="mt-0">FinOps</h2>
    <p>FinOps practitioners bridge business, IT and Finance teams by enabling evidence-based decisions in near-real time to help optimize cloud use and increase business value.  They focus on establishing a FinOps culture and enabling stakeholder teams by demonstrating a working knowledge of the <a href="/framework/principles">Principles</a> and <a href="/framework/capabilities">Capabilities</a> of the FinOps Framework, a prescriptive model of actions and best practices.</p>
    <p>See persona details for: <a href="#finops" class="badge-dgrey">FinOps</a></p>
  </div>
</div>

<div class="flex flex-col md:flex-row bg-gray-100 p-4 mb-6">
  <div class="flex-none">
    <img src="/img/framework/persona-executive.svg" alt="FinOps Executive Persona" width="150" class="relative" />
  </div>
  <div class="p-4">
    <h2 class="mt-0">Executives</h2>
    <p>Executives, such as a VP/Head of Infrastructure, Head of Cloud Center of Excellence, CTO, or CIO, focus on driving accountability and building transparency, ensuring teams are being efficient, and not exceeding budgets.</p>
    <p>See persona details for: <a href="#ceo" class="badge-dgrey" >CEO</a> <a href="cto" class="badge-dgrey">CTO/CIO</a> <a href="cfo" class="badge-dgrey">CFO</a></p>
  </div>
</div>

<div class="flex flex-col md:flex-row bg-gray-100 p-4 mb-6">
  <div class="flex-none">
    <img src="/img/framework/persona-product.svg" alt="FinOps Product Owner Persona" width="150" class="relative" />
  </div>
  <div class="p-4">
    <h2 class="mt-0">Business/Product Owner</h2>
    <p>These participants are usually Business and Product Owner team members, such as a Director of Cloud Optimization, Cloud Analyst, or Business Operations Manager.</p>
    <p>See persona details for: <a href="#product-owner" class="badge-dgrey">Product Owner</a></p>
  </div>
</div>

<div class="flex flex-col md:flex-row bg-gray-100 p-4 mb-6">
  <div class="flex-none">
    <img src="/img/framework/persona-engineer.svg" alt="FinOps engineer Persona" width="150" class="relative" />
  </div>
  <div class="p-4">
    <h2 class="mt-0">Engineering and Operations</h2>
    <p>Engineers and Ops team members, such as Lead Software Engineers, Principal Systems Engineers, Cloud Architects, Service Delivery Managers, Engineering Managers, or Directors of Platform Engineering, focus on building and supporting services for the organization. Cost is introduced as a metric in the same way that other performance metrics are tracked and monitored. Members of these teams consider the efficient design and use of resources via activities like rightsizing (the process of resizing cloud resources to better match the workload requirements), allocating container costs, finding unused storage and compute, and identifying whether spending anomalies are expected.</p>
    <p>See persona details for: <a href="#engineering-lead" class="badge-dgrey">Engineering Lead</a></p>
  </div>
</div>

<div class="flex flex-col md:flex-row bg-gray-100 p-4 mb-6">
  <div class="flex-none">
    <img src="/img/framework/persona-finance.svg" alt="FinOps finance Persona" width="150" class="relative" />
  </div>
  <div class="p-4">
    <h2 class="mt-0">Finance/Procurement</h2>
    <p>Finance and procurement team members, including Technology Procurement Managers, Global Technology Procurement, Financial Planning and Analyst Managers, and Financial Business Advisors, use the reporting provided by the FinOps team for accounting and forecasting. They work closely with FinOps practitioners to understand historic billing data so that they can build increasingly accurate cost models. They use their forecasts and expertise from the FinOps team to engage in rate negotiations with cloud service providers.</p>
     <p>See persona details for: <a href="#itfm" class="badge-dgrey">IT Finance Management</a> <a href="#procurement" class="badge-dgrey">Procurement</a></p>
  </div>
</div>

## Adopting FinOps: Understanding Executive Personas
When proposing the adoption of a FinOps function within an organization, there will be a need to brief a variety of personas among the executive team to gain approval, buy-in, and involvement in conducting FinOps and achieving its goals. 

Each Executive team persona is described below, in terms of their goals, concerns, key messaging and useful KPIs. By understanding the motivations of each executive persona, a FinOps champion will be able to describe the value of FinOps more effectively, minimizing the time and effort to gain alignment. Please see [the main Adopting FinOps](/projects/adopting-finops) section for more context.


{% for persona in site.data.personas %}

<div id="{{ persona.identifier }}">

  <h2>{{ persona.name }}</h2>
  <p><b>Primary Goal</b> {{ persona.primary-goal }}</p>


  <div class="flex flex-col md:flex-row flex-wrap items-stretch">
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col rounded-lg p-2">
        <h4 class="text-center my-4">Objectives</h4>
        <ul>
          {% for item in persona.objectives %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">Frustrations</h4>
        <ul>
          {% for item in persona.frustrations %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">Key Metrics</h4>
        <ul>
          {% for item in persona.key-metrics %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="md:w-1/4 p-1 flex items-stretch">
      <div class="w-full bg-gray-100 flex flex-col items-stretch rounded-lg p-2">
        <h4 class="text-center my-4">FinOps Benefits</h4>
        <ul>
          {% for item in persona.finops-benefits %}
          <li>{{ item.item }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
  </div>

</div>

{% endfor %}



## FinOps Team Structures

![image](/img/resources/finops-team-structure.png)

The above diagram demonstrates how, for organizations operating on the FinOps model, a cross-functional team known as a Cloud Cost Center of Excellence (CCoE) interacts with the rest of the business to manage the cloud strategy, governance, and best practices that the rest of the organization can leverage to transform the business using the cloud.
