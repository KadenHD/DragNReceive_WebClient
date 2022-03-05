<template>
  <div class="Orders">
    <v-data-table
      :headers="headers"
      :items="orderItems"
      :items-per-page="10"
      :search="search"
      sort-by="orderStatusName"
      :sort-desc="true"
      class="elevation-24"
    >
      <template v-slot:[`item.path`]="{ item }">
        <v-avatar height="50px" width="50px">
          <v-img
            :src="item.path ? item.path : 'assets/img/user.svg'"
            :lazy-src="item.path ? item.path : 'assets/img/user.svg'"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </v-row>
            </template> </v-img
        ></v-avatar>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Mes commandes</v-toolbar-title>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-text-field
          v-model="search"
          label="Chercher une commande"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:[`item.userInfo`]="{ item }">
        {{ item.user.firstname }} {{ item.user.lastname }} |
        {{ item.user.email }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon class="mr-2" @click="viewItem(item)"> mdi-eye </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { reformatedDates, orderStatusName } from "@/functions/index.js";

export default {
  data() {
    return {
      search: "",
      path_url: process.env.VUE_APP_URL,
      dialogView: false,
      dialogEdit: false,
      dialogDelete: false,
      currentIndex: -1,
      currentItem: {},
      headers: [],
    };
  },

  created() {
    this.$store.dispatch("setOrders");
    console.log(this.orderItems);
    this.headers = [
      { text: "Statut", value: "orderStatusName" },
      { text: "Numéro de commande", value: "number" },
      { text: "Contenu", value: "content" }, // le contenu doit être un template comme action avec les produits (3 max sinon trois petits points...)
      { text: "Prix", value: "priceEuro" },
      { text: "Client", value: "userInfo" },
      { text: "Date de commande", value: "orders[0].createdAtReformated" },
      { text: "Actions", value: "actions", sortable: false },
    ];
  },

  computed: {
    ...mapGetters(["orders", "currentUser"]),
    orderItems: function () {
      return this.orders.filter(function (i) {
        for (let j = 0; j < i.orders.length; j++) {
          i.priceEuro = i.price + " €";
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
          i.orderStatusName = orderStatusName(i.status);
          i.user.createdAtReformated = reformatedDates(i.user.createdAt);
          i.user.updatedAtReformated = reformatedDates(i.user.updatedAt);
        }
        return i;
      });
    },
  },
};
</script>