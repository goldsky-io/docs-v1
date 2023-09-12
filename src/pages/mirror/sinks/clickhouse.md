---
title: ClickHouse
description: Goldsky Mirror ClickHouse sink
---

{% partial file="closed-beta.md" /%}

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
      "appendOnlyMode": "Type.Optional(Type.Boolean())"
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
