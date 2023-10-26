---
title: Getting started
pageTitle: Goldsky - Getting Started
description: Index subgraphs and transform on-chain data. Query with GraphQL, SQL, and more.
---

Goldsky provides foundational data infrastructure for applications that need real-time blockchain data, right in their own infrastructure.

**Subgraphs**:  
Enterprise-grade webasm-powered indexing with full backwards compatibility with subgraphs. Use with add-ons like webhooks and more.

**Mirror**:  
A data pipeline platform that allows you to get real-time, re-org aware tables in your database or message queues with a single yaml config.

Subgraphs and Mirror can be used together or separately. Mirror can use Goldsky-hosted subgraphs as a data source, allowing you to get your data into any of our sinks without any data lag.

{% .lead %}

{% quick-links %}

{% comment %}
TODO: Determine which icons to use
{% /comment %}

{% quick-link title="Indexing subgraphs" icon="installation" href="/subgraphs" description="Get started with Subgraphs" /%}

{% quick-link title="Migrate from The Graph" icon="plugins" href="/migrate-from-the-graph" description="Migrate your subgraphs from The Graph and host them on Goldsky." /%}

{% quick-link title="Sync data" icon="theming" href="/mirror" description="Use Mirror to push data into your project." /%}

{% quick-link title="Select a database to push to" icon="theming" href="/mirror/choosing-the-right-sink" description="Choose the right sink for your project from our supported sinks." /%}
{% /quick-links %}

---

## Quick start

To get started with Goldsky:

1. Create an account at [app.goldsky.com](https://app.goldsky.com "target=hello").
1. Choose a plan that best fits your needs.
1. Create an API key on the [Settings page](https://app.goldsky.com/dashboard/settings).
1. Install the Goldsky CLI:
   ```shell
   curl -fsSL https://cli.goldsky.com/install | bash
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
