function countdownToDate(targetDate) {
    function update() {
        const now = new Date();
        const diffMs = targetDate - now;
        if (diffMs <= 0) {
            console.log("Час вийшов!");
            clearInterval(intervalId);
            return;
        }
        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
        console.log("Залишилось: " + days + " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд");
    }
    update();
    const intervalId = setInterval(update, 1000);
}

const target = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);
countdownToDate(target);


