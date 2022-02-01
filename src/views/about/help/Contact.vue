<template>
  <div class="Contact">
    <p class="TextTitle title text-center">Nous contacter ?</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="MainText text-center">
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