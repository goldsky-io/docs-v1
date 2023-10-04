---
title: ClickHouse
description: Goldsky Mirror ClickHouse sink
---

[ReplacingMergeTree](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree) engine is used for all sink tables by default.

This allows us to handle blockchain reorganizations natively while providing high insert speeds.

When `appendOnlyMode` is `true` (default), the sink behaves the following way:

- All updates and deletes are converted to inserts.
- `is_deleted` column is automatically added to a table. It contains `1` in case of deletes, `0` otherwise.
- If `versionColumnName` is specified, it's used as a [version number column](https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/replacingmergetree#ver) for deduplication. If it's not specified, `insert_time` column is automatically added to a table. It contains insertion time and is used for deduplication.
- Primary key is used in the `ORDER BY` clause.

When `appendOnlyMode` is `false`:

- All updates and deletes are propagated as is.
- No extra columns are added.
- Primary key is used in the `PRIMARY KEY` clause.

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

```shell

goldsky secret create A_CLICKHOUSE_SECRET --type clickHouse --value '{
  "url": "Type.String()",
  "username": "Type.String()",
  "password": "Type.String()",
  "databaseName": "Type.String()"
}'
```
