import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import auth from './auth.js';
import shop from './shop.js';
import user from './user.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        success: null,
        error: null,
    },
    getters: { // return to mapGetters
        success: (state) => { return state.success; },
        error: (state) => { return state.error; },
    },
    actions: { // from dispatch
        success(context, success) {
            context.commit('success', success);
            context.commit('error', null);
            setTimeout(() => {
                context.commit('success', null);
            }, 4000)
        },
        error(context, error) {
            context.commit('error', error);
            context.commit('success', null);
            setTimeout(() => {
                context.commit('error', null);
            }, 4000)
        },
    },
    mutations: { // from commit
        success(state, success) { state.success = success; },
        error(state, error) { state.error = error; },
    },
    modules: {
        auth,
        shop,
        user,
    },
    plugins: [createPersistedState()]
});

export default store;
