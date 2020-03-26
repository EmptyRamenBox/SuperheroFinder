<template>
  <div class="p-8 flex flex flex-wrap">
    <!-- <h1 class="w-full">{{ hero }}</h1> -->
    <!-- eslint-disable-next-line prettier/prettier -->
    <!-- Left Pane -->
    <!--  -->
    <!--  -->
    <div class="left w-full md:w-1/4 md:pr-4">
      <!-- eslint-disable-next-line prettier/prettier -->
      <!-- Hero Name -->
      <h1
        class="text-4xl md:text-4xl lg:text-6xl text-white font-hairline text-center"
      >
        {{ hero.name }}
      </h1>
      <!-- Hero Image -->
      <img
        :src="hero.image.url"
        :alt="hero.name"
        class="mb-8 object-contain bg-black border-4 rounded-lg border-black md:w-11/12 sm:w-full"
      />
      <!-- RouterLink: Go Back -->
      <router-link
        to="/"
        class="w-full flex-1 h-12 border-2 border-black rounded-lg bg-yellow-400 text-indigo-900 hover:bg-yellow-600 text-white font-bold mt-4 py-2 px-4 rounded-md"
        >Go Back</router-link
      >
    </div>
    <!-- Right Pane: Text Details of the Hero -->
    <!--      -->
    <!--  -->
    <div
      class="right w-full mt-4 md:mt-0 md:w-3/4 md:pl-4 bg-blue-800 text-yellow border-2 rounded-lg border-black"
    >
      <!-- eslint-disable-next-line prettier/prettier -->
      <div class="ml-4 mt-2 mr-4">
        <h1 class="text-teal-200 text-2xl">Character Details</h1>
        <div class="text-black">
          <Table :content="hero.powerstats" title="Powerstats" />
          <Table :content="hero.biography" title="Biography" />
          <Table :content="hero.work" title="Work" />
          <Table :content="hero.appearance" title="Appearance" />
          <Table :content="hero.connections" title="Connections" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "HeroDetails",
  components: {
    Table
  },
  computed: {
    hero() {
      return this.$store.getters.getHero(this.$route.params.id);
    }
  }
};
</script>
