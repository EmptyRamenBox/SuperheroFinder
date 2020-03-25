<template>
  <div class="home">
    <label class="block px-2 pt-1 md:px-16 md:pt-8">
      <input
        :value="searchItem"
        type="text"
        class="form-input mt-1 block w-full text-teal-500"
        placeholder="Search a SuperHero, example 'Thor'"
        @change="setSearchItem"
      />
    </label>
    <div class="flex flex-col flex-wrap justify-center items-center">
      <PulseLoader v-if="loading" class="mt-6" color="#b2f5ea" size="2em" />
      <h1
        v-if="searchItem"
        class="RESULTS w-full text-center px-4 md:px-16 text-white font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        <span class="font-hairline">Showing results for</span>
        "{{ searchItem }}"
      </h1>
      <!-- If a search result is not found -->
      <!-- eslint-disable-next-line prettier/prettier -->
      <div class="items-center justify-center mt-8 flex flex-wrap w-full" v-if="notFound">
        <div class="border-2 rounded-lg p-6 border-black bg-white text-black">
          <h1 class="font-bold text-2xl">Search Not Found</h1>
          <h2>What is this "{{ searchItem }}" you speak of?!</h2>
        </div>
        <div class="mt-6">
          <img :src="notFoundImg" alt="Not Found Placeholder" />
        </div>
      </div>
      <!--  -->
      <!-- If a search result is found -->
      <!-- eslint-disable-next-line prettier/prettier -->
      <!-- v-if="searchItem && heroes.length > 0" -->
      <div class="w-full flex flex-wrap mt-12 justify-center items-center">
        <!-- Render Depending on sizes sm: md: lg: xl: -->
        <!-- eslint-disable-next-line prettier/prettier -->
        <Card
          class="sm:w-1/2 lg:w-1/3 xl:w-1/4"
          v-for="hero in heroes"
          :key="hero.id"
          :hero="hero"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import notFoundImg from "@/assets/notFound.png";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
    PulseLoader
  },
  data() {
    return {
      notFoundImg
    };
  },
  computed: {
    searchItem() {
      return this.$store.getters.getSearchItem;
    },
    heroes() {
      return this.$store.getters.getHeroes;
    },
    loading() {
      return this.$store.getters.isLoading;
    },
    notFound() {
      return this.$store.getters.getNotFound;
    }
  },
  methods: {
    setSearchItem(event) {
      this.$store.dispatch("setSearchItem", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
.RESULTS {
  font-family: "Bangers", cursive;
}
</style>
