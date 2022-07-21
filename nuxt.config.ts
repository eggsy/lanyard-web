import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: ".",
  srcDir: "./src",
  components: true,
  ssr: false,

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "unplugin-icons/nuxt"],

  tailwindcss: {
    viewer: false,
  },
});
