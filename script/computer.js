let listOfComputerActif = new Array();

// this function will create a computer, and add it in the listOfComputerActif
function createComputer() {
    // select gameRunning section
    const parentComputer = document.querySelector("#gameRunning");

    // create the div section
    let oneComputer = document.createElement("div");

    // set the size of the div/computer
    oneComputer.style.width = "80px";
    oneComputer.style.height = "60px";
    oneComputer.style.position = "absolute";


    // position the computer to a random position
    oneComputer.style.numericTop = Math.floor(Math.random() * (600 - 80)); //"40%";
    oneComputer.style.top = oneComputer.style.numericTop + "px";

    oneComputer.style.numericLeft = Math.floor(Math.random() * (800 - 60));
    oneComputer.style.left = oneComputer.style.numericLeft + "px";


    // set picture and style of border 
    oneComputer.style.border = "5px solid transparent";
    oneComputer.style.backgroundImage = "url(./images/imageedit_1_7112313590.png)";
    oneComputer.style.backgroundSize = "cover";
    oneComputer.style.backgroundColor = "transparent";


    // create a className to this computer
    const uniqNumber = "computer_" + Math.floor(Math.random() * 1000000000);
    // oneComputer.className = "targetComputer " + oneComputer.uniqNumber;

    // initialise my new computer
    oneComputer.style.movingDuck = initialiseDuck(uniqNumber);

    oneComputer.style.movingDuck.posX = Math.floor(Math.random() * (800 - 60));
    oneComputer.style.movingDuck.posY = Math.floor(Math.random() * (600 - 80));
    console.log("Set posX position : " + oneComputer.style.movingDuck.posX);
    oneComputer.style.top = oneComputer.style.movingDuck.posY + "px";
    oneComputer.style.left = oneComputer.style.movingDuck.posX + "px";
    oneComputer.className = uniqNumber;


    // put a listener on each computer
    oneComputer.style.movingDuck.computerRunning = setInterval(movingTarget, 1000 / 60, oneComputer);




    let p = document.createElement("p");
    p.textContent = "Computer " + uniqNumber;
    p.style.display = "none";
    oneComputer.append(p);
    parentComputer.append(oneComputer);

    console.log(parentComputer);

    // const aComputer = document.querySelector(".targetComputer");

    listOfComputerActif.push(oneComputer);

    //oneComputer.eventClick = oneComputer; // keep in memory his parent to remove listener later;
    oneComputer.addEventListener("click", touched);

    console.log("computer Created : ");
    console.log(listOfComputerActif);
}

function startComputerMoving() {
    for (const computer of listOfComputerActif) {
        computer.actif = true;
        //computer.setInterval = setInterval(movingTarget, 1000, computer);
        console.log("Activity of computer : " + computer.actif);
    }
    console.log("Starting computer Moving : ");
}
function stopComputerMoving() {

    for (const computer of listOfComputerActif) {
        clearInterval(computer.style.movingDuck.computerRunning);
        computer.actif = true;
        computer.style.movingDuck.flagUp = false;
        computer.style.movingDuck.flagDown = false;
        computer.style.movingDuck.flagLeft = false;
        computer.style.movingDuck.flagRight = false;
        computer.style.movingDuck.vitX = 0;
        computer.style.movingDuck.vitY = 0;
        computer.style.movingDuck.accX = 0;
        computer.style.movingDuck.accY = 0;

        console.log("Activity of computer " + computer.style.movingDuck.name +  " : " + computer.actif);
    }
    console.log("Stopping computer Moving");

}

// TODO remove the computer and continue to play
function removeComputerKilled() {
    for (const computer of listOfComputerActif) {
        if (computer.actif) {
            console.log("remove this computer : " + computer.actif);
        }
    }

}

// destroy all computer
function removeAllComputer() {
    const parentComputer = document.querySelector("#gameRunning");

    debugger;
    for (const computer of listOfComputerActif) {
        console.log("removing computer : " + computer.style.movingDuck.name);
        let name  = computer.style.movingDuck.name;
        //name = name.substring( 1, name.length);
        removeComputer = parentComputer.querySelector(name );
        if (removeComputer){

            removeComputer.remove();
        }
        
    }
    
    while (listOfComputerActif.length>0) {
        listOfComputerActif.pop();
        //listOfComputerActif.shift(k);
    }
}

// function call to check if mouse is near a computer, and move this computer if mouse
// is at less than 50px from the duck
function computerMoving(event) {
    //   debugger;

    //console.log(event);
    const mouseX = event.layerX;
    const mouseY = event.layerY;
    let flagUp, flagDown, flagLeft, flagRight;

    for (const computer of listOfComputerActif) {
        console.log("Check  Computer : " + computer.style.movingDuck.name);
        if (computer.actif) {
            //  debugger;
            // console.log("Status : " + computer.actif);

            //computer.style.numericLeft += 5;
            //computer.style.left = computer.style.numericLeft + "px";
            //console.log("after : " + computer.style.left );

            const duckX = computer.style.movingDuck.posX;
            const duckY = computer.style.movingDuck.posY;
            let diffX = 0;
            let diffY = 0;

            if (mouseX < duckX) {
                diffX = duckX - mouseX;
                flagRight = true;
                flagLeft = false;
            } else {

                diffX = mouseX - (duckX + 80);
                //diffX = mouseX - (duckX+computer.style.width);
                flagRight = false;
                flagLeft = true;
            }

            if (mouseY < duckY) {

                diffY = duckY - mouseY;
                flagUp = false;
                flagDown = true;

            } else {
           //     console.log("debug : " + computer.style.height);
                diffY = mouseY - (duckY + 60);
                flagUp = true;
                flagDown = false;
            }
/*
            console.log("mouseX : " + mouseX);
            console.log("mouseY : " + mouseY);
            console.log("duckX : " + duckX);
            console.log("duckY : " + duckY);
            console.log("diffX : " + diffX);
            console.log("diffY : " + diffY);
  */          if ((diffX < 50) && (diffY < 50)) {
                console.log("Moving Computer : " + computer.style.movingDuck.name);
                computer.style.movingDuck.flagUp = flagUp;
                computer.style.movingDuck.flagDown = flagDown;
                computer.style.movingDuck.flagLeft = flagLeft;
                computer.style.movingDuck.flagRight = flagRight;

            } else {
                computer.style.movingDuck.flagUp = false;
                computer.style.movingDuck.flagDown = false;
                computer.style.movingDuck.flagLeft = false;
                computer.style.movingDuck.flagRight = false;
            }










        }
    }

}




// moving an element: playerDuck or uniqComputer
// depending of their flags set by different event
function movingTarget(targetToMove) {
    console.log( "Acceleration " + targetToMove.style.movingDuck.name +  " : "  + targetToMove.style.movingDuck.accY );
    if (targetToMove.style.movingDuck.flagUp)
        targetToMove.style.movingDuck.accY = targetToMove.style.movingDuck.accY - targetToMove.style.movingDuck.puissance;
    if (targetToMove.style.movingDuck.flagDown)
        targetToMove.style.movingDuck.accY = targetToMove.style.movingDuck.accY + targetToMove.style.movingDuck.puissance;
    if (targetToMove.style.movingDuck.flagLeft)
        targetToMove.style.movingDuck.accX = targetToMove.style.movingDuck.accX - targetToMove.style.movingDuck.puissance;
    if (targetToMove.style.movingDuck.flagRight)
        targetToMove.style.movingDuck.accX = targetToMove.style.movingDuck.accX + targetToMove.style.movingDuck.puissance;

        if ((targetToMove.style.movingDuck.accY==0) && (targetToMove.style.movingDuck.accX==0)) return;
    //freinage
    targetToMove.style.movingDuck.accY = targetToMove.style.movingDuck.accY * 0.95;
    targetToMove.style.movingDuck.accX = targetToMove.style.movingDuck.accX * 0.95;

    //changement de la vitesse
    targetToMove.style.movingDuck.vitY = (targetToMove.style.movingDuck.vitY + targetToMove.style.movingDuck.accY) * targetToMove.style.movingDuck.coeufFriction;
    targetToMove.style.movingDuck.vitX = (targetToMove.style.movingDuck.vitX + targetToMove.style.movingDuck.accX) * targetToMove.style.movingDuck.coeufFriction;

    targetToMove.style.movingDuck.posY = targetToMove.style.movingDuck.posY + targetToMove.style.movingDuck.vitY;
    targetToMove.style.movingDuck.posX = targetToMove.style.movingDuck.posX + targetToMove.style.movingDuck.vitX;


    //bouclage
    if (targetToMove.style.movingDuck.posY > 540) {
        targetToMove.style.movingDuck.posY = 0;
    }
    if (targetToMove.style.movingDuck.posY < 0) {
        targetToMove.style.movingDuck.posY = 540;
    }
    if (targetToMove.style.movingDuck.posX > 720) {
        targetToMove.style.movingDuck.posX = 0;
    }
    if (targetToMove.style.movingDuck.posX < 0) {
        targetToMove.style.movingDuck.posX = 720;
    }

    //console.log("Changing position of " + targetToMove.style.movingDuck.name + " to position : " +  targetToMove.style.movingDuck.posX + ":"  + targetToMove.style.movingDuck.posY)
    //affectation
    $(targetToMove.style.movingDuck.name).css({
        top: targetToMove.style.movingDuck.posY + "px",
        left: targetToMove.style.movingDuck.posX + "px",
    });



}