---
title: Shared Subgraph Indexing
description: Index subgraphs in our default infrastructure.
---

By default, all subgraphs that are created in Goldsky go into our highly optimized infrastructure.

The platform is fully autoscaling, with a re-engineered RPC and storage layer, and is tuned for fast indexing across the majority of use-cases. It's also completely backwards compatible and runs the same WASM engine as the vanilla open-source graph-node engine.

- Optimized RPC multi-provider layer with a global cache that uses a combination of dedicated and commercial RPC APIs for uptime
- I/O optimized database with under 1ms average commit times

If you prefer a completely isolated and dedicated infrastructure, please review [Dedicated Subgraph Indexing](/indexing/dedicated-subgraphs).
