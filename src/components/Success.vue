<template>
  <div v-if="success" class="Success">
    <v-alert elevation="24" type="success">
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
