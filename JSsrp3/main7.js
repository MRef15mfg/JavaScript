function sumUpToFive() {
    let sum = 0;
    for (let i = 0; i < arguments.length && i < 5; i++) {
        sum += arguments[i];
    }
    return sum;
}


console.log(sumUpToFive(1));
console.log(sumUpToFive(1, 2, 3));
console.log(sumUpToFive(1, 2, 3, 4, 5));