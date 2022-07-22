# Getting a user's presence data

Simply send a GET request to users endpoint with your `user ID`.

### Code

```js
fetch("https://api.lanyard.rest/v1/users/162969778699501569")
  .then((res) => res.json())
  .then(console.log);
```

### Example Response

`GET https://api.lanyard.rest/v1/users/:user_id`

::introduction-response{class=py-10}
::
