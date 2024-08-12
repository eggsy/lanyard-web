// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-12",

  rootDir: ".",
  srcDir: "./src",
  components: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@vueuse/motion/nuxt",
    "@nuxt/icon",
  ],

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
});
