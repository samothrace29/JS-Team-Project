/* get all targets */
let cubes = document.querySelectorAll(".target");

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


// creating 3 other target
for (let i = 0; i < 3; i++) {
    createComputer();
}






// Get value from the form ( input username screen )
const players = document.querySelector("#startTheGame");

// set the event on the submit form, run start when you submit your username
players.addEventListener("submit", start);


// variable assigned by setTimeout and used for clearTimeout
let counterTimeOut = 0;


// player and his score ( h2 : player + p : score )
const playerPlusScore = document.querySelectorAll("ul li");

//console.log("all player ! " + document.querySelector("#playerDuck"));


// variable used to access directly the body and avoid a lot of call later for cursor ...
const body = document.querySelector("body");









const formRestart = document.querySelector("#formRestart");
formRestart.addEventListener("submit", start);

function clearAll() {
    clearTimeout(counterTimeOut);
    //  const listOfCube = document.querySelector(".target");
    for (const cube of cubes) {
        cube.removeEventListener("click", touched);

    }
    document.removeEventListener("keydown", moving);
    body.removeEventListener("click", playGunSound);

}

function createComputer() {
    // debugger;
    const parentComputer = document.querySelector("#gameRunning");
    const computer = document.querySelector(".target").cloneNode();
    parentComputer.append(computer);
    console.log("Create computer :")

}


/* function call when user with mouse touch the target */
function touched(e) {
    clearAll();
    e.path[0].style.border = "5px solid red";
    victory(playerPlusScore[1].querySelector("h1").textContent);
    killedSound();

};

/* timeout of target , using the variable delaiGame */
function timerDuckGame() {
    for (const cube of cubes) {
        cube.style.border = "5px solid green";
        //cube.style.backgroundColor = "green";

    }
    imGoodSound();
    clearAll();
    victory(playerPlusScore[0].querySelector("h1").textContent);
    //clearAll();
}

function start(e) {
    e.preventDefault();

    btnRestart.style.display = "none";
    players.style.display = "none";
    cubes = document.querySelectorAll(".target");
    body.addEventListener("click", playGunSound);


    for (const cube of cubes) {
        cube.style.border = "5px solid transparent";

        cube.style.top = Math.floor(Math.random() * Math.floor(90)) + "%";
        cube.style.left = Math.floor(Math.random() * Math.floor(90)) + "%";
        console.log("Current position : " + cube.style.top + ":" + cube.style.left);
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
            else {
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



/* sound Effect */
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}


function playGunSound() {
    let myMusic = new sound("../sound/gun.mp3");
    myMusic.play();
}
function killedSound() {
    let myMusic = new sound("../sound/killedkenny.mp3");
    myMusic.play();
}
function imGoodSound() {
    let myMusic = new sound("../sound/imGood.mp3");
    myMusic.play();
}
