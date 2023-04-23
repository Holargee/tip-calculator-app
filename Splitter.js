setInterval(sli,500);
function sli(){
var bill = document.getElementById("bill").value;
var per = document.getElementById("per").value;
var people = document.getElementById("people").value;
var p5 = document.getElementById("p5").style;
if(p5.backgroundColor==="green"){alert("hi")}
 var ans = (bill * (per/100))/people;
document.getElementById("ans").innerHTML= people /*"$" +ans;*/
}
