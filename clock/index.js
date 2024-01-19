let second = 0;
let minute = 0;
let hour = 0;
let date = new Date();
let day = date.getHours() > 12 ? 'PM' : 'AM';
console.log(day)

setInterval(
    function() {
        date = new Date();
        second = date.getSeconds() * 6;
        minute = date.getMinutes() * 6;
        hour = date.getHours() * 30 + Math.round(minute / 12);
        document.getElementById('second-hand').style.transform = "rotate(" + second + "deg)";
        document.getElementById('minute-hand').style.transform = "rotate(" + minute + "deg)";
        document.getElementById('hour-hand').style.transform = "rotate(" + hour + "deg)";
        document.getElementById('day').textContent = day;
    }, 1000
);
