<template>
  <div class="Contact">
    <p class="TextTitle title text-center">Nous contacter ?</p>
    <v-divider class="mr-2 mb-6 ml-2" inset></v-divider>
    <v-container>
      <p class="MainText text-center">
        Vous pouvez nous contacter via ces coordonnées suivantes, nous restons
        également actif sur nos réseaux sociaux en messages privés.
      </p>
      <v-row class="mt-6" align="center" justify="center">
        <v-card elevation="6" height="200" width="300">
          <v-container>
            <p class="label">Téléphone</p>
            <v-row align="center" justify="center">
              <v-text-field
                filled
                disabled
                label="xx.xx.xx.xx.xx"
                prepend-inner-icon="mdi-phone"
              ></v-text-field>
            </v-row>
            <p class="label">Email</p>
            <v-row align="center" justify="center">
              <v-text-field
                filled
                disabled
                label="customer-service@dragnreceive.com"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-row>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.Contact .label {
  color: #afb854;
}
</style>