## Understanding Spam Scores

**Background**

The rising popularity of NFTs has led to an upsurge in spam NFTs, degrading user experience significantly. Users often find themselves puzzled or irritated by unfamiliar, low-quality NFTs appearing in their wallets and dapp use cases. More ominously, these NFTs—usually mass-airdropped—may contain harmful links to external sites or resources. Spam NFTs are proliferating rapidly on popular networks with lower transaction fees or costs, notably Polygon and Solana. Presently, spam scores are accessible to enterprise plan customers on the main EVM chains and Solana.

**Objectives**

Goldsky's implementation of spam scoring pursues two primary goals:

1. Facilitate the identification of low-quality, unwanted airdropped NFTs, referred to as "spam NFTs."
2. Aid in recognizing NFTs that carry dangerous or malicious external links—"scam NFTs."

There's a somewhat blurred line separating these two types of NFTs, and the current implementation may target those falling under both categories.

**Goldsky Spam Scoring - Current Approach**

Goldsky offers a spam score for most NFT collections, equipping end users with additional tools to tackle spam NFTs. This score is calculated using a blend of models, heuristics, and external data sources. The resulting score is a numerical value that ranges from 0 to 100—0 being considered non-spam and 100 indicating likely spam.

The `spam_score` field is provided inline with the API's NFT response bodies within the `collection` field.

Currently, the spam scores are generated at the NFT collection level. This means all NFTs within a specific collection will share the same score. If the response is null, it indicates that the collection either lacks sufficient information for scoring or has not yet been evaluated.