function printEvenOrOdd(from, to, isEven) {
    for (let i = from; i <= to; i++) {
        if (isEven && i % 2 === 0) {
            console.log(i);
        } else if (!isEven && i % 2 !== 0) {
            console.log(i);
        }
    }
}


printEvenOrOdd(1, 20, true);
printEvenOrOdd(1, 20, false);
