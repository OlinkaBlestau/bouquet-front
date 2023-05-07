import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken: null,
    role: null,
    userId: null,
  },
  getters: {
    isAuth(state) {
      return state.accessToken !== null;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getRole(state) {
      return state.role;
    },
    getUserId(state) {
      return state.userId;
    },
  },
  mutations: {
    setAccessToken(state, newAccessToken) {
      state.accessToken = newAccessToken;
    },
    setRole(state, newState) {
      state.role = newState;
    },
    setUserId(state, newUserId) {
      state.userId = newUserId;
    },
  },
  actions: {},
  modules: {},
});

export default store;
