## Listings

The Goldsky platform includes details of active and historical listings on NFT marketplaces.

Currently supported live marketplaces:

- MagicEden: Live
- CryptoPunks: Live
- Tensor: Live
- Blur: Live
- OpenSea: Live
- LooksRare: Live
- X2Y2: Live

More marketplaces will be covered in the near future.

**Listing Table**:

Field | Description | Type(s)
--- | --- | ---
id | Unique identifier of the listing | string
permalink | Link to the marketplace listing | string
bundle_item_number | If the listing is part of a bundle, the NFT's position in the bundle | int / null
listing_timestamp | Datetime of the listing | string
expiration_timestamp | Expiration datetime of the listing | string / null
seller_address | Owner wallet address | string
auction_type | Auction type, if applicable. Possible values are: dutch (AKA decreasing price auction) | string / null
quantity | Original listing quantity | int
quantity_remaining | Remaining listing quantity | int
price | Total price of the listing | int
marketplace_id | Unique identifier of the NFT marketplace associated with the listing | string
collection_id | Unique identifier for a specific collection | string / null
nft_id | Unique identifier for an NFT | string
payment_token | Detail on the token used for the listing | payment_token / null

**Listing Event Table**:

Field | Description | Type(s)
--- | --- | ---
id | Unique identifier of the listing event | string
event_type | Generic type of event, one of: listing_added, listing_modified, listing_removed | string
event_reason | More detailed reason (if available); one of: listing_cancelled, listing_expired, ownership_changed, quantity_changed, price_changed | string / null
event_timestamp | Datetime of the event as processed | string
listing_id | Unique identifier of the listing from the Listing Table | string
... | (Additional fields from the Listing Table) | 

**Payment Token Table**:

Field | Description | Type(s)
--- | --- | ---
payment_token_id | Unique identifier of the token type relevant to the collection | string
name | Name of the token | string / null
symbol | Symbol of the token | string / null
address | Contract address of the ERC-20 token associated with the collection | string / null
decimals | Base number of decimals of the token value associated with the collection | int