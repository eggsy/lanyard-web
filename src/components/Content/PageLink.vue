<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    required: false,
    default: "",
  },
  title: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <Link
    :href="href"
    :class="`p-2 text-sm truncate text-white/50 hover:text-white hover:bg-brand/70 transition-colors backdrop-blur-sm rounded-lg bg-brand/40 ${
      $route.path === href ? 'bg-brand/70 text-white' : ''
    }`"
    no-decoration
  >
    {{ title }}
  </Link>
</template>
