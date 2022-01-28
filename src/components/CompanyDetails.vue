<template>
  <div class="CompanyDetails">
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
  </div>
</template>

<style>
.CompanyDetails .label {
  color: #afb854;
}
</style>