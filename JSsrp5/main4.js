function getRandom1to100() {
    return Math.floor(Math.random() * 100) + 1;
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function getMaxOfThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log("Випадкове число 1-100: " + getRandom1to100());
console.log("Кидок кубика: " + rollDice());
console.log("Найбільше з трьох: " + getMaxOfThree(3, 10, 7));
