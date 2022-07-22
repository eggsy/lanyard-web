<script lang="ts" setup>
const small_title = "Lanyard API";
const title = "Lanyard";
const description =
  "Expose your Discord presence and activities to a RESTful API and WebSocket in less than 10 seconds";

useHead({
  title: "Lanyard",
  htmlAttrs: {
    lang: "en",
  },
  bodyAttrs: {
    class: "bg-[#13131A]",
  },
  meta: [
    {
      name: "og:site_name",
      content: small_title,
    },

    {
      name: "title",
      content: title,
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "twitter:title",
      content: title,
    },

    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "og:image",
      content: "/social-image.png",
    },
    {
      name: "twitter:image",
      content: "/social-image.png",
    },

    {
      name: "description",
      content: description,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "twitter:description",
      content: description,
    },
  ].map((item) => {
    return {
      ...item,
      property: item.name,
    };
  }),
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

<style lang="scss">
html,
body {
  scrollbar-gutter: stable;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    @apply bg-brand/40;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-brand;
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  }
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
}
</style>
