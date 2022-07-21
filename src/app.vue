<script lang="ts" setup>
useHead({
  title: "Lanyard",
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: "bg-[#13131A]",
  },
  link: [
    {
      rel: "icon",
      href: "/icon.png",
    },
  ],
});
</script>

<template>
  <div class="bg-[#13131A] px-6 lg:px-0 min-h-screen text-white py-10">
    <Navbar />
    <NuxtPage class="container py-16 mx-auto lg:w-7/12" />
    <Footer />
  </div>
</template>
