import store from '@/store';

export const isLogged = (to, from, next) => {
    if (!store.getters.currentUser || !localStorage.getItem('token')) next({ name: 'Home' });
    else next();
}

export const isNotLogged = (to, from, next) => {
    if (store.getters.currentUser || localStorage.getItem('token')) next({ name: 'Home' });
    else next();
}

export const homeRedirections = (to, from, next) => {
    if (store.getters.currentUser.roleId == '1' || store.getters.currentUser.roleId == '2') next({ name: '' }); // sadmin or admin dashboard (/admin)
    else if (store.getters.currentUser.roleId == '3') next({ name: '' }); // partner dashboard (/partner)
    else next(); // not logged can access
}
