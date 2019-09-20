//const movement = document.querySelector("#target");

document.addEventListener("keydown",moving);
let topValue=40;

function moving(event){


 console.log(event.code);
 if (event.code==="ArrowDown"){
    topValue +=5;     
 }
 if (topValue == 90){
     topValue = 0;
 
    }
console.log()
document.querySelector("#target").style.top = topValue + "%";

}