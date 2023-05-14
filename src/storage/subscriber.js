import store from "./main";

store.subscribe((mutation, state) => {
  localStorage.setItem("accessToken", state.accessToken);
  localStorage.setItem("userId", state.userId);
  localStorage.setItem("role", state.role);
});
