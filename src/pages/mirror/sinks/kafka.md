---
title: Kafka
description: Goldsky Mirror Kafka sinks
---

Kafka is a distributed streaming platform that is used to build real-time data pipelines and streaming applications. It is designed to be fast, scalable, and durable.

You can use Kafka to deeply integrate into your existing data ecosystem. Goldsky supplies a message format that allows you to handle blockchain forks and reorganizations with your downstream data pipelines.

Kafka has a rich ecosystem of SDKs and connectors you can make use of to do advanced data processing.

{% callout type="warning" title="Less Magic Here" %}
The Kafka integration is less end to end - while Goldsky will handle a ton of the topic partitioning balancing and other details, using Kafka is a bit more involved compared to getting data directly mirrored into a database.
{% /callout %}

## Pipeline configuration

```json
{
  "sources": [],
  "transforms": [],
  "sinks": [
    {
      "description": "Type.Optional(Type.String())",
      "type": "kafka",
      "sourceStreamName": "Type.String()",
      "topic": "Type.String({ 'maxLength': 255 })",
      "secretName": "Type.String()",
      "topicPartitions": "Type.Optional(Type.Integer())",
      "dataFormat": "Type.Optional(Type.Union([Type.Literal('avro'), Type.Literal('json')]))"
    }
  ]
}
```

## Secrets

```shell

goldsky secret create A_KAFKA_SECRET --type kafka --value '{
  "bootstrapServers": "Type.String()",
  "securityProtocol": "Type.Enum(SecurityProtocol)",
  "saslMechanism": "Type.Optional(Type.Enum(SaslMechanism))",
  "saslJaasUsername": "Type.Optional(Type.String())",
  "saslJaasPassword": "Type.Optional(Type.String())",
  "schemaRegistryUrl": "Type.Optional(Type.String())",
  "schemaRegistryUsername": "Type.Optional(Type.String())",
  "schemaRegistryPassword": "Type.Optional(Type.String())",
}'
```
