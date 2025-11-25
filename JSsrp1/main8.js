const circleLength = +prompt("Введіть довжину кола:");
const squarePerimeter = +prompt("Введіть периметр квадрата:");

const diameter = circleLength / Math.PI;
const side = squarePerimeter / 4;

const message = (diameter <= side) ? "Коло поміститься в квадрат" : "Коло не поміститься в квадрат";

alert(message);
