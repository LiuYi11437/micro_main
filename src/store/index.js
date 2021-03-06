import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appConfig: null,
    userInfo: {},
  },
  mutations: {
    appConfig(state, data) {
      state.appConfig = data;
    },
    userInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {},
  modules: {},
  getters: {
    appConfig: (state) => state.appConfig,
    userInfo: (state) => state.userInfo,
  },
});
