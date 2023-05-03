import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken: null,
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken;
    },
  },
  mutations: {
    setAccessToken(state, newAccessToken) {
      state.accessToken = newAccessToken;
    },
  },
  actions: {},
  modules: {},
});

export default store;
