function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}


console.log(compareNumbers(5, 10));
console.log(compareNumbers(10, 5));
console.log(compareNumbers(7, 7));
