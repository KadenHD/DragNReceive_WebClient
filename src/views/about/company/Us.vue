<template>
  <div class="Us">
    <p class="title text-center">À propos de nous</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <v-img
        src="../../../../public/assets/img/logoDashName/logo.svg"
        lazy-src="../../../../public/assets/img/logoDashName/logo.svg"
        class="mx-auto"
        max-width="350"
      ></v-img>
      <v-divider class="mr-2 mt-6 mb-6 ml-2" inset></v-divider>
      <p class="text text-center">
        L’entreprise DragN’Receive est une SARL composée de 15 à 30 salariés,
        cette entreprise possède plusieurs contacts et partenaires dans les
        domaines de la restauration, de la distribution ainsi que des petits
        commerces. La création de l’entreprise était d'abord à des fins
        opportunistes lors de la période de confinement puis s’est vu devenir un
        avantage primordial pour les personnes avec peu de disponibilités, les
        personnes à handicap et à mobilités réduites. La société se tourne
        également vers le développement durable avec des partenaires primant des
        produits possédant des impacts environnementaux faibles ainsi qu’un
        service de logistique verte, afin de réduire son impact sur
        l’environnement.
      </p>
      <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
      <v-img
        src="../../../../public/assets/img/hexaLogo/logo.svg"
        lazy-src="../../../../public/assets/img/hexaLogo/logo.svg"
        class="mx-auto"
        max-width="100"
      ></v-img>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style >
.Us .title {
  color: #014d5a;
  font-weight: bold;
}
.Us .text {
  color: #4a7f88;
  font-size: 16px;
}
</style>