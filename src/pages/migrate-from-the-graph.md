---
title: Migrate from The Graph
description: Migrate your subgraphs from The Graph and host them on Goldsky
---

{% callout type="warning" title="The Graph Hosted Service Sunsetting" %}
The Graph is sunsetting the Hosted Service in favor of their decentralized network called The Graph Network.

This applies to chains once they are supported on The Graph Network. As of October 2022, this is Ethereum and Gnosis Chain.
{% /callout %}

Goldsky provides a one-step migration for your subgraphs on The Graph's hosted service or decentralized network.

Migrate today to ensure continued service availability for your business and set yourself up to leverage [Fusion](/fusion) and [Mirror](/mirror) to integrate blockchain data into your systems.

This is a drop-in replacement with the following benefits:

- ✅ The same subgraph API that your apps already use
- ✅ A load-balanced network of third-party and on-prem RPC nodes to improve performance and reliability
- ✅ Tagging and versioning for hot-swapping subgraphs, allowing for seamless updates
- ✅ Alerts and auto-recovery in case of subgraph data consistency issues due to corruption from re-orgs or other issues
- ✅ A world-class team who monitors your subgraphs 24/7

## Migrate subgraphs to Goldsky

Please follow the [quick start](/#quick-start) instructions to set up your account and install the Goldsky CLI.

If you have subgraphs deployed to The Graph’s hosted service, the following command seamlessly migrates your subgraph to Goldsky:

```bash
goldsky subgraph deploy your-subgraph-name/your-version --from-url <your-subgraph-query-url>
```

If you have subgraphs deployed to The Graph's decentralized network, use the IPFS hash instead (visible on The Graph's Explorer page for the specified subgraph):

```bash
goldsky subgraph deploy your-subgraph-name/your-version --from-ipfs-hash <your-subgraph-ipfs-hash>
```

### Monitor indexing progress

Once you started the migration with the above command, you can monitor your subgraph's indexing status with:

```bash
goldsky subgraph list
```

Alternatively, navigate to [app.goldsky.com](https://app.goldsky.com) to see your subgraphs, their indexing progress, and more.

## Dedicated subgraph indexing

To ensure industry-leading reliability and latency, we can provision independent infrastructure for individual enterprise customers.

To learn more, please see [Dedicated subgraphs](/subgraphs/dedicated-subgraphs).
