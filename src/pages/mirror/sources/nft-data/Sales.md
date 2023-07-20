## Sale Tables
The Goldsky platform provides details on the sale of NFTs within the bodies of both the NFT and transfer tables. Currently, information on NFT sales will be returned for sales that occurred on several marketplaces and chains as listed [here](https://www.goldsky.com/chains-marketplaces).

On NFT responses, sale information is included in the field named last_sale, whereas in transfer responses, it is included in the field named sale_details.

**last_sale Table** (included inline with the NFT Table):

Field | Description | Type(s)
--- | --- | ---
from_address | Address selling the NFT | string / null
to_address | Address acquiring the NFT | string / null
quantity | The quantity of NFTs being sold. Null if is_bundle_sale is true | int / null
timestamp | Datetime of the NFT sale | string
transaction | Unique identifier of the NFT sale transaction | string
marketplace_id | ID of the marketplace the sale occurred on | string
marketplace_name | Name of the marketplace the sale occurred on | string
is_bundle_sale | Whether the sale was a bundle sale | boolean
payment_token | Detail on the token used to make the NFT sale. Null if is_bundle_sale is true | payment_token / null
unit_price | Individual unit price of an item within the NFT sale. Null if is_bundle_sale is true | int / null
total_price | Total price of the NFT sale. Null if is_bundle_sale is true | int / null
unit_price_usd_cents | Individual price of an item within the NFT sale, in USD cents, at the time of the transaction. Null if is_bundle_sale is true | int / null

**sale_details Table** (included inline with the transfer Table):

Field | Description | Type(s)
--- | --- | ---
marketplace_id | ID of the marketplace the sale occurred on | string / null
marketplace_name | Name of the marketplace the sale occurred on | string
is_bundle_sale | Whether the sale was a bundle sale | boolean
payment_token | Detail on the token used to make the NFT sale. Null if is_bundle_sale is true | payment_token / null
unit_price | Individual unit price of an item within the NFT sale. Null if is_bundle_sale is true | int / null
total_price | Total price of the NFT sale. Null if is_bundle_sale is true | int / null

**payment_token Table**:

Field | Description | Type(s)
--- | --- | ---
payment_token_id | Unique identifier of the token type used for the sale | string
name | Name of the token | string / null
symbol | Symbol of the token | string / null
address | Contract address of the token used to make the sale (null for the native ETH token) | string / null
decimals | Base number of decimals of the token value involved in the NFT sale | int