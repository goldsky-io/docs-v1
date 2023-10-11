---
title: Subgraphs
description: Goldsky Mirror subgraph sources
---

You can use subgraphs as a pipeline source, allowing you to combined the flexibility of subgraph indexing with the expressiveness of the database of your choice.

This enables a lot of powerful use-cases:

- Less SQL - re-use all your existing subgraph entities.
- Flexible aggregations that weren't possible with just GraphQL.
- Analytics on protocols through Rockset, Clickhouse, and more.
- Plug into BI tools, train AI,

## Subgraphs from your project

Use any of your own subgraphs as a pipeline source. Use `goldsky pipeline create <pipeline-name>` and select `Project Subgraph`, and push subgraph data into any of our supported sinks.

## Community subgraphs

When you create a new pipeline with `goldsky pipeline create <your-pipeline-name>`, select **Community Subgraphs** as the source type. This will display a list of available subgraphs to choose from. Select the one you are interested in and follow the prompts to complete the pipeline creation.

Goldsky provides the following Community Subgraphs based on [Messari's](https://github.com/messari/subgraphs) subgraphs:

- X2Y2 Exchange
- OpenSea Seaport
- Cryptopunks
- Nouns

For each subgraph, you can create a pipeline for each entity. Each entity will map to a table in your sink database. We have several built-in entities:

- [X2Y2 Exchange](/mirror/supported-tables/x2y2)
- [OpenSea Seaport](/mirror/supported-tables/opensea-seaport)
- [Cryptopunks](/mirror/supported-tables/cryptopunks)
- [Nouns](/mirror/supported-tables/nouns)
