import { LocalStorage } from "quasar";

export default function () {
  const token = LocalStorage.getItem("token");
  const initialState = token
    ? {
        token: token,
        isAuthenticated: true,
      }
    : {
        token: {},
        isAuthenticated: false,
      };

  return {
    ...initialState,
  };
}
