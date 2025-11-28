const timeObj = {
    hours: 20,
    minutes: 30,
    seconds: 45
};

function normalizeTime(t) {
    let totalSeconds = t.hours * 3600 + t.minutes * 60 + t.seconds;
    const SECONDS_PER_DAY = 24 * 3600;
    totalSeconds = ((totalSeconds % SECONDS_PER_DAY) + SECONDS_PER_DAY) % SECONDS_PER_DAY;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours: hours, minutes: minutes, seconds: seconds };
}

function showTime(t) {
    const normalized = normalizeTime(t);
    const h = String(normalized.hours).padStart(2, "0");
    const m = String(normalized.minutes).padStart(2, "0");
    const s = String(normalized.seconds).padStart(2, "0");
    console.log(h + ":" + m + ":" + s);
}

function changeBySeconds(t, secondsDelta) {
    t.seconds += secondsDelta;
    const normalized = normalizeTime(t);
    t.hours = normalized.hours;
    t.minutes = normalized.minutes;
    t.seconds = normalized.seconds;
}

function changeByMinutes(t, minutesDelta) {
    t.minutes += minutesDelta;
    const normalized = normalizeTime(t);
    t.hours = normalized.hours;
    t.minutes = normalized.minutes;
    t.seconds = normalized.seconds;
}

function changeByHours(t, hoursDelta) {
    t.hours += hoursDelta;
    const normalized = normalizeTime(t);
    t.hours = normalized.hours;
    t.minutes = normalized.minutes;
    t.seconds = normalized.seconds;
}

console.log("Початковий час:");
showTime(timeObj);

console.log("Додаємо 30 секунд:");
changeBySeconds(timeObj, 30);
showTime(timeObj);

console.log("Додаємо 40 хвилин:");
changeByMinutes(timeObj, 40);
showTime(timeObj);

console.log("Додаємо 5 годин:");
changeByHours(timeObj, 5);
showTime(timeObj);
