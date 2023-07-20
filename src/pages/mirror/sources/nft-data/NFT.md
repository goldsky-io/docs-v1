## NFT Table

The Goldsky platform presents NFT data in a normalized manner. The following are the fields included in the NFT Table.

Field | Description | Type(s)
--- | --- | ---
nft_id | Unique identifier for an NFT | string
chain | The blockchain name | string
contract_address | Address of the NFT's contract | string
token_id | Token ID of the NFT on its contract. Null for Solana and Bitcoin NFTs | string / null
name | NFT's name derived from its metadata | string / null
description | NFT's description derived from its metadata | string / null
previews | Set of URLs to resized preview images of the media | see below
image_url | URL to cached image file | string / null
image_properties | Image properties if available | see below
video_url | URL to cached video file | string / null
video_properties | Video properties if available | see below
audio_url | URL to cached audio file | string / null
audio_properties | Audio properties if available | see below
model_url | URL to cached 3D model file | string / null
model_properties | Model properties if available | see below
other_url | URL to cached file for other media types such as PDFs | string / null
other_properties | File properties if available | see below
background_color | Background color of the NFT derived from its metadata | string / null
external_url | External URL derived from the NFT's metadata | string / null
created_date | NFT minting datetime in timestamp format (e.g., 2021-07-03T23:45:00) | string / null
status | NFT status, either 'minted', or 'burned' | string
token_count | Known quantity of this NFT | int / null
owner_count | Known number of owners of this NFT | int / null
owners | Array of top owners of this NFT | see below
last_sale | Detail on the most recent sale involving this NFT | last_sale / null
first_created | First creation NFT details | see below
contract | Contract type info for this NFT | see below
collection | The associated collection information for this NFT | Collection model
rarity | The associated rarity information for this NFT | Rarity model
royalty | Array of royalty details, by source | see below
extra_metadata | JSON field containing additional custom metadata fields | see below

**Previews**:
```
{
image_small_url:string / null,
image_medium_url:string / null,
image_large_url:string / null,
image_opengraph_url:string / null,
blurhash: string / null,
predominant_color: string / null
}
```

**Image Properties**:
```
{
width:int / null,
height: int / null,
size : int / null,
mime_type: str / null
}
```

**Video Properties**:
```
{
width: int / null,
height: int / null,
duration: float / null,
video_coding: str / null,
audio_coding: str / null,
size: int / null,
mime_type: str / null
}
```

**Audio Properties**:
```
{
duration: float / null,
audio_coding: str / null,
size: int / null,
mime_type: str / null
}
```

**Model Properties**:
```
{
size: int / null,
mime_type: str / null
}
```

**Other Properties**:
```
{
size: int / null,
mime_type: str / null
}
```

**Owners**:
```
[{
owner_address:string,
quantity: int,
first_acquired_date: string,
last_acquired_date: string
}]
```

**First Created**:
```
{
minted_to: string / null,
quantity: int / null,
timestamp: string / null,
block_number: int / null,
transaction: string / null,
transaction_initiator: string / null
}
```

**Contract**:
```
{
type:string,
name:string / null,
symbol:string / null,
deployed_by: string / null,
deployed_via_contract: string / null
}
```

**Royalty**:
```
[{
source: string,
total_creator_fee_basis_points: int,
recipients: [{
address: string,
percentage: float,
basis_points: int
}]
}]
```

**Extra Metadata**:
```
{
attributes: [{
trait_type:string,
value:string,
display_type:string / null
}],
...,
image_original_url:string / null,
animation_original_url:string / null,
metadata_original_url:string / null
}
```