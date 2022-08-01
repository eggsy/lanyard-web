<script lang="ts" setup>
interface Props {
  name: string;
  href: string;
  description: string;
}

const { name, href } = defineProps<Props>();

const getNameSegments = computed(() => {
  if (!href.includes("github.com"))
    return {
      repo: name,
    };

  const [owner, repo] = href.replace("https://github.com/", "")?.split("/");

  return {
    owner,
    repo,
  };
});
</script>

<template>
  <div
    class="bg-[#313336]/40 transition-colors flex-shrink-0 h-full p-4 rounded-lg w-80 snap-start"
  >
    <header class="flex flex-col space-y-2">
      <div
        class="flex flex-wrap items-start"
        :class="{
          'gap-1.5': getNameSegments.owner,
        }"
      >
        <div
          v-if="getNameSegments.owner"
          class="flex items-center flex-shrink-0 space-x-2"
          :class="{
            'space-x-2': getNameSegments.owner,
          }"
        >
          <img
            :src="`https://github.com/${getNameSegments.owner}.png`"
            loading="lazy"
            alt="repo owner image"
            class="flex-shrink-0 w-5 h-5 rounded-full"
            @error="(e) => ((e.target as HTMLImageElement).src = '/icon.png')"
          />

          <Link
            :href="`https://github.com/${getNameSegments.owner}`"
            class="font-semibold text-white/25"
            external
            blank
          >
            {{ getNameSegments.owner }}
          </Link>
        </div>

        <span v-if="getNameSegments.owner" class="text-sm text-white/50">
          /
        </span>

        <Link :href="href" class="font-medium text-white/75" external blank>
          {{ getNameSegments.repo }}
        </Link>
      </div>

      <p class="text-white/50 line-clamp-3">{{ description }}</p>
    </header>
  </div>
</template>
