function counter1to10(callback) {
    let count = 1;
    const intervalId = setInterval(function() {
        console.log(count);
        if (count === 10) {
            clearInterval(intervalId);
            if (typeof callback === "function") {
                callback();
            }
        }
        count++;
    }, 1000);
}

function countdown10to0() {
    let count = 10;
    const intervalId = setInterval(function() {
        console.log(count);
        if (count === 0) {
            console.log("Старт!");
            clearInterval(intervalId);
        }
        count--;
    }, 1000);
}

counter1to10(countdown10to0);
