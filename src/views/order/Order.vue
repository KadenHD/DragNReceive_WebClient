<template>
  <div class="Order">
    <template>
      <v-item-group multiple>
        <v-container>
          <p class="TextTitle title text-center">
            Commande n°{{ this.$route.params.number }} ({{
              orderItems[0].orderStatusName
            }})
          </p>
          <v-divider class="mr-2 ml-2 mb-8" inset></v-divider>
          <p class="MainText">
            Commande réalisée le {{ orderItems[0].createdAtReformated }} par
            {{ orderItems[0].user.firstname }}
            {{ orderItems[0].user.lastname }}
            <a class="TextLinks" :href="'mailto:' + orderItems[0].user.email"
              >({{ orderItems[0].user.email }})</a
            >
            pour un montant total de {{ totalPrice }} €.
          </p>
          <v-row>
            <v-col
              v-for="(order, index) in orderItems"
              :key="index"
              cols="12"
              md="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? 'primary' : 'white'"
                  class="d-flex align-center"
                  dark
                  elevation="24"
                  @click="toggle"
                >
                  <v-scroll-y-transition>
                    <div v-if="!active">
                      <v-row
                        ><v-col>
                          <v-img
                            class="ml-5 mt-5 mb-5"
                            :src="order.product.path"
                            :lazy-src="order.product.path"
                            height="150px"
                            width="150px"
                          >
                            <template v-slot:placeholder>
                              <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                              >
                                <v-progress-circular
                                  indeterminate
                                  color="primary"
                                ></v-progress-circular>
                              </v-row>
                            </template> </v-img></v-col
                        ><v-col>
                          <p class="TextTitle">
                            {{ order.product.name }}
                          </p>
                          <p class="MainText">
                            Préparez en {{ order.quantities }} exemplaire(s)
                          </p>
                          <p class="title TextLinks">
                            {{ order.priceEuro }}
                          </p></v-col
                        >
                      </v-row>
                    </div>
                    <div v-if="active" class="text-h2 flex-grow-1 text-center">
                      Validé
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                v-if="orderItems[0].orderStatusId == '2'"
                :disabled="disabledButton"
                :loading="disabledButton"
                color="error"
                @click="status()"
                >Commande prête</v-btn
              >
              <v-btn
                v-else-if="orderItems[0].orderStatusId == '3'"
                :disabled="disabledButton"
                :loading="disabledButton"
                color="error"
                @click="status()"
                >Commande récupérée</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { reformatedDates, orderStatusName } from "@/functions/index.js";

export default {
  data() {
    return {
      disabledButton: false,
    };
  },

  created() {
    this.$store.dispatch("setOrder", this.$route.params.number);
  },

  computed: {
    ...mapGetters(["order", "currentUser"]),
    orderItems: function () {
      return this.order.filter(function (i) {
        i.priceEuro = i.price + " €";
        i.product.path = process.env.VUE_APP_URL + i.product.path;
        i.orderStatusName = orderStatusName(i.orderStatusId);
        i.createdAtReformated = reformatedDates(i.createdAt);
        i.updatedAtReformated = reformatedDates(i.updatedAt);
        i.product.createdAtReformated = reformatedDates(i.product.createdAt);
        i.product.updatedAtReformated = reformatedDates(i.product.updatedAt);
        i.user.createdAtReformated = reformatedDates(i.user.createdAt);
        i.user.updatedAtReformated = reformatedDates(i.user.updatedAt);
        return i;
      });
    },
    totalPrice: function () {
      let stock = 0.0;
      for (let i = 0; i < this.order.length; i++) {
        stock += this.order[i].price;
      }
      return stock;
    },
  },

  methods: {
    status() {
      this.disabledButton = true;
      this.$store.dispatch("updateStatus", this.$route.params.number);
    },
  },
};
</script>