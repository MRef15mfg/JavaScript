const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2018,
    avgSpeed: 80
};

function showCarInfo(car) {
    console.log("Інформація про автомобіль:");
    console.log("Виробник: " + car.manufacturer);
    console.log("Модель: " + car.model);
    console.log("Рік випуску: " + car.year);
    console.log("Середня швидкість: " + car.avgSpeed + " км/год");
}

function getTravelTime(car, distanceKm) {
    const pureTime = distanceKm / car.avgSpeed;
    const restCount = Math.floor(pureTime / 4);
    const totalTime = pureTime + restCount;
    return totalTime;
}

showCarInfo(car);
const distance = 820;
const time = getTravelTime(car, distance);
console.log("Час для подолання " + distance + " км: " + time.toFixed(2) + " год.");
