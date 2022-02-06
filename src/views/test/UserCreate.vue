<template>
  <div class="Register" v-if="currentUser">
    <!-- v-if the currentUser to handle errors cause he come to late for role items -->
    <v-form ref="form">
      <v-card>
        <v-card-title>Inscrivez-vous</v-card-title>
        <v-card-text>
          <v-select
            @input="updateShop"
            v-model="roleId"
            :rules="roleRules"
            :items="currentUser.roleId == '1' ? roleItems : roleItemsFiltered"
            label="Rôle"
          />

          <v-select
            v-if="roleId == '3'"
            v-model="shopId"
            :rules="shopRules"
            :items="shopItems"
            label="Boutique"
          />

          <v-text-field
            v-model="lastname"
            :rules="lastNameRules"
            label="Nom"
            counter
          ></v-text-field>

          <v-text-field
            v-model="firstname"
            :rules="firstNameRules"
            label="Prénom"
            counter
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            counter
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            counter
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" class="mr-4" @click="submitUserCreateForm">
            Créer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import {
  roleRules,
  shopRules,
  firstNameRules,
  lastNameRules,
  emailRules,
  passwordRules,
} from "@/plugins/inputRules.js";

export default {
  created() {
    axios
      .get("shops")
      .then((response) => {
        this.$store.dispatch("shops", response.data);
      })
      .catch((error) => {
        this.$store.dispatch("error", error.response.data.error);
      });
  },
  data() {
    return {
      roleId: null,
      shopId: null,
      firstname: null,
      lastname: null,
      email: null,
      password: null,
      showPassword: false,
      roleRules,
      shopRules,
      firstNameRules,
      lastNameRules,
      emailRules,
      passwordRules,
      roleItems: [
        {
          text: "Super-Admin",
          value: "1",
        },
        {
          text: "Admin",
          value: "2",
        },
        {
          text: "Partenaire",
          value: "3",
        },
      ],
      roleItemsFiltered: [
        {
          text: "Partenaire",
          value: "3",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["shops", "currentUser"]),
    shopItems: function () {
      return this.shops.filter(function (i) {
        i.text = i.name; // select options display text
        i.value = i.id; // select options display value
        return i.deleted == false; // only not deleted shops
      });
    },
  },
  methods: {
    updateShop() {
      this.shopId = null;
    },
    submitUserCreateForm() {
      if (this.$refs.form.validate()) {
        axios
          .post("users", {
            lastname: this.lastname,
            firstname: this.firstname,
            email: this.email,
            password: this.password,
            roleId: this.roleId,
            shopId: this.shopId,
          })
          .then((response) => {
            this.$store.dispatch("success", response.data.success);
            //this.$router.push({ name: "" }); // all Users page
          })
          .catch((error) => {
            this.$store.dispatch("error", error.response.data.error);
          });
      }
    },
  },
};
</script>