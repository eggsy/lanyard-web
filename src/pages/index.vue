<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/shared";
import { useReadmeProjects } from "../composables/useReadmeProjects";

const pageData = useReadmeProjects();
const scrollContainer = ref<HTMLElement | null>(null);
const playgroundInput = ref("");
const magicPreviewError = ref(false);
const result = reactive<any>({ lanyard: {} });
const {
  public: { API_BASE, DISCORD },
} = useRuntimeConfig();

useHead({
  title: "Home",
});

const handleClick = (direction: "prev" | "next") => {
  scrollContainer.value.scrollBy({
    left: direction === "prev" ? -200 : 200,
    behavior: "smooth",
  });
};

const getStatus = computed<{ color: string; name: string }>(
  () =>
    ({
      online: { color: "bg-green-600", name: "Online" },
      dnd: { color: "bg-red-600", name: "Do Not Disturb" },
      idle: { color: "bg-yellow-600", name: "Idle" },
      offline: { color: "bg-gray-200", name: "Offline" },
    })[result.lanyard?.data?.discord_status || "offline"],
);

const handleSearch = useDebounceFn(async () => {
  if (playgroundInput.value === "") return;

  const response = await fetch(`${API_BASE}/${playgroundInput.value}`);
  const data = await response.json();

  result.lanyard = data;
}, 150);
</script>

<template>
  <main class="flex flex-col gap-y-10">
    <header class="pb-8 space-y-8 lg:pb-14 lg:pt-10">
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
        <img
          preload
          src="https://i.imgur.com/ZgjFF3m.png"
          class="w-full rounded-md lg:w-72 xl:w-80"
          alt="lanyard profile readme"
        />

        <img
          preload
          src="https://i.imgur.com/mbaEnBi.png"
          class="w-full rounded-md lg:w-72 xl:w-80"
          alt="lanyard visualizer"
        />
      </div>

      <div
        v-motion-fade
        :delay="300"
        class="grid place-items-center lg:flex gap-x-4 gap-y-2 lg:place-items-start lg:grid-cols-2"
      >
        <Button
          :href="DISCORD"
          icon="tabler:login"
          label="Join Discord Server"
          blank
        />

        <Button
          href="https://github.com/phineas/lanyard"
          icon="tabler:brand-github"
          label="Open Source"
          blank
        />
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
          <CLink :href="DISCORD" external blank> its Discord server</CLink>. On
          each presence change, Lanyard sends a WS signal to update the API
          response.
        </p>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <h2 class="text-2xl font-bold leading-tight">Try It Yourself</h2>

      <div class="grid gap-4 lg:grid-cols-2">
        <div class="flex flex-col space-y-4">
          <input
            v-model="playgroundInput"
            type="text"
            class="w-full px-4 py-2 transition-all rounded-lg outline-none appearance-none ring-white/30 focus:ring-1 bg-brand/40"
            placeholder="Enter user ID..."
            @keyup.capture="handleSearch"
          />

          <div class="space-y-2">
            <!-- Name -->
            <div class="flex items-center space-x-2">
              <span class="text-white/50">User</span>
              <span>
                {{ result.lanyard.data?.discord_user?.username || "Unknown" }}
              </span>
            </div>

            <!-- User status -->
            <div class="flex items-center space-x-2">
              <span class="text-white/50">User is</span>
              <div
                class="w-3 h-3 transition-colors rounded-full"
                :class="getStatus.color"
              />
              <span>{{ getStatus.name }}</span>
            </div>

            <!-- Listening to Spotify -->
            <div class="flex items-center space-x-2">
              <span class="text-white/50">Listening to Spotify</span>
              <span>
                {{ result.lanyard.data?.listening_to_spotify ? "Yes" : "No" }}
              </span>
            </div>
          </div>

          <div
            v-motion-fade
            v-if="result.lanyard.error?.code === 'user_not_monitored'"
            class="flex flex-col space-y-2"
          >
            <Button
              :href="DISCORD"
              icon="tabler:login"
              label="Join Discord Server"
              blank
            />

            <span class="text-xs text-brand">
              Did you join the Discord server?
            </span>
          </div>
        </div>

        <div class="overflow-hidden">
          <Highlight :code="JSON.stringify(result.lanyard, null, 2)" />
        </div>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section
      v-motion-fade-visible-once
      class="grid py-8 gap-y-6 gap-x-10 lg:grid-cols-2 lg:justify-between"
    >
      <div class="space-y-4 lg:pb-4">
        <h2 class="text-2xl font-bold leading-tight">The magic</h2>

        <p class="text-white/50">
          Lanyard API is meant to create whatever you want using the data it
          provides. People have already started creating amazing projects. Let's
          preview one of them,
          <CLink
            href="https://github.com/cnrad/lanyard-profile-readme"
            external
            blank
            >lanyard-profile-readme</CLink
          >. You can embed the result in your website or GitHub-like readme.
        </p>

        <div class="space-y-1">
          <Button
            href="/api/introduction"
            label="Read more about the API"
            icon="tabler:api"
          />

          <p class="text-xs text-white/50">
            {{
              playgroundInput && magicPreviewError === false
                ? "🤯 Now, isn't that cool?"
                : "✨ Enter user ID to see the magic"
            }}
          </p>
        </div>
      </div>

      <div class="space-y-4">
        <input
          v-model="playgroundInput"
          type="text"
          class="w-full px-4 py-2 transition-all rounded-lg outline-none appearance-none ring-white/30 focus:ring-1 bg-brand/40"
          placeholder="Enter user ID to see the magic"
          @keyup.capture="handleSearch"
        />

        <img
          v-show="playgroundInput && magicPreviewError === false"
          v-motion-fade
          :src="`https://lanyard.cnrad.dev/api/${playgroundInput}`"
          alt="lanyard profile readme"
          @error="magicPreviewError = true"
          @load="magicPreviewError = false"
        />

        <p
          v-if="magicPreviewError && playgroundInput !== ''"
          v-motion-fade
          class="text-sm leading-tight text-white/50"
        >
          Make sure you put the right ID and you joined Lanyard's Discord
          server.
        </p>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <div
        class="flex flex-col justify-between leading-tight lg:items-center lg:flex-row"
      >
        <h2 class="text-2xl font-bold leading-tight">Community Projects</h2>

        <div class="flex items-center space-x-2">
          <p v-if="!pageData.loading" class="text-sm text-white/50">
            {{ `${pageData.projects.length} in total` }}
          </p>

          <div class="items-center hidden space-x-1 lg:flex">
            <button
              type="button"
              class="p-1 transition-colors rounded-full bg-brand hover:bg-brand/50"
              @click="handleClick('prev')"
            >
              <Icon name="tabler:chevron-left" />
            </button>

            <button
              type="button"
              class="p-1 transition-colors rounded-full bg-brand hover:bg-brand/50"
              @click="handleClick('next')"
            >
              <Icon name="tabler:chevron-right" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="grid grid-flow-col overflow-x-auto no-scrollbar snap-x snap-mandatory gap-x-4"
      >
        <Loader v-if="pageData.loading" class="w-full h-24" />

        <p v-else-if="pageData.error" class="text-white/50">
          An error occured.
        </p>

        <CardCommunityProject
          v-else
          v-for="(project, index) in pageData.projects"
          :key="`community-project-${index}`"
          v-bind="project"
        />
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <section v-motion-fade-visible-once class="py-8 space-y-4">
      <h2 class="text-2xl font-bold leading-tight">Used By</h2>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50">
        <Loader v-if="pageData.loading" class="w-full h-40" />

        <p v-else-if="pageData.error" class="text-white/50">
          An error occured.
        </p>

        <CLink
          v-else
          v-for="website in pageData.websites"
          :key="`used-by-${website}`"
          :href="`https://${website}`"
          external
          blank
        >
          {{ website }}
        </CLink>
      </div>
    </section>

    <hr v-motion-fade-visible-once class="border-brand/50" />

    <Stargazers />
  </main>
</template>
