import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default () => {
  const $store = useStore();
  const $router = useRouter();
  const $q = useQuasar();

  const sendOTP = async (phoneNumber) => {
    try {
      const { data } = await api.post("/accounts/register/otp/", {
        phone_number: phoneNumber,
      });

      $q.notify({
        type: "positive",
        message: `DEV: OTP code is ${data.otp}`,
      });

      return data.otp;
    } catch (error) {
      console.error({ error });

      let message = Object.values(error?.response?.data)?.[0];

      if (!message) {
        message = "Error sending OTP";
      }

      $q.notify({
        type: "negative",
        message: message,
      });
    }
  };

  const verifyOTP = async (phoneNumber, otp) => {
    try {
      const response = await api.post("/accounts/register/otp/verify/", {
        phone_number: phoneNumber,
        otp: otp,
      });
      if (response.status === 204) return true;
    } catch (error) {
      console.error({ error });
      $q.notify({
        type: "negative",
        message: "Failed to verify OTP code",
      });
    }
    return false;
  };

  const signUp = async (phoneNumber, password1, password2) => {
    api
      .post("/accounts/register/", {
        phone_number: phoneNumber,
        password1: password1,
        password2: password2,
      })
      .then(({ data }) => {
        $store.commit("authenticate/setToken", data);
        $router.push({ name: "Dashboard" });
        $q.notify({
          type: "positive",
          message: "Sign Up Successful",
        });
      })
      .catch((error) => {
        console.error({ error });
        $q.notify({
          type: "negative",
          message: "Sign Up Failed",
        });
      });
  };

  return {
    sendOTP,
    verifyOTP,
    signUp,
  };
};
