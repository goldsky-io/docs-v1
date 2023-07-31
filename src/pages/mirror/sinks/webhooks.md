---
title: Webhooks
description: Receive real-time HTTP POST requests to on-chain changes to your subgraphs.
---

Power Discord notifications, back-end operations, orderbooks, and more with webhooks.

Receive real-time HTTP POST requests to your backends whenever a subgraph indexes a new event.

Every project has webhooks enabled by default.

# Speedrun: X2Y2 Trades Webhook

Let's speed-run a simple example of a webhook. We'll create a webhook that sends a POST request to a URL of your choice whenever a trade occurs on the X2Y2 exchange.

1. Use Messari's [x2y2](https://thegraph.com/hosted-service/subgraph/messari/x2y2-ethereum) subgraph to the x2y2 exchange.

   ```shell
   > goldsky subgraph deploy x2y2/v1 --from-ipfs-hash Qmaj3MHPQ5AecbPuzUyLo9rFvuQwcAYpkXrf3dTUPV8rRu
   Deploying Subgraph:
    ✔ Downloading subgraph from IPFS (This can take a while)
    ✔ Validating build path
    ✔ Packaging deployment bundle from /var/folders/p5/7qc7spd57jbfv00n84yzc97h0000gn/T/goldsky-deploy-Qmaj3MHPQ5AecbPuzUyLo9rFvuQwcAYpkXrf3dTUPV8rRu
   ```

2. Making a fully functional webhook handler is out of scope for this speedrun, so let's use a pre-made webhook handler by going to [webhook.site](https://webhook.site) and copying the URL.
   It may look like something like

   ```shell
   USE https://webhook.site/<YOUR-UNIQUE-WEBHOOK-SITE-ID>
   NOT https://webhook.site/#!/<YOUR-UNIQUE-WEBHOOK-SITE-ID>
   ```

   Any new webhook can be sent to this URL and we'll be able to see and inspect the request body.

3. Create a webhook to receive x2y2 trades.

   ```shell
   > goldsky subgraph webhook create x2y2/v1 --name x2y2-trade-webhook --entity trade --url https://webhook.site/<YOUR-UNIQUE-WEBHOOK-URL>
   ✔ Creating webhook

   Webhook 'x2y2-trade-webhook' created.
   Make sure calls to your endpoint have the following value for the 'goldsky-webhook-secret' header: whs_01GNV4RMJCFVH14S4YAFW7RGQK
   ```

   A secret will be generated for you to use in your webhook handler. This secret is used to authenticate the webhook request. You can ignore it for the purposes for this speed run.

4. Inspect the webhook.site url again - you should see events start to stream in.
   ![A screenshot of 4 requests with one highlighted to show request details](/images/docs/mirror/webhook-example.png)

# Reference

## Create a new webhook

To create a new webhook for a subgraph entity:

```shell
goldsky subgraph webhook create my-subgraph/1.0.0 --name "" --url "" --entity ""
```

## List webhooks

To see a list of already configured webhooks:

```shell
goldsky subgraph webhook list
```

## Delete a webhook

If you no longer need a webhook, you can delete it with the following command:

```shell
goldsky subgraph webhook delete --name ""
```

## Webhook Payload

The webhook payload is a JSON object with the following fields:

```json
 {
  "op": "INSERT", // Can be either INSERT, UPDATE, or DELETE
  "data_source": "x2y2/v1", // The subgraph or indexer that is being tracked
  "data": {
    "old": null, // Entity Data, null if op is INSERT
    "new": { // Entity data, null if op is DELETE
      // This is an example from a subgraph tracking x2y2
      "amount": "1",
      "log_index": 268,
      "price_eth": "0.017",
      "strategy": "STANDARD_SALE",
      "collection": "0x7bdb0a896efacdd130e764f426e555d1ebb52f54",
      "seller": "0xd582a0530a1e5aee63052a68aa745657a8471504",
      "transaction_hash": "0x996d3c9cda22fa47e9bb16e4837a28fccbd5643c952ed687a80fd97ceafb69c6",
      "id": "0x996d3c9cda22fa47e9bb16e4837a28fccbd5643c952ed687a80fd97ceafb69c6-268",
      "block_number": "16322627",
      "vid": "1677156",
      "timestamp": "1672705139",
      "is_bundle": false,
      "buyer": "0x539ea5d6ec0093ff6401dbcd14d049c37a77151b",
      "block_range": "[16322627,)",
      "token_id": "383"
    }
  },
  "webhook_name": "x2y2-webhook", // Name of your webhook
  "webhook_id": "webhook_clcfdc9gb00i50hyd43qeeidu" // Uniquely generated ID for the webhook
  "id": "36a1a4a6-1411-4a13-939c-9dd6422b5674",  // Unique ID for the event
  "delivery_info": {
    "max_retries": 10,
    "current_retry": 0
  },
  "entity": "trade" // The subgraph entity being tracked
}
```
