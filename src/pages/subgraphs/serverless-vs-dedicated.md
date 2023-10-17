---
title: Serverless vs dedicated
description: Index your subgraphs - even on private chains - on dedicated infrastructure for improved customizability and performance.
---

## Serverless Subgraphs

When you make a new subgraph on Goldsky, by default it's hosted on our highly resilient **Serverless Subgraph Platform**.

The platform is fully autoscaling, with a re-engineered RPC and storage layer, and is tuned for fast indexing across the majority of use-cases. It's also completely backwards compatible and runs the same WASM engine as the vanilla open-source graph-node engine.

- Optimized RPC multi-provider layer with a global cache that uses a combination of dedicated and commercial RPC APIs for uptime
- I/O optimized database with under 1ms average commit times

## Dedicated Subgraph Indexers

When you need improved customizability and performance, Goldsky offers dedicated subgraph indexing nodes. Dedicated machines are provisioned for your project, allowing for customization and optimization at both the indexing and querying layers.

**Indexing enhancements**

- support for any EVM-compatible private chain or app chain
- custom RPC layer optimizations methods based on subgraph needs to improve indexing speed

**Querying Enhancements**

- enable caching with custom rules
- custom database optimizations to speed up specific query patterns, bringing expensive queries down from seconds to milliseconds

To launch a dedicated indexer, please contact us via email at [sales@goldsky.com](mailto:sales@goldsky.com) to get started within one business day.
