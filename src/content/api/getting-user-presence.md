---
head:
  meta:
    - name: "og:title"
      property: "og:title"
      content: "Getting User Presence Data"
    - name: "twitter:title"
      property: "twitter:title"
      content: "Getting User Presence Data"

    - name: "description"
      property: "description"
      content: "Get a user's Discord presence data from REST API via a GET request."
    - name: "og:description"
      property: "og:description"
      content: "Get a user's Discord presence data from REST API via a GET request."
    - name: "twitter:description"
      property: "twitter:description"
      content: "Get a user's Discord presence data from REST API via a GET request."
---

# Getting User Presence Data

Simply send a GET request to users endpoint with your `user ID`. This is for the REST API, if you want to check the WebSocket documentation to get real-time updates, [click here](/api/working-with-websockets).

### JavaScript Code

```js
fetch("https://api.lanyard.rest/v1/users/162969778699501569")
  .then((res) => res.json())
  .then(console.log);
```

### Interactive Playground

`GET https://api.lanyard.rest/v1/users/:user_id`

::introduction-response
::
