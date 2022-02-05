<template>
  <div class="App">
    <v-app>
      <v-app-bar app>
        <Nav />
      </v-app-bar>

      <v-main>
        <v-container fluid>
          <Error />
          <Success />
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer v-if="!currentUser" app>
        <Footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

import Nav from "@/components/Nav.vue";
import Success from "@/components/Success.vue";
import Error from "@/components/Error.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Success,
    Error,
    Footer,
  },
  created() {
    // if token in local storage store user, else remove the token because not valid or dont exist
    axios.get("currentUser").then((response) => {
      this.$store.commit("currentUser", response.data.currentUser);
    });
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
.router-link-exact-active,
.router-link-active {
  text-decoration: none;
  color: #afb854 !important;
}
.router-link-exact-active:hover,
.router-link-active:hover {
  color: #afb891 !important;
}

.TextTitle {
  color: #014d5a;
  font-weight: bold;
}
.MainText {
  color: #4a7f88;
  font-size: 16px;
}
.TextLinks {
  text-decoration: none;
  color: #afb854 !important;
}
.TextLinks:hover {
  color: #afb891 !important;
}
</style>
