<template>
    <div v-if="error" class="alert alert-danger" role="alert">
        {{error}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Error',
    computed: {
        ...mapGetters({error: ['error']})
    },
    watch: {
        error (value) {
            if (value !== null) {
                if (this.error) {
                    clearTimeout(this.error);
                    this.error = undefined;
                }
                this.error = setTimeout(() => { 
                    this.$store.dispatch('error', null);
                }, 3000);
            }
        }
    }
}
</script>
