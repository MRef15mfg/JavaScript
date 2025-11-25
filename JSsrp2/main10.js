function timeToSeconds(hours, minutes = 0, seconds = 0) {
    return hours * 3600 + minutes * 60 + seconds;
}

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

function differenceBetweenDates(h1, m1, s1, h2, m2, s2) {
    let t1 = timeToSeconds(h1, m1, s1);
    let t2 = timeToSeconds(h2, m2, s2);
    let diff = Math.abs(t1 - t2);
    return secondsToTime(diff);
}

console.log(differenceBetweenDates(12, 0, 0, 14, 30, 15)); 
