import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    searchItem: "",
    loading: false,
    notFound: false
  },
  getters: {
    getHeroes: state => state.heroes,
    getHero: state => id => state.heroes.find(hero => hero.id === id),
    getSearchItem: state => state.searchItem,
    isLoading: state => state.loading,
    getNotFound: state => state.notFound
  },
  mutations: {
    settingHeroes: (state, heroes) => (state.heroes = heroes),
    settingSearchItem: (state, searchItem) => (state.searchItem = searchItem),
    changingLoading: (state, status) => (state.loading = status),
    changingNotFound: (state, status) => (state.notFound = status)
  },
  actions: {
    // eslint-disable-next-line prettier/prettier
    setHeroes: ({ commit }, data) => commit("settingHeroes", data),
    // eslint-disable-next-line prettier/prettier
    setSearchItem: ({ commit }, searchItem) =>
      commit("settingSearchItem", searchItem),
    // eslint-disable-next-line prettier/prettier
    changeLoading: ({ commit }, status) => commit("chaningLoading", status),
    // eslint-disable-next-line prettier/prettier
    changeNotFound: ({ commit }, status) => commit("changingNotFound", status)
  }
});
