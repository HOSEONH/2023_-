const clock = document.querySelector("#clock");

function getClock() {
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, "0");
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
}

setInterval(function(e){
    clock.innerHTML = getClock();
})