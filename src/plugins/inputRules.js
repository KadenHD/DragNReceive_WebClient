export const emailRules = [
    (v) => !!v || "L'e-mail est requis",
    (v) => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
]

export const passwordRules = [(v) => !!v || "Le mot de passe est requis"]

export const passwordConfirmRules = [
    (v) => !!v || "Le mot de passe est requis",
    (v) => v === this.password || "Les deux mots de passe doivent être similaire !",
]

export const roleRules = [(v) => !!v || "Le rôle est requis"]

export const shopRules = [(v) => !!v || "La boutique est requise"]

export const firstNameRules = [(v) => !!v || "Le prénom est requis"]

export const lastNameRules = [(v) => !!v || "Le nom est requis"]