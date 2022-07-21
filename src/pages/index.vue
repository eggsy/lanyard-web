<script lang="ts" setup>
import { config } from "@/data/config";
import { communityProjects } from "@/data/communityProjects";
import { usedBy } from "../data/usedBy";

import ChevronRight from "~icons/tabler/chevron-right";
import LoginIcon from "~icons/tabler/login";

const scrollContainer = ref<HTMLElement | null>(null);

const handleClick = () => {
  scrollContainer.value.scrollBy({
    left: 100,
    behavior: "smooth",
  });
};
</script>

<template>
  <main class="flex flex-col gap-y-10">
    <header class="pt-10 pb-16 space-y-8">
      <h1
        v-motion-fade
        :delay="150"
        class="text-3xl font-bold leading-snug text-center text-transparent lg:text-left lg:text-5xl bg-gradient-to-bl from-pink-600 via-red-600 to-yellow-600 bg-clip-text"
      >
        Expose your Discord activities to a RESTful API and WebSocket
      </h1>

      <div
        v-motion-fade
        :delay="250"
        class="flex flex-wrap min-h-[140px] items-start justify-center lg:justify-start gap-x-4 gap-y-2 no-scrollbar"
      >
        <nuxt-img
          preload
          src="https://i.imgur.com/ZgjFF3m.png"
          class="w-64 rounded-md"
        />

        <nuxt-img
          preload
          src="https://i.imgur.com/1jiXloc.png"
          class="w-64 rounded-md"
        />
      </div>

      <div>
        <NuxtLink
          :to="config.DISCORD"
          target="_blank"
          v-motion-fade
          :delay="300"
          class="flex items-center px-8 py-3 mx-auto space-x-2 transition-colors rounded-lg w-max lg:mx-0 bg-brand hover:bg-brand/50"
          no-rel
        >
          <LoginIcon />
          <span class="text-sm font-bold">Join Discord Server</span>
        </NuxtLink>
      </div>
    </header>

    <hr v-motion-fade :delay="350" class="border-brand/50" />

    <section v-motion-fade :delay="400" class="py-8 space-y-10">
      <div class="space-y-2">
        <h2 class="text-2xl font-bold">How?</h2>

        <p class="text-white/50">
          Lanyard is a service that makes it super easy to export your live
          Discord presence to an API endpoint
          <code>(api.lanyard.rest/v1/users/:your_id)</code> and to a WebSocket
          for you to use wherever you want. It is fully open-source and
          powerful. You can use the API without deploying anything yourself -
          but if you want to self host it, you have the option to, though it'll
          require a tiny bit of configuration.
        </p>
      </div>

      <div class="space-y-2">
        <h2 class="text-2xl font-bold">How Does Monitoring Work?</h2>

        <p class="text-white/50">
          Lanyard uses a basic Discord Bot (which is open source as well) and
          monitors every user in
          <Link :href="config.DISCORD" external blank> its Discord server</Link
          >. On each presence change, Lanyard sends a WS signal to update the
          API response.
        </p>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <div class="flex items-center justify-between space-y-2 leading-tight">
        <h2 class="text-2xl font-bold leading-tight">Community Projects</h2>
        <div class="flex items-center space-x-2">
          <p class="text-sm text-white/50">
            {{ communityProjects.length }} tools in total
          </p>

          <button
            type="button"
            class="p-1 transition-colors rounded-full bg-brand hover:bg-brand/50"
            @click="handleClick"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="grid grid-flow-col overflow-x-auto no-scrollbar snap-x snap-mandatory gap-x-4"
      >
        <CardCommunityProject
          v-for="(project, index) in communityProjects"
          :key="`community-project-${index}`"
          v-bind="project"
        />
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <h2 class="text-2xl font-bold leading-tight">Used By</h2>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50">
        <Link
          v-for="(website, index) in usedBy"
          :key="`used-by-${index}`"
          :href="`https://${website}`"
          external
          blank
        >
          {{ website }}
        </Link>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    background: transparent;
  }
}

code {
  @apply bg-brand p-1 text-sm rounded-sm;
}
</style>
