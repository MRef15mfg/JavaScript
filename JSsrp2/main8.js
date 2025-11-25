function timeToSeconds(hours, minutes = 0, seconds = 0) {
    return hours * 3600 + minutes * 60 + seconds;
}


console.log(timeToSeconds(1, 30, 15));
