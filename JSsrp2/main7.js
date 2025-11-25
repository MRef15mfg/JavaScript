function formatTime(hours, minutes = 0, seconds = 0) {
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    return `${h}:${m}:${s}`;
}


console.log(formatTime(5, 7));
console.log(formatTime(12, 30, 45));
