let sec = 0;
let clr;

function clickStart() {
    startButton = document.getElementById("start");
    startButton.disabled = true;
    startButton.style.display = "none";

    stopButton = document.getElementById("stop");
    stopButton.disabled = false;
    stopButton.style.display = "";
    clr = setInterval(() => {
        ele = document.getElementById("clock");
        seconds = sec % 60;
        mins = Math.floor(sec / 60);
        hours = Math.floor(mins / 60);
        mins = mins % 60;
        let H, M, S;
        if (hours <= 9) {
            H = '0' + hours;
        }
        else {
            H = hours + '';
        }
        if (mins <= 9) {
            M = '0' + mins;
        }
        else {
            M = mins + '';
        }
        if (seconds <= 9) {
            S = '0' + seconds;
        }
        else {
            S = seconds + '';
        }
        sec++;
        ele.innerHTML = H + ':' + M + ':' + S;
    }, 1000);
}

function clickStop() {
    stopButton = document.getElementById("stop");
    stopButton.disabled = true;
    stopButton.style.display = "none";

    startButton = document.getElementById("start");
    startButton.disabled = false;
    startButton.style.display = "";

    clearInterval(clr);
    sec = 0;
    ele = document.getElementById("clock");
    ele.innerHTML = '00:00:00';
}