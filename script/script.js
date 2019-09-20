const cube = document.querySelector("#target");
// cube.style.display = "none";
const sectionCube = document.querySelector("#gameRunning");
sectionCube.style.display = "none";

const btcRestart = document.query




// Get value from the form
const players = document.querySelector("#startTheGame");
players.addEventListener("submit", start);

let counterTimeOut = 0;


const playerPlusScore = document.querySelectorAll ("ul li");

console.log("all player ! " + document.querySelector ("#playerDuck"));
// console.log ( " Debugger " );
//debugger;






// timeout is execute only one time, using setInterval for a recursive call

// 

const body = document.querySelector("body");

//console.log(body);

function clearAll(){
    const cube = document.querySelector("#target");
    cube.removeEventListener("click", touched);
    document.removeEventListener("keydown",moving);
    clearTimeout ( counterTimeOut );

}

function touched(e) {
    const cube = document.querySelector("#target");
    //cube.removeEventListener("click", touched);
    //clearTimeout ( counterTimeOut );
    //document.removeEventListener("keydown",moving);
    clearAll();
    cube.style.backgroundColor = "red";
    alert("You win!");
    victory(playerPlusScore[1].querySelector("h1").textContent);
    
};


function timerDuckGame() {
    cube.style.backgroundColor = "green";
    alert ("victory of the player at the keyboard");
    clearAll();
    victory(playerPlusScore[0].querySelector("h1").textContent);
    //clearAll();
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
    
    // Changing the username in the game
    playerPlusScore[0].querySelector("h1").textContent=document.getElementById ("playerDuck").value;
    playerPlusScore[1].querySelector("h1").textContent=document.getElementById ("playerGun").value;
    
    
    console.log("test : " + playerPlusScore[1].querySelector("h1").textContent + " ;");
    console.log("test : " + playerPlusScore[0].querySelector("h1").textContent + " ;");
    if ( playerPlusScore[0].querySelector("h1").textContent.length == 0 ) {
        alert("alone version");
    }
    
    const sectionScore = document.querySelector("#sectionScore");
    sectionScore.style.display = "initial";
    
}

function victory(whoWin)
{
  
    for (const listUsers of playerPlusScore) {
        if ( listUsers.querySelector("h1").textContent == whoWin )
        {
            listUsers.querySelector("p").textContent =  +listUsers.querySelector("p").textContent + 1;
        }
    }
    
    
    
    
    body.style.cursor = "auto";
}