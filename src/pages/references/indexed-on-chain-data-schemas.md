---
title: Indexed on-chain data schemas
description: Goldsky Mirror & Fusion data schemas for indexed on-chain data
---

# Overview

When you [create a new pipeline](/mirror/pipeline-cli), you have an option to choose from indexed on-chain data. To better understand what the schema looks like for this data, see the details below.

## Decoded Logs

| Column            | Type      |
| ----------------- | --------- |
| block_time        | BIGINT    |
| address           | VARCHAR   |
| event_signature   | VARCHAR   |
| event_params      | VARCHAR[] |
| block_number      | BIGINT    |
| block_hash        | VARCHAR   |
| log_index         | BIGINT    |
| transaction_hash  | VARCHAR   |
| transaction_index | BIGINT    |
| data              | VARCHAR   |
| topics            | VARCHAR   |
| id                | VARCHAR   |

## Raw Blocks

| Column            | Type    |
| ----------------- | ------- |
| id                | VARCHAR |
| number            | BIGINT  |
| hash              | VARCHAR |
| parent_hash       | VARCHAR |
| nonce             | VARCHAR |
| sha3_uncles       | VARCHAR |
| logs_bloom        | VARCHAR |
| transactions_root | VARCHAR |
| state_root        | VARCHAR |
| receipts_root     | VARCHAR |
| miner             | VARCHAR |
| difficulty        | DOUBLE  |
| total_difficulty  | DOUBLE  |
| size              | BIGINT  |
| extra_data        | VARCHAR |
| gas_limit         | BIGINT  |
| gas_used          | BIGINT  |
| timestamp         | BIGINT  |
| transaction_count | BIGINT  |
| base_fee_per_gas  | BIGINT  |

## Raw Transactions

| Column                   | Type    |
| ------------------------ | ------- |
| id                       | VARCHAR |
| hash                     | VARCHAR |
| nonce                    | BIGINT  |
| block_hash               | VARCHAR |
| block_number             | BIGINT  |
| transaction_index        | BIGINT  |
| from_address             | VARCHAR |
| to_address               | VARCHAR |
| value                    | VARCHAR |
| gas                      | VARCHAR |
| gas_price                | VARCHAR |
| input                    | VARCHAR |
| max_fee_per_gas          | VARCHAR |
| max_priority_fee_per_gas | VARCHAR |
| transaction_type         | BIGINT  |
| block_timestamp          | BIGINT  |

## Raw Logs

| Column            | Type    |
| ----------------- | ------- |
| block_time        | BIGINT  |
| block_number      | BIGINT  |
| block_hash        | VARCHAR |
| transaction_hash  | VARCHAR |
| transaction_index | BIGINT  |
| log_index         | BIGINT  |
| address           | VARCHAR |
| data              | VARCHAR |
| topics            | VARCHAR |
| id                | VARCHAR |
