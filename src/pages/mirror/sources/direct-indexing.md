---
title: Direct Indexing
description: Goldsky Mirror direct indexing sources
---

With mirror pipelines, you can access to indexed on-chain data. Define them as a source and pipe them into any sink we support.

## Use-cases

- Mirror specific logs and traces from a set of contracts into a postgres database to build an API for your protocol
- ETL data into a data warehouse to run analytics
- Push the full blockchain into Kafka or S3 to build a datalake for ML

## Supported Chains

|                      | Raw blocks | Raw transaction | Raw logs | Decoded logs | Traces | Decoded Traces \* | Raw Receipts |
| -------------------- | :--------: | :-------------: | :------: | :----------: | :----: | :---------------: | :----------: |
| Arbitrum One         |     ✅     |       ✅        |    ✅    |              |   ✅   |                   |      ✅      |
| Base                 |     ✅     |       ✅        |    ✅    |              |   ✅   |                   |      ✅      |
| Base Goerli          |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |                   |      ✅      |
| Celo                 |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Ethereum             |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Gnosis               |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Linea                |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Optimism             |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Polygon              |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Scroll Alpha Testnet |     ✅     |       ✅        |    ✅    |      ✅      |   ✅   |        ✅         |      ✅      |
| Zora                 |     ✅     |       ✅        |    ✅    |              |   ✅   |                   |      ✅      |
| Zora Goerli          |     ✅     |       ✅        |    ✅    |              |   ✅   |                   |      ✅      |
| Arweave \*\*         |     ✅     |       ✅        |   N/A    |     N/A      |  N/A   |        N/A        |     N/A      |

\* Decoded traces are available upon request.

\*\* The Arweave dataset includes bundled/L2 data.

Additional chains, including roll-ups, can be indexed on demand. [Contact us](mailto:support@goldsky.com) to kick things off!

## Schema

The schema for each of these datasets can be found [here](/mirror/references/indexed-on-chain-data-schemas).

> Please ensure you have adequate storage before syncing complete datasets.

Raw and decoded logs can be pre-filtered by contract address to include only relevant data to that contract. Note, if you don't filter these logs, the datasets will be sizeable and require sufficient storage and budget.

You can choose to sync all historical data or start syncing from the time the pipeline is created during the pipeline creation process.

## Decoded Datasets

When we index a chain, we decode logs and traces to the best of our ability using a large database of ABI's. We also use a set of heuristics to decode logs and traces that don't have an ABI.

For Ethereum, we have around 97+% of event logs decoded. However, if you're developing a new contract, it's likely that we won't have the ABI for it. In this case, you can provide us with the ABI and we'll add it to our database.

The ability to decode your contracts using Mirror pipelines is in testing - [email us](mailto:support@goldsky.com) if you'd like to try it out.
