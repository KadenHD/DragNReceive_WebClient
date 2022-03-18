<template>
  <div class="Ticket">
    <v-card class="mx-auto mt-5 mb-5" elevation="24">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="8">
          <router-link :to="{ name: 'Tickets' }">
            <v-btn id="goBack" color="error" dark class="ml-5"> Retour </v-btn>
          </router-link>
          <v-card
            class="ml-5 mt-5 mb-5 scroll pa-2"
            max-height="800"
            max-width="800"
            elevation="24"
          >
            <v-card-text>
              <div>
                <p class="TextTitle title text-center">
                  {{ ticketItems.title }}
                </p>
                <p
                  class="TextTitle title text-center"
                  v-if="ticketItems.ticketStatusId == 2"
                >
                  <i>Le ticket est clos</i>
                </p>
              </div>

              <v-divider class="mr-2 ml-2" inset></v-divider>

              <p class="MainText">{{ ticketItems.content }}</p>
            </v-card-text>
            <div v-for="(message, index) in ticketItems.messages" :key="index">
              <v-card
                v-if="message.user.id != ticketItems.userId"
                class="ma-3 Sender"
              >
                <v-card-title>
                  <v-avatar class="mr-5" height="50px" width="50px">
                    <v-img
                      :src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
                      "
                      :lazy-src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
                      "
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
                      </template>
                    </v-img>
                  </v-avatar>
                  <b
                    >{{ message.user.lastname }} {{ message.user.firstname }}</b
                  >
                </v-card-title>
                <v-card-text>
                  <b>{{ message.content }}</b></v-card-text
                >
                <v-card-subtitle
                  ><b>{{ message.createdAtReformated }}</b></v-card-subtitle
                >
              </v-card>

              <v-card
                v-if="message.user.id == ticketItems.userId"
                class="ma-3 text-right Receiver"
              >
                <v-card-title>
                  <v-spacer />
                  <b>
                    {{ message.user.lastname }} {{ message.user.firstname }}</b
                  >
                  <v-avatar class="ml-5" height="50px" width="50px">
                    <v-img
                      :src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
                      "
                      :lazy-src="
                        message.user.path
                          ? path_url + message.user.path
                          : '../../assets/img/user.svg'
                      "
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
                      </template>
                    </v-img>
                  </v-avatar>
                </v-card-title>
                <v-card-text
                  ><b> {{ message.content }}</b></v-card-text
                >
                <v-card-subtitle
                  ><b>{{ message.createdAtReformated }}</b></v-card-subtitle
                >
              </v-card>
            </div>
          </v-card></v-col
        >
        <v-col v-if="ticketItems.ticketStatusId == 1" cols="6" md="4">
          <v-card
            class="mr-5 pa-2"
            max-height="300"
            max-width="800"
            elevation="24"
          >
            <v-form ref="form">
              <v-textarea
                v-model="content"
                :rules="contentRules"
                label="Contenu"
                prepend-inner-icon="mdi-feather"
                counter
              ></v-textarea>
              <v-btn id="send" color="success" class="mr-4" @click="submit">
                Envoyer
              </v-btn>
            </v-form>
          </v-card></v-col
        >
        <v-col v-if="ticketItems.ticketStatusId == 2" cols="6" md="4">
          <v-card
            class="mr-5 pa-2"
            max-height="300"
            max-width="800"
            elevation="24"
          >
            <v-textarea
              v-model="content"
              label="Contenu"
              prepend-inner-icon="mdi-feather"
              disabled
            ></v-textarea>
            <v-btn
              id="send"
              disabled
              color="success"
              class="mr-4"
              @click="submit"
            >
              Envoyer
            </v-btn>
          </v-card></v-col
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import { contentRules } from "@/functions/inputRules.js";
import { reformatedDates } from "@/functions/index.js";

export default {
  data() {
    return {
      path_url: process.env.VUE_APP_URL,
      currentIndex: -1,
      currentItem: {},
      content: null,
      contentRules,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    ticketItems: function () {
      const data = store.getters.ticket;
      if (!data) {
        return null;
      } else {
        data.createdAtReformated = reformatedDates(data.createdAt);
        data.updatedAtReformated = reformatedDates(data.updatedAt);
        for (let i = 0; i < data.messages.length; i++) {
          data.messages[i].createdAtReformated = reformatedDates(
            data.messages[i].createdAt
          );
        }
        data.messages = data.messages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        return data;
      }
    },
  },

  created() {
    this.$store.dispatch("setTicket", this.$route.params.id);
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const data = {
          ticketId: this.$route.params.id,
          content: this.content,
        };
        this.$store.dispatch("createMessage", data);
        this.content = null;
      }
    },
  },
};
</script>

<style>
.Ticket .scroll {
  overflow-y: scroll;
}
.Ticket .Receiver {
  background-color: #4a7f88bb;
}
.Ticket .Sender {
  background-color: #b0b854c0;
}
.Ticket b {
  color: rgb(22, 21, 21);
  text-shadow: 1px 1px 2px white;
}
</style>