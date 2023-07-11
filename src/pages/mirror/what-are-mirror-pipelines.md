---
title: What are Mirror pipelines?
description: Learn what Mirror pipelines are and how you can create them.
---

A Mirror pipeline instructs Goldsky where to take data from (**sources**), how to _optionally_ process that data (**transforms**), and where to persist the results (**sinks**).

Behind the scenes, pipelines do a lot more than transferring data from sources to sinks. Among other features, each pipeline:

- is reorg aware and updates your datastores with the final result
- runs backfills & data live streaming fully managed by Goldsky so you can focus on your business
- benefits from quality checks and receives automated updates should there be fixes or improvements
- works with data across chains without worrying about harmonizing data, making sure timestamps + order of events line up, etc.

At its core, a pipeline is a JSON configuration. You can learn more about its schema on the [pipeline configuration](/mirror/references/pipeline-configuration) docs page.

Mirror allows you to keep blockchain data where your app is. This offers you unlimited access without thinking about API rate limits or worrying about latency. You get the data **pushed** to your database and you do whatever you need with it.

Mirror isn't your typical export pipeline:

- It's **real-time**. You can get data as soon as it's available on-chain.
- It's **flexible**. You can choose what data you want to index and how you want to process it.
- It's **scalable**. You can index data from multiple sources and process it in parallel.

At its core, a pipeline is a JSON configuration.

- [Pipeline configuration reference](/mirror/references/pipeline-configuration) docs page.

Learn more about available sources and sinks:

- [Sources](/mirror/sources)
- [Sinks](/mirror/sinks)

To get started, check out our [Quick Start guide](/mirror/quick-start).
