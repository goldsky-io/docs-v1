---
title: CLI
pageTitle: Command Line Interface
description: Goldsky's command line interface reference
---

{% comment %}
To copy the help output of a command to the clipboard: `goldsky <cmd> -h | pbcopy`
{% /comment %}

```
goldsky <cmd> args
```

How to use:

```
Commands:
  goldsky login     Log in to Goldsky to enable running authenticated CLI comman
                    ds
  goldsky logout    Log out of Goldsky on this computer
  goldsky subgraph  commands related to subgraphs
  goldsky project   commands related to project management
  goldsky indexed   commands related to Indexed data

Options:
      --token    CLI Auth Token                           [string] [default: ""]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]
```

## login

```
goldsky login
```

How to use:

```
Log in to Goldsky to enable running authenticated CLI commands

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

## logout

```
goldsky logout
```

How to use:

```
Log out of Goldsky on this computer

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

## subgraph

```
goldsky subgraph
```

How to use:

```
commands related to subgraphs

Commands:
  goldsky subgraph deploy <nameAndVersion>  Deploy a subgraph to Goldsky
  goldsky subgraph list [nameAndVersion]    View deployed subgraphs and tags
  goldsky subgraph delete <nameAndVersion>  Delete a subgraph from Goldsky
  goldsky subgraph tag                      Commands related to tags
  goldsky subgraph webhook                  [BETA] Commands related to webhooks


Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

### subgraph deploy

```
goldsky subgraph deploy <nameAndVersion>
```

How to use:

```
Deploy a subgraph to Goldsky

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                             [string] [required]

Options:
      --token           CLI Auth Token                    [string] [default: ""]
      --path            Path to subgraph                                [string]
      --from-ipfs-hash  IPFS hash of a publicly deployed subgraph       [string]
      --ipfs-gateway    IPFS gateway to use if downloading the subgraph from IPF
                        S[string] [default: "https://ipfs.network.thegraph.com"]
      --from-abi        [BETA] Generate a subgraph from an ABI
                                                                        [string]
      --from-url        GraphQL endpoint for a publicly deployed subgraph
                                                                        [string]
      --overwrite       Overwrite existing subgraph with the matching name/versi
                        on                            [boolean] [default: false]
      --remove-graft    Remove grafts from the subgraph prior to deployment
                                                      [boolean] [default: false]
      --start-block     Change start block of your subgraph prior to deployment
                                                                        [number]
  -h, --help            Show help                                      [boolean]
```

### subgraph list

```
goldsky subgraph list [nameAndVersion]
```

How to use:

```
View deployed subgraphs and tags

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                                        [string]

Options:
      --token    CLI Auth Token                           [string] [default: ""]
      --filter   Limit results to just tags or deployments
                                                [choices: "tags", "deployments"]
      --summary  Summarize subgraphs & versions without all their details
                                                      [boolean] [default: false]
  -h, --help     Show help                                             [boolean]
```

### subgraph delete

```
goldsky subgraph delete <nameAndVersion>
```

How to use:

```
Delete a subgraph from Goldsky

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                             [string] [required]

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

### subgraph tag

```
goldsky subgraph tag
```

How to use:

```
Commands related to tags

Commands:
  goldsky subgraph tag create <nameAndVers  Create a new tag
  ion>
  goldsky subgraph tag delete <nameAndVers  Delete a tag
  ion>

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

#### subgraph tag create

```
goldsky subgraph tag create <nameAndVersion>
```

How to use:

```
Create a new tag

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                             [string] [required]

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -t, --tag    The name of the tag                           [string] [required]
  -h, --help   Show help                                               [boolean]
```

#### subgraph tag delete

```
goldsky subgraph tag delete <nameAndVersion>
```

How to use:

```
Delete a tag

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                             [string] [required]

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -t, --tag    The name of the tag to delete                 [string] [required]
  -h, --help   Show help                                               [boolean]
```

### subgraph webhook

```
goldsky subgraph webhook
```

How to use:

```
[BETA] Commands related to webhooks

Commands:
  goldsky subgraph webhook create <nameAnd  [BETA] Create a webhook
  Version>
  goldsky subgraph webhook delete           [BETA] Delete a webhook
  goldsky subgraph webhook list             [BETA] List webhooks
  goldsky subgraph webhook list-entities <  [BETA] List possible webhook entitie
  nameAndVersion>                           s for a subgraph

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

#### subgraph webhook create

```
goldsky subgraph webhook create <nameAndVersion>
```

How to use:

```
[BETA] Create a webhook

Positionals:
  nameAndVersion  Name and version of the subgraph, e.g. 'my-subgraph/1.0.0'
                                                             [string] [required]

Options:
      --token           CLI Auth Token                    [string] [default: ""]
      --name            Name of the webhook, must be unique  [string] [required]
      --url             URL to send events to                [string] [required]
      --entity          Subgraph entity to send events for   [string] [required]
      --num-retries     Number of times to retry sending an event
                                                          [number] [default: 10]
      --retry-interval  Number of seconds to wait between retries
                                                          [number] [default: 60]
      --retry-timeout   Number of seconds to wait for a response before retrying
                                                          [number] [default: 30]
  -h, --help            Show help                                      [boolean]
```

#### subgraph webhook delete

```
goldsky subgraph webhook delete
```

How to use:

```
[BETA] Delete a webhook

Options:
      --token  CLI Auth Token                             [string] [default: ""]
      --name   Name of the webhook to delete                 [string] [required]
  -h, --help   Show help                                               [boolean]
```

#### subgraph webhook list

```
goldsky subgraph webhook list
```

How to use:

```
[BETA] List webhooks

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

## project

```
goldsky project
```

How to use:

```
[BETA] Commands related to project management

Commands:
  goldsky project users   [BETA] Commands related to the users of a project
  goldsky project leave   [BETA] Leave a project
  goldsky project list    [BETA] List all of the projects you belong to
  goldsky project update  [BETA] Update a project
  goldsky project create  [BETA] Create a project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

### project users

```
goldsky project users
```

How to use:

```
[BETA] Commands related to the users of a project

Commands:
  goldsky project users list    [BETA] List all users for this project
  goldsky project users invite  [BETA] Invite a user to your project
  goldsky project users remove  [BETA] Remove a user from your project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

#### project users list

```
goldsky project users list
```

How to use:

```
[BETA] List all users for this project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

#### project users invite

```
goldsky project users invite
```

How to use:

```
[BETA] Invite a user to your project

Options:
      --token   CLI Auth Token                            [string] [default: ""]
      --emails  emails of users to invite                     [array] [required]
      --yes     skip confirmation                     [boolean] [default: false]
  -h, --help    Show help                                              [boolean]
```

#### project users remove

```
goldsky project users remove
```

How to use:

```
[BETA] Remove a user from your project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
      --email  email of user to remove                       [string] [required]
  -h, --help   Show help                                               [boolean]
```

### project leave

```
goldsky project leave
```

How to use:

```
[BETA] Leave a project

Options:
      --token      CLI Auth Token                         [string] [default: ""]
      --projectId  the ID of the project you want to leave   [string] [required]
  -h, --help       Show help                                           [boolean]
```

### project list

```
goldsky project list
```

How to use:

```
[BETA] List all of the projects you belong to

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

### project update

```
goldsky project update
```

How to use:

```
[BETA] Update a project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
      --name   the new name of the project                   [string] [required]
  -h, --help   Show help                                               [boolean]
```

### project create

```
goldsky project create
```

How to use:

```
[BETA] Create a project

Options:
      --token  CLI Auth Token                             [string] [default: ""]
      --name   the name of the new project                   [string] [required]
  -h, --help   Show help                                               [boolean]
```

## indexed

### indexed sync

```
goldsky indexed sync
```

How to use:

```
Commands related to syncing indexed.xyz real-time raw & decoded crypto datasets

Commands:
  goldsky indexed sync decoded-logs      Sync decoded logs for a smart contract
                                         from a network to this computer
  goldsky indexed sync raw-blocks        Sync all blocks from a network
  goldsky indexed sync raw-logs          Sync all logs from a network
  goldsky indexed sync raw-transactions  Sync all transactions from a network

Options:
      --token  CLI Auth Token                             [string] [default: ""]
  -h, --help   Show help                                               [boolean]
```

#### indexed sync decoded-logs

```
goldsky indexed sync decoded-logs
```

How to use:

```
Sync decoded logs for a smart contract from a network to this computer

Options:
      --token             CLI Auth Token                  [string] [default: ""]
      --contract-address  The contract address you are interested in
                                                          [string] [default: ""]
      --network           The network of indexed.xyz data to synchronize
                                                  [string] [default: "ethereum"]
  -h, --help              Show help                                    [boolean]
```
