const sum = +prompt("Введіть суму покупки:");

let discount = 0;

if (sum >= 200 && sum < 300) {
    discount = 3;
} else if (sum >= 300 && sum < 500) {
    discount = 5;
} else if (sum >= 500) {
    discount = 7;
}

const discountedSum = sum - (sum * discount / 100);

alert(`Знижка: ${discount}%. До сплати: ${discountedSum.toFixed(2)}`);
