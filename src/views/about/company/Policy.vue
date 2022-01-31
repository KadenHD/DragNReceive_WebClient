<template>
  <div class="Policy">
    <p class="title text-center">Politique de confidentialité</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="text text-center">
        Nous traitons les données de chacun de nos utilisateurs avec le plus
        grand soins, les connexion sont sécurisés, vos données personnels,
        factures et commandes sont privés et nous veillons à l'intégralité de la
        suppression de vos données si vous réclamez la suppression de votre
        compte.
      </p>
      <v-img
        src="../../../../public/assets/img/unDraw/secure.svg"
        lazy-src="../../../../public/assets/img/unDraw/secure.svg"
        class="mx-auto"
        max-width="500"
      ></v-img>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style >
.Policy .title {
  color: #014d5a;
  font-weight: bold;
}
.Policy .text {
  color: #4a7f88;
  font-size: 16px;
}
</style>