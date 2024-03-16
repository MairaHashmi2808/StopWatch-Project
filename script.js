//creating variables for the timer 

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displaytime"); 
let timer = null;

//this function keeps increasing the second by 1. once the second reaches 60 it turns into 0 and same thing happens with the minutes which turn to hours!

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0; 
        minutes++; 
        if(minutes == 60){
            minutes = 0; 
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

//this function alerts the stopwatch function to run by setting time interval meaning starting the stopwatch

function watchStart(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

//this function is for stopping the stopwatch, it just clears the time interval so no more second is counted

function watchStop(){
    clearInterval(timer);
}

//this function is resetting the stopwatch, it clears the time interval, sets the data of it to 0 each and displays the same

function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

//we have now completed the applicaion! made using help with tutorials for learning!