---

layout: collection
title: Just the Links - Volume 8
description: Originally published April 21, 2021 at https://finopsforengineers.substack.com/p/just-the-links-volume-8 
persona: engineering

---

## [Performance and Price Comparison (on EC2)](https://www.performancemagic.com/2021/02/27/performance-price-comparison/)
A great independent review of the different EC2 types using a Wordpress installation. If anything, it proves out the Graviton processors are a real solution that should be considered given the performance and cost.

## [Guide to k8s autoscaling for cloud cost optimization](https://cast.ai/blog/guide-to-kubernetes-autoscaling-for-cloud-cost-optimization/)
There are two types of autoscaling in k8s: horizontal (add/subtract more nodes) and vertical (resize nodes). The Cluster Autoscaler component can be used to help manage costs, including with a mixed instance strategy that allows you to choose from various instance types.

## [AWS Lambda@Edge changes billing duration from 50ms to 1ms](https://aws.amazon.com/about-aws/whats-new/2021/03/cloudfront-lambda-at-edge-billing-granularity/)
Always a good thing.

## [AWS EC2 Auto Scaling introduces Warm Pools to accelerate scale while saving money](https://aws.amazon.com/about-aws/whats-new/2021/04/amazon-ec2-auto-scaling-introduces-warm-pools-accelerate-scale-out-while-saving-money/)
Good for applications that have a long bootstrap process. The instances are pre-initialized but in a stopped state, as opposed to the previous way of having to initialize a fresh instance. The instances will just boot up within about 30 seconds.

## [AirBnB’s Journey Towards Cloud Efficiency](https://medium.com/airbnb-engineering/our-journey-towards-cloud-efficiency-9c02ba04ade8)
(Thanks to Chris Aniszczyk for the find) AirBnB’s approach to cost efficiency is a six-part approach: 

* Capacity management: savings plans and RIs
* Waste elimination: removing unused/underused assets
* Elasticity: k8s and autoscaling
* Consumption attribution: cost visibility
* Consumption monitoring: cost usage trends
* Demand management: budgeting and forecasting

While not completely comprehensive this is a great post on the benefits in approaching your cost management in this way.

## [Getting Engineers on Board with Cloud Cost Optimization Part 1/3](https://www.capacitas.co.uk/insights/getting-engineers-on-board-cloud-cost-optimisation-part-1/3)
Three key takeaways here:

1. Do a deep dive on end-to-end performance
2. Understand engineers’ challenges without talking about costs
3. Help engineers fix stability issues and other performance problems

## [Getting Engineers on Board with Cloud Cost Optimization Part 2/3](https://www.capacitas.co.uk/insights/getting-engineers-on-board-with-cloud-cost-optimisation-part-2/3)
The follow up to part 1 (above), three changes you can make to help achieve better cost performance:

1. Recognize tools alone won’t solve stability and cost
2. Models should include costs, capacity, and performance
3. Have ambitious goals when it comes to yearly targets

## [Whose Code is it Anyway](https://engineeringblog.yelp.com/2021/01/whose-code-is-it-anyway.html)
This talks about the hard task of assigning ownership to cloud assets. This is something that we all continue to struggle with to some degree.

## [Predict Your Future and Make Your CFO Happy](https://www.lastweekinaws.com/podcast/aws-morning-brief/predict-your-future-and-make-your-cfo-happy/)
Yet another “why tagging is important” story.

## [AWS S3 Multipart Uploads - Avoiding Hidden Costs from Unfinished Uploads](https://blog.doit-intl.com/aws-s3-multipart-uploads-avoiding-hidden-costs-from-unfinished-uploads-c9f3e0c798aa)
Creating some lifecycle rules to help manage orphaned multiparts is pretty straight forward and this post goes into some good detail on it.

## [Outdated Calculus of Cloud Cost Containment](https://orangematter.solarwinds.com/2021/04/20/outdated-calculus-cloud-cost-containment/)
The author makes the case of using APM to help not only monitor and make your  cloud workload more efficient.

## [Serverless Patterns Collection](https://serverlessland.com/patterns)
An awesome collection of serverless workload patterns. Pay for what you use!

## [Azure adds programmatic pricing API](https://www.theregister.com/2021/04/15/azure_retail_rates_api_adds_16_currencies/)
There are some pretty cool use cases to getting pricing pulled in programmatically: think CICD pipelines that can estimate costs, or alerting mechanisms that notify you when certain prices go down.

## [EC2 Pricing: The Abridged Guide](https://notesfrommwhite.net/2021/04/08/ec2-pricing-the-abridged-guide/)
A good overview of what EC2 is and how it’s priced - this would be a good post to share with finance or executives as a reference.

## [Estimate Amazon EC2 Spot Instance cost savings with AWS Glue Databrew, AWS Glue, and Amazon QuickSight](https://analyticsweek.com/content/estimate-amazon-ec2-spot-instance-cost-savings-with-aws-glue-databrew-aws-glue-and-amazon-quicksight/?utm_source=rss&amp;utm_medium=rss&amp;utm_campaign=estimate-amazon-ec2-spot-instance-cost-savings-with-aws-glue-databrew-aws-glue-and-amazon-quicksight)
A great step-by-step guide for comparing what your spot costs would be next to on-demand.

## [Discovering and Deleting Incomplete Multipart Uploads to Lower Amazon S3 Costs](https://aws.amazon.com/blogs/aws-cost-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/)
Seems to be a popular topic recently (see above), but this one is authored by AWS. Not as much detail though.

## [AWS vs Azure vs GCP](https://www.veritis.com/blog/aws-vs-azure-vs-gcp-the-cloud-platform-of-your-choice/)
A feature and cost-wise comparison of the three major cloud providers. Has some decent charts to reference.

This material provided in association with the [FinOps for Engineers](https://finopsforengineers.substack.com/p/just-the-links-volume-9) newsletter. Like what you see? Consider signing up!
