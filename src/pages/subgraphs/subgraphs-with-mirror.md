---
title: Sync subgraphs to your datastore
description: Use Mirror to sync data, in real-time, to any of the supported sinks.
---

You can use subgraphs as a pipeline source, allowing you to combined the flexibility of subgraph indexing with the expressiveness of the database of your choice.

This will sync all the data from your subgraph to any of our supported sinks. You can also push data from _multiple subgraphs_ with the same schema into the same datastore, allowing you to **merge subgraphs across chains.**

## What you'll need

1. One or more subgraphs in your project - this can be from community subgraphs, a deployed subgraph, or a [no-code subgraph](subgraphs/instant-subgraphs). If more than one subgraph is desired, **they need to have the same graphql schema**.
2. Working database supported by Mirror. For more information on setting up a sink, see the [sink documentation](mirror/sinks/).
3. A project under Starter or Scale.

## Set up a pipeline

### Prepare a database

```shell
goldsky secret list
```

should show you available databases. If you need to setup a secret, you can use `goldsky secret create -h`. [Here](/mirror/sinks/postgresql#secrets) is an example.

### Select the subgraphs you would like to sync

Open the [Subgraphs Dashboard](https://app.goldsky.com/subgraphs) and find the deployment IDs of each subgraph you would like to use as a source.

Run the following query against the subgraph to get the deployment ID.

```graphql
query {
  _meta {
    deployment
  }
}
```

### Create the pipeline definition

Open a text editor create your definition, using the `subgraphEntity` source.

In this example we will use two subgraphs from our community subgraph collection:

- `qidao-optimism` (`QmPuXT3poo1T4rS6agZfT51ZZkiN3zQr6n5F2o1v9dRnnr`)
- `qidao-bsc` (`QmWgW69CaTwJYwcSdu36mkXgwWY11RjvX1oMGykrxT3wDS`)

They have the same schema, and we will be syncing the `account` and `event` entities from them.

{% callout type="warning" title="Entity names" %}
Entities may be camelCased in the GraphQL API, but here they must be snake_cased. For example, `dailySnapshot` will be `daily_snapshot` here.
{% /callout %}

```yaml
sources:
  - type: subgraphEntity
    # The deployment IDs you gathered above. If you put multiple,
    # the must have the same schema
    deployments:
      - id: QmPuXT3poo1T4rS6agZfT51ZZkiN3zQr6n5F2o1v9dRnnr
      - id: QmWgW69CaTwJYwcSdu36mkXgwWY11RjvX1oMGykrxT3wDS
    # A namespace, referred to later in the `sourceStreamName`
    referenceName: account
    entity:
      # The name of the entities
      name: account
  - type: subgraphEntity
    deployments:
      - id: QmPuXT3poo1T4rS6agZfT51ZZkiN3zQr6n5F2o1v9dRnnr
      - id: QmWgW69CaTwJYwcSdu36mkXgwWY11RjvX1oMGykrxT3wDS
    referenceName: market_daily_snapshot
    entity:
      name: market_daily_snapshot
# We are just replicating data, so we don't need any SQL transforms.
transforms: []
sinks:
  # In this example, we're using a postgres secret called SUPER_SECRET_SECRET.
  # Feel free to change this out with any other type of sink.
  - type: postgres
    # The sourceStreamName matches the above `referenceNames`
    sourceStreamName: account
    table: qidao_accounts
    schema: public
    secretName: SUPER_SECRET_SECRET
  - type: postgres
    sourceStreamName: market_daily_snapshot
    table: qidao_market_daily_snapshot
    schema: public
    secretName: SUPER_SECRET_SECRET
```

Save this as `qidao-crosschain.yaml` or whatever name you wish.

### Create the pipeline

```shell
goldsky pipeline create qidao-crosschain --definition-path qidao-crosschain.yaml --status ACTIVE
```

You should see a response from the server like:

```

◇  Successfully validated --definition-path file
✔ Created pipeline with name: qidao-crosschain
name: qidao-crosschain
version: 1
project_id: project_cl8ylkiw00krx0hvza0qw17vn
status: INACTIVE
resource_size: s
is_deleted: false
created_at: 1697696162607
updated_at: 1697696162607
definition:
  sources:
    - type: subgraphEntity
      entity:
        name: account
      referenceName: account
      deployments:
        - id: QmPuXT3poo1T4rS6agZfT51ZZkiN3zQr6n5F2o1v9dRnnr
        - id: QmWgW69CaTwJYwcSdu36mkXgwWY11RjvX1oMGykrxT3wDS
    - type: subgraphEntity
      entity:
        name: market_daily_snapshot
      referenceName: market_daily_snapshot
      deployments:
        - id: QmPuXT3poo1T4rS6agZfT51ZZkiN3zQr6n5F2o1v9dRnnr
        - id: QmWgW69CaTwJYwcSdu36mkXgwWY11RjvX1oMGykrxT3wDS
...
```

Monitor the pipeline with

```shell
goldsky pipeline monitor qidao-crosschain
```

It should start a minute, and data will start appearing in your postgresql database.
