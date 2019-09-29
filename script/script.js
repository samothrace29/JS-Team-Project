/* get all targets */

let duckTarget = document.querySelector(".target");
let duckRunning = null;
let movingDuck = new Array();
let currentTimer = 30;
let timerInterval = null;
let scoreLeft = 0;
let scoreTimer = 1;
let scoreMunition = 2 ;
let scoreRight = 3;
let maxMunition = 6;
let curMunition = 0;

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
const delaiGame = 30000;

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
    if (timerInterval)
        clearInterval(timerInterval);
    // clear timeout duck win
    clearTimeout(counterTimeOut);
    document.querySelector("#gameRunning").onmousemove = null;

    // remove click event on duck =
    if (duckTarget) {
        duckTarget.removeEventListener("click", touched);
    }

    // remove click event on all
    for (const computer of listOfComputerActif) {
        computer.removeEventListener("click", touched);
        // computer.("click".touched);
    }


    stopComputerMoving();



    if (!playAlone) {
        // remove event Keyboard when 2 players
        document.removeEventListener("keydown", startMoving);
        document.removeEventListener("keyup", stopMoving);

        // clearing the interval
        if (duckRunning)
            clearInterval(duckRunning);

        movingDuck.flagUp = false;
        movingDuck.flagDown = false;
        movingDuck.flagLeft = false;
        movingDuck.flagRight = false;
        movingDuck.vitX = 0;
        movingDuck.vitY = 0;
        movingDuck.accX = 0;
        movingDuck.accY = 0;


    }
    body.removeEventListener("click", playGunSound);



}




/* function call when user with mouse touch the target */
function touched(e) {
    clearAllEvents();
    e.path[0].style.border = "5px solid red";
    e.path[0].style.borderRadius = "50%";
    victory(playerPlusScore[scoreRight].querySelector("h1").textContent);
    killedSound();

};

/* timeout of target , using the variable delaiGame */
function timerDuckGame() {
    // set green to user duck
    if (duckTarget) {

        duckTarget.style.border = "5px solid green";
        duckTarget.style.borderRadius = "50%";
    }
    for (const computer of listOfComputerActif) {
        computer.style.border = "5px solid green";
        computer.style.borderRadius = "50%";
    }

    // TODO : set green to computer 
    imGoodSound();
    clearAllEvents();
    victory(playerPlusScore[scoreLeft].querySelector("h1").textContent);
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
        playerPlusScore[scoreLeft].querySelector("h1").textContent = "COMPUTER";
        posCubeUser = -1;

        // removing the user to put a computer, as no imput
        duckTarget = document.querySelector(".target");
        if (duckTarget) {
            duckTarget.remove();

        }
        createComputer();
    } else {

        playerPlusScore[scoreLeft].querySelector("h1").textContent = document.getElementById("playerDuck").value;

        // get the duckTarget
        duckTarget = document.querySelector(".target");


        duckTarget.style.border = "5px solid transparent";

        duckTarget.style.movingDuck = initialiseDuck("target");

        duckTarget.style.movingDuck.posX = Math.floor(Math.random() * (800 - 60));;
        duckTarget.style.movingDuck.posY = Math.floor(Math.random() * (600 - 80));;
        duckTarget.style.top = duckTarget.style.movingDuck.posY + "px";
        duckTarget.style.left = duckTarget.style.movingDuck.posX + "px";

        let p = duckTarget.querySelector("p");
        let i = document.querySelector(".score li h1");
      //  alert(i.textContent)
        //p.textContent = "toto";
        p.style.fontSize="10px";
        p.style.position = "absolute";
        p.style.left="0";
        p.style.top="50%";
        p.style.display="block";
        p.textContent = i.textContent;

        duckTarget.style.position ="relative";
        duckTarget.append(p);


        console.log("Current position : " + duckTarget.style.top + ":" + duckTarget.style.left);

        duckTarget.style.backgroundColor = "transparent";

        duckTarget.addEventListener("click", touched);
        document.addEventListener("keydown", startMoving);
        document.addEventListener("keyup", stopMoving);

        //document.setInterval()

        duckRunning = setInterval(movingTarget, 1000 / 60, duckTarget);

    }
    createComputer();
    createComputer();
    createComputer();
    createComputer();
    createComputer();
    //createComputer();

    // set the username on screen
    playerPlusScore[scoreRight].querySelector("h1").textContent = document.getElementById("playerGun").value;


    // set the time on
    currentTimer = 30;
    playerPlusScore[scoreTimer].querySelector("h1").textContent = "Timer";
    playerPlusScore[scoreTimer].querySelector("p").textContent = currentTimer;
    timerInterval = setInterval(timer, 1000);

    // set munition on and his number of
    // maxMunition = 6;
    curMunition = maxMunition;
    playerPlusScore[scoreMunition].querySelector("p").textContent = curMunition + " / " + maxMunition;


    document.querySelector("#gameRunning").onmousemove = computerMoving;

    body.addEventListener("click", playGunSound);



debugger;
    body.style.cursor = "url(./images/cursor.cur),crosshair";

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
                removeAllComputer();
                duckTarget = document.querySelector(".target");
                if (duckTarget) {
                    duckTarget.remove();
                }


                copyright();

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


// initialise an object duck and return the default value, with the name
// as parameter, to distinguest all computer and player
function initialiseDuck(className) {
    let newDuck = new Array();

    newDuck.puissance = 0.3;
    newDuck.coeufFriction = 0.5;

    newDuck.flagUp = false;
    newDuck.flagDown = false;
    newDuck.flagLeft = false;
    newDuck.flagRight = false;

    newDuck.vitX = 0;
    newDuck.vitY = 0;

    newDuck.accX = 0;
    newDuck.accY = 0;
    newDuck.posX = 0;
    newDuck.posY = 0;
    newDuck.name = "." + className;

    return newDuck;
}


function copyright() {
    const copyr = document.querySelector("#copyright");

    copyr.style.display = "flex";
    copyr.style.justifyContent = "center";
    copyr.style.alignItems = "center";
    copyr.style.flexDirection = "column";
    copyr.style.color = "white";


    const articles = copyr.querySelectorAll("article");
    for (const article of articles) {
        article.style.margin = "auto";
        article.style.padding = "15px";

        const h2s = article.querySelectorAll("h2")
        for (const h2 of h2s) {
            h2.style.padding = "10px";
            h2.style.textAlign = "center";
            h2.style.textDecoration = "underline";
            //h2.style.textTransform = "underline";
            h2.style.fontSize = "25px";


        }
        const h3s = article.querySelectorAll("h3")
        for (const h3 of h3s) {
            h3.style.padding = "5px";
            h3.style.fontSize = "20px";
            h3.style.textAlign = "center";
            //    h3.style.textDecoration = "underline";

        }
    }
    //copyr.z-index = 1001;
    //copyr.style.z = 1001;


}

function timer() {
    currentTimer -= 1;
    playerPlusScore[scoreTimer].querySelector("p").textContent = currentTimer;
}