function createFraction(num, den) {
    if (den === 0) {
        throw new Error("Знаменник не може бути 0");
    }
    return { num: num, den: den };
}

function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function reduceFraction(fr) {
    const divisor = gcd(fr.num, fr.den);
    return {
        num: fr.num / divisor,
        den: fr.den / divisor
    };
}

function addFractions(fr1, fr2) {
    const num = fr1.num * fr2.den + fr2.num * fr1.den;
    const den = fr1.den * fr2.den;
    return reduceFraction(createFraction(num, den));
}

function subFractions(fr1, fr2) {
    const num = fr1.num * fr2.den - fr2.num * fr1.den;
    const den = fr1.den * fr2.den;
    return reduceFraction(createFraction(num, den));
}

function mulFractions(fr1, fr2) {
    const num = fr1.num * fr2.num;
    const den = fr1.den * fr2.den;
    return reduceFraction(createFraction(num, den));
}

function divFractions(fr1, fr2) {
    if (fr2.num === 0) {
        throw new Error("Не можна ділити на дріб з чисельником 0");
    }
    const num = fr1.num * fr2.den;
    const den = fr1.den * fr2.num;
    return reduceFraction(createFraction(num, den));
}

const f1 = createFraction(1, 3);
const f2 = createFraction(2, 5);

console.log("f1 =", f1);
console.log("f2 =", f2);
console.log("f1 + f2 =", addFractions(f1, f2));
console.log("f1 - f2 =", subFractions(f1, f2));
console.log("f1 * f2 =", mulFractions(f1, f2));
console.log("f1 / f2 =", divFractions(f1, f2));
