//<template>
  <div class="bg-blue-600 min-h-screen">
    <NavBar class="navi shadow-2xl" />

    <router-view class="text-teal-200 text-lg" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};

// Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Bangers&display=swap");
.navi {
  font-family: "Bangers", cursive;
}
</style>
