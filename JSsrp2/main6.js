function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

function perfectNumbersInRange(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            console.log(i);
        }
    }
}

perfectNumbersInRange(1, 1000);
