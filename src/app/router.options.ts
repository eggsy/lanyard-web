import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior() {
    window?.scrollTo(0, 0);
  },
};
