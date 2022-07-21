import { defineNuxtPlugin } from "#app";
import { MotionPlugin } from "@vueuse/motion";

export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return;
  nuxtApp.vueApp.use(MotionPlugin);
});
