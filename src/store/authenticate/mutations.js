import { LocalStorage } from "quasar";

export function setToken(state, token) {
  state.token = token;
  state.isAuthenticated = true;

  LocalStorage.set("token", token);
}

export function purgeToken(state) {
  state.isAuthenticated = false;
  state.token = {};
}
