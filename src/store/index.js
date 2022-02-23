import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import auth from './auth.js';
import shop from './shop.js';
import user from './user.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        alert: {
            type: null,
            message: null,
        },
    },
    getters: { /* return to mapGetters */
        alert: (state) => { return state.alert; },
    },
    actions: { /* from dispatch */
        alertSuccess(context, alert) {
            context.commit('alert', { type: 'success', message: alert });
            setTimeout(() => {
                context.commit('alert', {});
            }, 4000)
        },
        alertError(context, alert) {
            context.commit('alert', { type: 'error', message: alert });
            setTimeout(() => {
                context.commit('alert', {});
            }, 4000)
        },
    },
    mutations: { /* from commit */
        alert(state, alert) { state.alert = alert; },
    },
    modules: {
        auth,
        shop,
        user,
    },
    plugins: [createPersistedState()]
});

export default store;
