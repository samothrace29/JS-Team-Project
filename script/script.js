
// Create the click event on cube
const cube = document.querySelector("#target");
cube.addEventListener("click", touched);

// timeout is execute only one time, using setInterval for a recursive call
setTimeout(timerDuckGame, 5000);

// 

const body = document.querySelector("body");

console.log(body);
body.style.cursor = "crosshair";



function touched(e) {
    alert("You win!");
    const cube = document.querySelector("#target");
    cube.removeEventListener("click", touched);
    
    cube.style.backgroundColor = "red";
};


function timerDuckGame() {
    cube.style.backgroundColor = "yellow";
    cube.removeEventListener("click", touched);
    alert ("victory of the player at the keyboard");
}