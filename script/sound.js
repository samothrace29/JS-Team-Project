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
    curMunition--;
    if ( ( curMunition == 0 )) {
        body.removeEventListener("click", playGunSound);
        timerDuckGame();
    }
    playerPlusScore[scoreMunition].querySelector("p").textContent = curMunition + " / " + maxMunition;
    myMusic.play();
}
function killedSound() {
    let myMusic = new sound("./sound/gun.mp3");
    myMusic.play();
    curMunition--;
    playerPlusScore[scoreMunition].querySelector("p").textContent = curMunition + " / " + maxMunition;

    let myMusic2 = new sound("./sound/killedkenny.mp3");
    myMusic2.play();
}
function imGoodSound() {
    let myMusic = new sound("./sound/imGood.mp3");
    myMusic.play();
}
