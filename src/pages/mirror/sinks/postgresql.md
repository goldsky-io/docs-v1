---
title: PostgreSQL
description: Goldsky Mirror PostgreSQL sinks
---

PostgreSQL is a powerful, open source object-relational database system used for OLTP workloads.

Mirror supports PostgreSQL as a sink, allowing you to write data directly into PostgreSQL. This provides a robust and flexible solution for both mid-sized analytical workloads and high performance REST and GraphQL APIs.

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

##
