---
title: AWS S3
description: Goldsky Mirror AWS S3 sinks
---

{% partial file="closed-beta.md" /%}

{% comment %}

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
      "format": "Type.Union([Type.Literal('csv'), Type.Literal('parquet')])",
      "partitionColumns": "Type.Optional(Type.String())"
    }
  ]
}
```

## Secrets

Create an Elasticsearch secret with the following CLI command:

```shell
goldsky secret create AN_AWS_S3_SECRET --type s3 --value '{
  "accessKeyId": "Type.String()",
  "secretAccessKey": "Type.String()",
}'
```

{% /comment %}
