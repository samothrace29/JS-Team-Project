//const movement = document.querySelector("#target");

document.addEventListener("keydown",moving);
let topValue=40;

function moving(event){


 console.log(event);
 if (event.code==="ArrowDown"){
    topValue +=5;     
 }
 if (topValue == 90){
     topvalue = 0;
 }
document.querySelector("#target").stlye.top=topValue+"%";

}