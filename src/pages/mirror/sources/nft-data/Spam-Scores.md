## Spam Scores

Check our [overview blog post](#) for a detailed understanding of how spam scores work.

**Overview**

With the increasing adoption of NFTs, spam NFTs have become a significant problem. This results in a poor user experience, especially in wallet and dapp use cases, where users often get confused or annoyed by unfamiliar, low-quality NFTs that appear. An even greater issue arises when these NFTs, typically mass-airdropped, contain malicious links to harmful external sites or resources. Spam NFTs have been growing faster on popular networks with lower transaction fees or costs, most notably Polygon and Solana. Currently, spam scores are available to enterprise plan customers on the main EVM chains and Solana.

**Goals**

The spam scoring implementation on Goldsky has two primary objectives:

1. Make it easier to identify low-quality NFTs from unwanted airdrops ("spam NFTs").
2. Make it easier to identify NFTs that have dangerous or malicious external links ("scam NFTs").

There is a blurred boundary between these two types of NFTs, and the current implementation may target those that fit into both categories.

**Goldsky Spam Scoring - Current Implementation**

Goldsky provides a spam score for most NFT collections to furnish end users with more tools to combat spam NFTs. This model is generated through a blend of models, heuristics, and external data sources. The score is a numeric value ranging from 0 to 100, with 0 being considered not spam and 100 being likely spam.

The field `spam_score` is provided inline with API's NFT response bodies within the collection field.

Currently, the spam scores are generated at the NFT collection level, meaning all NFTs within a given collection will have the same score. If the response is null, the collection either lacks enough information to be scored or has not yet been assessed.