<template>
  <nav
    v-motion-fade
    class="container flex flex-col items-center justify-between gap-4 mx-auto lg:flex-row lg:w-7/12"
  >
    <NuxtLink to="/">
      <img
        src="https://storage.googleapis.com/lanyard/static/lanyardtemplogo.png"
        alt="logo"
        class="w-44 lg:w-36"
      />
    </NuxtLink>

    <ul class="items-center hidden space-x-6 lg:flex">
      <li class="flex items-center space-x-2">
        <Icon name="tabler:home" />
        <CLink href="/" internal>Home</CLink>
      </li>

      <li class="flex items-center space-x-2">
        <Icon name="tabler:package-import" />
        <CLink href="/api/introduction" internal>API</CLink>
      </li>
    </ul>
  </nav>
</template>
