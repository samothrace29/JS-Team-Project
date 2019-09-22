/* oneComputer {
       this.type= "computer";
       
       this.posTop= Math.random()*500;
       this.posLeft= Math.random()*500;
       this.vitX = 0;
       this.vitY = 0;
       this.accX = 0;
       this.accY = 0;
       this.puissance = 0.3;
       this.coeufFriction = 0.8;
   }
   
};*/


let listOfComputerActif = new Array();

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


// this function will create a computer, and add it in the listOfComputerActif
function createComputer() {
    //const parentComputer = document.querySelector("#gameRunning");
    //const computer = document.querySelector(".target").cloneNode();
    //parentComputer.append(computer);

    let oneComputer = new Array();
    oneComputer.type = "computer";
    oneComputer.posTop = Math.random() * 1000;
    oneComputer.posLeft = Math.random() * 1000;
    oneComputer.width = "40px";
    oneComputer.height = "40px";
    oneComputer.backgroundColor = "transparent";
    oneComputer.img =
        oneComputer.actif = true;
    oneComputer.setInterval = null;

    oneComputer.vitX = 0;
    oneComputer.vitY = 0;
    oneComputer.accX = 0;
    oneComputer.accY = 0;
    oneComputer.puissance = 0.3;
    oneComputer.coeufFriction = 0.8;


    const parentComputer = document.querySelector("#gameRunning");


    let div = document.createElement("div");

    div.style.width = "10%";
    div.style.height = "10%";

    //div.style.backgroundColor= "green";
    div.style.position = "absolute";
    div.style.top = "40%";
    div.style.left = "40%";

    //debugger;

    div.style.border = "5px solid transparent";
    div.style.backgroundImage = "url(./images/imageedit_1_7112313590.png)";
    div.style.backgroundSize = "cover";
    div.style.backgroundColor = "transparent";
    //div.style.zIndex= 1000;



    div.className = "targetComputer";
    let p = document.createElement("p");
    p.textContent = "Computer";
    p.style.display = "none";
    div.append(p);
    parentComputer.append(div);

    const aComputer = document.querySelector(".targetComputer");

    listOfComputerActif.push(oneComputer);
    div.addEventListener("click", touched);
    console.log("computer Created : ");
    console.log(listOfComputerActif);
}

function startComputerMoving() {
    for (const computer of listOfComputerActif) {
        computer.actif = true;
        computer.setInterval = setInterval(computerMoving, 1000);
        console.log("Activity of computer : " + computer.actif);
    }
    console.log("Starting computer Moving : ");
}
function stopComputerMoving() {

    for (const computer of listOfComputerActif) {
        computer.actif = true;
        clearInterval(computer.setInterval);
        console.log("Activity of computer : " + computer.actif);
    }
    console.log("Stopping computer Moving : ");

}
function removeComputerKilled() {
    for (const computer of listOfComputerActif) {
        if (computer.actif) {

            console.log("remove this computer : " + computer.actif);
        }
    }

}
function removeAllComputer() {
    const parentComputer = document.querySelector("#gameRunning");
    while (true) {
        const aComputer = parentComputer.querySelector(".targetComputer");

        // if we found a computer, remove it
        //debugger;
        if (aComputer) {
            aComputer.remove();
           // parentComputer.remove(aComputer);
            continue;
        }
        break;
    }

}


function computerMoving() {
    for (const computer of listOfComputerActif) {
        if (computer.actif) {
            console.log("Activity of computer : " + computer.actif);
        }
    }

}