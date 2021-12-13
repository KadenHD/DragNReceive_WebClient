<template>
    <div>
        
        <form @submit.prevent="handleSubmit">
            <div>Connexion</div>
            
            <q-input 
                required
                filled
                type="email"
                v-model="email"
                label="Email"
                :rules="[
                    val => val !== null && val !== '' || 'Saisissez votre email !'
                ]"
            />

            <q-input 
                required
                filled
                type="password"
                v-model="password"
                label="Mot de passe"
                :rules="[
                    val => val !== null && val !== '' || 'Saisissez votre mot de passe !'
                ]"
            />

            <q-toggle 
                required
                v-model="accept"
                label="Accepter les termes et licenses."
            />


            <btn label="Se connecter" type="submit" color="primary"/>
            <router-link to="forgot">Mot de passe oublié ?</router-link>
        </form>
                
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            accept: false,
        }
    },
    methods: {
        async handleSubmit() {
            if (this.accept === true) {
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
            } else {
                this.$store.dispatch('error', 'Acceptez les termes !');
            }
        }
    }
}
</script>
