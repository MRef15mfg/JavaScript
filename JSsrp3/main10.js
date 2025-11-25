function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

function getNextDay(day, month, year) {
    let daysInMonth;

    switch (month) {
        case 1: case 3: case 5: case 7:
        case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = isLeapYear(year) ? 29 : 28;
            break;
        default:
            return 'Невірний місяць';
    }

    day++;

    if (day > daysInMonth) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }

    const dd = day.toString().padStart(2, '0');
    const mm = month.toString().padStart(2, '0');
    const yyyy = year.toString();

    return `${dd}.${mm}.${yyyy}`;
}

console.log(getNextDay(28, 2, 2023));
console.log(getNextDay(31, 12, 2024));
