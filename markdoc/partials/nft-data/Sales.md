## Sales

The Goldsky platform offers in-depth details on the sale of NFTs, which are included within the NFT and transfer tables.

In NFT responses, sale information can be found in the `last_sale` field, and transfer responses are included in the `sale_details` field.

**NFT Sale Table** (embedded within the NFT Table):

Field | Description | Type(s)
--- | --- | ---
`from_address` | Address from where the NFT was sold | `string` / `null`
`to_address` | Address where the NFT was acquired | `string` / `null`
`quantity` | Quantity of NFTs transacted. Null if `is_bundle_sale` is `true` | `int` / `null`
`timestamp` | Date and time of the NFT sale | `string`
`transaction` | Unique identifier of the transaction involving the NFT sale | `string`
`marketplace_id` | Identifier of the marketplace where the sale happened | `string`
`marketplace_name` | Name of the marketplace where the sale happened | `string`
`is_bundle_sale` | Indicates whether the sale was a bundle sale | `boolean`
`payment_token` | Details about the token used in the NFT sale. Null if `is_bundle_sale` is `true` | `payment_token` / `null`
`unit_price` | Individual unit price of an item within the NFT sale. Null if `is_bundle_sale` is `true` | `int` / `null`
`total_price` | Total price of the NFT sale. Null if `is_bundle_sale` is `true` | `int` / `null`
`unit_price_usd_cents` | Price of an individual item within the NFT sale, in USD cents, at the time of the transaction. Null if `is_bundle_sale` is `true` | `int` / `null`

**Transfer Sale Details Table** (embedded within the transfer Table):

Field | Description | Type(s)
--- | --- | ---
`marketplace_id` | Identifier of the marketplace where the sale happened | `string` / `null`
`marketplace_name` | Name of the marketplace where the sale took place | `string`
`is_bundle_sale` | Indicates whether the sale was a bundle sale | `boolean`
`payment_token` | Details about the token used in the NFT sale. Null if `is_bundle_sale` is `true` | `payment_token` / `null`
`unit_price` | Individual unit price of an item within the NFT sale. Null if `is_bundle_sale` is `true` | `int` / `null`
`total_price` | Total price of the NFT sale. Null if `is_bundle_sale` is `true` | `int` / `null`

**Payment Token Details**:

Field | Description | Type(s)
--- | --- | ---
`payment_token_id` | Unique identifier of the token type utilized in the sale | `string`
`name` | Name of the token | `string` / `null`
`symbol` | Symbol of the token | `string` / `null`
`address` | Contract address of the token used in the sale (null for the native ETH token) | `string` / `null`
`decimals` | Base number of decimals of the token value involved in the NFT sale | `int`