import Vue from "vue";
import Vuex from "vuex";
import { search } from "../helpers/axios";

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
    setSearchItem: async ({ commit, dispatch }, searchItem) => {
      commit("settingSearchItem", searchItem);
      dispatch("changeNotFound", false);
      commit("changingLoading", true);
      const heroes = await search(searchItem);
      commit("changingLoading", false);
      heroes.data?.results
        ? dispatch("setHeroes", heroes.data.results)
        : dispatch("changeNotFound", true) && dispatch("setHeroes", []);
    },
    // eslint-disable-next-line prettier/prettier
    changeLoading: ({ commit }, status) => commit("changingLoading", status),
    // eslint-disable-next-line prettier/prettier
    changeNotFound: ({ commit }, status) => commit("changingNotFound", status)
  }
});
