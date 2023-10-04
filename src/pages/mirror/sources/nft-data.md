---
title: NFT Data (coming soon)
description:
---

{% partial file="closed-beta.md" /%}

Our NFT Metadata dataset includes:

- Image metadata
- Royalty metadata
- Floor price and previous sales
- Transfers
- Off-chain and on-chain Bids/Sales
- Rarity

As a mirror source, you'd be able to sink it into any of our supported sinks, execute transformations and aggregations, as well as join it with other datasets.

This dataset is in technical preview - it's being used in production by customers already but we are onboarding new users slowly as we scale up our infrastructure.

[Email us](mailto:support@goldsky.com) if you'd like to join our technical preview program.

## NFT Table Schemas 

{% partial file="nft-data/Collections.md" /%}
{% partial file="nft-data/NFT.md" /%}
{% partial file="nft-data/Listings.md" /%}
{% partial file="nft-data/Bids.md" /%}
{% partial file="nft-data/Sales.md" /%}
{% partial file="nft-data/Floor-Price.md" /%}
{% partial file="nft-data/Transfer.md" /%}
{% partial file="nft-data/Rarity.md" /%}
{% partial file="nft-data/Spam-Scores.md" /%}
