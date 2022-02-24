export const emailRules = [
    v => !!v || "L'e-mail est requis",
    v => /.+@.+\..+/.test(v) || "Le format de l'e-mail doit être valide",
    v => v && v.length <= 100 || "L'e-mail doit faire maximum 100 caractères",
]

export const passwordRules = [
    v => !!v || "Le mot de passe est requis",
    v => (/[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v) && /[^A-Za-z0-9]/.test(v)) ||
        "Le mot de passe doit contenir : une majuscule, une minuscule, un chiffre, un caractère spécial",
    v => v && v.length > 7 || "Le mot de passe doit faire minimum 8 caractères",
    v => v && v.length <= 60 || "Le mot de passe doit faire maximum 60 caractères",
]

export const passwordConfirmRules = [
    v => !!v || "Le mot de passe est requis",
    v => v && v == this.password || "Les deux mots de passe doivent être similaire",
]

export const lastNameRules = [
    v => !!v || "Le nom est requis",
    v => v && v.charAt(0) == v.charAt(0).toUpperCase() || "Le nom doit commencer par une majuscule",
    v => v && v.length <= 50 || "Le nom doit faire maximum 50 caractères",
]

export const firstNameRules = [
    v => !!v || "Le prénom est requis",
    v => v && v.charAt(0) == v.charAt(0).toUpperCase() || "Le prénom doit commencer par une majuscule",
    v => v && v.length <= 50 || "Le prénom doit faire maximum 50 caractères",
]

export const titleRules = [
    v => !!v || "Le titre est requis",
    v => v && v.length <= 60 || "Le titre doit faire maximum 60 caractères",
]

export const contentRules = [
    v => !!v || "Le contenu est requis",
    v => v && v.length <= 255 || "Le contenu doit faire maximum 255 caractères",
]

export const nameRules = [
    v => !!v || "Le nom est requis",
    v => v && v.length <= 50 || "Le nom doit faire maximum 50 caractères",
]

export const phoneRules = [
    v => !v || (v && v.length == 10) || "Le numéro doit faire 10 caractères",
]

export const cityRules = [
    v => !v || (v && v.length <= 60) || "Le nom de ville doit faire maximum 60 caractères",
]

export const streetRules = [
    v => !v || (v && v.length <= 100) || "Le nom de rue doit faire maximum 100 caractères",
]

export const postalRules = [
    v => !v || (v && v.toString().length == 5) || "Le code postal doit faire 5 caractères",
]

const isValidPrice = (v) => {
    const split = v.toString().split('.')
    if (split[1]) { /* if float */
        return (
            split[0].length <= 9 &&
            split[1].length <= 2
        );
    } else { /* if int */
        return (
            split[0].length <= 9
        );
    }
}

export const priceRules = [
    v => !!v || "Le prix est requis",
    v => v && isValidPrice(v) || "Le prix doit être composé de 11 chiffre maximum, dont deux décimales",
]

export const quantitiesRules = [
    v => !!v || "La quantité est requise",
    v => v && v.length <= 11 || "La quantité doit faire 11 chiffres maximum",
]

export const descriptionRules = [
    v => !!v || "La description est requise",
    v => v && v.length <= 255 || "La description doit faire maximum 255 caractères",
]

export const stockRules = [
    v => !!v || "Le stock est requis",
    v => v && v.toString().length <= 11 || "Le stock doit faire 11 chiffres maximum",
]

export const imageRules = [
    v => (!v || v && v.type === 'image/jpeg' || v && v.type === 'image/png') || "L'image doit être au format .jpeg ou .png",
]

export const logoRules = [
    v => (!v || v && v.type === 'image/jpeg' || v && v.type === 'image/png') || "Le logo doit être au format .jpeg ou .png",
]

export const photoRules = [
    v => (!v || v && v.type === 'image/jpeg' || v && v.type === 'image/png') || "Le logo doit être au format .jpeg ou .png",
]

export const roleRules = [v => !!v || "Le rôle est requis"]
export const shopRules = [v => !!v || "La boutique est requise"]