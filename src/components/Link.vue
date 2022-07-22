<script lang="ts" setup>
const props = defineProps({
  internal: {
    type: Boolean,
    required: false,
    default: false,
  },
  external: {
    type: Boolean,
    required: false,
    default: false,
  },
  href: {
    type: String,
    required: true,
    default: false,
  },
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
  noDecoration: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <NuxtLink
    :to="props.href"
    :no-rel="external"
    :target="props.blank ? '_blank' : null"
    :class="{
      'transition-colors w-max border-b border-dotted border-white/20 hover:border-white':
        noDecoration === false,
    }"
  >
    <slot />
  </NuxtLink>
</template>
