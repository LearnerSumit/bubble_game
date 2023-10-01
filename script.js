var time=60;
var score=0;




function increaseScore(){
    score += 10;
    document.querySelector("#ScoreVal").innerHTML = score;
}

function getNewhit(){
    var hrn=Math.floor(Math.random()*10);
    document.querySelector("#hitBox").innerHTML=hrn;
}

function makebubble(){
    var cluster = "";
for(var i = 0; i<=132; i++){
    var rn = Math.floor(Math.random() * 10);
    cluster +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML = cluster;
}
function RunTimer(){
    var timerint=setInterval(function(){
        if(time>0){
        time--;
        document.querySelector("#timerValue").innerHTML = time;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
document.querySelector("#pbottom").addEventListener("click",function(details){
 var clickednub=Number(details.target.textContent);
 if (clickednub==Number(document.querySelector("#hitBox").textContent)){
     increaseScore();
     getNewhit();
     makebubble();
 }
});

makebubble();
RunTimer();
getNewhit();