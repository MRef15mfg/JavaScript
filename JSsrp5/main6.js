function digitalClock() {
    function showTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        console.log("Час: " + hours + ":" + minutes + ":" + seconds);
    }
    showTime();
    setInterval(showTime, 1000);
}

digitalClock();

function blinkText(elementId) {
    let isColor1 = true;
    setInterval(function() {
        const element = document.getElementById(elementId);
        if (!element) {
            return;
        }
        if (isColor1) {
            element.style.color = "red";
        } else {
            element.style.color = "blue";
        }
        isColor1 = !isColor1;
    }, 500);
}
