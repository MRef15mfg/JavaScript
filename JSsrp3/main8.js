function maxUpToFive() {
    if (arguments.length === 0) return undefined;

    let max = arguments[0];
    for (let i = 1; i < arguments.length && i < 5; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}


console.log(maxUpToFive(3));
console.log(maxUpToFive(3, 10, 7));
console.log(maxUpToFive(3, 10, 7, 11));
