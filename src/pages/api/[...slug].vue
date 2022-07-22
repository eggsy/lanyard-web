<script lang="ts" setup>
import ChevronLeft from "~icons/tabler/arrow-big-left";
import GithubIcon from "~icons/tabler/brand-github";

const config = useRuntimeConfig().public;
const route = useRoute();

const hasDocument = await queryContent().only("_path").find();
const hasThisDocument = computed(() => {
  const mappedItems = hasDocument.map((doc) => doc._path);
  return mappedItems.includes(route.fullPath);
});
</script>

<template>
  <div>
    <div
      v-motion-fade
      v-if="!$route.params.slug?.includes('introduction')"
      class="hidden float-left lg:block -ml-14 top-10"
    >
      <NuxtLink to="/api/introduction">
        <Button :icon="ChevronLeft" />
      </NuxtLink>
    </div>

    <main class="prose-base" v-motion-fade :delay="200">
      <ContentDoc>
        <template #not-found>
          <ContentNotFound />
        </template>
      </ContentDoc>
    </main>

    <template v-if="hasThisDocument">
      <hr class="my-8 border-dashed border-brand/20" />

      <Button
        v-motion-fade-visible-once
        :delay="200"
        :href="`${config.GITHUB_REPO}/blob/main/src/content/api/${$route.params.slug}.md`"
        :icon="GithubIcon"
        label="Edit this page on GitHub"
        blank
      />
    </template>
  </div>
</template>

<style lang="scss">
pre {
  @apply bg-brand/40 w-full text-base rounded-lg overflow-x-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  code {
    @apply bg-transparent;
    font-size: 1em !important;
  }
}

.prose-base {
  ul,
  ol {
    list-style-type: unset;
  }

  p,
  li {
    @apply text-white/50;
  }
}
</style>
