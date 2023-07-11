---
title: Rockset
description: Import Goldsky data into Rockset for further processing and querying.
---

{% partial file="closed-beta.md" /%}

## Overview

Rockset is a real-time analytical database that allows you to query data in real-time, without having to worry about the underlying infrastructure. Rockset can easily scale to terabytes of data - and it's easy to use through REST APIs or SQL.

Rockset is unique through their Converged Index - they index data in multiple different ways, allowing for blazing fast queries across many different types of workloads.

Goldsky has partnered with Rockset to provide teams with real-time data access for on-chain data, using a database powerful enough for time series analytical queries and fast enough for transactional workloads like APIs, while being efficient enough for warehouse-style queries.

Goldsky supports real-time sync into Rockset, with data updating in Rockset indexes. New blockchain transactions and events are queryable within seconds of the block being proposed.

### What you can do with Rockset

- Sync the logs, traces, transactions, and blocks of a whole blockchain and query it
- Sync multiple subgraphs across different chains into one single collection for querying
- Provide APIs on top of SQL Queries through Rockset Query Lambdas
- Power complex dashboards without thinking at all about caching or data freshness
- Build a data warehouse on top of blockchain data

### When to use Rockset over other options

- Your team needs a single database to power both APIs and Dashboards
- You have data that surpasses the limits of a traditional relational database
- You don't want to think about indexes at all

## Getting Started

1. While Mirror is in closed beta, please contact us to enable Mirror for your account.
1. Get a Rockset account. You can sign up for a free account [here](https://rockset.com/signup/).
1. Create a new collection(s) in Rockset. You can do this by clicking on the "Collections" tab in the left sidebar, and then clicking on the "Create Collection" button.
1. Create a new API key in Rockset. You can do this by clicking on the "API Keys" tab in the left sidebar, and then clicking on the "Create API Key" button.
1. Give your Goldsky integration specialist your API key and collection name(s), and they will set up the integration for you.
1. Query your data!

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "rockset",
      "sourceStreamName": "Type.String()",
      "secretName": "Type.String()",
      "workspace": "Type.String()",
      "collection": "Type.String()",
      "ingestTransformationSql": "Type.Optional(Type.String())",
      "flushSize": "Type.Optional(Type.Integer())",
      "flushIntervalMs": "Type.Optional(Type.Integer())"
    }
  ]
}
```

## Secrets

```shell

goldsky secret create A_ROCKSET_SECRET --type rockset --value '{
  "apiKey": "Type.String()",
  "endpoint": "Type.String()",
}'
```
