export const reformatedDates = (key) => {
    const date = new Date(key);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

export const roledName = (key) => {
    if (key == "1") {
        return "Super Administrateur";
    } else if (key == "2") {
        return "Administrateur";
    } else if (key == "3") {
        return "Partenaire";
    } else if (key == "4") {
        return "Client";
    }
}

export const statusName = (key) => {
    if (key == "1") {
        return "Ouvert";
    } else if (key == "2") {
        return "Clos";
    }
}

export const orderStatusName = (key) => {
    if (key == "1") {
        return "Validée";
    } else if (key == "2") {
        return "En cours";
    } else if (key == "3") {
        return "Disponible";
    } else if (key == "4") {
        return "Récupérée";
    } else if (key == "5") {
        return "Annulée";
    }
}