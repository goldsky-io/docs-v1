---
title: Timescale
description: We partner with Timescale for real-time data access, powerful enough for time series analytical queries and transactional workloads alike.
---

{% partial file="closed-beta.md" /%}

We partner with [Timescale](https://www.timescale.com) to provide teams with real-time data access on on-chain data, using a database powerful enough for time series analytical queries and fast enough for transactional workloads like APIs.

Timescale support is in the form of hypertables - any dataset that has a `timestamp`-like field can be used to create a Timescale hypertable.

You can also use the traditional JDBC/postgres sink with Timecale - you would just need to create the hypertable yourself.

You use TimescaleDB for anything you would use PostgreSQL for, including directly serving APIs and other simple indexed table look-ups. With Timescale Hypertables, you can also make complex database queries like time-windowed aggregations, continuous group-bys, and more.

Learn more about Timescale here: https://docs.timescale.com/api/latest/

## Recipes

- [NFT transfers](/recipes/nft-transfers)
