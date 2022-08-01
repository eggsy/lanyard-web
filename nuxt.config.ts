import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: ".",
  srcDir: "./src",
  components: true,

  ssr: true,
  target: "static",

  modules: ["@nuxtjs/tailwindcss", "unplugin-icons/nuxt", "@nuxt/content"],

  content: {
    highlight: {
      theme: "one-dark-pro",
    },
  },

  runtimeConfig: {
    public: {
      DISCORD: "https://discord.gg/UrXF2cfJ7F",
      API_BASE: "https://api.lanyard.rest/v1/users",
      GITHUB_REPO: "https://github.com/eggsy/lanyard-web",
    },
  },

  tailwindcss: {
    viewer: false,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["unplugin-icons/types/vue"],
      },
    },
  },
});
