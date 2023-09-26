---
title: Getting started
pageTitle: Goldsky - Getting Started
description: Index subgraphs and transform on-chain data. Query with GraphQL, SQL, and more.
---

Goldsky provides real-time and historical access to data stored on blockchains and lets you transform, enhance, and integrate that data with real-time pipelines to meet your custom needs. {% .lead %}

{% quick-links %}

{% comment %}
TODO: Determine which icons to use
{% /comment %}

{% quick-link title="Indexing subgraphs" icon="installation" href="/subgraphs" description="Learn how to index your blockchain data." /%}

{% quick-link title="Sync data" icon="theming" href="/mirror" description="Learn how to use Mirror to integrate data into your project." /%}

{% quick-link title="Advanced data pipelines" icon="presets" href="/fusion" description="Learn how to transform your data in real-time." /%}

{% quick-link title="Migrate from The Graph" icon="plugins" href="/migrate-from-the-graph" description="Learn how to migrate your subgraphs from The Graph and host them on Goldsky." /%}

{% /quick-links %}

---

## Quick start

To get started with Goldsky:

1. Create an account at [app.goldsky.com](https://app.goldsky.com "target=hello").
1. Choose a plan that best fits your needs.
1. Create an API key on the [Settings page](https://app.goldsky.com/dashboard/settings).
1. Install the Goldsky CLI:
   ```shell
   npm install -g @goldskycom/cli
   ```
1. Log in with the API key created earlier:
   ```shell
   goldsky login
   ```
1. Deploy your subgraph
   ```shell
   cd <your-subgraph-directory>
   graph build # Build your subgraph as normal.
   goldsky subgraph deploy my-subgraph/1.0.0
   ```
   Alternatively, if you have public subgraphs deployed to **The Graph’s hosted service**, the following command seamlessly migrates your subgraph to Goldsky:
   ```shell
   goldsky subgraph deploy your-subgraph-name/your-version --from-url <your-subgraph-query-url>
   ```
   [Learn more](/migrate-from-the-graph) about migrating from The Graph.
1. Access data
   ```shell
   goldsky subgraph list
   ```
   Open the "GraphQL API" link in your browser to access your data

---

## Getting help

If things do not go according to plan and you run into any issues or would like to provide feedback, please contact us at [support@goldsky.com](mailto:support@goldsky.com).
