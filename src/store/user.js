import axios from 'axios';

export default {
    state: {

    },
    getters: {

    },
    actions: {
        createUser(context, data) {
            axios
                .post("users", data)
                .then((response) => {
                    context.dispatch("success", response.data.success);
                    //router.push({ name: "" }); // all Users page
                })
                .catch((error) => {
                    context.dispatch("error", error.response.data.error);
                });
        }
    },
    mutations: {

    }
}