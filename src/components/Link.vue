<script lang="ts" setup>
interface Props {
  external?: boolean;
  href: string;
  blank?: boolean;
  noDecoration?: boolean;
}

const { external, href, blank, noDecoration } = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="href"
    :no-rel="external"
    :target="blank ? '_blank' : null"
    :class="{
      'transition-colors w-max border-b border-dotted border-white/20 hover:border-white':
        noDecoration === false,
    }"
  >
    <slot />
  </NuxtLink>
</template>
