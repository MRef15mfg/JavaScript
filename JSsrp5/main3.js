function showCurrentDate() {
    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    const year = now.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    console.log(day + "." + month + "." + year);
}

function getAge(birthYear) {
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - birthYear;
}

function daysToNewYear() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const diffMs = newYear - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    console.log("До Нового року залишилось: " + diffDays + " днів");
}

showCurrentDate();
console.log("Ваш вік: " + getAge(2005));
daysToNewYear();
