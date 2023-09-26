---
title: Instant Subgraphs Configuration
description: Goldsky's configuration file for instant subgraphs.
---

This configuration file is required for [Instant Subgraphs](/subgraphs/instant-subgraphs).

## Configuration

```json5
{
  version: "1", // The version of this config, we only support a value of "1" right now
  name: "TokenDeployed", // The name of the event you want to track as specified in the ABI file
  abis: {
    // Mapping of ABIs names (can be anything you want) to ABI files
    TokenRegistry: {
      path: "./path/to/your/abi.json",
    },
  },
  chains: ["mainnet"], // All the chains this contract has been deployed to that you want to track. For each chain, you must have an instance below in which the chain name matches. Note that not every ABI must be deployed on all declared chains
  instances: [
    {
      abi: "TokenRegistry", // The ABI you want to track. This name must match a key in the `abis` object above
      address: "0x...", // The address of the contract
      startBlock: 13983724, // The block from which you want your subgraph to start indexing (in most cases, this is the block that deployed your contract)
      chain: "mainnet", // The chain you want to track this contract on
    },
  ],
}
```

## Examples

### Multi-chain

This example shows how to define multiple chains with many addresses.

```json
{
  "name": "TokenDeployed",
  "abis": {
    "TokenRegistry": {
      "path": "./abis/tokenRegistryAbi.json"
    }
  },
  "chains": ["mainnet", "avalanche", "evmos", "moonbeam", "milkomedac1"],
  "instances": [
    {
      "abi": "TokenRegistry",
      "address": "0x0A6f564C5c9BeBD66F1595f1B51D1F3de6Ef3b79",
      "startBlock": 13983724,
      "chain": "mainnet"
    },
    {
      "abi": "TokenRegistry",
      "address": "0x2d6775C1673d4cE55e1f827A0D53e62C43d1F304",
      "startBlock": 13718798,
      "chain": "avalanche"
    },
    {
      "abi": "TokenRegistry",
      "address": "0x10B84C73001745D969e7056D7ca474ce1D959FE8",
      "startBlock": 59533,
      "chain": "evmos"
    },
    {
      "abi": "TokenRegistry",
      "address": "0xa7E4Fea3c1468D6C1A3A77e21e6e43Daed855C1b",
      "startBlock": 171256,
      "chain": "moonbeam"
    },
    {
      "abi": "TokenRegistry",
      "address": "0x19d4b0F5871913c714554Bbb457F2a1549f52E04",
      "startBlock": 1356181,
      "chain": "milkomedac1"
    }
  ]
}
```

This configuration results in multiple deployed subgraphs, each with an identical GraphQL schema for you to fetch data.

If you prefer a combined view of the data across all deployed subgraphs, please have a look at [cross-chain subgraphs](/fusion/cross-chain-subgraphs).

### Factory patterns

Some contracts create other child contracts, which then emit events that you need to track. The configuration here can handle that by allowing you specify a `source` inside an `instance` entry. The `source` tells the indexer which Factory contract event creates a new contract, and the address of the new contract as inferred from the event argument.

```json5
{
  // This configuration is mostly the same as the one above
  name: "",
  abis: {
    Factory: {
      path: "./abis/factory.json", // The path to the ABI for the Factory contract
    },
    Pool: {
      path: "./abis/pool.json", // The path the ABI for the contract deployed by the Factory contract
    },
  },
  chains: ["bsc"],
  instances: [
    {
      abi: "Factory",
      address: "0xa98242820EBF3a405D265CCd22A4Ea8F64AFb281",
      startBlock: 16748800,
      chain: "bsc",
    },
    {
      abi: "Pool",
      // This is the main difference between the configuration for factory vs non-factory applications.
      // In this example, the Factory contract makes new Pool contracts and the below configuration specifies that with this `source` object
      source: {
        abi: "Factory", // The ABI name which creates this contract
        eventSignature: "PoolCreated(address,address,bool)", // This is the signature of the event from the Factory contract which indicates that this contract was created
        addressParam: "pool", // The name of the parameter from the Factory contract's event that contains the new address to track
      },
    },
  ],
}
```

In this example, there is a defined factory contract that makes many pools, and each pool needs to be tracked. We have two ABIs and the last `instance` entry looks for any `PoolCreated` event in the `Factory` ABI, gets a parameter from it, and uses that as a data source to watch for future `Pool` events in the `Pool` ABI.
