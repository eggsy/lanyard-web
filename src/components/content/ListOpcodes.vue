<script lang="ts" setup>
const opCodes = [
  {
    name: "Event",
    description:
      "This is the default opcode when receiving core events from Lanyard, like `INIT_STATE`",
    type: "Receive",
  },
  {
    name: "Hello",
    description:
      "Lanyard sends this when clients initially connect, and it includes the heartbeat interval",
    type: "Receive Only",
  },
  {
    name: "Initialize",
    description:
      "This is what the client sends when receiving Opcode 1 from Lanyard - it should contain an array of user IDs to subscribe to",
    type: "Send only",
  },
  {
    name: "Heartbeat",
    description:
      "Clients should send Opcode 3 every 30 seconds (or whatever the Hello Opcode says to heartbeat at)",
    type: "Send only",
  },
];
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="(code, index) in opCodes"
      class="w-full p-6 rounded-lg bg-brand/20"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center leading-none">
          <span
            class="flex items-center justify-center w-8 h-8 p-1 text-sm rounded-lg bg-brand/60"
          >
            {{ index }}
          </span>

          <h3 class="m-0 ml-2 text-base leading-none">{{ code.name }}</h3>
        </div>

        <span class="px-2 py-1 text-sm rounded-md bg-brand/60">
          {{ code.type }}
        </span>
      </div>

      <p class="m-0 mt-4">{{ code.description }}</p>
    </div>
  </div>
</template>
