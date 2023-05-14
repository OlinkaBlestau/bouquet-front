import { createStore } from "vuex";

const store = createStore({
  state: {
    accessToken:
      localStorage.getItem("accessToken") == "null"
        ? null
        : localStorage.getItem("accessToken"),
    role: localStorage.getItem("role"),
    userId: localStorage.getItem("userId"),
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
