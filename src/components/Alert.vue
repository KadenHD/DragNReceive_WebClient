<template>
  <div v-if="alert.type && alert.message" class="Alert">
    <v-alert elevation="24" :type="alert.type">
      {{ alert.message }}
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["alert"]),
  },
};
</script>

<style>
.Alert {
  position: fixed;
  left: 50%;
  top: 11%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>