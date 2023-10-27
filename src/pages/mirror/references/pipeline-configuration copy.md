---
title: Mirror pipeline configuration
description: "Defining pipeline definitions for use with Goldsky Mirror"
---

This page helps to document the YAML configuration structure for creating a data pipeline on Goldsky. This YAML file defines the sources, transformations, and sinks that comprise your pipeline. The `--definition-path` can be used to specify this YAML file.

The YAML schema consists of three primary sections:

- **Sources**: Denotes the origin of the data.
- **Transforms**: Lists the transformations to be applied to the data from the source.
- **Sinks**: Specifies where the transformed data should be sent.

## Managing your pipelines

### Importing the latest state

Use `goldsky pipeline import` to get the definitions for all your project's pipelines.

### Applying changes

Use `goldsky pipeline apply` to sync all pipeline definitions in the current folder.

Use `goldsky pipeline apply <file>` to sync a specific definition.

Syncing will first show you the changes that will be applied and prompt for your permission to proceed. You can also use `--auto-approve` to skip the prompt.

## Example

```yaml
name: ethereum-decoded-edge

# Status could be S/M/L/XL/XXL
size: s

# Optional, defaults to ACTIVE, can be PAUSED/INACTIVE.
# Inactive does not
status: ACTIVE

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

```yaml

name: ethereum-decoded-edge

runtime:
    size: s # this could be S/M/L/XL/XXL
    status: ACTIVE # Optional, defaults to ACTIVE, can be PAUSED/INACTIVE. Inactive does not

definition:
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

Below, we'll explain each section of the YAML structure, and provide an example for each subset of the schema.

## Sources

The `sources` array contains one or more source objects. There are currently two supported source types:

- Subgraph Entities
- Datasets

### Subgraph Entities

This lets you define your own subgraphs as a pipeline source.

**Example**

```yaml
type: subgraphEntity
deployments:
  - id: QmVcgRByfiFSzZfi7RZ21gkJoGKG2jeRA1DrpvCQ6ficNb
namespace: polygon
entity:
  name: fixed_product_market_maker
```

### Datasets

Datasets let you define [Direct Indexing](/mirror/sources/direct-indexing) sources. This is a powerful and efficient way to deal with blocks, transactions, logs, and decoded logs & traces.

**Example**

```yaml
type: dataset
name: ethereum.decoded_logs
version: "1.0.0"
```

The `name` property is based on the following pattern: `<chain>.<decoded|raw>_<blocks|transactions|logs|traces>`. Please refer to [supported chains](/mirror/sources/direct-indexing#supported-chains) for an overview of what data is available for individual chains.

## Transforms

The `transforms` array contains one or many transform objects, each with the following properties:

- `name`: The name of the transformation.
- `type`: The type of the transformation. Currently, only `sql` is supported.
- `sql`: The SQL query to be performed.
- `primaryKey`: The primary key for the transformation.

### Transform Example

```yaml
name: negative_fpmm_scaled_liquidity_parameter
type: sql
sql: SELECT id FROM polygon.fixed_product_market_maker WHERE scaled_liquidity_parameter < 0
primaryKey: id
```

## Sinks

The `sinks` array contains one or many sink objects, each with the following properties:

- `type`: The sink type. This could be `postgres` or `elasticsearch`.
- `sourceStreamName`: The source stream name for the sink.
- `table`: The table name to load into. This is required for sinks of type `postgres`.
- `schema`: The schema for the sink. This is required for sinks of type `postgres`.
- `secretName`: The name of the secret for the sink. This could be `API_POSTGRES_CREDENTIALS` or `REDPANDA_CREDENTIALS`.
- `topic`: The topic to produce to. This is required for sinks of type `kafka`.

### Sink Example

````yaml
type: postgres
sourceStreamName: negative_fpmm_scaled_liquidity_parameter
table: test_negative_fpmm_scaled_liquidity_parameter
schema: public
secretName: API_POSTGRES_CREDENTIALS


## Full Examples

### Example 1

This pipeline is named `polymarket-extended-1`. It pulls data from a single `subgraphEntity` source, processes the data with a single SQL transformation, and stores the result into a PostgreSQL sink.

```bash
goldsky pipeline create --name polymarket-extended-1 --definition $'
{
  "sources": [
      {
          "type": "subgraphEntity",
          "deployments": [
              {
                  "id": "QmVcgRByfiFSzZfi7RZ21gkJoGKG2jeRA1DrpvCQ6ficNb"
              }
          ],
          "namespace": "polygon",
          "entity": {
              "name": "fixed_product_market_maker"
          }
      }
  ],
  "transforms": [
      {
          "name": "negative_fpmm_scaled_liquidity_parameter",
          "type": "sql",
          "sql": "SELECT id FROM polygon.fixed_product_market_maker WHERE scaled_liquidity_parameter < 0",
          "primaryKey": "id"
      }
  ],
  "sinks": [
      {
          "type": "postgres",
          "sourceStreamName": "negative_fpmm_scaled_liquidity_parameter",
          "table": "test_negative_fpmm_scaled_liquidity_parameter",
          "schema": "public",
          "secretName": "API_POSTGRES_CREDENTIALS"
      }
  ]
}
'
```

### Example 2

This pipeline is named `poap-extended-1`. It pulls data from two `subgraphEntity` sources, does not perform any transformations, and stores the result into two separate PostgreSQL sinks.

```bash
goldsky pipeline create --name poap-extended-1 --definition '
{
  "sources": [
      {
          "type": "subgraphEntity",
          "deployments": [
              {
                  "id": "QmbsFSmqsWFFcbxnGedXifyeTbKBSypczRcwPrBxdQdyXE"
              },
              {
                  "id": "QmNSwC6QjZSFcSm2Tmoy6Van7g6zSEqD3yz4tDWRFdZiKh"
              },
              {
                  "id": "QmZUh5Rp3edMhYj3wCH58zSNvZvrPSQyeM6AN5HTmyw2Ch"
              }
          ],
          "namespace": "hashflow_cross_chain",
          "entity": {
              "name": "pool_created"
          }
      },
      {
          "type": "subgraphEntity",
          "deployments": [
              {
                  "id": "QmbsFSmqsWFFcbxnGedXifyeTbKBSypczRcwPrBxdQdyXE"
              },
              {
                  "id": "QmNSwC6QjZSFcSm2Tmoy6Van7g6zSEqD3yz4tDWRFdZiKh"
              },
              {
                  "id": "QmZUh5Rp3edMhYj3wCH58zSNvZvrPSQyeM6AN5HTmyw2Ch"
              }
          ],
          "namespace": "hashflow_cross_chain",
          "entity": {
              "name": "update_router_permissions"
          }
      }
  ],
  "transforms": [
  ],
  "sinks": [
      {
          "type": "postgres",
          "sourceStreamName": "hashflow_cross_chain.pool_created",
          "table": "test_pool_created",
          "schema": "public",
          "secretName": "API_POSTGRES_CREDENTIALS"
      },
      {
          "type": "postgres",
          "sourceStreamName": "hashflow_cross_chain.update_router_permissions",
          "table": "test_update_router_permissions",
          "schema": "public",
          "secretName": "API_POSTGRES_CREDENTIALS"
      }
  ]
}
'
```

### Example 3

This pipeline is named `polymarket-extended-1`. It pulls data from a `file` source, processes the data with a single SQL transformation, and sends the result to a Kafka sink.

```bash
goldsky pipeline create --name polymarket-extended-1 --definition '
{
   "sources":[
      {
         "type":"file",
         "name":"raw_logs",
         "format": "parquet",
         "tableDefinitionPath": "goldsky-raw/ethereum-matic/schemas/log_schema.sql",
         "path": "goldsky-raw/ethereum-matic/logs-parquet/",
         "namespace":"matic"
      }
   ],
   "transforms": [
      {
          "name": "logs",
          "type": "sql",
          "sql": "SELECT \'log_\' || block_hash || \'_\' ||  CAST(log_index AS STRING) as id, log_index, transaction_hash, transaction_index, block_hash, block_number, address, data, topics FROM matic.raw_logs WHERE block_number IS NOT NULL",
          "primaryKey": "id"
      }
  ],
   "sinks":[
      {
         "type":"kafka",
         "topic":"matic.raw.logs",
         "secretName":"REDPANDA_CREDENTIALS",
         "sourceStreamName":"logs"
      }
   ]
}
'
```

### Example 4

This pipeline is named `decoded-logs`. It pulls data from a `kafka` source, without performing any transformations, and stores the result into a PostgreSQL sink.

```bash
goldsky pipeline create --name decoded-logs --definition '
{
   "sources":[
      {
         "type":"kafka",
         "name":"decoded_logs",
         "topic": "mainnet.decoded.erc20_721_1155.logs",
         "namespace":"mainnet"
      }
   ],
   "transforms":[
   ],
   "sinks":[
      {
         "type":"postgres",
         "table":"decoded_logs",
         "schema":"ethereum",
         "secretName":"POSTGRES_CREDENTIALS",
         "sourceStreamName":"mainnet.decoded_logs"
      }
   ]
}
'
```

These examples should provide a good starting point and reference for creating your data pipeline definitions in Goldsky.
````
