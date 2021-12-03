import { api } from "boot/axios";

export function login({ commit }, { username, password }) {
  return new Promise((resolve, reject) => {
    api
      .post("/authenticate/token/", {
        phone_number: username,
        password: password,
      })

      .then((response) => {
        commit("setToken", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.error({ error });
        reject(error);
      });
  });
}
