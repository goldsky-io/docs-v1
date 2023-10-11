---
title: ClickHouse
description: Goldsky Mirror ClickHouse sink
---

ClickHouse is a highly performant and cost effective OLAP database that can support real-time inserts. Mirror pipelines can write subgraph or blockchain data directly into ClickHouse with full data guarantees and reorganization handling.

Mirror can work with any ClickHouse setup, but we have several strong defaults. From our experimentation, the `ReplacingMergeTree` table engine with `appendOnlyMode` offers the best real-time data performance for large datasets.

[ReplacingMergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree) engine is used for all sink tables by default. If you don't want to use a ReplacingMergeTree, you can pre-create the table with any data engine you'd like. If you don't want to use a ReplacingMergeTree, you can disable `appendOnlyMode`.

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "clickHouse",
      "sourceStreamName": "Type.String()",
      "secretName": "Type.String()",
      "table": "Type.String()",
      "batchSize": "Type.Optional(Type.Integer())",
      "flushInterval": "Type.Optional(Type.String())",
      "appendOnlyMode": "Type.Optional(Type.Boolean())",
      "versionColumnName": "Type.Optional(Type.String())"
    }
  ]
}
```

## Secrets

{% callout type="warning" title="Use HTTP" %}
Mirror writes to ClickHouse via the `http` interface, rather than the `tcp` interface.
{% /callout %}

```shell

goldsky secret create A_CLICKHOUSE_SECRET --type clickHouse --value '{
  "url": "http://localhost:8123",
  "type": "clickHouse",
  "username": "default",
  "password": "qwerty123",
  "databaseName": "myDatabase"
}'
```

## Data consistency with ReplacingMergeTrees

With `ReplacingMergeTree` tables, we can write, overwrite, and flag rows with the same primary key for deletes without actually mutating. As a result, the actual raw data in the table may contain duplicates.

ClickHouse allows you to clean up duplicates and deletes from the table by running

```sql
OPTIMIZE <tablename> FINAL;
```

which will merge rows with the same primary key into one. This may not be deterministic and fully clean all data up, so it's recommended to also add the `FINAL` keyword after the table name for queries.

```SQL
SELECT <columns>
FROM <table name> FINAL
```

This will run a clean-up process, though there may be performance considerations.

## Append-Only Mode

{% callout type="warning" title="Proceed with Caution" %}
Without `appendOnlyMode=true`, the pipeline may hit ClickHouse mutation flush limits. Write speed will also be slower due to mutations.
{% /callout %}

Append-only mode means the pipeline will only _write_ and not _update_ or _delete_ tables. There will be no mutations, only inserts.

This drastically increases insert speed and reduces Flush exceptions (which happen when too many mutations are queued up).

It's highly recommended as it can help you operate a large dataset with many writes with a small ClickHouse instance.

When `appendOnlyMode` is `true` (default and recommended for ReplacingMergeTrees), the sink behaves the following way:

- All updates and deletes are converted to inserts.
- `is_deleted` column is automatically added to a table. It contains `1` in case of deletes, `0` otherwise.
- If `versionColumnName` is specified, it's used as a [version number column](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree#ver) for deduplication. If it's not specified, `insert_time` column is automatically added to a table. It contains insertion time and is used for deduplication.
- Primary key is used in the `ORDER BY` clause.

This allows us to handle blockchain reorganizations natively while providing high insert speeds.

When `appendOnlyMode` is `false`:

- All updates and deletes are propagated as is.
- No extra columns are added.
- Primary key is used in the `PRIMARY KEY` clause.
