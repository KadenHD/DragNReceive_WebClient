import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#4a7f88',
                success: '#4a7f88',
                error: '#afb854',
            },
        },
    },
});
