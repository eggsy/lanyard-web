<script lang="ts" setup>
import NotFound from "@/components/content/NotFound.vue";

import ChevronLeft from "~icons/tabler/arrow-big-left";
import GithubIcon from "~icons/tabler/brand-github";

const {
  public: { GITHUB_REPO },
} = useRuntimeConfig();
const route = useRoute();

const hasDocument = await queryContent().only("_path").find();
const hasThisDocument = computed(() => {
  const mappedItems = hasDocument.map((doc) => doc._path);
  return mappedItems.includes(route.fullPath);
});

onMounted(() => {
  const windowHash = location.hash;
  if (!windowHash) return;

  const element = document.querySelector(windowHash);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
  });
});
</script>

<template>
  <div>
    <div
      v-motion-fade
      v-if="route.params.slug && !$route.params.slug?.includes('introduction')"
      class="hidden float-left lg:block -ml-14 top-10"
    >
      <NuxtLink to="/api/introduction">
        <Button :icon="ChevronLeft" />
      </NuxtLink>
    </div>

    <main v-motion-fade :delay="200">
      <article class="prose-base">
        <ContentDoc
          :path="!$route.params.slug ? `api/introduction` : $route.path"
        >
          <template #not-found>
            <NotFound />
          </template>
        </ContentDoc>
      </article>
    </main>

    <template v-if="hasThisDocument">
      <hr class="my-8 border-dashed border-brand/20" />

      <Button
        v-motion-fade
        :delay="200"
        :href="`${GITHUB_REPO}/edit/main/src/content/api/${$route.params.slug}.md`"
        :icon="GithubIcon"
        label="Edit this page on GitHub"
        blank
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
:deep(.prose-base) {
  p a {
    @apply border-b border-white/10 border-dashed transition-colors hover:border-white/40;
  }

  ul,
  ol {
    list-style-type: unset;
  }

  p,
  li {
    @apply text-white/50;
  }

  pre {
    @apply bg-brand/20 w-full rounded-lg overflow-x-auto px-4 py-6;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      background: transparent;
    }

    code {
      @apply bg-transparent p-0;
      font-size: 1em !important;
    }
  }
}
</style>
