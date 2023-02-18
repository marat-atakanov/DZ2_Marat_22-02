const seconds = document.querySelector("#seconds");
const timeOut = document.querySelector("#timeOut");
let count = 0;

const interval = setInterval(() => {
    count++;
    seconds.innerHTML = `${count}`;
}, 1000)

setTimeout(() => {
    clearInterval(interval);
    timeOut.innerHTML = 'Time out!'
}, 60000);
