// Voir le plus viable / unused
export const isLogged = (to, from, next) => {
    if (store.state.currentUser || localStorage.getItem('token')) next({ name: 'Home' });
    else next();
}

export const isNotLogged = (to, from, next) => {
    if (store.state.currentUser || localStorage.getItem('token')) next({ name: 'Home' });
    else next();
}

