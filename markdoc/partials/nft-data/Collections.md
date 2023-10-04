## Collections

The Goldsky platform offers comprehensive insights into the collection associated with a particular NFT. Notably, these collections are often tied to specific NFT marketplaces. The Collection Table, which is embedded within the NFT Table, includes a variety of fields. Presently, the Goldsky platform encompasses collections from a range of platforms like OpenSea, Trove, and MagicEden.

Here are the details encapsulated in the Collection Table available within NFT responses and core Collection queries:

Field | Description | Type(s)
--- | --- | ---
`collection_id` | Distinct identifier for a particular collection | `string` / `null`
`name` | Title of the collection | `string` / `null`
`description` | Brief about the collection | `string` / `null`
`image_url` | URL leading to the collection's logo or main image | `string` / `null`
`banner_image_url` | URL leading to the collection's banner image | `string` / `null`
`category` | Category of the collection, if available | `string` / `null`
`is_nsfw` | Flag indicating if the collection is marked as NSFW | `boolean` / `null`
`external_url` | URL of the external website or resource linked to the collection | `string` / `null`
`twitter_username` | The Twitter handle linked to the collection | `string` / `null`
`discord_url` | The Discord server linked to the collection | `string` / `null`
`instagram_url` | Instagram URL for the collection | `string` / `null`
`medium_username` | Medium.com username associated with the collection | `string` / `null`
`telegram_url` | Telegram URL for the collection | `string` / `null`
`marketplace_pages` | Array of objects referencing the collection's page(s) on a marketplace | see below
`metaplex_mint` | Unique metaplex mint ID, only for Solana NFTs that are part of a verified metaplex collection | `string` / `null`
`metaplex_first_verified_creator` | Identifier to group by the initial verified creator address when a verified metaplex collection is not available | `string` / `null`
`spam_score` | Spam rating of the NFT collection, ranges from 0-100 (100 signifies high likelihood of being spam) | `int` / `null`
`floor_prices` | Array of minimum prices for the collection, one for each marketplace | `[Floor price model]`
`top_bids` | Array of highest bids for the collection, one for each marketplace | `[Top bid model]`
`chains` | Array of chains included in the collection | `[chain:string]`
`top_contracts` | Array of contracts linked to this collection | `[contract_id:string]`

**Marketplace Page Details**:
```
[{
`marketplace_id`: string,
`marketplace_name`: string,
`marketplace_collection_id`: string,
`nft_url`: string / null,
`collection_url`: string,
`verified`: boolean / null
}]
```