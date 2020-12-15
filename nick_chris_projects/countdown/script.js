function timeElapsed() {
    let targetDate = new Date ('December 25, 2020 00:00:00');
    let currentDate = new Date();
    const targetMilliseconds = Date.parse(targetDate);
    const currentMilliseconds = Date.parse(currentDate);
    const difference = targetMilliseconds - currentMilliseconds;
    return difference;
}

function timeConversion() {
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
}

