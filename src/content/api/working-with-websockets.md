---
head:
  meta:
    - name: "og:title"
      property: "og:title"
      content: "Working with WebSockets"
    - name: "twitter:title"
      property: "twitter:title"
      content: "Working with WebSockets"

    - name: "description"
      property: "description"
      content: "Use Lanyard with WebSockets to achieve real-time presence updates."
    - name: "og:description"
      property: "og:description"
      content: "Use Lanyard with WebSockets to achieve real-time presence updates."
    - name: "twitter:description"
      property: "twitter:description"
      content: "Use Lanyard with WebSockets to achieve real-time presence updates."
---

# Working with WebSockets

The WebSocket server acts like a "real-time update data" server, each time a presence update is triggered, you'll receive the new data from the WS server. The Lanyard WebSocket is available at `wss://api.lanyard.rest/socket`. If you would like to use compression, please specify `?compression=zlib_json` at the end of the URL. [You can read more about WebSockets for web here](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

Once connected, you will receive `Opcode 1: Hello` which will contain heartbeat_interval in the data field. You should set a repeating interval for the time specified in heartbeat_interval which should send `Opcode 3: Heartbeat` on the interval.

You should send `Opcode 2: Initialize` immediately after receiving Opcode 1.

Example of `Opcode 2: Initialize`:

```js
{
  op: 2,
  d: {
    // subscribe_to_ids should be an array of user IDs you want to subscribe to presences from
    // if Lanyard doesn't monitor an ID specified, it won't be included in INIT_STATE
    subscribe_to_ids: ["162969778699501569"]
  }
}
```

#### Subscribing to multiple user presences

To subscribe to multiple presences, send `subscribe_to_ids` in the data object with a `string[]` list of user IDs to subscribe to. Then, INIT_STATE's data object will contain a user_id->presence map. You can find examples below.

#### Subscribing to a single user presence

If you just want to subscribe to one user, you can send `subscribe_to_id` instead with a string of a single user ID to subscribe to. Then, the INIT_STATE's data will just contain the presence object for the user you've subscribed to instead of a user_id->presence map.

#### Subscribing to every user presence

If you want to subscribe to every presence being monitored by Lanyard, you can specify `subscribe_to_all` with (bool) `true` in the data object, and you will then receive a user_id->presence map with every user presence in INIT_STATE, and their respective PRESENCE_UPDATES when they happen.

Once Op 2 is sent, you should immediately receive an `INIT_STATE` event payload if connected successfully. If not, you will be disconnected with an error (see below).

### List of Opcodes

::ListOpcodes
::

### Events

Events are received on `Opcode 0: Event` - the event type will be part of the root message object under the `t` key.

#### Example Event Message Objects

`INIT_STATE`

```js
{
  op: 0,
  seq: 1,
  t: "INIT_STATE",
  d: {
    "162969778699501569": {
      // Full Lanyard presence (see API docs above for example)
    }
  }
}
```

`PRESENCE_UPDATE`

```js
{
  op: 0,
  seq: 2,
  t: "PRESENCE_UPDATE",
  d: {
    // Full Lanyard presence and an extra "user_id" field
  }
}
```

### Error Codes

Lanyard can disconnect clients for multiple reasons, usually to do with messages being badly formatted. Please refer to your WebSocket client to see how you should handle errors - they do not get received as regular messages.

#### Types of Errors

::error-types
::
