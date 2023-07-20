## Bid Tables

Currently, the Goldsky platform provides access to top bids, which represent the highest current offer for any NFT within a collection.

Top bids from the following marketplaces are included: Blur

Additional marketplace coverage and bid types will be incorporated soon.

The top bids array can be found on the field named top_bids on the Collection Table from the "NFT by..." queries, and directly on the Collections by Wallet query.

**Top Bids Table**:

Field | Description | Type(s)
--- | --- | ---
marketplace_id | Unique identifier of the NFT marketplace associated with the top bid | string
value | Value of the top bid in the relevant currency | int/null
payment_token | Detail on the relevant currency | payment_token

**Payment Token Table**:

Field | Description | Type(s)
--- | --- | ---
payment_token_id | Unique identifier of the token type relevant to the collection | string
name | Name of the token | string / null
symbol | Symbol of the token | string / null
address | Contract address of the ERC-20 token associated with the collection | string / null
decimals | Base number of decimals of the token value associated with the collection | int