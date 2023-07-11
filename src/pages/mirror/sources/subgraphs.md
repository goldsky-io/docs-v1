---
title: Subgraphs
description: Goldsky Mirror subgraph sources
---

{% partial file="closed-beta.md" /%}

One of many available pipeline sources is subgraphs. We provide a curated list of community subgraphs that let you get up and running in no time.

Alternatively, contact us to enable custom subgraphs to use your own subgraphs as pipeline sources.

## Community subgraphs

When you create a new pipeline with `goldsky pipeline create <your-pipeline-name>`, select **Community Subgraphs** as the source type. This will display a list of available subgraphs to choose from. Select the one you are interested in and follow the prompts to complete the pipeline creation.

Goldsky provides the following Community Subgraphs based on [Messari's](https://github.com/messari/subgraphs) subgraphs:

- X2Y2 Exchange
- OpenSea Seaport
- Cryptopunks

For each subgraph, you can create a pipeline for each entity. Each entity will map to a table in your sink database. We have several built-in entities:

- [X2Y2 Exchange](/mirror/supported-tables/x2y2)
- [OpenSea Seaport](/mirror/supported-tables/opensea-seaport)
- [Cryptopunks](/mirror/supported-tables/cryptopunks)

## Custom subgraphs (coming soon)

{% partial file="closed-beta.md" /%}

Use any of your own subgraphs as a pipeline source. More details to come when we launch this feature.
