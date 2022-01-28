<template>
  <div class="Contact">
    <p class="title text-center">Nous contacter ?</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="text text-center">
        Vous pouvez nous contacter via ces coordonnées suivantes, nous restons
        également actif sur nos réseaux sociaux en messages privés.
      </p>
      <CompanyDetails />
    </v-container>
  </div>
</template>

<script>
import CompanyDetails from "@/components/CompanyDetails.vue";

export default {
  components: {
    CompanyDetails,
  },
};
</script>

<style >
.Contact .title {
  color: #014d5a;
  font-weight: bold;
}
.Contact .text {
  color: #4a7f88;
  font-size: 16px;
}
.Contact .label {
  color: #afb854;
}
</style>