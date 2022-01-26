<template>
  <div class="Success">
    <v-alert v-if="success" dismissible elevation="24" type="success">
      {{ success }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ success: ["success"] }),
  },
};
</script>
