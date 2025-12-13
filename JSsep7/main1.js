class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value <= 0) {
            console.log("Радіус має бути додатнім числом");
            return;
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    getArea() {
        return Math.PI * this._radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);
console.log("Радіус:", circle.radius);

console.log("Діаметр:", circle.diameter);

console.log("Площа кола:", circle.getArea().toFixed(2));

console.log("Довжина кола:", circle.getCircumference().toFixed(2));

circle.radius = 10;
console.log("\nПісля зміни радіуса:");
console.log("Радіус:", circle.radius);
console.log("Діаметр:", circle.diameter);
console.log("Площа кола:", circle.getArea().toFixed(2));
console.log("Довжина кола:", circle.getCircumference().toFixed(2));
