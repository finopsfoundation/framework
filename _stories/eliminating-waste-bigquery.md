---

layout: story

title: Eliminating Waste in BigQuery
description:
story-title: Eliminating Waste in BigQuery
story-date: 2021-10-08
author: Rich Hoyer
company: SADA
company-size:
industry: Information Technology & Services
cloud-provider: GCP
tooling-services:
framework-persona: FinOps Practitioner
framework-maturity: Run
framework-capabilities:
- capability_rightsizing
framework-projects:
- project_reducing-waste
order:
tags:
- rightsizing
- utilization
- database

---

BigQuery (BQ) is a powerful tool compared to traditional hosted database management systems. Because BQ is serverless, has high reliability and speed, and offers on-demand querying services, among other features, the tool is top-rated. The pricing structure of BiqQuery is very different from competitors’ offerings, however. Rather than charging for runtime for a database cluster, for example, Google charges for how much data is scanned by BigQuery queries, combined with other charges for items such as how much data is stored. On a relative basis, however, the amount of data scanned for a query is by far the largest and most important category of charges.

The most important skill for eliminating waste on BigQuery is to design database structures and craft queries in a manner that minimizes the amount of data being scanned by queries. We dramatically lowered our BigQuery costs first by partitioning our tables using timestamps, and then by adding a condition to our queries that only scanned the partitions we needed. You can think of partitioned tables as subtables. Therefore, querying a partitioned table only looks at a subset of the data and eliminates the wasted cost of scanning the query author isn’t interested in. In our case, the tables are partitioned by date since we tend to analyze only specific time periods of our data. We then adopted a process of pulling the data we wanted to scan for specific time periods into a new, dedicated table, and - critically - we did this by querying only the partitions of our primary table that were necessary. For example, instead of querying in the form:

```Select [fields desired] from [dataset.table] where date between '2021-05-01' and '2021-08-01';```

We began running:

```Select [fields desired] from [dataset.table] where  _PARTITIONTIME BETWEEN TIMESTAMP('2021-05-01') AND TIMESTAMP('2021-08-01');```

Those two changes alone - partitioning our main table and only querying specific partitions - resulted in a 90% reduction in our costs to pull data into a dedicated table! For example to pull one set of data for three months for a particular data set cost $150 with the first query and only $15 for the second query that scanned specific partitions. Once we began using partitioned tables, our processing time also decreased by 70%. From there we could run an arbitrarily large number of queries on the dedicated table for $1-$2 day. The savings relative to querying the main table without partitions were incredible using this approach. Unfortunately, the inverse is also true with BigQuery: when data structures and queries are not carefully developed, there can be enormous waste associated with running queries.

Note that we limited our queries only to the columns we were interested in (ie, we stopped using “SELECT * “ unless we really needed t!). This step alone can save up to 85% of the cost of any given query. We also got into the habit of using the Preview option in BQ to see sample results of a query before running actual queries. Previewing data is free so this results in additional savings.

Next, we took a look at the structure of our queries outside of conditions such as querying table partitions. We tend to use a lot of UPDATE statements to populate new dimensions and metrics in our data using logical conditions. For example, “if the following conditions are true, set this field to value X.” Initially, our scripts updated columns with values stored in independent statements. For instance, we set the values of a column to an initial value. Then, we did processing and updated those values depending on certain conditions from other columns. We performed the process using CASE - WHEN statements. Later, we reworked the query so that all values in a given column would be processed only once. The query code appeared to be slightly more complex, but it was not. In the end, we reduced the processing time from 45 minutes for a representative script to 20 seconds. The amount of data processed also decreased by 95% as we did the processing in one go. The learning, in this case, is to keep queries as dense as possible in the sense that a single statement is used whenever possible, even if many different conditions are considered by the query. Many of the queries we used were derived from queries that were written for other database types where the amount of data scanned had no effect cost. As such, we didn’t put any development effort into managing the amount of data scanned. It is therefore valuable to revisit old queries to ensure they are tailed to BigQuery’s pricing dynamics. The phrase “Do not fix something that works” does not apply in BQ unless the SQL code is as efficient as it can be.
