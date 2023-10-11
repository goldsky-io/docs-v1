---
title: Pricing
description: Understand how metered billing works on Goldsky
---

## How billing works

Goldsky allows you to pay for exactly what you use. There is also a generous free tier for developers and hobbyists.

## Subgraphs

We track usage based on two metrics - the amount of active subgraphs, and the amount of data stored across all subgraphs in your project.

#### Active Subgraphs

The amount of active subgraph workers, tracked hourly. If you pause or delete a subgraph, it no longer gets billed.

Examples:

1. If you have 10 subgraphs, you will be using **10** _subgraph worker hours_ every hour. At 730 hours in the average month, with 10 subgraphs you would incur **7,300** _subgraph worker hours_.
2. If you start with 10 subgraphs in a billing period and delete all of them in the middle of the billing period, you are charged for 5 subgraphs that billing period.

#### Subgraph entities stored

The number of entities stored across all the subgraphs in your project. This is tracked hourly as well. If you delete a subgraph, it no longer gets tracked. All subgraph entities in a project count towards the projects usage cumulatively.

Examples:

1. If you have 3 subgraphs that have 30,000 entities collectively, you will be using **30,000** _subgraph entity storage hours_ every hour.
   At 730 hours in the average month, you will incur `30,000 * 730 = 21,900,000` _subgraph entity storage hours_ in that month.
2. If you start with 3 subgraphs, each with 10,000 entities, and you delete two of them after 10 days, you will be using **30,000** _entity subgraph hours_ for the first 10 days, then **10,000** _entity subgraph hours_ after that.

### Free Tier

#### Active Subgraphs

Up to 3 concurrent subgraphs a month, or more precisely, 2250 worker hours.

#### Subgraph Storage

Up to 100,000 entities stored for a whole month, or more precisely, 75,000,000 entity storage hours.

You will be incurring usage for each hour that each subgraph in your project is deployed and active. If you have 2 subgraphs deployed and active for 2 hours each, you will accumulate 4 hours of usage.

When you exceed free tier limits in the Starter plan, subgraph indexing will be paused but they will still be queryable.

### Rates

<!-- prettier-ignore-start -->

{% table .m-0 %}
-
-
---
-
  **Active Subgraphs** {% .m-0 .table-header %}

  (subgraph worker-hours) {% .m-0 %}
-
---
-
  For the first **3** subgraphs a month {% .m-0 %}

  (**1** to **2,250** worker-hours) {% .m-0 %}
- Free {% .m-0 %}
---
-
  Above **3** subgraphs a month {% .m-0 %}

  (**2,251+** worker-hours) {% .m-0 %}
-
  **$0.05**/hour, {% .m-0 %}

  equates to **~$36.50 a month per additional subgraph** {% .m-0 %}
---
- &nbsp; {% colspan="2" .m-0 %}
---
-
  **Subgraph Storage** {% .m-0 .table-header %}

  (subgraph entity storage-hours) {% .m-0 %}
-
---
-
  For the first **100,000 subgraph entities** a month {% .m-0 %}

  (**1** to **75,000,000** storage-hours) {% .m-0 %}
- Free {% .m-0 %}
---
-
  For the next **100,001 to 10,000,000** entities a month {% .m-0 %}

  (**75,000,001** to **7,500,000,000** storage-hours) {% .m-0 %}
-
  **$0.0053** per **100,000** entities, {% .m-0 %}

  equates to **~$4.00 a month per 100,000 entities** {% .m-0 %}
---
-
  above **10,000,000** entities a month {% .m-0 %}

  (**7,500,000,001+** storage-hours) {% .m-0 %}
-
  **$0.0014** per **100,000** entities, {% .m-0 %}

  equates to **~$1.05 a month per 100,000 entities** {% .m-0 %}
{% /table %}

<!-- prettier-ignore-end -->

## Mirror

#### Active Pipeline Workers

The number of active workers, billed hourly. A small pipeline (the default) will be 1 worker. Pipelines can have multiple parallel workers, and each worker incurs usage separately. This is billed hourly.

| Resource size | Workers |
| ------------- | ------- |
| small         | 1       |
| medium        | 4       |
| large         | 10      |
| x-large       | 20      |
| xx-large      | 40      |

If you have a small pipeline and a large pipeline both deployed for 2 hours, you will accumulate `2*1 + 2*16 = 2 + 32 = 34` hours of usage.

Note that pipelines with a single subgraph as a source, and webhooks or graphql APIs as sink(s) are not metered as pipelines. You will still however accumulate hourly subgraph usage.

Examples:

1. If you have **1** S-sized pipeline, you will be using **1** _pipeline worker-hour_ every hour. At 730 hours in the average month, with that pipeline you would incur **730** _pipeline worker-hours_ over the course of the month.
2. If you start with **10** such pipelines in a billing period and delete all of them in the middle of the billing period, you are charged the equivalent of 5 pipeline workers for the full billing period.
3. If you have **2** L-sized pipelines, you will be using **20** _pipeline worker-hours_ every hour, equating to **14,600** _pipeline worker-hours_ if you run them the entire month.

#### Pipeline event writes

The number of records written by pipelines in your project. For example, for a PostgresQL sink, every row created, updated, or deleted, counts as a ‘write’. For a Kafka sink, every message counts as write.

Example:

1. If you have a pipeline that writes **20,000** a day for 10 days, then **20** a day after that for 10 days after that, you will be using **200,200** pipeline event writes.
1. If you have two pipeline that have written 1 million events each during a month, then you will be charged $0 for the first million events, then $1 for the next million, as the free tier would be exhausted.

### Free Tier

#### Active Pipeline Workers

You are able to run 1 s-sized pipeline for free (equating to 750 pipeline hours) each billing cycle.

#### Pipeline event writes

You are able to write up to 1 million events to a sink, cumulatively across all pipelines, per each billing cycle.

When you exceed free tier limits in the Starter plan, pipelines will be paused but they will still be queryable.

### Rates

You will be incurring usage for each hour that each pipeline in your project is deployed and active. One thing to note is that pipelines have a notion of `resource size` (this maps to the underlying VM size) which is a multiplier on the hourly usage.

<!-- prettier-ignore-start -->

{% table .m-0 %}
-
-
---
-
  **Active Pipelines** {% .m-0 .table-header %}

  (pipeline worker-hours) {% .m-0 %}
-
---
-
  For **1** pipeline worker a month {% .m-0 %}

  (**1** to **750** worker-hours) {% .m-0 %}
-
  Free, {% .m-0 %}

  equates to **1 small pipeline a month**
---
-
  Above **1** pipeline worker a month {% .m-0 %}

  (**751+** worker-hours) {% .m-0 %}
-
  **$0.10** per worker-hour, {% .m-0 %}

  equates to **~$73.00 per month per additional worker** {% .m-0 %}
---
- &nbsp; {% colspan="2" .m-0 %}
---
-
  **Pipeline throughput** {% .m-0 .table-header %}

  (pipeline events written) {% .m-0 %}
-
---
- For the first **1,000,000 events written** {% .m-0 %}
- Free {% .m-0 %}
---
- For the next **1,000,001 to 10,000,000** events written {% .m-0 %}
- **$1.00** per **1,000,000** events {% .m-0 %}
---
- above **10,000,000** events written {% .m-0 %}
- **$0.10** per **1,000,000** events {% .m-0 %}
{% /table %}

<!-- prettier-ignore-end -->

## Why this pricing model?

We want to give our customers a usable free tier. We started with the idea of giving our users 3 free concurrent subgraphs per month with up to 100,000 free subgraph entities per month. Similarly, we want to give our users 1 free pipeline per month with up to 1,000,000 free pipeline entities per month.

## How we arrived at our Subgraph Entity Count billing table

One tricky thing about our pricing model are the numbers for how we measure subgraph entities. This arises from the fact that we conceptualize our billing on a monthly basis but we bill on an hourly basis. Unfortunately, there aren’t a consistent number of hours in a month, some months have 672 hours (February) and others have 744 (August). We decided to assume that each month has 750 hours. This assumption is what underlines our Subgraph Entity Count billing table.

In otherwords, the estimated monthly pricing you see is more expensive than you would actually pay given the same monthly usage.

From this there are two important concepts for us to call out: **entity-months** and **entity-hours**. An entity-month is an entity that has been active for an entire month. An entity-hour is an entity that has been active for an hour.

To give our everyone 100,000 free subgraph entity-months, with hourly snapshotting, we multiplied `100,000 * 750 = 75,000,000` to get our free tier. This means that you can run a subgraph with exactly 100k entities for an entire month without exceeding the free tier.

Beyond the free tier, we want to charge $4.00 per 100k entity-months up to 10 million entity-months. This comes out to `4 / 750 / 100000 = 0.000000053333` per entity-hour up to `10,000,000 * 750 = 7,500,000,000` entity-hours.

Similarly, when exceeding 10 million entity-months (or `7,500,000,000` entity-hours), we wanted to charge $1.00 per 100k entity-months. The math on this works out to `1 / 750 / 100000 = 0.000000013333` per entity-hour.
