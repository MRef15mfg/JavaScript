const usd = +prompt("Введіть суму в USD:");
const currency = prompt("У яку валюту конвертувати? (EUR, UAN, AZN)").toUpperCase();

const rateEUR = 0.9;
const rateUAN = 41;
const rateAZN = 1.7;

let result;

switch (currency) {
    case "EUR":
        result = usd * rateEUR;
        alert(`Сума в EUR: ${result.toFixed(2)}`);
        break;
    case "UAN":
        result = usd * rateUAN;
        alert(`Сума в UAN: ${result.toFixed(2)}`);
        break;
    case "AZN":
        result = usd * rateAZN;
        alert(`Сума в AZN: ${result.toFixed(2)}`);
        break;
    default:
        alert("Невідома валюта");
}
