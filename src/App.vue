<template>

  <v-app>
      <v-main>
      
          <Nav />

          <router-view />

          <Footer />

          <Success />
          <Error />
        
      </v-main>
  </v-app>

</template>

<script>
  import Nav from '@/components/Nav.vue';
  import Success from '@/components/Success.vue';
  import Error from '@/components/Error.vue';
  import Footer from '@/components/Footer.vue';
  import axios from 'axios';

  export default {
    name: "App",
    components: {
      Nav,
      Success,
      Error,
      Footer
    },
    async created() {
      await axios.get('user')
        .then(response => {
          this.$store.commit('user', response.data.user);
        });
    }
  };
</script>

<style>
.q-field__append.row {
  --bs-gutter-x: 5.5rem;
}
.form-card {
  width: 400px;
  margin:0 auto
}
</style>
