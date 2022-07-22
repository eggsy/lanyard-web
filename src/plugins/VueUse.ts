import { defineNuxtPlugin } from "#app";
import { MotionPlugin } from "@vueuse/motion";

const directivesToRegister = ["motion-fade", "motion-fade-visible-once"];

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(MotionPlugin);
    return;
  }

  /*
    Here I had to do this because Nuxt would throw an error
    when it can't execute a directive on server-side,
    another fix would be disabling SSR completely but that meant
    losing SEO, basically meta tags and I didn't want that.

    Although @vuseuse/motion documentation says there's a Nuxt 3
    compatible export, it seems like it doesn't exist, so here's
    a basic workaround.
  */
  for (const directive of directivesToRegister) {
    nuxtApp.vueApp.directive(directive, {
      getSSRProps() {
        return {};
      },
    });
  }
});
