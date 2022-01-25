<template>
  <v-alert v-if="success" dismissible elevation="24" type="success">
    {{ success }}
  </v-alert>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Success",
  computed: {
    ...mapGetters({ success: ["success"] }),
  },
};
</script>
