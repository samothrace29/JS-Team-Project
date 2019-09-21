function moving(event) {

    /* get the current value of top and left from posCubeUser */
    /* currently set to 0 for testing */
    /* TODO posCurUser will be set to another number when the player lost his 
    */
    if (posCubeUser != -1) {

        let topValue = +duckTarget.style.top.substring(0, duckTarget.style.top.length - 1);
        let leftValue = +duckTarget.style.left.substring(0, duckTarget.style.left.length - 1);

        console.log(event.code);
        //debugger;
        console.log("code : ", event.code, event.key, event.keyCode);
        if (event.keyCode == 32) {
            $(".target").first().trigger("click");
        }
        if (event.code === "ArrowDown") {
            // $( ".target" ).first().trigger("click");
            topValue += 5;
        }
        if (topValue > 90) {
            topValue = 0;

        }
        if (event.code === "ArrowLeft") {
            leftValue -= 5;

        }
        if (leftValue < 0) {
            leftValue = 90;

        }
        if (event.code === "ArrowUp") {
            topValue -= 5;

        }
        if (topValue < 0) {
            topValue = 90;

        }
        if (event.code === "ArrowRight") {
            leftValue += 5;

        }
        if (leftValue > 90) {
            leftValue = 0;
        }

        
        console.log(topValue, leftValue);
        console.log(document);
        duckTarget.style.top = topValue + "%";
        duckTarget.style.left = leftValue + "%";
        //document.querySelector(".target").style.top = topValue + "%";
        //document.querySelector(".target").style.left = leftValue + "%";
    }

    else {
        console.log( " Computer Onle !!! ");
    }


}