---
head:
  meta:
    - name: "og:title"
      property: "og:title"
      content: "Key-Value Store"
    - name: "twitter:title"
      property: "twitter:title"
      content: "Key-Value Store"

    - name: "description"
      property: "description"
      content: "Use Lanyard KV to display dynamic and real-time updated data through Lanyard API."
    - name: "og:description"
      property: "og:description"
      content: "Use Lanyard KV to display dynamic and real-time updated data through Lanyard API."
    - name: "twitter:description"
      property: "twitter:description"
      content: "Use Lanyard KV to display dynamic and real-time updated data through Lanyard API."
---

# Key-Value Store

Lanyard KV is a a dynamic, **real-time** key->value store which is added to the Lanyard user API response. When a KV pair is updated, a `PRESENCE_UPDATE` for the user will also be emitted through the Lanyard socket.

### Use Cases

- Configuration values for your website
- Configuration values for Lanyard 3rd party projects
- Dynamic data for your website/profile (e.g. current location)

### Limits

1. Keys and values can only be strings
2. Values can be 30,000 characters maximum
3. Keys must be alphanumeric (a-zA-Z0-9) and 255 characters max length
4. Your user can have a maximum of 512 key->value pairs linked

### Getting an API Key

DM the Lanyard bot (`Lanyard#5766`) with `.apikey` to get your API key.

When making Lanyard KV API requests, set an `Authorization` header with the API key you received from the Lanyard bot as the value.

### Setting a key->value pair

#### Discord

`.set <key> <value>`{lang=ts}

#### HTTP

`PUT https://api.lanyard.rest/v1/users/:user_id/kv/:key`
The value will be set to the body of the request. The body can be any type of data, but it will be string-encoded when set in Lanyard KV.

### Setting multiple key->value pairs

#### Discord

Not yet implemented

#### HTTP

`PATCH https://api.lanyard.rest/v1/users/:user_id/kv`
The user's KV store will be merged with the body of the request. Conflicting keys will be overwritten. The body must be keyvalue pair object with a maximum depth of 1.

### Deleting a key

#### Discord

`.del <key>`{lang=ts}

#### HTTP

`DELETE https://api.lanyard.rest/v1/users/:user_id/kv/:key`
