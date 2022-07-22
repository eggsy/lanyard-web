<script lang="ts" setup>
import XIcon from "~icons/tabler/x";
import HomeIcon from "~icons/tabler/home";

useHead({
  title: "Lanyard",
});
</script>

<template>
  <div v-motion-fade :delay="150" class="space-y-4">
    <h1 class="flex items-center space-x-2 text-2xl font-semibold text-white">
      <div class="p-1 rounded-full bg-red-600/50">
        <XIcon />
      </div>

      <span>Not Found</span>
    </h1>

    <p class="text-lg text-white/50 lg:w-2/3">
      The document you're looking for doesn't exist, check whether you made a
      typo or it exists.
      <Link href="/api/" internal
        >Click here to go back to documentation homepage</Link
      >.
    </p>

    <Button href="/" :icon="HomeIcon" label="Go Back Homepage" />
  </div>
</template>
