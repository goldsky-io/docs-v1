---
title: "Guide: Bored Ape Contract -> NeonDB"
description: Get started with Mirror pipelines.
---

The `goldsky` CLI provides wizard to create pipelines. Based on the input you provide, the CLI generates a pipeline definition for you behind the scenes.

To create a new pipeline with the wizard, use the following command:

```shell
goldsky pipeline create <your-pipeline-name>
```

## Wizard Example: Bored Ape Contract Events to NeonDB

In this example, we will create a pipeline that indexes Bored Ape Yacht Club contract events to a NeonDB (Postgres) database. This will include all transfers and other auxillary events associated to that address, with our ethereum decoded dataset as the source.

Initiate the wizard:

```shell
goldsky pipeline create bored-ape-transfers
```

1. **Select a Data Source**: Choose _Indexed on-chain data_.
1. **Choose Data Type**: Opt for _Ethereum - Decoded Logs_.
1. **Data Processing Time**: Pick _Process data from the time this pipeline is created_.
1. **Additional Sources**: Select _No_ when asked to add more sources.
1. **Data Filtering**: Choose _Yes, filter the indexed on-chain data_.
1. **Contract Address**: Enter the [Bored Ape Yacht Club](https://boredapeyachtclub.com) contract address, `0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d`, when prompted.
1. **Transformation**: Choose _No_ when asked to add another transform.
1. **Set Up Sink**: Choose a [Neon DB](https://neon.tech) Postgres instance.
1. **Set Up Secret**: Connect your sink by following the prompts or selecting an existing one. This information is stored in your Goldsky account.
1. **Map Data to Sink Tables**: Select _Yes_ when asked to automatically map data to sink tables. Choose _No_ if you wish to customize the table name.
1. **Additional Sinks**: Select _No_ when asked to add another sink.

Upon successful completion of these steps, an active pipeline is created. Data should start appearing in your database shortly. Monitor the table that is displayed. "RUNNING" status should appear after a minute or two. To monitor progress at any time, use:

```shell
goldsky pipeline monitor bored-ape-transfers
```

You can get the generated pipeline definition using:

```shell
goldsky pipeline get-definition bored-ape-transfers
```

For a full list of all available commands, use:

```shell
goldsky pipeline --help
```

If you encounter any issues, please contact us [via email](mailto:support@goldsky.com).
