function calculate(a, b, sign) {
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : NaN;
        default:
            return NaN;
    }
}


console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '/'));
