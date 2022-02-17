import store from '@/store';

export const isNotLogged = (to, from, next) => {
    if (store.getters.currentUser || localStorage.getItem('token')) next({ name: 'Home' });
    else next();
}

export const homeRedirections = (to, from, next) => {
    if (store.getters.currentUser && store.getters.currentUser.roleId == '1') next({ name: 'Sadmin' });
    else if (store.getters.currentUser && store.getters.currentUser.roleId == '2') next({ name: 'Admin' });
    else if (store.getters.currentUser && store.getters.currentUser.roleId == '3') next({ name: 'Partner' });
    else next();
}

export const isSadmin = (to, from, next) => {
    if (store.getters.currentUser && store.getters.currentUser.roleId == '1') next();
    else next({ name: 'Home' });
}

export const isAdmin = (to, from, next) => {
    if (store.getters.currentUser && store.getters.currentUser.roleId == '2') next();
    else next({ name: 'Home' });
}

export const isPartner = (to, from, next) => {
    if (store.getters.currentUser && store.getters.currentUser.roleId == '3') next();
    else next({ name: 'Home' });
}

export const isAdminOrSadmin = (to, from, next) => {
    if (
        (store.getters.currentUser && store.getters.currentUser.roleId == '2') ||
        (store.getters.currentUser && store.getters.currentUser.roleId == '1')
    ) next();
    else next({ name: 'Home' });
}