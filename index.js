
let Enteredinput=document.querySelector("#username");

Enteredinput.addEventListener("keyup",function () {
 

let EnteredMessage=Enteredinput.value;

document.querySelector("#msg").innerHTML=EnteredMessage


})