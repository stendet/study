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

function postJson(url, data = {}, callback, errorCallback) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data)
  })
    .then(response => {
      response.json().then(data => callback(data));
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
    messages: []
  },
  mutations: {
    setMessage(state, data) {
      state.messages = data;
    }
  },
  actions: {
    actionloadMessages({ commit }) {
      getJson(
        `${API_BASE}/api/messages`,
        data => {
          commit("setMessage", data.messages);
        },
        () => {}
      );
    },
    actionPostMessages(_, data) {
      postJson(`${API_BASE}/api/message`, data, () => {}, () => {});
    }
  }
});
