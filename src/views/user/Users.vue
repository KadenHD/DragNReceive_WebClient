<template>
  <div class="Users">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("setUsers");
  },
  data() {
    return {
      headers: [
        { text: "Nom", value: "firstname" },
        { text: "Prénom", value: "lastname" },
      ],
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {},
};
</script>