---
title: Transforms
description: Write SQL to transform your data in real-time. Joins, aggregations, group by - you name it
---

{% partial file="closed-beta.md" /%}

At the core, Goldsky is powered by an extreme low-latency real-time streaming engine called Fusion. With Transforms, you get direct access to that engine to execute SQL transformations.

Data transformations are a powerful way to convert raw blockchain data into data insights that are valuable to your project.

You write transformations in a familiar SQL-like syntax. We are working on documenting this in more detail, please contact us if you are interested in writing data transformations to process your blockchain data in real-time.

{% callout title="Transformations update in real-time" %}
As data is added to a blockchain, each transformation is kept up-to-date with the latest block.

This allows you to use your streams for transactional use cases within your applications.
{% /callout %}

## Example use cases

Below are a few examples of what is possible with Goldsky’s data transformations. Note though, this is a small set of examples, the (gold)sky is the limit 🙂.

- Aggregate data in real-time, without having to think about data freshness and query intervals
- Apply complex filters without any query time overhead
- Detect fraudulent or corrupt data as soon as it happens
- Create streams for monitoring purposes

## Recipes

- [NFT transfers](/recipes/nft-transfers)
