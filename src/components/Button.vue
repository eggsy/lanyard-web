<script lang="ts" setup>
defineProps({
  icon: {
    type: Object,
    required: false,
    default: null,
  },
  label: {
    type: String,
    required: false,
    default: "",
  },
  href: {
    type: String,
    required: false,
    default: "",
  },
  blank: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <Component
    :is="href ? 'a' : 'button'"
    :type="!href ? 'button' : null"
    :href="href || null"
    :target="href && blank ? '_blank' : null"
    :rel="href && blank ? 'noopener noreferrer' : null"
    class="flex items-center justify-center w-full px-8 py-3 space-x-2 text-center transition-colors rounded-lg cursor-pointer lg:w-max bg-brand/40 hover:bg-brand/50"
  >
    <Component :is="icon" />
    <span class="text-sm font-bold">{{ label }}</span>
  </Component>
</template>
