const waitTime = 5000;
const timeInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitTime;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%\n`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("done");
};

const interval = setInterval(incTime, waitTime);
setTimeout(timerFinished, waitTime);
