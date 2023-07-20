## Transfer Table

The Goldsky platform provides transfer data in a consistent format. The fields included in the Transfer Table, which typically represent the transfer of an NFT between addresses, are as follows.

Field | Description | Type(s)
--- | --- | ---
nft_id | Unique identifier for an NFT | string
chain | The blockchain name | string
contract_address | Contract address of the NFT involved | string
token_id | Token ID of the NFT on its contract. Null for Solana and Bitcoin NFTs | string / null
collection_id | The unique identifier of the collection | string/ null
event_type | The type of transfer, either: mint, sale, transfer, burn | string
from_address | Originating address for the transfer. If null, this symbolizes a minting event | string / null
to_address | Destination address for the transfer. If null, this symbolizes a burn event | string / null
quantity | Quantity of this NFT being transferred | int
timestamp | Block time of the event in timestamp format (e.g., 2021-07-03T23:45:00Z) | string
block_number | Numeric figure representing the block number of the transfer | int
block_hash | Hash of the specific block. Null for Solana NFTs | string / null
transaction | Unique identifier of the transaction | string
transaction_initiator | Wallet address that initiated the transaction. Null for Solana, Flow, and Bitcoin NFTs | string / null
log_index | Index of the log in the transaction event logs | int
batch_transfer_index | Index of the transfer in the log | int
sale_details | Details on the sale event in this transfer, if applicable | sale_details / null