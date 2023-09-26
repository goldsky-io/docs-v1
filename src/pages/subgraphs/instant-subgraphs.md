---
title: Instant Subgraphs
description: No need to create and maintain your own subgraph anymore. With Instant Subgraphs, we create a subgraph for you.
---

Skip the manual creation and maintenance of subgraphs. Use your contract's ABI and a simple configuration file to let Goldsky start indexing for you.

Instant Subgraphs works with both Shared and Dedicated subgraph indexing, and will default to whatever your project is set on.

Below is an example of a basic configuration file:

```json
{
  "version": "1",
  "name": "TokenDeployed",
  "abis": {
    "TokenRegistry": {
      "path": "./abis/token-registry.json"
    }
  },
  "chains": ["mainnet"],
  "instances": [
    {
      "abi": "TokenRegistry",
      "address": "0x0A6f564C5c9BeBD66F1595f1B51D1F3de6Ef3b79",
      "startBlock": 13983724,
      "chain": "mainnet"
    }
  ]
}
```

> For a complete reference of the various properties, please see the [Instant Subgraphs references docs](/references/instant-subgraphs-config)

Execute the following command to generate a subgraph, deploy it, and let Goldsky start indexing:

```
goldsky subgraph deploy <subgraphName>/<subgraphVersion> --from-abi <path-to-above-config-file>
```

In your terminal, you will see output similar to the following:

```
❯❯❯ goldsky subgraph deploy goldsky/v1.0.0 --from-abi ./goldsky_config.json
Deploying Subgraph:
✔ Generating subgraph(s) (this may take several minutes)
✔ Deploying goldsky-mainnet/v1.0.0 to Goldsky

Deployed subgraph API: https://api.goldsky.com/api/public/project_cl6whoglq00050iyl9jnqc0o3/subgraphs/goldsky-mainnet/v1.0.0/gn
```

That's it! You can now query your subgraph at the provided link(s) or watch the subgraph indexing progress and other information at [app.goldsky.com/dashboard/subgraphs](https://app.goldsky.com/dashboard/subgraphs).
