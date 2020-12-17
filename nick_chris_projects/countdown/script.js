
function timeElapsed() {
    let targetDate = new Date ('December 25, 2020 00:00:00');
    let currentDate = new Date();
    const targetMilliseconds = Date.parse(targetDate);
    const currentMilliseconds = Date.parse(currentDate);
    const difference = targetMilliseconds - currentMilliseconds;
    return difference;
}

function timeConversion() {
    const days = Math.floor(timeElapsed() / (86400 * 1000));
    const hours = Math.floor(timeElapsed() / 3600000);
    const remainderHours = timeElapsed() % 3600000;
    const minutes = Math.floor(remainderHours / 60000);
    const remainderMinutes = remainderHours % 60000;
    const seconds = Math.floor(remainderMinutes / 1000); 
    console.log(hours);
    console.log(remainderHours);
    console.log(minutes);
    console.log(remainderMinutes);
    console.log(seconds);

    return {
        days,
        hours,
        minutes,
        seconds
    }
}

function updateTime() {
const daysElement = document.querySelector(".days.display");
const hoursElement = document.querySelector(".hours.display");
const minutesElement = document.querySelector(".minutes.display");
const secondsElement = document.querySelector(".seconds.display");

timeElapsed();
const convertedTime = timeConversion();
}

updateTime();

