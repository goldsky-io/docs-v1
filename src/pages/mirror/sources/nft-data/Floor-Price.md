## Floor Price Tables

A floor price refers to the lowest listed price of an NFT for a specific collection (often specific to an NFT marketplace).

The Goldsky platform provides details on the floor price of NFT collections on the following chains:

- Ethereum: Live
- Solana: Live
- Polygon: Live
- Arbitrum: Live
- Optimism: Live
- Avalanche: Live
- BSC: Live

Floor prices from the following marketplaces are included: CryptoPunks, Tensor, Blur, OpenSea, X2Y2, LooksRare, and Magic Eden.

Note: Marketplaces like LooksRare and Blur may show the "global floor price", which is the floor price across several marketplaces. To see the marketplace-specific floor price, you may need to hover over the value or click into the collection.

More chains and marketplaces will be covered in the near future.

The `floor_prices` array can be found on the field named `floor_prices` on the Collection Table for "NFT by..." queries, and directly on the Collections by Wallet query.

**Floor Price Table**:

Field | Description | Type(s)
--- | --- | ---
marketplace_id | Unique identifier of the NFT marketplace associated with the floor price | string
value | The value of the floor price in the relevant currency | int/null
payment_token | Detail on the relevant currency | payment_token

**Payment Token Table**:

Field | Description | Type(s)
--- | --- | ---
payment_token_id | Unique identifier of the token type relevant to the collection | string
name | Name of the token | string / null
symbol | Symbol of the token | string / null
address | Contract address of the ERC-20 token associated with the collection | string / null
decimals | Base number of decimals of the token value | int