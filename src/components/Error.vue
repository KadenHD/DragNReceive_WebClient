<template>
  <div v-if="error" class="Error">
    <v-alert elevation="24" type="error">
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
