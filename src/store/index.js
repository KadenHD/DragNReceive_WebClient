import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth.js';
import shop from './shop.js';

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
            setTimeout(() => {
                context.commit('success', null);
            }, 4000)
        },
        error(context, error) {
            context.commit('error', error);
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
    },
});

export default store;
