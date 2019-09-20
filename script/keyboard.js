function moving(event){

/* get the current value of top and left from posCubeUser */
/* currently set to 0 for testing */
/* TODO posCurUser will be set to another number when the player lost his 
*/
topValue = +cubes[posCubeUser].style.top.substring (0,cubes[posCubeUser].style.top.length -1);
leftValue = +cubes[posCubeUser].style.left.substring (0,cubes[posCubeUser].style.left.length -1);

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