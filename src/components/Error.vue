<template>
  <div class="Error">
    <v-alert v-if="error" dismissible elevation="24" type="error">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ error: ["error"] }),
  },
};
</script>
