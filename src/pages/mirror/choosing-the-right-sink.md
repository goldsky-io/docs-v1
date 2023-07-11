---
title: Choosing the right sink
description: Best practices and considerations to take into account when deciding which sink(s) to use.
---

## Overview

Goldsky supports a variety of sinks, each optimized for their own use case. Instead of supporting as many sinks as we can, we spend the time to integrate deeply with each of our database choices in order to provide the most seamless experience possible.

Goldsky also allows you to use multiple databases with the same data model, so it’s always safe to do an ‘unscalable but simple’ thing first, and then evolve as you see what features you need in the future.

Here is a quick guide on different scenarios and sinks to choose from. If you have any questions, our team will be happy to help! Contact us at [support@goldsky.com](mailto:support@goldsky.com).

## Sub-second queries (for frontend APIs)

For fast queries, typically you would choose a database that has row-based storage (i.e. it stores each row as it is instead of applying any sort of compression).

The drawbacks are that they take more space. This means large, non-indexed scans can take longer and storage costs can be higher.

### PostgreSQL

Postgres is the gold standard for application databases. It can scale almost infinitely with some management, and can support very fast point-lookups with proper indexing.

If you require super fast lookups by `transaction_hash` or a specific column, Postgres is a very safe choice to start with. It’s great as a backend for live data APIs.

However, it can be slow for analytics queries with a lot of aggregations. For that, you may want to look for a transactional database.

Great hosted solutions for Postgres include [NeonDB](https://neon.tech/), [AWS Aurora](https://aws.amazon.com/rds/aurora/), and [GCP CloudSQL](https://cloud.google.com/sql).

### Elasticsearch

[Elasticsearch](https://www.elastic.co/) is a no-sql database that allows for blazing fast lookups and searches. Elasticsearch is built around super-fast non-indexed scanning, meaning it can look at every single record to find the one you want. As a result, you can do queries like fuzzy matches and wildcard lookups with millisecond latency.

Common applications include search on multiple columns, ‘instant’ auto-complete, and more.

### Rockset

[Rockset](https://rockset.com/) is a database that excels at both fast point-lookups and analytical queries. You also don’t need to think about indexing - you load the data in and you’re done.

Goldsky has first-class upsert and delete support into Rockset just like all our other databases, and you can expect to be able to do queries on data within a second or two of a block being confirmed.

While Rockset can do almost everything, for very large datasets (multiple terabytes), the cost can be significant. While Rockset uses columnar compression, it also forms indexes on every column in your dataset for every possible use case. It’s actually more efficient than it sounds, but it does incur some costs.

See our [Rockset](/mirror/sinks/rockset) documentation for some guides on reducing the cost and optimizing for blockchain data.

## Choices for Analytics

### ClickHouse

[ClickHouse](https://clickHouse.com/) is a very efficient choice for storage. You can store the entire Ethereum blockchain and pay around $50 in storage.

We recommend considering ClickHouse as an alternative to Snowflake or BigQuery - it supports many of the same use cases, and has additional features such as materialized views. We’ve seen our customers save tens of thousands of dollars using Goldsky and ClickHouse as a solution.

The pricing for managing ClickHouse is based on storage cost, then compute cost. The compute cost is constant and isn’t based on the amount of data scanned, so you can run concurrent queries without increasing cost.

### Rockset

[Rockset](https://rockset.com/) appears here again since it really can be used for all applications. For analytics use cases, there are a few optimizations that you should be aware of that we will cover in [our Rockset docs](/mirror/sinks/rockset).

Rockset, having it’s converged index, can be many times faster for some queries than ClickHouse for analytics use cases. It’s a great option if you need to serve analytics-level data in near-realtime.

## Deep integrations for advanced data teams

While we recommend allowing Goldsky to push into your final sink when possible as we can handle many edge cases, some companies have a lot of external data to merge with and have pre-made systems to integrate with. We support the following sinks for those use cases.

### AWS S3 / Google Cloud Storage (GCS)

Goldsky supports export of raw blockchain or custom data to S3 or GCS, either in Iceberg format or in plain Parquet format. GCS support is currently available upon request, please reach out to us at [support@goldsky.com](mailto:support@goldsky.com).

Keep in mind that the blockchain is eventually consistent, so reorgs in append-only mode is portrayed differently.

Once data is in S3, you can use a solution like AWS Athena to query, or merge with existing spark pipelines.

S3 support is locked by default as there are quite a few settings to be aware of. Please contact our support team to enable this for you.

### Kafka

In addition to S3, we support direct emits to [Kafka](https://kafka.apache.org/). Kafka can store messages at scale, making it a great choice as an initial holding place for data before you do further processing.

Our team can work with many different strategies and can give guidance on how to integrate with our data format inside Kafka.

Kafka is also locked by default as there are quite a few directions for the best integration, so contact our support team at [support@goldsky.com](mailto:support@goldsky.com) to enable this!
