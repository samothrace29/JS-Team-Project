let cubes = document.querySelectorAll(".target");
let posCubeUser = 0;

const sectionCube = document.querySelector("#gameRunning");
sectionCube.style.display = "none";

const btnRestart = document.querySelector("#rstbt");
btnRestart.style.display = "none";

let endOfGame = false;
const delaiGame = 5000;
const playAlone = false;

for (let i = 0; i < 3; i++) {
    createComputer();
}
    





// Get value from the form
const players = document.querySelector("#startTheGame");
players.addEventListener("submit", start);

let counterTimeOut = 0;


const playerPlusScore = document.querySelectorAll("ul li");

console.log("all player ! " + document.querySelector("#playerDuck"));


const body = document.querySelector("body");

const players2 = document.querySelector("#formRestart");
players2.addEventListener("submit", start);

function clearAll() {
    clearTimeout(counterTimeOut);
  //  const listOfCube = document.querySelector(".target");
    for (const cube of cubes) {
        cube.removeEventListener("click", touched);
        
    }
    document.removeEventListener("keydown", moving);
    
}

function createComputer(){
   // debugger;
    const parentComputer =  document.querySelector("#gameRunning");
    const computer = document.querySelector(".target").cloneNode();
    parentComputer.append(computer);
    console.log("Create computer :")

}


function touched(e) {
    //const cube = e.querySelector("p");
    
    clearAll();
   // console.log("avant");
    //console.log(e);
    //console.log("après");
   // console.log(e.path[0]);
    
    // e.path[0].style.backgroundColor = "red";
    e.path[0].style.border = "5px solid red";
    victory(playerPlusScore[1].querySelector("h1").textContent);

};


function timerDuckGame() {
    for (const cube of cubes) {
        cube.style.border = "5px solid green";
        //cube.style.backgroundColor = "green";
        
    }
    clearAll();
    victory(playerPlusScore[0].querySelector("h1").textContent);
    //clearAll();
}

function start(e) {
    e.preventDefault();
    
    btnRestart.style.display = "none";
    players.style.display = "none";
    cubes = document.querySelectorAll(".target");
    
    
    for (const cube of cubes) {  
        cube.style.border = "5px solid transparent";
        
        cube.style.top = Math.floor(Math.random() * Math.floor(90)) + "%";
        cube.style.left = Math.floor(Math.random() * Math.floor(90)) + "%";
        console.log ("Current position : " + cube.style.top + ":" + cube.style.left);
    }

    
    

    // create the click event on cube
    for (const cube of cubes) {
        cube.style.backgroundColor = "transparent";
        cube.addEventListener("click", touched);
    }
    document.addEventListener("keydown", moving);
    body.style.cursor = "url('../images/cursor.cur'),crosshair";
    //body.style.cursor.
    counterTimeOut = setTimeout(timerDuckGame, delaiGame);
    sectionCube.style.display = "block";
    //cube.style.display = "block";

    // Changing the username in the game
    playerPlusScore[0].querySelector("h1").textContent = document.getElementById("playerDuck").value;
    playerPlusScore[1].querySelector("h1").textContent = document.getElementById("playerGun").value;


   // console.log("test : " + playerPlusScore[1].querySelector("h1").textContent + " ;");
    //console.log("test : " + playerPlusScore[0].querySelector("h1").textContent + " ;");
    if (playerPlusScore[0].querySelector("h1").textContent.length == 0) {
       // alert("alone version");
    }

    const sectionScore = document.querySelector("#sectionScore");
    sectionScore.style.display = "block";

}

function victory(whoWin) {

    for (const listUsers of playerPlusScore) {
        if (listUsers.querySelector("h1").textContent == whoWin) {
            //debugger;
            let curPlayerCounter = +listUsers.querySelector("p").textContent;
            //alert ("player : " + whoWin + " win");
            curPlayerCounter = curPlayerCounter + 1;
            listUsers.querySelector("p").textContent = curPlayerCounter;
            if (curPlayerCounter == 5) {
                alert("END OF GAME : " + whoWin + " is the winner");
                let endOfGame = true;
            }
            else{
                restart();

            }
        }
    }
    body.style.cursor = "auto";
}
function restart() {
    btnRestart.style.display = "initial";
    // e.preventDefault();
    const restartbtn = document.querySelector("#formRestart");
    restartbtn.addEventListener("submit", start);
    
    //console.log(restartbtn)
}
