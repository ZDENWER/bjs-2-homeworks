function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    } else {
        return result;
    }
}

function validateCount(val) {
    try {
        return parseCount(val);
    } catch (error) {
        return error
    }
}


class Triangle {
    constructor(a, b, c) {
        
        if (a > b + c || b > a + c || c > a + b) {
            throw new Error ('Треугольник с такими сторонами не существует')
        }
           
        this.a = a,
        this.b = b,
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter * 0.5;
        let S = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return Number(S);
    }
}

