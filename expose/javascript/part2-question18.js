function timeEverySecond() {

    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    return timeEverySecond;
    
}

var interval = setInterval(timeEverySecond(), [1000]);