---
title: Supported Chains
description: A list of all the chains supported by Goldsky
---

Goldsky currently supports the following chains. If you want to work with another chain, please [contact us](mailto:support@goldsky.com?subject=Supported%20Chains) to discuss your use case.

When creating a subgraph, please use the term in (brackets) as the network name.

{% comment %}

Supported chains are configured at https://github.com/goldsky-io/rpc-node-proxy/blob/main/src/config/index.ts

1. Convert the `chains` array to JSON (remove TS types, then `copy(JSON.stringify({...}))`)
2. Open https://jqplay.org
3. Filter: `.chains[] | .name`
4. Paste list below, sort ascending

{% /comment %}

- Arbitrum One (arbitrum-one)
- Arbitrum Goerli (arbitrum-goerli)
- Arbitrum Nova (arbitrum-nova)
- Avalanche (avalanche)
- Base Goerli Testnet (base-goerli)
- Base (base)
- BNB Chain (bsc)
- BNB Chain Chapel Testnet (chapel)
- Ethereum Mainnet (mainnet)
- Ethereum-Goerli (goerli)
- Ethereum-Sepolia (sepolia)
- Fantom (fantom)
- Gnosis (xdai)
- Gnosis Chiado Testnet (chiado)
- Optimism Goerli (optimism-goerli)
- Optimism (optimism)
- Polygon (matic)
- Polygon Mumbai Testnet (mumbai)
- Public Goods Network (publicgoods)
- Public Goods Network Testnet (publicgoods-testnet)
- Zora Testnet (zora-testnet)
- Zora (zora)
