<script lang="ts" setup>
import IconStar from "~icons/tabler/star";

interface IGithubResponse {
  login: string;
  avatar_url: string;
  html_url: string;
}

const {
  public: { GITHUB_REPO },
} = useRuntimeConfig();

const {
  data: stargazers,
  pending,
  error,
} = await useFetch<IGithubResponse[]>(
  () => "https://api.github.com/repos/eggsy/lanyard-web/stargazers"
);
</script>

<template>
  <section v-motion-fade-visible-once class="py-8 space-y-4">
    <div class="flex justify-between space-x-4">
      <h2 class="text-2xl font-bold leading-tight">Stargazers</h2>

      <Link
        :href="GITHUB_REPO"
        class="flex items-center space-x-2 text-sm transition-colors text-white/50 hover:text-white"
        no-decoration
        external
        blank
      >
        <IconStar class="w-4 h-4" />
        <span>Star on GitHub</span>
      </Link>
    </div>

    <Loader v-if="pending" class="h-24" />

    <p v-else-if="error !== null">An error occured.</p>

    <div v-else class="flex flex-wrap items-center gap-2">
      <Link
        v-for="(profile, index) in stargazers"
        :key="`stargazer-${index}`"
        :href="profile.html_url"
        :title="profile.login"
        external
        blank
        no-decoration
      >
        <img
          :src="profile.avatar_url"
          class="w-12 h-12 transition-all rounded-full hover:grayscale-0 lg:grayscale hover:ring-1 ring-white/20"
          loading="lazy"
          alt="user profile picture"
        />
      </Link>
    </div>
  </section>
</template>
