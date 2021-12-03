<template>
  <div class="q-pa-md">
    <q-card class="welcome-card">
        <q-card-section>{{ message }} 🖐</q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome",
  setup() {
    return {
      message: "Welcome to Chukul App",
    };
  },
});
</script>
