<template>
  <div class="Services">
    <p class="title text-center">Nos services</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="text text-center">
        L'entreprise DragN'Receive vous propose plusieurs partenaire, vous
        permettant d'acheter des produits locaux, français, 100% made in France.
        Chacun de nos partenaire est donc à votre dispotion pour vous remettre
        les produits en boutique tel un drive.
      </p>
      <v-img
        src="../../../../public/assets/img/add_to_cart.svg"
        lazy-src="../../../../public/assets/img/add_to_cart.svg"
        class="mx-auto"
        max-width="400"
      ></v-img>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style >
.Services .title {
  color: #014d5a;
  font-weight: bold;
}
.Services .text {
  color: #4a7f88;
  font-size: 16px;
}
</style>