function myModulo(a, b) {
    if (b === 0) return NaN;

    const isNegative = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a = a - b;
    }

    return isNegative ? -a : a;
}

console.log(myModulo(17, 5));