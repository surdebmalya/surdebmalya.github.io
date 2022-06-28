setInterval(() => {
    let date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    tarik = date.toLocaleDateString(undefined, options);
    hours = date.getHours();
    if (hours == '0' || hours == '1' || hours == '2' || hours == '3' || hours == '4' || hours == '5' || hours == '6' || hours == '7' || hours == '8' || hours == '9') {
        hours = '0' + hours;
    }
    mins = date.getMinutes();
    if (mins == '0' || mins == '1' || mins == '2' || mins == '3' || mins == '4' || mins == '5' || mins == '6' || mins == '7' || mins == '8' || mins == '9') {
        mins = '0' + mins;
    }
    seconds = date.getSeconds() + '';
    if (seconds == '0' || seconds == '1' || seconds == '2' || seconds == '3' || seconds == '4' || seconds == '5' || seconds == '6' || seconds == '7' || seconds == '8' || seconds == '9') {
        seconds = '0' + seconds;
    }
    time = hours + ' : ' + mins + ' : ' + seconds;
    document.getElementById('clock').innerHTML = time + '<br>' + tarik;
}, 1000);