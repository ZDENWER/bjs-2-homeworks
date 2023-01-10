function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    } else {
        return result;
    }
}

let value = 'Ghbdtn';