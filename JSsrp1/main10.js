let day = +prompt("Введіть день:");
let month = +prompt("Введіть місяць (1-12):");
let year2 = +prompt("Введіть рік:");

function isLeap(y) {
    return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
}

let daysInMonth;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        daysInMonth = 31;
        break;
    case 4: case 6: case 9: case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = isLeap(year2) ? 29 : 28;
        break;
    default:
        alert("Некоректний місяць");
        daysInMonth = 0;
}

if (day < 1 || day > daysInMonth || daysInMonth === 0) {
    alert("Некоректна дата");
} else {

    day++;

    if (day > daysInMonth) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year2++;
        }
    }

    alert(`Наступна дата: ${day}.${month}.${year2}`);
}
