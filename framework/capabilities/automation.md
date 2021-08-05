---

layout: default
tag: automation

---

# Automation

## What to Automate

Successful FinOps practitioners have many automation tools at their disposal. Some automation has to be very specific to the way their organizations operate. But there are some common automation solutions that we have seen implemented over and over by organizations with successful FinOps practices.

- Tag Governance
Once you have a tagging standard defined for your organization, you can use automation to ensure it’s being followed. You start by identifying the resources with missing tags or incorrectly applied tags, and then have those responsible for the resources address the tagging violations. You then move to stop or/block resources to force action by the owners, and possibly work toward a remove/delete policy for these resources. However, deleting resources is a high-impact automation, so you don’t see many companies getting to this level. We recommend not moving directly to deleting offending resources without working through the earlier, lower-impact levels of automation.

- Scheduled Resource Start/Stop 
Automation enables you to schedule resources to be stopped when not in use (e.g., while you’re away from the office), and then have them brought back online when you need to use them again. The goal for this automation is to minimize impact on teams while realizing large amounts of savings for the hours that their resources are shut down. This automation is often deployed into development and test environments, where the absence of the resource isn’t noticed outside of business hours. You should ensure implementations allow team members to skip a scheduled activity, just in case they need to keep a server active while working late. Also, cancelling a scheduled task should not remove the resource from the automation altogether, just skip that current execution.

- Usage Reduction 
Reduction automation removes such waste, or at least sends alerts to responsible staff members in order to drive better cost optimization. Having automation pull in resource data from services like Trusted Advisor (for AWS), from a third-party cost optimization platform, or from resource metrics directly gives you an easy way to send alerts to the team members responsible for the resources to investigate or, within some environments, to autostop or resize the resources.
