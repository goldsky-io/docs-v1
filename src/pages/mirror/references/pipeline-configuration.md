---
title: Mirror pipeline definitions
description: "Defining pipeline definitions for use with Goldsky Mirror"
---

In this page, we dive deeper into definitions.

The definition yaml defines the sources, transformations, and sinks that comprise your pipeline. The `--definition-path` flag is used to use saved files (ie from `goldsky pipeline get-definition <pipeline-name>`) and `--definition` can be used to inline a full definition inside the command.

The YAML schema consists of three primary sections:

- **Sources**: Denotes the origin of the data.
- **Transforms**: Lists the transformations to be applied to the data from the source.
- **Sinks**: Specifies where the transformed data should be sent.

Below, we'll explain each section of the YAML structure, and provide an example for each subset of the schema.

## Sources

The `sources` array contains one or more source objects. There are currently two supported source types:

- Subgraph Entities
- Datasets

### Subgraph Entities

This lets you define your own subgraphs as a pipeline source.

**Example**

```yaml
sources:
  - type: subgraphEntity
    deployments:
      - id: QmVcgRByfiFSzZfi7RZ21gkJoGKG2jeRA1DrpvCQ6ficNb
    namespace: polygon
    entity:
      name: fixed_product_market_maker
```

### Datasets

Datasets let you define [Direct Indexing](/mirror/sources/direct-indexing) sources. These datasources are curated by the Goldsky team, with automated QA guaranteeing correctness.

**Example**

```yaml
sources:
  - type: dataset
    name: ethereum.decoded_logs
    version: 1.0.0
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
transforms:
  - name: negative_fpmm_scaled_liquidity_parameter
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

```yaml
sinks:
  - type: postgres
    sourceStreamName: negative_fpmm_scaled_liquidity_parameter
    table: test_negative_fpmm_scaled_liquidity_parameter
    schema: public
    secretName: API_POSTGRES_CREDENTIALS
```

## End to end examples

### Syncing a subgraph into postgres

This pipeline is named `polymarket-extended-1`. It pulls data from a single `subgraphEntity` source, processes the data with a single SQL transformation, and stores the result into a PostgreSQL sink.

```bash
goldsky pipeline create --name polymarket-extended-1 --definition $'
sources:
  - type: subgraphEntity
    deployments:
      - id: QmVcgRByfiFSzZfi7RZ21gkJoGKG2jeRA1DrpvCQ6ficNb
    namespace: polygon
    entity:
      name: fixed_product_market_maker
transforms:
  - name: negative_fpmm_scaled_liquidity_parameter
    type: sql
    sql: SELECT id FROM polygon.fixed_product_market_maker WHERE scaled_liquidity_parameter < 0
    primaryKey: id
sinks:
  - type: postgres
    sourceStreamName: negative_fpmm_scaled_liquidity_parameter
    table: test_negative_fpmm_scaled_liquidity_parameter
    schema: public
    secretName: API_POSTGRES_CREDENTIALS
'
```

### Merging subgraphs cross-chain

This pipeline is named `poap-extended-1`. It pulls data from two `subgraphEntity` sources, does not perform any transformations, and stores the result into two separate PostgreSQL sinks.

```yaml
goldsky pipeline create --name poap-extended-1 --definition '
sources:
  - type: subgraphEntity
    deployments:
      - id: QmbsFSmqsWFFcbxnGedXifyeTbKBSypczRcwPrBxdQdyXE
      - id: QmNSwC6QjZSFcSm2Tmoy6Van7g6zSEqD3yz4tDWRFdZiKh
      - id: QmZUh5Rp3edMhYj3wCH58zSNvZvrPSQyeM6AN5HTmyw2Ch
    namespace: hashflow_cross_chain
    entity:
      name: pool_created
  - type: subgraphEntity
    deployments:
      - id: QmbsFSmqsWFFcbxnGedXifyeTbKBSypczRcwPrBxdQdyXE
      - id: QmNSwC6QjZSFcSm2Tmoy6Van7g6zSEqD3yz4tDWRFdZiKh
      - id: QmZUh5Rp3edMhYj3wCH58zSNvZvrPSQyeM6AN5HTmyw2Ch
    namespace: hashflow_cross_chain
    entity:
      name: update_router_permissions
transforms:
sinks:
  - type: postgres
    sourceStreamName: hashflow_cross_chain.pool_created
    table: test_pool_created
    schema: public
    secretName: API_POSTGRES_CREDENTIALS
  - type: postgres
    sourceStreamName: hashflow_cross_chain.update_router_permissions
    table: test_update_router_permissions
    schema: public
    secretName: API_POSTGRES_CREDENTIALS
'
```

### Puling f

This pipeline is named `decoded-logs`. It pulls data from a curated goldsky dataset, without performing any transformations, and stores the result into a PostgreSQL sink.

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
'
```

These examples should provide a good starting point and reference for creating your data pipeline definitions in Goldsky.
