<template>
  <div class="Orders">
    {{ orderItems }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["orders", "currentUser"]),
    orderItems: function () {
      return this.orders;
    },
  },

  created() {
    this.$store.dispatch("setOrders");
  },
};
</script>