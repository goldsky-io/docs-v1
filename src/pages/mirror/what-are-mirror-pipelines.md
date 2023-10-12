---
title: What are Mirror pipelines?
description: Learn what Mirror pipelines are and get started with one config file.
---

Mirror is a serverless data-pipeline platform that allows you to get real-time data into your database with one yaml definition file.

Mirror allows you to keep blockchain data where your app is. This offers teams unlimited access without thinking about API rate limits or latency. You get the data **pushed** to your datastore or queue, like a representation of blockchain you can query with your other data.

A Mirror pipeline instructs Goldsky where to take data from (**sources**), how to _optionally_ process that data (**transforms**), and where to persist the results (**sinks**).

A pipeline:

- is reorg-aware and updates your datastores with the latest information
- runs backfills & data live streaming fully managed by Goldsky so you can focus on your business
- benefits from quality checks and receives automated dataset should there be fixes or improvements
- works with data across chains without worrying about harmonizing data, making sure timestamps + order of events line up, etc.

Each pipeline is defined with a [YAML definition](/mirror/references/pipeline-configuration) that looks like this:

```yaml
sources:
  - name: ethereum.decoded_logs
    version: 1.0.0
    type: dataset
    startAt: latest

transforms:
  - sql: |
      SELECT
          id,
          address,
          event_signature,
          event_params,
          raw_log.block_number as block_number,
          raw_log.block_hash as block_hash,
          raw_log.transaction_hash as transaction_hash
      FROM
          ethereum.decoded_logs
    name: logs
    type: sql
    primaryKey: id

sinks:
  - type: postgres
    table: eth_logs
    schema: goldsky
    secretName: A_POSTGRESQL_SECRET
    sourceStreamName: logs
```

After setting up a [secret](/mirror/sinks/postgresql#secrets), you start a pipeline with:

`goldsky pipeline create edge-logs --definition-path <path_to_file>`

Learn more about available sources and sinks:

- [Sources](/mirror/sources)
- [Sinks](/mirror/sinks)

To get started, check out our [Quick Start guide](/mirror/creating-a-pipeline).
