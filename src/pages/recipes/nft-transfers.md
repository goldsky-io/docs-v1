---
title: NFT transfers
description: Stream raw, real-time NFT transfers directly into your data warehouse or application.
---

Power your app with real-time NFT transfer data, streamed directly into your data warehouse or application.

## Who is this for?

Anyone who wants to process NFT transfers in real-time. You could use this recipe to:

- monitor today's / this month's / ... top NFT transfers
- a specific NFT's transfer history
- receive an alert when your favorite NFTs is transferred
- anomaly detection / wash trade detection across all NFTs
- ...

## Architecture

This recipe combines:

- Source: [Direct data indexing](/indexing/direct-data-indexing)
- Fusion: [Transforms](/fusion/transforms)
- Mirror: PostgreSQL, [Timescale](/mirror/timescale), [Goldsky GraphQL](/mirror/goldsky-graphql)

{% excalidraw
  src="/images/docs/recipes/nft-transfers/goldsky-recipes-nft-transfers"
  alt="NFT transfers"
  width="400"
  height="240"
/%}

## Result

This solution provides two tables you can work with. Their schemas are documented below. Data from each table is also accessible via [Goldsky GraphQL](/mirror/goldsky-graphql).

With SQL Transforms, you can add additional tables. These tables are fully materialized tables that will be updated as each transaction is seen on the blockchain.

### Table `nft_balance`

#### Schema

| Name        | Type                      |
| ----------- | ------------------------- |
| balance     | numeric                   |
| contract_id | text                      |
| id          | text, primary key, unique |
| token_id    | text                      |
| wallet      | text                      |

### Table `token_transfer`

#### Schema

| Name             | Type              |
| ---------------- | ----------------- |
| vid              | bigint            |
| block            | integer           |
| id               | text              |
| contract_id      | text              |
| token_id         | text              |
| to               | text              |
| from             | text              |
| timestamp        | numeric           |
| type             | text              |
| value            | numeric, nullable |
| block_number     | numeric           |
| transaction_hash | text              |
| operator         | text, nullable    |
