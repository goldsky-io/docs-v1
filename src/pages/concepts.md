---
title: Concepts
description: What is indexing? What are pipelines? How do I integrate with Goldsky?
---

Learn about Goldsky concepts such as sources, pipelines, and sinks.

## Sources & sinks

In its most basic form, Goldsky reads data from one or more sources and gives you access to that data via sinks.

### Single source, single sink

For example, a source may be your subgraph which you can access through a GraphQL API.

{% excalidraw
  src="/images/docs/concepts/goldsky-concepts-source-sinks"
  width="200"
  height="240"
/%}

### Multiple sources, single sink

You are not limited to a single source or sink. With add-ons such as [cross-chain subgraphs](/fusion/cross-chain-subgraphs), you can merge more than one subgraph and access its data through a single GraphQL API sink.

{% excalidraw
  src="/images/docs/concepts/goldsky-concepts-two-sources-one-sink"
  width="400"
  height="240"
/%}

## Transforms

In many cases, projects have more complex data requirements than accessing (subgraph) data via for example a GraphQL API. This is where [Goldsky Transforms](/fusion) comes into play.

To accommodate for your project’s data needs, you can define [Transforms](/fusion/transforms) as seen in the following diagrams.

### Single transform

More often than not, your project requires some sort of data transformation. You can define a single SQL transform to `GROUP BY`, `SUM`, ... data so it fits the need of your project.

{% excalidraw
  src="/images/docs/concepts/goldsky-concepts-source-transforms-sink"
  width="200"
  height="240"
/%}

### Multiple transforms

What if your application requires slightly different data than your data warehouse? Well, multiple pipelines to the rescue.

Individual pipelines in the pipeline can connect to independent sinks. The following diagram outlines how a single source can serve both an ETL-style process and a real-time use case for an application.

{% excalidraw
  src="/images/docs/concepts/goldsky-concepts-source-transforms-sinks"
  width="400"
  height="240"
/%}
