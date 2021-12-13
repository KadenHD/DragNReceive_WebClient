<template>
    <div>
        
        <form @submit.prevent="handleSubmit">
            <div>Mot de passe oublié</div>
            
            <input 
                required
                filled
                type="email"
                v-model="email"
                label="Email"
                :rules="[
                    val => val !== null && val !== '' || 'Saisissez votre email !'
                ]"
            />

            <btn label="Envoyer" type="submit" color="primary"/>
        </form>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
        }
    },
    methods: {
        async handleSubmit() {
            await axios.post('forgot', {
                email: this.email
            })
            .then(response => {
                this.$store.dispatch('success', response.data.success);
            })
            .catch(error => {
                this.$store.dispatch('error', error.response.data.error);
            });
        }
    }
}
</script>
