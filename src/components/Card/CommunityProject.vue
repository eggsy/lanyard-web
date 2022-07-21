<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  framework: {
    type: String,
    required: false,
    default: "",
  },
  url: {
    type: String,
    required: false,
    default: "",
  },
});

const getNameSegments = computed(() => {
  const [owner, repo] = props.name.split("/");

  return {
    full: props.name,
    owner,
    repo,
  };
});
</script>

<template>
  <div
    class="bg-[#313336]/40 hover:bg-[#313336]/60 transition-colors flex-shrink-0 h-full p-4 rounded-lg w-80 snap-start"
  >
    <header class="flex flex-col space-y-2">
      <div class="flex flex-wrap items-start gap-1.5">
        <div class="flex items-center flex-shrink-0 space-x-2">
          <img
            :src="`https://github.com/${getNameSegments.owner}.png`"
            alt="repo owner image"
            class="flex-shrink-0 w-5 h-5 rounded-full"
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
        <span class="text-sm text-white/50">/</span>

        <Link
          :href="`https://github.com/${getNameSegments.full}`"
          class="font-medium text-white/75"
          external
          blank
        >
          {{ getNameSegments.repo }}
        </Link>
      </div>

      <p class="text-white/50 line-clamp-3">{{ description }}</p>
    </header>
  </div>
</template>
