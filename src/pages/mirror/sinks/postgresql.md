---
title: PostgreSQL
description: Goldsky Mirror PostgreSQL sinks
---

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
      "secretName": "Type.String()"
    }
  ]
}
```

## Secrets

Create a PostgreSQL secret with the following CLI command:

```shell
goldsky secret create A_POSTGRESQL_SECRET --type jdbc --value '{
  "protocol": "postgresql",
  "host": "Type.String()",
  "port": "Type.Optional(Type.Integer())",
  "databaseName": "Type.String()",
  "user": "Type.String()",
  "password": "Type.String()",
}'
```
