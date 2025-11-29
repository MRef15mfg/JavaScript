function showMessageAfter3Seconds() {
    setTimeout(function() {
        console.log("Повідомлення через 3 секунди");
    }, 3000);
}

function greetUserAfter2Seconds(name) {
    setTimeout(function() {
        console.log("Привіт, " + name + "!");
    }, 2000);
}

showMessageAfter3Seconds();
greetUserAfter2Seconds("Іван");