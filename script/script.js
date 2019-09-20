const cube = document.querySelector("#target");
// cube.style.display = "none";
const sectionCube = document.querySelector("#gameRunning");
sectionCube.style.display = "none";

// Get value from the form
const players = document.querySelector("#startTheGame");
players.addEventListener("submit", start);

let counterTimeOut = 0;




// timeout is execute only one time, using setInterval for a recursive call

// 

const body = document.querySelector("body");

//console.log(body);



function touched(e) {
    const cube = document.querySelector("#target");
    cube.removeEventListener("click", touched);
    clearTimeout ( counterTimeOut );
    document.removeEventListener("keydown",moving);
    cube.style.backgroundColor = "red";
    alert("You win!");

};


function timerDuckGame() {
    cube.style.backgroundColor = "green";
    cube.removeEventListener("click", touched);
    document.removeEventListener("keydown",moving);
    alert ("victory of the player at the keyboard");
}

function start(e) {
    e.preventDefault();
    players.style.display = "none";
    // create the click event on cube
    cube.addEventListener("click", touched);
    body.style.cursor = "crosshair";
    counterTimeOut = setTimeout(timerDuckGame, 5000);
    sectionCube.style.display = "block";
    //cube.style.display = "block";
}