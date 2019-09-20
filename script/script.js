
const cube = document.querySelector("#target");

cube.addEventListener("click", touched);

function touched() {
alert("The game is over: it's victory!");
//removeEventListener("click", this);
};
