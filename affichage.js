var m;



function temps(minu, e){
    minu --
    let sec = 59;
    function timer(){
        m = setTimeout(timer, 1000);
        document.getElementById(e).innerHTML = `${minu} : ${sec}`;
        if (minu > 0 && sec > 0){
            
            sec --
            if (sec==0){
                minu --
                sec =59;
            }
        } else if (minu == 0 && sec> 0){
            sec --;
        } else {
            clearTimeout(m)
            document.getElementById(e).innerHTML = `00 : 00`;
        }
    }
    return timer()
}


var time;
document.querySelector("#btn1").addEventListener("click", () => {
    clearTimeout(m)
    time = 15;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#btn2").addEventListener("click", () => {
    clearTimeout(m)
    time = 20;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#btn3").addEventListener("click", () => {
    clearTimeout(m)
    time = 30;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#btn4").addEventListener("click", () => {
    clearTimeout(m)
    time = 20;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#btn5").addEventListener("click", () => {
    clearTimeout(m)
    time = 60;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#btn6").addEventListener("click", () => {
    clearTimeout(m)
    time = 30;
    temps(time, "timer")
    affichage(time)
})
document.querySelector("#button").addEventListener("click", () => {
    var entree = document.getElementById("entree").value
    clearTimeout(m)
    time = entree;
    temps(time, "timer")
    affichage(time)
})








time = new Date();
hours = time.getHours();
minutes = time.getMinutes();
function affichage(min){
    let sommeMinutes = min + minutes;
    let hoursRatio = Math.floor(sommeMinutes / 60);
    let sommeHours = hours + hoursRatio;
    let dayRatio = Math.floor(sommeHours / 24);
    if (hoursRatio > 0){
        if (sommeHours > 24){
            
            document.querySelector(".timer").innerHTML = `${sommeHours - 24} : ${sommeMinutes - (60 * hoursRatio)}`
        } else {
            document.querySelector(".timer").innerHTML = `${sommeHours} : ${sommeMinutes - (60 * hoursRatio)}`
        }
    } else {
        document.querySelector(".timer").innerHTML = `${sommeHours } : ${sommeMinutes}`
    }
}

