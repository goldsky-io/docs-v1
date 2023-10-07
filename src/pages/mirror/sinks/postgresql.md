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
  "type": "jdbc",
  "protocol": "postgresql",
  "host": "db.host.com",
  "port": 5432,
  "databaseName": "myDatabase",
  "user": "myUser",
  "password": "myPassword"
}'
```
