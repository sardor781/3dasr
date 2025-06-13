const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(() => {
    let time = new Date();
    hours.innerHTML = String(time.getHours()).padStart(2, '0');
    minutes.innerHTML = String(time.getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(time.getSeconds()).padStart(2, '0');
}, 1000);