<script lang="ts" setup>
import HomeIcon from "~icons/tabler/home";
import ApiIcon from "~icons/tabler/packge-import";
</script>

<template>
  <nav
    v-motion-fade
    class="container flex flex-col items-center justify-between gap-4 mx-auto lg:flex-row lg:w-7/12"
  >
    <NuxtLink to="/">
      <NuxtImg
        src="https://storage.googleapis.com/lanyard/static/lanyardtemplogo.png"
        alt="logo"
        class="w-44 lg:w-36"
      />
    </NuxtLink>

    <ul class="flex items-center space-x-6">
      <li class="flex items-center space-x-2">
        <HomeIcon />
        <Link href="/" internal>Home</Link>
      </li>

      <li class="flex items-center space-x-2">
        <ApiIcon />
        <Link href="/api/introduction" internal>API</Link>
      </li>
    </ul>
  </nav>
</template>
