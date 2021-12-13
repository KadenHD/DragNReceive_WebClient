import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    user: null,
    success: null,
    error: null
};

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user;
        },
        success: (state) => {
            return state.success;
        },
        error: (state) => {
            return state.error;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        },
        success(context, success) {
            context.commit('success', success);
            context.commit('error', null);
        },
        error(context, error) {
            context.commit('error', error);
            context.commit('success', null);
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        },
        success(state, success) {
            state.success = success;
        },
        error(state, error) {
            state.error = error;
        }
    }
});

export default store;