---
title: AWS S3
description: Goldsky Mirror AWS S3 sinks
---

The files are created in [Parquet](https://parquet.apache.org/) format.

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "file",
      "sourceStreamName": "Type.String()",
      "secretName": "Type.String()",
      "path": "Type.String()",
      "partitionColumns": "Type.Optional(Type.String())"
    }
  ]
}
```

## Secrets

Create an AWS S3 secret with the following CLI command:

```shell
goldsky secret create AN_AWS_S3_SECRET --type s3 --value '{
  "accessKeyId": "Type.String()",
  "secretAccessKey": "Type.String()",
  "region": "Type.String()"
}'
```
