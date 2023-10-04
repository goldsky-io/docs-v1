## Floor Price

A floor price is the minimum listed price for an NFT within a specific collection—this often applies to a specific NFT marketplace.

The Goldsky platform provides insights into the floor price of NFT collections across various chains, currently including:

- Ethereum: Live
- Polygon: Live

The platform encompasses floor prices from multiple marketplaces such as CryptoPunks, Tensor, Blur, OpenSea, X2Y2, LooksRare, and Magic Eden.

Please note, marketplaces like LooksRare and Blur might display the "global floor price", representing the lowest price across several marketplaces.

We are continually working to cover more chains and marketplaces.

You can locate the `floor_prices` array in the `floor_prices` field within the Collection Table for "NFT by..." queries, and it is also accessible directly in the Collections by Wallet query.

**Comprehensive Floor Price Details**:

Field | Description | Type(s)
--- | --- | ---
`marketplace_id` | Distinct identifier of the NFT marketplace tied to the floor price | `string`
`value` | The floor price's monetary amount in the relevant currency | `int`/`null`
`payment_token` | Details about the applicable currency | `payment_token`

**Payment Token Information**:

Field | Description | Type(s)
--- | --- | ---
`payment_token_id` | Distinct identifier of the token type associated with the collection | `string`
`name` | Title of the token | `string` / `null`
`symbol` | Short representation of the token | `string` / `null`
`address` | The contract address of the ERC-20 token related to the collection | `string` / `null`
`decimals` | The base number of decimals for the token value associated with the collection | `int`