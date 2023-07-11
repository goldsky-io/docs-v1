---
title: Elasticsearch
description: Import Goldsky data into Elasticsearch for further processing and querying.
---

{% partial file="closed-beta.md" /%}

Give your users blazing-fast auto-complete suggestions, full-text fuzzy searches, and scored recommendations based off of on-chain data.

Elasticsearch is the leading search datastore, used for a wide variety of usecase for billions of datapoints a day, including search, roll-up aggregations, and ultra-fast lookups on text data.

Goldsky supports real-time insertion into Elasticsearch, with event data updating in Elasticsearch indexes as soon as it gets finalized on-chain.

See the [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/elasticsearch-intro.html) to see more of what it can do!

Contact us to learn more about how we can power search for your on-chain data!

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "elasticSearch",
      "sourceStreamName": "Type.String()",
      "index": "Type.String()",
      "secretName": "Type.String()"
    }
  ]
}
```

## Secrets

Create an Elasticsearch secret with the following CLI command:

```shell
goldsky secret create AN_ELASTICSEARCH_SECRET --type elasticSearch --value '{
  "host": "Type.String()",
  "username": "Type.String()",
  "password": "Type.String()",
}'
```
