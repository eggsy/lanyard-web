<script lang="ts" setup>
interface Props {
  icon?: Record<string, any>;
  label?: string;
  href?: string;
  blank?: boolean;
}

const { icon, label, href, blank } = defineProps<Props>();
</script>

<template>
  <Component
    :is="href ? 'a' : 'button'"
    :type="!href ? 'button' : null"
    :href="href || null"
    :target="href && blank ? '_blank' : null"
    :rel="href && blank ? 'noopener noreferrer' : null"
    class="flex items-center justify-center w-full text-center transition-colors rounded-lg cursor-pointer lg:w-max bg-brand/40 hover:bg-brand/50"
    :class="{
      'rounded-full p-3': !label && icon,
      'px-8 py-3 space-x-2': label,
    }"
  >
    <Component :is="icon" />
    <span class="text-sm font-bold">{{ label }}</span>
  </Component>
</template>
