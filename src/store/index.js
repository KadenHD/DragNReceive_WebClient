import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth.js';

Vue.use(Vuex)

const state = {
    currentUser: null,
    success: null,
    error: null,
    shops: null,
};

const store = new Vuex.Store({
    state,
    getters: { // return to mapGetters
        currentUser: (state) => {
            return state.currentUser;
        },
        success: (state) => {
            return state.success;
        },
        error: (state) => {
            return state.error;
        },
        shops: (state) => {
            return state.shops;
        }
    },
    actions: { // from dispatch
        currentUser(context, currentUser) {
            context.commit('currentUser', currentUser);
        },
        success(context, success) {
            context.commit('success', success);
            context.commit('error', null);
        },
        error(context, error) {
            context.commit('error', error);
            context.commit('success', null);
        },
        shops(context, shops) {
            context.commit('shops', shops);
        },
    },
    mutations: { // from commit
        currentUser(state, currentUser) {
            state.currentUser = currentUser;
        },
        success(state, success) {
            state.success = success;
            setTimeout(() => {
                state.success = null
            }, 4000)
        },
        error(state, error) {
            state.error = error;
            setTimeout(() => {
                state.error = null
            }, 4000)
        },
        shops(state, shops) {
            state.shops = shops;
        },
    },
    modules: {
        auth
    }
});

export default store;
