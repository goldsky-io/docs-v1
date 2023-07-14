---
title: Deploying Subgraphs on Base
description: Step by step instructions to the most common ways to deploy your subgraphs
---

After you've followed the setup instructions in our [Getting Started guide](/), you can use the Instant Subgraph instructions on this page to index a contract address.

For this example we'll use the [BaseGenesisNFT](https://basescan.org/address/0x1fc10ef15e041c5d3c54042e52eb0c54cb9b710c) contract `0x1fc10ef15e041c5d3c54042e52eb0c54cb9b710c`.

1. Copy the contract ABI from the "Contract ABI" section on [the contract's basescan.org page](https://basescan.org/address/0x1fc10ef15e041c5d3c54042e52eb0c54cb9b710c#code) to a `base-genesis-nft-abi.json` file locally.
   * **Note**: Make sure you use the copy icon and not the "Export ABI" option.
1. Create an Instant Subgraph configuration file called `base-genesis-nft.json` with the following content:
   ```json
    {
      "version": "1",
      "name": "BaseGenesisNFT",
      "abis": {
        "BaseGenesisNFT": {
          "path": "./base-genesis-nft-abi.json"
        }
      },
      "chains": ["base"],
      "instances": [
        {
          "abi": "BaseGenesisNFT",
          "address": "0x1fc10ef15e041c5d3c54042e52eb0c54cb9b710c",
          "startBlock": 0,
          "chain": "base"
        }
      ]
    }
   ```
1. Start indexing with:
   ```shell
   goldsky subgraph deploy base-genesis-nft/1.0.0 --from-abi ./base-genesis-nft.json
   ```

You can [learn more about Instant Subgraphs]((/indexing/instant-subgraphs)) and how to configure them in our docs.

To find the GraphQL query URL, run the following command:

```shell
goldsky subgraph list base-genesis-nft-base/1.0.0
```

**Note**: Notice how the name ends with `-base`. That was added automatically to indicate we deal with an Instant Subgraph on Base.
