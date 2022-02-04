import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    user: null,
    success: null,
    error: null,
    shops: [ //Test remove by null
        {
            id: '1',
            email: 'email@1',
            name: 'name1',
            deleted: false
        },
        {
            id: '2',
            email: 'email@2',
            name: 'name2',
            deleted: true
        },
        {
            id: '3',
            email: 'email@3',
            name: 'name3',
            deleted: false
        },
    ]
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
        },
        shops: (state) => {
            return state.shops;
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
        },
        shops(context, shops) {
            context.commit('shops', shops);
        },
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
        },
        shops(state, shops) {
            state.shops = shops;
        },
    }
});

export default store;