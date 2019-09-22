function stopMoving(event) {

    /* get the current value of top and left from posCubeUser */
    /* currently set to 0 for testing */
    /* TODO posCurUser will be set to another number when the player lost his 
    */
    if (posCubeUser != -1) {

        //   let topValue = +duckTarget.style.top.substring(0, duckTarget.style.top.length - 1);
        //        let leftValue = +duckTarget.style.left.substring(0, duckTarget.style.left.length - 1);

        //debugger;
        switch (event.code) {
            case "ArrowDown":
                duckTarget.style.movingDuck.flagDown = false;
                break;

            case "ArrowUp":
                duckTarget.style.movingDuck.flagUp = false;
                break;

            case "ArrowLeft":
                duckTarget.style.movingDuck.flagLeft = false;
                break;

            case "ArrowRight":
                duckTarget.style.movingDuck.flagRight = false;
                break;
        }
    }
    console.log("Stopping movement");
}


function startMoving(event) {

    /* get the current value of top and left from posCubeUser */
    /* currently set to 0 for testing */
    /* TODO posCurUser will be set to another number when the player lost his 
    */
    if (posCubeUser != -1) {

        //  let topValue = +duckTarget.style.top.substring(0, duckTarget.style.top.length - 1);
        // let leftValue = +duckTarget.style.left.substring(0, duckTarget.style.left.length - 1);

        // SPACE = kill the duck

        if (event.keyCode == 32) {
            $(".target").first().trigger("click");
        }

        switch (event.code) {
            case "ArrowDown":
                duckTarget.style.movingDuck.flagDown = true;
                break;

            case "ArrowUp":
                duckTarget.style.movingDuck.flagUp = true;
                break;

            case "ArrowLeft":
                duckTarget.style.movingDuck.flagLeft = true;
                break;

            case "ArrowRight":
                duckTarget.style.movingDuck.flagRight = true;
                break;
        }

    }


}

const movingStructure = {

    puissance: 0.8,
    coeufFriction: 0.5,

    flagUp: false,
    flagDown: false,
    flagLeft: false,
    flagRight: false,

    vitX: 0,
    vitY: 0,

    accX: 0,
    accY: 0,

    posX: 0,
    posY: 0
    // posX: +duckTarget.style.left.substring(0, duckTarget.style.left.length - 2),
    // posY: +duckTarget.style.top.substring(0, duckTarget.style.top.length - 2)

};
