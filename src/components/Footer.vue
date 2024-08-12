<script lang="ts" setup>
const {
  public: { GITHUB_REPO },
} = useRuntimeConfig();
</script>

<template>
  <footer
    class="container flex flex-col items-center justify-center pb-6 mx-auto mt-24 text-white/50"
  >
    <Icon name="tabler:heart" class="text-xl" />

    <span>
      Lanyard by
      <CLink href="https://github.com/phineas" external blank>@phineas</CLink>,
      website by
      <CLink href="https://github.com/eggsy" external blank>@eggsy</CLink>
    </span>

    <CLink :href="GITHUB_REPO" external blank
      >This website is open source on GitHub
    </CLink>
  </footer>
</template>
