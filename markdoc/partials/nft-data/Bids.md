## Bids

On the Goldsky platform, users have the ability to view top bids -— these are the highest ongoing propositions for any NFT in a given collection.

Currently, top bids from the Blur marketplace are incorporated into the platform. We are constantly looking to expand our marketplace coverage and include various bid types.

The array containing the top bids can be located in the field `top_bids` in the Collection Table, available in the "NFT by..." queries, and also direct in the Collections by Wallet query.

**Key Information on Bids**:

Field | Description | Type(s)
--- | --- | ---
`marketplace_id` | Single, distinct identifier of the NFT marketplace where the top bid is placed | `string`
`value` | The top bid's monetary amount in the relevant currency | `int`/`null`
`payment_token` | Information about the currency used | `payment_token`

**Payment Token Information**:

Field | Description | Type(s)
--- | --- | ---
`payment_token_id` | Single, distinct identifier of the token type related to the collection | `string`
`name` | Title of the token | `string`/`null`
`symbol` | Short sign of the token | `string`/`null`
`address` | The contract address of the collection's associated ERC-20 token | `string`/`null`
`decimals` | The base number of decimals for the token value in the collection | `int`