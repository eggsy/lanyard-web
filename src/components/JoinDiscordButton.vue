<script lang="ts" setup>
import { config } from "@/data/config";
import LoginIcon from "~icons/tabler/login";
</script>

<template>
  <NuxtLink
    :to="config.DISCORD"
    target="_blank"
    class="flex items-center px-8 py-3 mx-auto space-x-2 transition-colors rounded-lg w-max lg:mx-0 bg-brand hover:bg-brand/50"
    no-rel
  >
    <LoginIcon />
    <span class="text-sm font-bold">Join Discord Server</span>
  </NuxtLink>
</template>
