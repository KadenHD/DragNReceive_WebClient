<template>
  <div class="Order">
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

  created() {
    this.$store.dispatch("setOrder", this.$route.params.number);
  },

  computed: {
    ...mapGetters(["order", "currentUser"]),
    orderItems: function () {
      console.log(this.order);
      return this.order.filter(function (i) {
        i.priceEuro = i.price + " €";
        i.product.path = process.env.VUE_APP_URL + i.product.path;
        i.orderStatusName = orderStatusName(i.orderStatusId);
        i.createdAtReformated = reformatedDates(i.createdAt);
        i.updatedAtReformated = reformatedDates(i.updatedAt);
        i.product.createdAtReformated = reformatedDates(i.product.createdAt);
        i.product.updatedAtReformated = reformatedDates(i.product.updatedAt);
        i.orderStatusName = orderStatusName(i.status);
        i.user.createdAtReformated = reformatedDates(i.user.createdAt);
        i.user.updatedAtReformated = reformatedDates(i.user.updatedAt);
        return i;
      });
    },
  },
};
</script>