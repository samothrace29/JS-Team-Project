
//const cube = document.querySelector("#target");
//document.addEventListener("keydown",moving);
//let topValue=40;
//let leftValue=40;
function moving(event){
  // s.substring(0, s.length() - 1)
topValue = +cubes[posCubeUser].style.top.substring (0,cubes[0].style.top.length -1);
leftValue = +cubes[posCubeUser].style.left.substring (0,cubes[0].style.left.length -1);

 console.log(event.code);
 if (event.code==="ArrowDown"){
    topValue +=5;     
 }
 if (topValue > 90){
     topValue = 0 ;
 
    }
if (event.code==="ArrowLeft"){
    leftValue -=5 ;

}
if(leftValue < 0){
    leftValue = 90;

}
 if (event.code==="ArrowUp"){
    topValue -=5; 
     
 }
 if (topValue < 0){
     topValue = 90 ;   
 
    }
if (event.code==="ArrowRight"){
    leftValue +=5 ;

}
if(leftValue > 90){
    leftValue =0;

}

console.log(topValue,leftValue);
console.log( document );
cubes[posCubeUser].style.top = topValue + "%";
cubes[posCubeUser].style.left = leftValue + "%";
 //document.querySelector(".target").style.top = topValue + "%";
//document.querySelector(".target").style.left = leftValue + "%";


}