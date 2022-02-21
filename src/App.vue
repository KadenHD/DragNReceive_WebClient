<template>
  <div class="App">
    <v-app>
      <v-app-bar app>
        <router-link class="mr-1 ml-1" :to="{ name: 'Home' }">
          <v-img
            src="../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
            lazy-src="../public/assets/img/Jimdo/DragNReceive/nameAndLogo/logo.svg"
            class="mx-auto"
            max-width="100"
          ></v-img
        ></router-link>
        <v-divider class="mr-5 ml-2" vertical inset></v-divider>
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
    this.$store.dispatch("setCurrentUser");
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
