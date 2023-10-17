---
title: Managing API endpoints with Tags
description: Use tags to manage point API endpoints without without front-end changes.
---

Tags are used to maintain a consistent GraphQL endpoint. You can treat them like pointers or aliases to specific versions.

By default, the subgraph API endpoints are named after the subgraph name and version, so if you update your subgraph to a new version, you'll need to update your front end to point to the new endpoint.

Using tags, you can manage your versions and seamlessly upgrade your subgraph version without having the URL change.

In this example, we'll assume you have already deployed a subgraph with the name and version `poap-subgraph/1.0.0`. We'll show you how to create a tag and how to move it to another subgraph version.

First, create a tag using the Goldsky CLI and associate it with your subgraph.

```shell
goldsky subgraph tag create subgraph/1.0.0 --tag prod
```

We've now created a new tag called `prod`. Now our GraphQL endpoint will use the word `prod` instead of the version number. You should see the new GraphQL endpoint listed in your terminal after running the command.

Let's say you've upgraded your `poap-subgraph` to verison `2.0.0` and want to start querying it with your `prod` GraphQL endpoint. It's as simple as creating the tag again on the new version.

```shell
goldsky subgraph tag create subgraph/2.0.0 --tag prod
```

Like before, you should see the GraphQL endpoint after running this command, and it should be the same as before. Now your queries will be routed to the `2.0.0` version of the subgraph seamlessly
