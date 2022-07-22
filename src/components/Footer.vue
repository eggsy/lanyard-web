<script lang="ts" setup>
import HeartIcon from "~icons/tabler/heart";
</script>

<template>
  <footer
    class="container flex flex-col items-center justify-center pb-6 mx-auto mt-24 text-white/50"
  >
    <HeartIcon class="text-xl" />

    <span>
      Lanyard by
      <Link href="https://github.com/phineas" external blank>@phineas</Link>,
      website by
      <Link href="https://github.com/eggsy" external blank>@eggsy</Link>
    </span>

    <Link href="https://github.com/eggsy/lanyard-web" external blank>
      Open source on GitHub
    </Link>
  </footer>
</template>
