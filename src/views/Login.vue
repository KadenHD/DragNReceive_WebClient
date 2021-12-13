<template>
    <div>
        
        <v-form @submit.prevent="handleSubmit"
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Validate
            </v-btn>
        </v-form>
                
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
                passwordRules: [
                v => !!v || 'Password is required',
            ],
        }
    },
    methods: {
        async validate () {
            this.$refs.form.validate()
            this.$store.dispatch('error', 'mange tes morts');
            await axios.post('login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                localStorage.setItem('token', response.data.token);
                this.$store.dispatch('user', response.data.user);
                this.$store.dispatch('success', 'logged in');
                this.$router.push({name: 'Home'});
            })
            .catch(error => {
                this.$store.dispatch('error', error.response.data.error);
            });
        },
    }
}
</script>
