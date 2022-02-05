import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    currentUser: null,
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
    actions: {
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
    mutations: {
        currentUser(state, currentUser) {
            state.currentUser = currentUser;
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
    },
    modules: {

    }
});

export default store;
