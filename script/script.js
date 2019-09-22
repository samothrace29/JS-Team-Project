/* get all targets */
let duckTarget = document.querySelector(".target");

// current position of the user in the list of target
// TODO : if not set ( < 0 ) , run computer alone
let posCubeUser = 0;

// when the program start ( when players enter their name )
// reset display to none the 2 other sections
const sectionCube = document.querySelector("#gameRunning");
sectionCube.style.display = "none";

const btnRestart = document.querySelector("#rstbt");
btnRestart.style.display = "none";



// flag to test if it's the end of the game => score = 5
let endOfGame = false;

// number of second set for playing one part of the game , for test 5s ( 5000 ) else 30000
const delaiGame = 5000;

// TODO : target will move automatically when set to true;
const playAlone = false;

// Get value from the form ( input username screen )
const playersInput = document.querySelector("#startTheGame");

// set the event on the submit form, run start when you submit your username
playersInput.addEventListener("submit", start);


// variable assigned by setTimeout and used for clearTimeout
let counterTimeOut = 0;


// player and his score ( h2 : player + p : score )
const playerPlusScore = document.querySelectorAll("ul li");

//console.log("all player ! " + document.querySelector("#playerDuck"));


// variable used to access directly the body and avoid a lot of call later for cursor ...
const body = document.querySelector("body");

const formRestart = document.querySelector("#formRestart");
formRestart.addEventListener("submit", start);


// remove all event
function clearAllEvents() {
    clearTimeout(counterTimeOut);

    duckTarget.removeEventListener("click", touched);

    if (!playAlone) {
        document.removeEventListener("keydown", moving);
    }
    body.removeEventListener("click", playGunSound);

}




/* function call when user with mouse touch the target */
function touched(e) {
    clearAllEvents();
    e.path[0].style.border = "5px solid red";
    victory(playerPlusScore[1].querySelector("h1").textContent);
    killedSound();

};

/* timeout of target , using the variable delaiGame */
function timerDuckGame() {
    // set green to user duck
    duckTarget.style.border = "5px solid green";

    // TODO : set green to computer 
    imGoodSound();
    clearAllEvents();
    victory(playerPlusScore[0].querySelector("h1").textContent);
}

function start(e) {
    e.preventDefault();

    // removing all previous computer
    removeAllComputer();

    
    
    btnRestart.style.display = "none";
    playersInput.style.display = "none";
    
    // Changing the username in the game
    // Adding also the necessary computer in the game
    if (document.getElementById("playerDuck").value.length == 0) {
        playerPlusScore[0].querySelector("h1").textContent = "COMPUTER";
        posCubeUser = -1;
        
        // removing the user to put a computer, as no imput
        duckTarget = document.querySelector(".target");
        if(duckTarget) {
            duckTarget.remove();

        }
        createComputer ();
    } else {
        
        playerPlusScore[0].querySelector("h1").textContent = document.getElementById("playerDuck").value;
        
        // get the duckTarget
        duckTarget = document.querySelector(".target");

        duckTarget.style.border = "5px solid transparent";
        
        duckTarget.style.top = Math.floor(Math.random() * Math.floor(90)) + "%";
        duckTarget.style.left = Math.floor(Math.random() * Math.floor(90)) + "%";
        console.log("Current position : " + duckTarget.style.top + ":" + duckTarget.style.left);
        
        duckTarget.style.backgroundColor = "transparent";
        duckTarget.addEventListener("click", touched);
        
        document.addEventListener("keydown", moving);
    }
    playerPlusScore[1].querySelector("h1").textContent = document.getElementById("playerGun").value;
    
    
    // create all computer
  //  for (let i = 0; i < 3; i++) {
   //     createComputer();
   // }
    
    // create sound on click event on body => gun sound
    body.addEventListener("click", playGunSound);
    
    
    
    
    body.style.cursor = "url('./images/cursor.cur'),crosshair";
    //body.style.cursor.
    counterTimeOut = setTimeout(timerDuckGame, delaiGame);
    sectionCube.style.display = "block";
    //cube.style.display = "block";



    const sectionScore = document.querySelector("#sectionScore");
    sectionScore.style.display = "block";

    startComputerMoving();
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
            else {
                restart();

            }
        }
    }
    body.style.cursor = "auto";
}
function restart() {
    // show the button restart
    btnRestart.style.display = "initial";

    // e.preventDefault();
    const restartbtn = document.querySelector("#formRestart");

    // add an event on the button restart
    restartbtn.addEventListener("submit", start);
}



