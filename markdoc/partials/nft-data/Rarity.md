## Rarity

The Goldsky platform adopts the OpenRarity standard to derive a consistent and mathematically-based rarity score for NFTs.

Currently, our system lends support to ERC-721 and Metaplex non-fungible token standards. We are working towards providing support for ERC-1155 in the near future.

**Rarity Score Details**:

Field | Description | Type(s)
--- | --- | ---
`rank` | Rarity rank—determined in relation to the scores of all other NFTs within the same collection | `int` / `null`
`score` | The calculated raw rarity score | `float` / `null`
`unique_attributes` | The count of unique attributes or traits, if any, possessed by this NFT | `int` / `null`