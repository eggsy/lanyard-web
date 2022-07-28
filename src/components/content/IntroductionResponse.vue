<script lang="ts" setup>
import CogIcon from "~icons/tabler/settings";

const userIdInput = ref("162969778699501569");
const {
  public: { API_BASE },
} = useRuntimeConfig();

const { refresh, data } = await useAsyncData(() =>
  $fetch(`${API_BASE}/${userIdInput.value}`)
);
</script>

<template>
  <div class="flex flex-col items-center gap-2 lg:flex-row">
    <input
      v-model="userIdInput"
      class="w-full px-4 py-2 transition-all rounded-lg outline-none placeholder-white/50 text-white/90 ring-white/10 focus:ring-1 bg-brand/40"
      placeholder="User ID"
      @keydown.enter="refresh()"
    />

    <Button label="Run" :icon="CogIcon" @click.native="refresh()" />
  </div>

  <Highlight :code="JSON.stringify(data, null, 2)" />
</template>
