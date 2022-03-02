import axios from 'axios';
import router from '@/router';

export default {
    state: {
        tickets: null,
        ticket: null,
    },
    getters: {
        tickets: (state) => { return state.tickets; },
        ticket: (state) => { return state.ticket; },
    },
    actions: {
        tickets(context, tickets) { context.commit('tickets', tickets); },
        ticket(context, ticket) { context.commit('ticket', ticket); },
        setTicket(context, id) {
            axios
                .get("tickets/" + id)
                .then((response) => {
                    context.commit("ticket", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        setTickets(context) {
            axios
                .get("tickets")
                .then((response) => {
                    context.commit("tickets", response.data);
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        createTicket(context, data) {
            axios
                .post("tickets", data)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "Tickets" });
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        },
        deleteTicket(context, id) {
            axios
                .put("tickets/" + id)
                .then((response) => {
                    context.dispatch("alertSuccess", response.data.success);
                    router.push({ name: "Tickets" });
                    context.dispatch("setTickets");
                })
                .catch((error) => {
                    context.dispatch("alertError", error.response.data.error);
                });
        }
    },
    mutations: {
        tickets(state, tickets) { state.tickets = tickets; },
        ticket(state, ticket) { state.ticket = ticket; },
    }
}