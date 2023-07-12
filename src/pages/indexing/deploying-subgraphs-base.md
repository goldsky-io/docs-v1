---
title: Deploying Subgraphs on Base
description: Step by step instructions to the most common ways to deploy your subgraphs
---

After you've followed the setup instructions in our [Getting Started guide](/) you have multiple ways you can deploy your subgraph to Goldsky.

For these examples we'll use the Ethereum contract for [POAP](https://poap.xyz).

1. From a contract address using The Graph's CLI
2. From Source
3. From The Graph URL or IPFS hash
4. Instant Subgraph Configuration

# From a contract address using The Graph's CLI

The contract address for POAP on Ethereum is `0x22C1f6050E56d2876009903609a2cC3fEf83B415`.

Make sure you have [The Graph's CLI tool](https://thegraph.com/docs/en/cookbook/quick-start/#2-install-the-graph-cli) installed, then in your terminal initialize a new subgraph.

There will be some interactive prompts, fill them out as seen below.

```shell
graph init poap-subgraph
✔ Product for which to initialize · subgraph-studio
✔ Subgraph slug · poap-subgraph
✔ Directory to create the subgraph in · poap-subgraph
✔ Ethereum network · mainnet
✔ Contract address · 0x22C1f6050E56d2876009903609a2cC3fEf83B415
✔ Fetching ABI from Etherscan
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
```

It's pretty common when using this method for the Start Block to not be automatically detected. You can find it yourself by checking the contract on [Etherscan](https://etherscan.io/address/0x22C1f6050E56d2876009903609a2cC3fEf83B415) or the relevant scanner for the network your subgraph is on.

From the contract page, you can find the transaction that created the contract under `CONTRACT CREATOR`, click through to the [transaction or txn](https://etherscan.io/tx/0xc1522208c1e109ddbdd449125373f4dfb44e2fb9d0feb04a5e6ed5b09875506d) and the block number should be visible. Copy and paste that into the terminal and you should be good to go.

```shell
✔ Start Block · 7844214
✔ Contract Name · POAP
✔ Index contract events as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
Add another contract? (y/n): n
Subgraph poap-subgraph created in poap-subgraph
```

You will now have a directory with the scaffolding for the POAP subgraph.

To deploy this subgraph to Goldsky, make sure you're logged in with your API token, then run the following command.

```shell
cd poap-subgraph
yarn build
goldsky subgraph deploy poap-subgraph/1.0.0 --path .
```

You can give your subgraph any name and version that you want. Versioning is useful for when you make updates to your subgraph and you want the GraphQL endpoint to remain consistent. We'll show you how to manage that using [Tags](#tags) at the end of this page.

# From Source

If you've developed your own subgraph, you can deploy it from your system. It's a similar process to deploying a subgraph built from the contract address. In our example we'll be using the open source [POAP subgraph](https://github.com/poap-xyz/poap-subgraph).

First we need to clone the Git repo.

```shell
git clone https://github.com/poap-xyz/poap-subgraph.git
```

Now change into that directory. From here, we'll build the subgraph from templates. Open source subgraphs have different instructions to get them to build, so check the `README.md` or look at the `package.json` for hints as to the correct build commands. Usually it's a two step process, but since POAP is deployed on multiple chains, there's one extra step at the start to generate the correct data from templates.

```shell
yarn prepare:mainnet
yarn codegen
yarn build
```

Then you can deploy the subgraph to Goldsky using the following command.

```shell
goldsky subgraph deploy poap-subgraph/1.0.0 --path .
```

# Instant Subgraph Configuration

For a detailed guide on using our Instant Subgraph Configurations, check out [this guide](/indexing/instant-subgraphs).
