export const reformatedDates = (key) => {
    const day = key[8] + key[9];
    const month = key[5] + key[6];
    const year = key[0] + key[1] + key[2] + key[3];
    var hour = '';
    if (parseInt(key[12]) === 9) {
        hour = `${parseInt(key[11]) + 1}0`;
    } else {
        hour = `${key[11]}${parseInt(key[12]) + 1}`;
    }
    const minute = key[14] + key[15];
    const second = key[17] + key[18];
    return (`${day}/${month}/${year} - ${hour}:${minute}:${second}`)
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