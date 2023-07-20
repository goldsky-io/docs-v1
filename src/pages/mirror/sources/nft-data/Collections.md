## Collection Table

The Goldsky platform provides details about the collection associated with an NFT. Typically, these collections are specific to certain NFT marketplaces. The following are the fields included for the Collection Table, which appears inline as a field on the NFT Table. Currently, the Goldsky platform includes collections found on various platforms such as OpenSea, Trove, and MagicEden.

For the Collection Table found on NFT responses and core Collection queries:

Field | Description | Type(s)
--- | --- | ---
collection_id | Unique identifier for a specific collection | string / null
name | Name of the collection | string / null
description | Description of the collection | string / null
image_url | URL to the collection logo/main image | string / null
banner_image_url | URL to the collection banner image | string / null
category | Collection category if available | string / null
is_nsfw | Collection flagged as NSFW | boolean / null
external_url | URL to the external website or resource associated with the collection | string / null
twitter_username | Twitter handle of the account associated with the collection | string / null
discord_url | Discord server associated with the collection | string / null
instagram_url | Instagram URL for the collection | string / null
medium_username | Medium.com username for the collection | string / null
telegram_url | Telegram URL for the collection | string / null
marketplace_pages | Array of objects referencing the collection's page(s) on a marketplace | see below
metaplex_mint | Unique metaplex mint ID, only for Solana NFTs with a verified metaplex collection | string / null
metaplex_first_verified_creator | Identifier to group by the first verified creator address when a verified metaplex collection is not available | string / null
spam_score | NFT collection's spam rating, ranging between 0-100 (100 being most likely spam) | int / null
floor_prices | Array of floor prices for the collection, one for each marketplace | [Floor price model]
top_bids | Array of top bids for the collection, one for each marketplace | [Top bid model]
chains | Array of chains in the collection | [chain:string]
top_contracts | Array of contracts associated with this collection | [contract_id:string]

**Marketplace Pages**:
```
[{
marketplace_id: string,
marketplace_name:string,
marketplace_collection_id:string,
nft_url:string / null,
collection_url:string,
verified:boolean / null
}]
```