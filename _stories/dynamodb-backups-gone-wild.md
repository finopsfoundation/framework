---

layout: story

title: DynamoDB Backups Gone Wild
description:
story-title: DynamoDB Backups Gone Wild
story-date: 2021-10-08
author: AJ Bothe
company: Proctor & Gamble
company-size:
industry: Consumer Goods
cloud-provider: AWS
tooling-services:
framework-persona: Engineering & Operations
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
- dynamodb

---

I recently joined a team and one of our accounts was spending an insane amount on DynamoDB (close to $20k / mo) for a set of tables that was under 20GB. Come to find out we had a process to backup the tables every hour of every day with no retention policy. This was implemented before point-in-time recovery was implemented. If you compound the costs of backups, it means that backup storage costs were growing exponentially each month. We checked with the business and asked the basic questions like “Do you really need this much retention?”. Switching to `point-in-time` recovery and deleting old backups from DynamoDB resulted in significant savings (~$12k / month) and still allowed us to restore to any minute within the last 35 days. Deleting the old backups is the most difficult part surprisingly, due to limitations of the API, so a special script had to be written to loop through each backup.
