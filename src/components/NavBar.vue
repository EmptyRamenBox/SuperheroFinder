<template>
  <nav class="flex items-center justify-between flex-wrap bg-red-900 p-4">
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="hr-8 mr-4" src="favicon.png" alt="logo" />
      <span class="text-4xl">
        SuperHero-
        <span class="font-light">Finder</span>
      </span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
