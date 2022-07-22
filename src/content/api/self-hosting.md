---
head:
  meta:
    - name: "og:title"
      property: "og:title"
      content: "Self-Hosting Lanyard"
    - name: "twitter:title"
      property: "twitter:title"
      content: "Self-Hosting Lanyard"

    - name: "description"
      property: "description"
      content: "Build Lanyard from source and self-host it using the Docker image."
    - name: "og:description"
      property: "og:description"
      content: "Build Lanyard from source and self-host it using the Docker image."
    - name: "twitter:description"
      property: "twitter:description"
      content: "Build Lanyard from source and self-host it using the Docker image."
---

# Self-Hosting Lanyard

Build the Docker image by cloning this repo and running:

```bash
# The latest version is already on the docker hub, you can skip this step unless you would like to run a modified version.
docker build -t phineas/lanyard:latest .
```

If you don't already have a redis server you'll need to run one, here's the docker command to run one:

```bash
docker run -d --name lanyard-redis -v docker_mount_location_on_host:/data redis
```

And run Lanyard API server using:

```bash
docker run --rm -it -p 4001:4001 -e REDIS_HOST=redis -e BOT_TOKEN=<token> --link lanyard-redis:redis phineas/lanyard:latest
```

You'll be able to access the API using **port 4001**.

You also need to create a Discord bot and use its token above.

Create a bot here: [https://discord.com/developers/applications](https://discord.com/developers/applications)

**Make sure you enable** these settings in your bot settings:

- Privileged Gateway Intents > **PRESENCE INTENT**
- Privileged Gateway Intents > **SERVER MEMBERS INTENT**

If you'd like to run Lanyard with `docker-compose`, here's an example:

```yaml
version: "3.8"

services:
  redis:
    image: redis
    restart: always
    container_name: lanyard_redis
  lanyard:
    image: phineas/lanyard:latest
    restart: always
    container_name: lanyard
    depends_on:
      - redis
    ports:
      - 4001:4001
    environment:
      BOT_TOKEN: <token>
      REDIS_HOST: redis
```

Note, that you're **hosting a http server, not https**. You'll need to use a **reverse proxy** such as [traefik](https://traefik.io/traefik/) if you want to secure your API endpoint.
