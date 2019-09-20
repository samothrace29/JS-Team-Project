
// Create the click event on cube
const cube = document.querySelector("#target");
cube.style.display = "none";

// Get value from the form
const players = document.querySelector("#startTheGame");
players.addEventListener("submit", start);




// timeout is execute only one time, using setInterval for a recursive call

// 

const body = document.querySelector("body");

//console.log(body);



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

function start(e) {
    e.preventDefault();
    players.style.display = "none";
    // create the click event on cube
    cube.addEventListener("click", touched);
    body.style.cursor = "crosshair";
    setTimeout(timerDuckGame, 5000);
    cube.style.display = "block";
}