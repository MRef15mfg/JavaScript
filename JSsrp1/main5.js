 const num5 = prompt("Введіть п'ятизначне число:");

if (num5.length === 5 && !isNaN(num5)) {
    if (num5[0] === num5[4] && num5[1] === num5[3]) {
        alert("Це паліндром");
    } else {
        alert("Це не паліндром");
    }
} else {
    alert("Потрібно ввести саме п'ятизначне число");
}
