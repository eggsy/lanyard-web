<script lang="ts" setup>
const errorTypes = [
  {
    name: "Invalid/Unknown Opcode",
    code: 4004,
    data: "unknown_upcode",
  },
  {
    name: "Opcode Requires Data",
    code: 4005,
    data: "requires_data_object",
  },
  {
    name: "Invalid Payload",
    code: 4006,
    data: "invalid_payload",
  },
];
</script>

<template>
  <div class="space-y-2">
    <div
      v-for="item in errorTypes"
      :key="item.data"
      class="flex flex-col p-4 rounded-lg gap-x-4 gap-y-2 lg:items-center lg:justify-between lg:flex-row bg-brand/20"
    >
      <div class="flex items-center">
        <span class="px-2 py-1 text-sm rounded-lg bg-red-600/40">
          {{ item.code }}
        </span>

        <h3 class="m-0 ml-2 text-base leading-none">{{ item.name }}</h3>
      </div>

      <span class="p-2 text-sm rounded-lg bg-brand/40 text-white/50">
        {{ item.data }}
      </span>
    </div>
  </div>
</template>
