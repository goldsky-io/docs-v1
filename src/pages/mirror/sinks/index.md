---
title: Sinks
description: Goldsky Mirror sinks
---

Goldsky supports the following pipeline sinks:

- [GraphQL API](/mirror/sinks/graphql)
- [PostgreSQL](/mirror/sinks/postgresql)
- [Kafka](/mirror/sinks/kafka)
- [Rockset](/mirror/sinks/rockset)
- [AWS S3](/mirror/sinks/aws-s3)
- [Elasticsearch](/mirror/sinks/elasticsearch)

## Secrets

In order for Goldsky to connect to your sink, you have to configure secrets. Secrets refer to your datastore credentials which are securely stored in your Goldsky account.

You can create and manage your secrets with the `goldsky secret` command. To see a list of available commands and how to use them, please refer to the output of `goldsky secret -h`.

For sink-specific secret information, please refer to the individual sink pages linked to above.

### Guided CLI experience

If you create a Mirror pipeline with `goldsky pipeline create <your-pipeline-name>`, there is no need to create a secret beforehand. The CLI will list existing secrets and offer you to create a new secret as part of the pipeline creation flow.
