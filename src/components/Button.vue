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
    :is="href ? 'nuxt-link' : 'button'"
    :type="!href ? 'button' : null"
    :to="href || null"
    :target="href && blank ? '_blank' : null"
    class="flex items-center px-8 py-3 mx-auto space-x-2 transition-colors rounded-lg cursor-pointer select-none w-max lg:mx-0 bg-brand hover:bg-brand/50"
    :no-rel="!!href"
  >
    <Component :is="icon" />
    <span class="text-sm font-bold">{{ label }}</span>
  </Component>
</template>
