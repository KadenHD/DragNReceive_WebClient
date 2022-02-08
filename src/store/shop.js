import axios from 'axios';
import router from '@/router';

export default {
    state: {
        shops: null,
    },
    getters: {
        shops: (state) => { return state.shops; }
    },
    actions: {
        shops(context, shops) { context.commit('shops', shops); },
        setShops(context) {
            axios
                .get("shops")
                .then((response) => {
                    context.commit("shops", response.data);
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                    router.push({ name: "Home" });
                });
        }
    },
    mutations: {
        shops(state, shops) { state.shops = shops; },
    }
}