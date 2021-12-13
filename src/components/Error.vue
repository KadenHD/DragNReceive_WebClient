<template>
    
    <v-alert v-if="error"
        dismissible
        elevation="24"
        type="error"
    >
        {{error}}
    </v-alert>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Error',
    computed: {
        ...mapGetters({error: ['error']})
    }
}
</script>
