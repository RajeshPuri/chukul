<template>
  <q-page class="column justify-center items-center">
    <div
      v-bind:style="$q.platform.is.mobile ? { width: '80%' } : { width: '30%' }"
    >
      <q-card>
        <q-img src="/images/stock-analysis.jpg" />
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Welcome to Chukul!</div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit="onSubmit">
            <q-input
              filled
              v-model="phoneNumber"
              label="Phone Number"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please type your phone number',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
            <q-input
              type="password"
              filled
              v-model="password"
              label="Password"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your password',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
              <template v-slot:append>
                <q-icon name="visibility" />
              </template>
            </q-input>
            <div>
              <q-btn label="Login" type="submit" color="positive" />
              <q-btn
                class="float-right"
                label="Forgot Password?"
                type="button"
                color="negative"
                to="/reset"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
      <div class="q-mt-sm text-body1 text-center">
        <div class="">
          Don't have an account?
          <q-btn flat color="pink-5" no-caps label="Sign Up" to="/signup" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: "Login",

  components: {},

  setup() {
    const $q = useQuasar();
    const $router = useRouter();

    const $store = useStore();
    const phoneNumber = ref("");
    const password = ref("");

    const onSubmit = (evt) => {
      $store
        .dispatch("authenticate/login", {
          username: phoneNumber.value,
          password: password.value,
        })
        .then((response) => {
          $router.push({ name: "Dashboard" });
          $q.notify({
            type: "positive",
            message: "Login Successful",
          });
        });
    };

    onMounted(() => {});

    return { phoneNumber, password, onSubmit };
  },
};
</script>

<style scoped></style>
