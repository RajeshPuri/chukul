<template>
  <q-page class="flex flex-center">
    <div
      v-bind:style="$q.platform.is.mobile ? { width: '80%' } : { width: '30%' }"
    >
      <q-stepper v-model="step" ref="stepper" color="positive" animated>
        <q-step
          :name="1"
          title="Phone Number"
          icon="phone"
          :done="step > 1"
          active-color="positive"
        >
          <q-input
            ref="verifyPhoneNumberRef"
            filled
            v-model="v1$.phoneNumber.$model"
            label="Phone Number"
            :error="v1$.phoneNumber.$error"
            error-message="Please type your phone number"
          >
            <template v-slot:prepend>
              <q-icon name="phone" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn @click="onDone1" color="positive" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Verify OTP"
          icon="sms"
          :done="step > 2"
          active-color="positive"
        >
          <q-input
            type="password"
            filled
            v-model="v2$.otp.$model"
            label="OTP Code"
            :error="v2$.otp.$error"
            error-message="Please type your OTP code"
          >
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>

            <template v-slot:append>
              <q-icon name="visibility" />
            </template>

            <template v-slot:after>
              <q-btn round dense flat icon="refresh" @click="onDone1" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn @click="onDone2" color="positive" label="Continue" />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="step = 1"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Reset"
          icon="lock_reset"
          active-color="positive"
        >
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="v1$.phoneNumber.$model"
              label="Phone Number"
              :error="v1$.phoneNumber.$error"
              error-message="Please type your phone number"
            >
              <template v-slot:prepend>
                <q-icon name="phone" />
              </template>
            </q-input>
            <q-input
              type="password"
              filled
              v-model="v3$.password1.$model"
              label="Password"
              :error="v3$.password1.$error"
              :error-message="password1Error"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
              <template v-slot:append>
                <q-icon name="visibility" />
              </template>
            </q-input>
            <q-input
              type="password"
              filled
              v-model="v3$.password2.$model"
              label="Confirm Password"
              :error="v3$.password2.$error"
              :error-message="password2Error"
            >
              <template v-slot:prepend>
                <q-icon name="password" />
              </template>
              <template v-slot:append>
                <q-icon name="visibility" />
              </template>
            </q-input>
          </q-form>
          <q-stepper-navigation>
            <q-btn @click="onDone3" color="positive" label="Continue" />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="step = 2"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <div class="q-mt-sm text-body1 text-center">
        <div class="">
          Already have an account?
          <q-btn flat color="pink-5" no-caps label="Signin" to="/" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import useReset from "../use/reset";

export default {
  name: "Signup",

  setup() {
    const { sendOTP, verifyOTP, resetAccount } = useReset();

    const step = ref(1);

    const step1State = reactive({
      phoneNumber: "",
    });
    const step2State = reactive({
      otp: "",
    });
    const step3State = reactive({
      password1: "",
      password2: "",
    });

    const password1Ref = computed(() => step3State.password1);

    const step1Rules = {
      phoneNumber: { required },
    };
    const step2Rules = {
      otp: { required },
    };
    const step3Rules = {
      password1: { required, minLength: minLength(6) },
      password2: {
        sameAsPassword: sameAs(password1Ref),
      },
    };

    const v1$ = useVuelidate(step1Rules, step1State, { $lazy: true });
    const v2$ = useVuelidate(step2Rules, step2State, { $lazy: true });
    const v3$ = useVuelidate(step3Rules, step3State, { $lazy: true });

    const password1Error = computed(() => {
      if (v3$.value.password1.minLength) {
        return "Minimum length should be 6";
      } else if (v3$.value.password1.required) {
        return "Please type password";
      }
      return null;
    });

    const password2Error = computed(() => {
      if (v3$.value.password2.sameAsPassword.$invalid) {
        return "Password must be identical";
      }
      return null;
    });

    const onDone1 = async () => {
      v1$.value.$touch();
      if (v1$.value.$invalid) return;

      const otp = await sendOTP(step1State.phoneNumber);
      if (otp) {
        step.value = 2;
        step2State.otp = otp;
      }
    };

    const onDone2 = async () => {
      v2$.value.$touch();
      if (v2$.value.$invalid) return;

      const isVerified = await verifyOTP(
        step1State.phoneNumber,
        step2State.otp
      );

      if (isVerified) {
        step.value = 3;
      }
    };

    const onDone3 = () => {
      v3$.value.$touch();
      if (v3$.value.$invalid) return;

      resetAccount(
        step1State.phoneNumber,
        step3State.password1,
        step3State.password2
      );
    };

    return {
      step,
      v1$,
      v2$,
      v3$,
      password1Error,
      password2Error,
      onDone1,
      onDone2,
      onDone3,
    };
  },
};
</script>
