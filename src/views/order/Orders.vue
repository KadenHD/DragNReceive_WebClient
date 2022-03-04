<template>
  <div class="Orders">
    {{ orderItems }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { reformatedDates, orderStatusName } from "@/functions/index.js";

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["orders", "currentUser"]),
    orderItems: function () {
      return this.orders.filter(function (i) {
        for (let j = 0; j < i.orders.length; j++) {
          i.orders[j].orderStatusName = orderStatusName(
            i.orders[j].orderStatusId
          );
          i.orders[j].createdAtReformated = reformatedDates(
            i.orders[j].createdAt
          );
          i.orders[j].updatedAtReformated = reformatedDates(
            i.orders[j].updatedAt
          );
          i.orders[j].product.createdAtReformated = reformatedDates(
            i.orders[j].product.createdAt
          );
          i.orders[j].product.updatedAtReformated = reformatedDates(
            i.orders[j].product.updatedAt
          );
          i.user.createdAtReformated = reformatedDates(i.user.createdAt);
          i.user.updatedAtReformated = reformatedDates(i.user.updatedAt);
        }
        return i;
      });
    },
  },

  created() {
    this.$store.dispatch("setOrders");
  },
};
</script>