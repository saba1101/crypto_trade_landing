function countdown(){

    let daysInner = $("#days_count");
    let hoursInner = $("#hours_count");
    let minutesInner = $("#minutes_count");
    let secondsInner = $("#seconds_count")

    let now = new Date();
    let customDate = new Date(now.getFullYear(), 11, 31);
    
    let currentTime = now.getTime();
    let customTime = customDate.getTime();

    let result = customTime - currentTime;
    
    let s = Math.floor(result / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);
    
        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? '0' + m : m;
        s = (s < 10) ? '0' + s : s;


        daysInner.text(`${d} D`)
        hoursInner.text(`${h} H`)
        minutesInner.text(`${m} M`)
        secondsInner.text(`${s} S`)


        setInterval(() => {
            countdown()
        }, 1000);
    }
$(document).ready(() => {
    countdown()
})