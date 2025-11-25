function printMultiplicationTable(n) {
    console.log('Таблиця множення для', n);
    for (let i = 1; i <= 10; i++) {
        console.log(n + ' x ' + i + ' = ' + (n * i));
    }
}


for (let num = 2; num <= 9; num++) {
    printMultiplicationTable(num);
}
