const waitTime = 3000;
let currentTime = 0;
const waitInterval = 500;
const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(`percentage ${p}%`);
}
const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('Done.')
}
console.log(`setting ${waitTime/1000} sec delay.`); // this line will Exc first
const interval = setInterval(incTime, waitInterval);// this one next 
setTimeout(timerFinished, waitTime);// this one last
