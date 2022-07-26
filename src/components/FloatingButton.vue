<script lang="ts" setup>
import IconApi from "~icons/tabler/packge-import";

const scrollHeight = ref(0);
const route = useRoute();

const handler = () => {
  scrollHeight.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handler);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handler);
});
</script>

<template>
  <Transition name="slide-up" mode="out-in">
    <Button
      v-show="scrollHeight > 150 && route.path === '/'"
      href="/api/introduction"
      :icon="IconApi"
      label="Documentation"
      class="fixed inset-x-0 bottom-0 block m-6 mx-auto text-xl lg:hidden backdrop-blur-md w-max"
    />
  </Transition>
</template>

<style>
.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
