---
title: Creating a pipeline
description: Step by step instructions on how to create a Goldsky Mirror pipeline.
---

## Guided experience vs YAML definition

You have two options to create a Goldsky Mirror pipeline:

1. With a guided CLI experience
1. By providing a pipeline configuration

In both cases, you use the `goldsky pipeline create` CLI command.

### Guided CLI experience

This is the simplest way to create a new pipeline. Run `goldsky pipeline create <your-pipeline-name>` in your terminal and follow the prompts.

In short, the CLI guides you through the following process:

1. Select one or more source(s)
1. Depending on the selected source(s), define transforms
1. Configure one or more sink(s)

### Pipeline definition

This is an advanced way to create a new pipeline. Instead of using the guided CLI experience (see above), you create the pipeline definition on your own. Run `goldsky pipeline create <your-pipeline-name> --definition-path ./pipeline.yaml` in your terminal to create a pipeline.

A pipeline definition is a YAML structure with the following top-level properties:

```yaml
sources: []
transforms: []
sinks: []
```

Both `sources` and `sinks` are required with a minimum of one entry each. `transforms` is optional and an empty array can be used if no transforms are needed.

For details on the pipeline definition and all available properties, please refer to the [source](/mirror/sources) and [sink](/mirror/sinks)-specific documentation.

## Monitor a pipeline

When you create a new pipeline, the CLI automatically starts to monitor the status and outputs it in a table format.

If you want to monitor an existing pipeline at a later time, use the `goldsky pipeline monitor <your-pipeline-name>` CLI command. It refreshes every ten seconds and gives you insights into how your pipeline performs.
