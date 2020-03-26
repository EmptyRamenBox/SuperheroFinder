<template>
  <!-- eslint-disable-next-line prettier/prettier -->
  <div class="p-2 flex flex-wrap transform ease-in-out duration-300 hover:scale-110">
    <!-- <div class="bg-yellow-400 border-2 rounded-lg border-black text-black"> -->
    <router-link :to="`/hero/${hero.id}`" class="w-full">
      <div class="mb-8 px-4 mt-6">
        <!-- Character Image -->
        <!--  -->
        <div class="pb-5/6 border-black border-4 rounded-lg bg-black">
          <img
            class="h-full w-full object-cover rounded-lg shadow-md"
            :src="hero.image.url"
            alt="Hero"
          />
        </div>
        <!-- Character Details -->
        <!--  -->
        <div class="relative px-4 -mt-16">
          <!-- eslint-disable-next-line prettier/prettier -->
          <div class="bg-yellow-200 p-6 rounded-lg shadow-lg border-4 rounded-lg border-black">
            <!-- eslint-disable-next-line prettier/prettier -->
            <h4 class="mt-1 font-semibold text-3xl text-indigo-800 leading-tight truncate">
              <!-- eslint-disable-next-line prettier/prettier -->
              {{ hero.name }}
            </h4>
            <!-- Description -->
            <!--  -->
            <div class="mt-1 text-indigo-800">
              <div class="font-semibold">
                Real Name:
                <span class="font-normal">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  {{ hero.biography['full-name'] }}
                </span>
              </div>
              <div class="font-semibold">
                Aliases:
                <span
                  v-for="(alias, index) in hero.biography.aliases"
                  :key="index"
                  class="font-normal"
                >
                  <!-- eslint-disable-next-line prettier/prettier -->
                  {{ index > 0 ? ', ' : '' }}{{alias}}
                </span>
              </div>
              <div class="font-semibold">
                Publisher:
                <span class="font-normal">
                  <!-- eslint-disable-next-line prettier/prettier -->
                  {{ hero.biography.publisher }}
                </span>
              </div>
            </div>
            <!-- Description END!  -->
            <!--  -->
            <div class="flex items-baseline mt-4">
              <span
                class="inline-block text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
                :class="
                  hero.biography.alignment === 'good'
                    ? 'bg-teal-200 text-teal-800'
                    : hero.biography.alignment === 'bad'
                    ? 'bg-red-300 text-red-900'
                    : 'bg-orange-400 text-teal-800'
                "
              >
                <!-- eslint-disable-next-line prettier/prettier -->
                {{ hero.biography.alignment }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    hero: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

