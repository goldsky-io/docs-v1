---
title: PostgreSQL
description: Goldsky Mirror PostgreSQL sinks
---

PostgreSQL is a powerful, open source object-relational database system used for OLTP workloads.

Mirror supports PostgreSQL as a sink, allowing you to write data directly into PostgreSQL. This provides a robust and flexible solution for both mid-sized analytical workloads and high performance REST and GraphQL APIs.

When you create a new pipeline, a table will be automatically be created with columns from the source dataset. If a table is already created, the pipeline will write to it. As an example, you can set up partitions before you setup the pipeline, allowing you to scale PostgreSQL even further.

The PostgreSQL also supports Timescale hypertables, if the hypertable is already setup. We have a separate Timescale sink in technical preview that will automatically setup hypertables for you.

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "postgres",
      "sourceStreamName": "Type.String()",
      "schema": "Type.String()",
      "table": "Type.String()",
      "secretName": "Type.String()",
      "batchSize": 1000,
      "flushInterval": "10000"
    }
  ]
}
```

## Secrets

Create a PostgreSQL secret with the following CLI command:

```shell
goldsky secret create A_POSTGRESQL_SECRET --type jdbc --value '{
  "type": "jdbc",
  "protocol": "postgresql",
  "host": "db.host.com",
  "port": 5432,
  "databaseName": "myDatabase",
  "user": "myUser",
  "password": "myPassword"
}'
```

## Examples

### Getting an edge-only stream of decoded logs

This definition gets real-time edge stream of decoded logs straight into a postgres table named `eth_logs` in the `goldsky` schema, with the secret `A_POSTGRESQL_SECRET` created above.

```yaml
sources:
-  name: ethereum.decoded_logs
  version: 1.0.0
  type: dataset
  startAt: latest

transforms:
-  sql: |
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
-  type: postgres
  table: eth_logs
  schema: goldsky
  secretName: A_POSTGRESQL_SECRET
  sourceStreamName: logs
```

## Tips for backfilling large datasets into PostgreSQL

While PostgreSQL offers fast access of data, writing large backfills into PostgreSQL can sometimes be hard to scale.

Often, pipelines are bottlenecked against sinks.

Here are some things to try:

### Avoid indexes on tables until _after_ the backfill

Indexes increase the amount of writes needed for each insert. When doing many writes, inserts can slow down the process significantly if we're hitting resources limitations.

### Bigger batchSizes for the inserts

The `batchSize` setting controls how many rows are batched into a single insert statement. Depending on the size of the events, you can increase this to help with write performance. `1000` is a good number to start with. The pipeline will collect data until the batch is full, or until the `flushInterval` is met.

### Temporarily scale up the database

Take a look at your database stats like CPU and Memory to see where the bottlenecks are. Often, big writes aren't blocked on CPU or RAM, but rather on network or disk I/O.

For Google Cloud SQL, there are I/O burst limits that you can surpass by increasing the amount of CPU.

For AWS RDS instances (including Aurora), the network burst limits are documented for each instance. A rule of thumb is to look at the `EBS baseline I/O` performance as burst credits are easily used up in a backfill scenario.

### Aurora Tips

When using Aurora, for large datasets, make sure to use `Aurora I/O optimized`, which charges for more storage, but gives you immense savings on I/O credits. If you're streaming the entire chain into your database, or have a very active subgraph, these savings can be considerable, and the disk performance is significantly more stable and results in more stable CPU usage pattern.
