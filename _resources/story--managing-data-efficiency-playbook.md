---

layout: wide
permalink: /projects/managing-data-efficiency-playbook/

title: Managing Data Efficiency Playbook by Project N
description: Data efficiency in the cloud involves the application of a wide range of technologies and architectural approaches to reduce the cost and time to store, access and transfer data. This guide extends the Framework Capability Resource Utilization and Efficiency to focus on cloud data efficiency by outlining FinOps maturity characteristics, measures of success, inputs and the functional activities required by FinOps practitioners.
story-description: Data efficiency in the cloud involves the application of a wide range of technologies and architectural approaches to reduce the cost and time to store, access and transfer data. This guide extends the Framework Capability Resource Utilization and Efficiency to focus on cloud data efficiency by outlining FinOps maturity characteristics, measures of success, inputs and the functional activities required by FinOps practitioners.
type: Member Story
source: FinOps Foundation
story-title: Managing Data Efficiency Playbook by Project N
story-date: 2022-06-17
author: Jason Nadeau
company: Project N (Stealth Startup)
industry: Software Development
cloud-provider: AWS, GCP
project-title: Managing Data Efficiency Playbook
label:
framework-capabilities:
- capability_rightsizing
---

# Managing Data Efficiency Playbook by Project N
_author: [Jason Nadeau](https://www.linkedin.com/in/jasonrnadeau/)( [Project N](https://finops.projectn.co/))_ |
_published on: June 17, 2022_ |
_last updated: August 17,  2022_

_Jason is a FinOps-certified Practitioner, and his company helps organizations achieve much higher levels of data efficiency and thus save significantly on their cloud infrastructure costs._


## Definition

Data efficiency in the cloud involves the application of a wide range of technologies and architectural approaches to reduce the cost and time to store, access and transfer data.

This guide extends the Framework Capability [Resource Utilization & Efficiency](https://www.finops.org/framework/capabilities/utilization-efficiency/) to focus on cloud data efficiency by outlining maturity characteristics, measures of success, and the functional activities required by FinOps practitioners and other stakeholders.

Examples include, but are not limited to:
- Data reduction/rehydration technologies such as compression and deduplication physically reduce the size of data (files and objects) stored and transferred within and between clouds. The degree of reduction is dependent on the nature of the data itself, as some data (e.g. log files) reduces better than other data (e.g. encrypted files). Since the baseline rate to store and/or transfer physical data is fixed and set by the cloud providers (e.g. AWS S3 Standard pricing), reducing the physical size of the stored data reduces the “effective” rates to store ($/GB/mo) and the time to transfer ($/GB) that data.
- Data-efficient multi-AZ application architectures and services can similarly reduce, or even eliminate, the effective egress and transfer costs between availability zones.
- Data virtualization technologies can reduce the effective cost and time to create and use copies of data. This is especially helpful for data-intensive test and development environments.
- Data batching technologies can enable more cost-efficient write operations by reducing the effective cost of PUTs.
- Data tiering technologies can lower the cost of relatively infrequently accessed data by moving it into progressively lower cost storage classes over time.

Different data sets have unique latent inefficiencies (and thus savings potential), and require tailored approaches to remove them. Many approaches are also complementary, for example data reduction and data tiering.  And while data efficiency can be applied to any type of data it drives the most business value when applied to large volumes of cloud object data simply due to the scale and growth of object data.

Lower effective rates for data ultimately drive savings (and thus business value) for the organization. Cloud object data is organized by buckets, and each bucket carries a unique potential for data efficiency-driven savings. The lower the expected effective rates for a given bucket, and the larger the bucket size, the greater the savings potential. The savings potential before subtracting any costs to realize those savings is the “gross savings potential”, and after subtracting them becomes the “net savings potential”. Organizations should therefore routinely analyze their data environment to identify and prioritize buckets for use with data efficiency services based on their estimated net savings potential.

When this data efficiency savings potential is summed across all buckets and data it represents the maximum potential for the organization, at that point in time. Initially, this potential is “uncovered”, and as data efficiency services are applied to more buckets and data and the potential savings are realized, that potential becomes “covered”. This covered/uncovered concept and terminology is intentional and analogous to that used for other rate reduction approaches such as reserved instances. Organizations can thus set a KPI on their data efficiency savings coverage % and track progress against it. This is important given that data volumes continue to grow quickly, and thus so does the maximum data efficiency savings potential.

Data efficiency technologies often consume cloud resources (especially compute) and thus cost money, and those costs reduce net savings. They can also take time i.e. add latency to reads and writes of data relative to the object storage baseline. Achieving higher efficiencies, and thus lower effective storage, transfer and access rates, may involve greater compute costs and latencies. As a result, organizations should define KPIs for the underlying efficiency and transparency of the data efficiency services themselves in order to maximize their net savings and utility of their data.

Since data is meant to be actively used to derive business value, data efficiency approaches also must integrate with existing processes and workflows. Organizations should thus ensure data efficiency approaches balance the desire for lower effective rates with the performance and usability needs of applications and end users working with the data.


## Maturity Assessment

#### Crawl

- Tracks current $/GB rates to store and transfer data.
- Has some visibility into latent data inefficiency (and by extension the savings potential for data) using one or more sources such as cloud billing data, infrastructure monitoring tools, data efficiency tools, cloud provider insights/tools.
- Centrally performs some ad hoc prioritization of data for rightsizing.
- Does not report on data efficiency KPIs.

#### Walk

- Able to estimate the net savings potential and effective $/GB rates for various data sets.
  - Able to estimate gross savings potential that can be avoided by rightsizing inefficient data and architectures. This potential will be unique across different data sets.
  - Able to estimate the required costs to rightsize the data, summing costs across people, infrastructure, and paid solutions. E.g. “it will cost 50 man hours to make this change at an hourly rate of xyz”, or “it will cost $0.01/GB for a data efficiency platform to realize the savings potential of the data”.
- Tracks the latencies to access and use data, and can estimate the performance impact of applying data efficiency approaches.
- Centrally prioritizes data for rightsizing in a semi-regular cadence with input from both Tech and Finance.
- Takes manual action to review recommendations and takes appropriate action(s) to increase data efficiency and generate net savings.
- Tracks the data efficiency savings coverage KPI, and achieves up to 50% coverage.
- Tracks the data efficiency-specific resource cost KPIs, with costs consuming between 20% and 50% of gross savings.
- Tracks the average data efficiency read/write latency KPI and thus the impact of data efficiency approaches on performance, and achieves increases of no greater than 5X latency relative to the cloud object storage baseline.
- Applies data efficiency to most data except frequently accessed data.
- Integrates data efficiency inline with applications on an-adhoc basis.
- Implements ad hoc reporting on other relevant data efficiency KPIs.

#### Run

- Frequently and centrally prioritizes data for rightsizing with input from both Tech and Finance.
- Automatically applies data efficiency, except where application changes are required.
- Achieves data efficiency savings coverage of >50%.
- Data efficiency-specific resource costs consume <20% of gross savings.
- Data efficiency increases average read/write latency by <2X relative to object storage baseline
- Applies data efficiency without regard to access frequency.
- Integrates data efficiency inline and by default for all existing and new applications.
- Uses data efficiency to reduce effective $/GB intra-cloud transfer rates as well as inter-cloud transfer rates.
- Implements regular reporting and notifications for data efficiency KPIs.


## Functional Activity

#### As someone in a Business/Product role, I will…
- Clearly define KPIs so that engineering are able to design and/or purchase appropriate data efficiency services within the defined boundaries.
- Provide demand forecasts and information on the demand pattern profiles (daily/weekly/monthly/cyclic).
- Establish the business goals for the objective - i.e. reduce the effective storage rate by >20%, release to customers as quickly as possible, release to customers w/ an availability of 99.99%, etc. (aka Business Value Creation!)

#### As someone in a Finance/FinOps role, I will…
- Highlight any opportunities to reduce effective storage and transfer rates in order to drive net savings, and work with the teams to review feasibility of alternative options.
- Help create the reporting to track and report on the impact on value of data inefficiencies.
- Partner with the Engineering organization to establish budgetary & efficiency targets.

#### As someone in an Engineering/Operations role, I will…
- Purchase (or architect) data efficiency services with the KPIs and forecasts guiding decisions.
- Purchase (or build) automation to measure and output data efficiency metrics.
- Regularly review effective storage rates and opportunities to generate new net savings from additional data sets.

#### As someone in an Executive role, I will…
- Deliver the business value creation vision and strategy.
- Provide executive level support in the defined data efficiency KPIs, establishing credibility in the FinOps efficiency program.


## Measure(s) of Success & KPI
- Data efficiency is applied to at least 50% of stored data (i.e. net savings coverage is >50%)
- Data efficiency is applied to at least 80% of data transferred between AWS and GCP.
- Effective $/GB/mo storage rates are reduced by at least 30% relative to the S3 Standard baseline.
- Data efficiency-specific resource costs consume <20% of gross savings.
- Data efficiency increases average read/write latency by <3X relative to object storage baseline.
