<template>
  <div class="App">
    <v-app>
      <Nav />
      <v-main>
        <v-container fluid>
          <Alert />
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
import { mapGetters } from "vuex";

import Nav from "@/components/Nav.vue";
import Alert from "@/components/Alert.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Alert,
    Footer,
  },
  created() {
    this.$store.dispatch("setCurrentUser");
    this.$store.commit("alert", {});
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.v-list-item--active,
.router-link-exact-active,
.router-link-active {
  text-decoration: none;
  color: #afb854 !important;
}
.v-list-item--active:hover,
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
