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

    },
    mutations: {
        tickets(state, tickets) { state.tickets = tickets; },
        ticket(state, ticket) { state.ticket = ticket; },
    }
}