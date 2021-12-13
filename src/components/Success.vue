<template>
    <div v-if="success" class="alert alert-success" role="alert">
        {{success}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Success',
    computed: {
        ...mapGetters({success: ['success']})
    },
    watch: {
        success (value) {
            if (value !== null) {
                if (this.success) {
                    clearTimeout(this.success);
                    this.success = undefined;
                }
                this.success = setTimeout(() => { 
                    this.$store.dispatch('success', null);
                }, 3000);
            }
        }
    }
}
</script>
