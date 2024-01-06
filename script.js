var timer = 50;
var score = 0;
var hitrn = 0;

/*jispe click karoge wo element par event raise hoga, aur
event listener naa milne par event element ka parent par 
listner dhundhega, waha bhi naa milne par event parent ke 
parent ke  parent par listener dhundega*/

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
var clutter = " ";

for(var i = 0; i<=150;i++){
 var rn = Math.floor(Math.random()*10)   
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){
     var timerint = setInterval(function(){
        if(timer>0){
           timer--;
           document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000)
}
document.querySelector("#pbtm").addEventListener("click", function(details){
var clickednum = Number(details.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
});

makeBubble();
runTimer();
getNewHit();
