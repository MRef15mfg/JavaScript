function formatTime(hours, minutes = 0, seconds = 0) {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function secondsToTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return formatTime(hours, minutes, seconds);
}

console.log(secondsToTime(20));
