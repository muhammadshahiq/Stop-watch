var min = 0;
var sec = 0;
var msec = 0;
var hour=0;

var minheading =document.getElementById("min");
var secheading =document.getElementById("sec");
var msecheading =document.getElementById("msec");
var hourheading =document.getElementById("hour");
var interval;
function timer(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec >=100){
        sec++;
        secheading.innerHTML=sec;
        msec=0;
    }
    else if(sec >=60){
        min++;
        minheading.innerHTML=min;
        sec=0;
    }
    else if(min >=60){
        hour++;
        hourheading.innerHTML=hour;
        min=0;

    }

}
function start(){
    interval= setInterval(timer,10);
    dis.disabled=true
}

function pause(){
    clearInterval(interval);
    dis.disabled=false
}

function reset(){
    min=0;
    sec=0;
    msec=0;
    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    msecheading.innerHTML=msec;
}