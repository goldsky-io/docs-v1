---
title: Create no-code subgraphs
description: Generate a subgraph instantly.
---

Simplify your indexing without writing any subgraph code.

## What you need

You only need two things to get started:

1. The contract address you're interested in indexing.
2. The ABI (Application Binary Interface) of the contract.

## Getting the ABI

If the contract you’re interested in indexing is a contract you deployed, then you’ll have the contract address and ABI handy. Otherwise, you can use a mix of public explorer tools to find this information. For example, if we’re interested in indexing the [friend.tech](http://friend.tech) contract…

1. Find the contract address from [Dappradar](https://dappradar.com/)
2. Click through to the [block explorer](https://basescan.org/address/0xcf205808ed36593aa40a44f10c7f7c2f67d4a4d4) where the ABI can be found

Save the ABI to your local file system and make a note of the contract address. Also make a note of the block number the contract was deployed at, you’ll need this at a later step.

## Creating the Instant Subgraph configuration

The next step is to create the Instant Subgraph configuration file. This file consists of five key sections:

1. Config version number
2. Config name
3. ABIs
4. Chains
5. Contract instances

### Version Number

As of October 2023, our Instant Subgraph configuration system is on version 1. This may change in the future. This is not the version number of your subgraph, but of Goldsky's configuration file format.

### Config Name

This is a name of your choice that helps you understand what this config is for. It is only used for internal debugging.

For this guide, we'll use `friendtech`.

### ABIs, Chains, and Contract Instances

These three sections are interconnected.

1. Name your ABI and enter the path to the ABI file you saved earlier (relative to where this config file is located). In this case, `ftshares` and `abi.json`.
2. Enter the chain - in this case, `Base`.
3. Write out the contract instance, referencing the ABI you named earlier, the address it's deployed at, the chain it's on, and the start block.

```json
{
  "version": "1", /* As of Oct 2023, this is always "1" */
  "name": "friendtech", /* internal name for reference */
  "abis": /* list of ABIs */
    "ftshares": { /* ABI name */
      "path": "./abi.json" /* path to ABI file */
    }
  },
  "chains": ["base"], /* list of chains */
  "instances": [ /* object for each subgraph instance */
    {
      "abi": "TokenRegistry", /* name of ABI defined above */
      "address": "0xCF205808Ed36593aa40a44F10c7f7C2F67d4A4d4",
      "startBlock": 2430440,
      "chain": "base"
    }
  ]
}
```

This configuration can handle multiple contracts with distinct ABIs, the same contract across multiple chains, or multiple contracts with distinct ABIs on multiple chains.

**For a complete reference of the various properties, please see the [Instant Subgraphs references docs](https://docs.goldsky.com/references/instant-subgraphs-config)**

## Deploying the Subgraph

With your configuration file ready, it's time to deploy the subgraph.

1. Open the CLI and log in to your Goldsky account with the command: `goldsky login`.
2. Deploy the subgraph using the command: `goldsky subgraph deploy name/version --from-abi <path-to-config-file>`, then pass in the path to the config file you created. Note - do NOT pass in the ABI itself, but rather the config file defined above.

Goldsky will generate all the necessary subgraph code, deploy it, and return an endpoint that you can start querying.

Clicking the endpoint link takes you to a web client where you can browse the documentation and draft queries to integrate into your app.
