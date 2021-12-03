<template>
  <q-page class="flex flex-center">
    <welcome />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Welcome from "components/Welcome.vue";

export default defineComponent({
  name: "PageIndex",

  components: {
    Welcome
  }
});
</script>
