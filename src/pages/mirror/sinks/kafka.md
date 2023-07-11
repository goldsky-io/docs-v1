---
title: Kafka
description: Goldsky Mirror Kafka sinks
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
