import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dreams: []
  },
  mutations: {
    saveDream(state, data) {
      state.dreams.push(data);
    }
  },
  actions: {
    storeSaveDream({ commit }, data) {
      commit("saveDream", data);
    }
  }
});
