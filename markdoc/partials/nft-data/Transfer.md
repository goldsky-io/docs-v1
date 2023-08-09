## Transfers

The Goldsky platform delivers transfer data in a standardized format. The Transfer Table encompasses fields that usually signify the transfer of an NFT between addresses. Here are the included fields:

Field | Description | Type(s)
--- | --- | ---
`nft_id` | Single, distinct identifier for an NFT | `string`
`chain` | Name of the blockchain | `string`
`contract_address` | Contract address associated with the NFT | `string`
`token_id` | Token ID of the NFT on its contract. Null for Solana and Bitcoin NFTs | `string` / `null`
`collection_id` | Unique identifier of the collection | `string`/ `null`
`event_type` | Type of transfer, which may be: `mint`, `sale`, `transfer`, or `burn` | `string`
`from_address` | Source address for the transfer. If null, this signifies a minting event | `string` / `null`
`to_address` | Destination address for the transfer. If null, this signifies a burn event | `string` / `null`
`quantity` | Quantity of this NFT being transferred | `int`
`timestamp` | Block time of the event in timestamp format (e.g., 2021-07-03T23:45:00Z) | `string`
`block_number` | Numerical representation of the block number of the transfer | `int`
`block_hash` | Hash of the specific block. Null for Solana NFTs | `string` / `null`
`transaction` | Distinct identifier of the transaction | `string`
`transaction_initiator` | Wallet address that initiated the transaction. Null for Solana, Flow, and Bitcoin NFTs | `string` / `null`
`log_index` | Index of the log in the transaction event logs | `int`
`batch_transfer_index` | Index of the transfer in the log | `int`
`sale_details` | Details on the sale event in this transfer, if applicable | `sale_details` / `null`