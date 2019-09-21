/* get all targets */
let targets = document.querySelectorAll(".target");

oneComputer = {
    type: "computer",
    posTop: Math.random()*500,
    posLeft: Math.random()*500,
    vitX : 0,
    vitY : 0,
    accX : 0,
    accY : 0,
    puissance : 0.3,
    coeufFriction : 0.80
}
/*var flagUp = false;
var flagDown = false;
var flagLeft = false;
var flagRight = false;
*/
// var flagSpace;

/*
setInterval(function(){
	//attribution des acceleration
	//console.log(flagDown);
	if(flagUp)
		accY = accY - puissance;
	if(flagDown)
		accY = accY + puissance;
	if(flagLeft)
		accX = accX - puissance;
	if(flagRight)
		accX = accX + puissance;

	//freinage
	accY = accY*0.95;
	accX = accX*0.95;
	
	//changement de la vitesse
	vitY = (vitY + accY)*coeufFriction;
	vitX = (vitX + accX)*coeufFriction;
	
	posY = posY + vitY;
	posX = posX + vitX;
	
	
	//bouclage
	if(posY>1000){
		posY = 0;
	}
	if(posY<0){
		posY = 1000;
	}
	if(posX>1000){
		posX = 0;
	}
	if(posX<0){
		posX = 1000;
	}
	
	//affectation
	$(".player").css({
				top: posY+"px", 
				left : posX+"px", 
		});
	
}, 1000/60)
*/

/*
$( document ).on( "keydown", function( event ) {
	//changement de l'accelération
  switch( event.keyCode) {
    case 40:
			flagDown = true
		break;
	}
	switch( event.keyCode) {
    case 38:
			flagUp = true
		break;
	}
	switch( event.keyCode) {
    case 39:
			flagRight = true
		break;
	}
	switch( event.keyCode) {
    case 37:
			flagLeft = true
		break;
	}
	switch( event.keyCode) {
    case 32:
				$(".player").stop().animate({
					height:"10px", 
					width : "10px"
				},100)
		break;
	}

});
*/
/*
$( document ).on( "keyup", function(){
	console.log(event.keyCode);
	 switch( event.keyCode) {
    case 40:
			flagDown = false
		break;
	}
	switch( event.keyCode) {
    case 38:
			flagUp = false
		break;
	}
	switch( event.keyCode) {
    case 39:
			flagRight = false
		break;
	}
	switch( event.keyCode) {
    case 37:
			flagLeft = false
		break;
	}
	switch( event.keyCode) {
    case 32:
			$(".player").stop().animate({
					height:"100px", 
					width : "100px"
				},100)
		break;
	}
})
}
*/

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
    for (const cube of targets) {
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
    for (const cube of targets) {
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
    targets = document.querySelectorAll(".target");
    body.addEventListener("click", playGunSound);


    for (const cube of targets) {
        cube.style.border = "5px solid transparent";

        cube.style.top = Math.floor(Math.random() * Math.floor(90)) + "%";
        cube.style.left = Math.floor(Math.random() * Math.floor(90)) + "%";
        console.log("Current position : " + cube.style.top + ":" + cube.style.left);
    }




    // create the click event on cube
    for (const cube of targets) {
        cube.style.backgroundColor = "transparent";
        cube.addEventListener("click", touched);
    }
    document.addEventListener("keydown", moving);
    body.style.cursor = "url('./images/cursor.cur'),crosshair";
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
    let myMusic = new sound("./sound/gun.mp3");
    myMusic.play();
}
function killedSound() {
    let myMusic = new sound("./sound/killedkenny.mp3");
    myMusic.play();
}
function imGoodSound() {
    let myMusic = new sound("./sound/imGood.mp3");
    myMusic.play();
}
