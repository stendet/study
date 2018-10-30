import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
function getJson(url, callback, errorCallback) {
  fetch(url)
    .then(function(response) {
      if (response.status === 401) {
        errorCallback(response.statusText);
      } else {
        return response.json();
      }
    })
    .then(myJson => {
      callback(myJson);
    })
    .catch(error => {
      if (errorCallback) {
        errorCallback(error);
      }
    });
}

const API_BASE = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    dreams: []
  },
  mutations: {
    saveDream(state, data) {
      state.dreams.push(data);
    },
    setDreams(state, data) {
      state.dreams = data;
    }
  },
  actions: {
    storeSaveDream({ commit }, data) {
      commit("saveDream", data);
    },
    storeLoadDreams({ commit }) {
      getJson(
        `${API_BASE}/api/dreams`,
        data => {
          commit("setDreams", data.dreams);
        },
        () => {}
      );
    }
  }
});
