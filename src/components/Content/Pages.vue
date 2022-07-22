<script lang="ts" setup>
import PageIcon from "~icons/tabler/file-code-2";

const getOrderedList = (list: any) => {
  return list.sort((a: any, b: any) => {
    const [orderA, orderB] = [a.order || 0, b.order || 0];
    return orderB - orderA;
  });
};
</script>

<template>
  <ul class="flex flex-col p-0 space-y-2 list-none">
    <ContentList v-slot="{ list }">
      <template v-if="list">
        <li
          v-for="article in getOrderedList(list)"
          :key="article._path"
          class="p-0 m-0 list-none"
        >
          <NuxtLink
            :to="article._path"
            class="flex items-center w-full px-4 py-2 space-x-2 transition-colors rounded-lg lg:w-1/2 bg-brand/40 text-white/50 hover:text-white hover:bg-brand-75"
          >
            <PageIcon class="flex-shrink-0" />
            <span class="truncate">{{ article.title }}</span>
          </NuxtLink>
        </li>
      </template>

      <template v-else>Anan Yani</template>
    </ContentList>
  </ul>
</template>
