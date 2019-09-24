// In another file
// ? Made by Igor MARTY
// * Only 1$ by patreon user
// ! Copyright
// TODO : Fix all the Bugs!

/* ALREADY DEFINED FUNCTIONS */

//POPUP - interrupt the script execution
// ok or cancel - INPUT
confirm("are you ok ?");
// a sentense / words... - INPUT
prompt("What your favorite teacher ?");
// alert box - OUTPUT
alert("Hello You!");

//WITH THE PAGE - USER - OUTPUT
document.write("<h2>Hello you all!</h2>");

// WITH YOUR - DEV - FRIENDS - OUTPUT FOR YOU
console.log("ONE'S DOES NOT SIMPLY OPEN THE CONSOLE");

/*****************************
 * ******* VARIABLES  ********
 * **************************/
// CONSTANT - Can't be modified
const adminAccess = false; // Define + initialize
//Uncaught TypeError: Assignment to constant variable.
// const amistupid; //Uncaught SyntaxError: Missing initializer in const declaration
// yes

// LET - if your stuff need to vary
let currentHours; // Define/Declaration
currentHours = 11; // initialisation
currentHours = currentHours + 1; // Modification

// VAR is buggy - Don't be a BAD student
// var age = 30;

let rocketName, rocketFuel, speed;
rocketName = "Roquette";
speed = 9000;

console.log(rocketFuel); // undefined
speed = null; // a dev was here and empty the box

console.log(speed)

/*****************************
 * ** TYPES OF VARIABLES  ****
 * **************************/

// STRING with single or double quotes
const intructor = "Igor l'homme says \"Hello\""; // \ to escape special characters
const other = 'Example1234^^64@/$!:&é"(-ç(-_';
// NUMBER
const nbStudents = 14;
const outTemperature = -4; //welcome to luxembourg...
let someOneElseWeightNotMe = 90.1;
const fractions = 1 / 3;
//BOOLEAN
const teacherHere = true;
const luxembourgIsSunny = false;
const stringNotBoolean = "true";
// falsy  : false, 0, null, undefined, NaN (Not a Number), infinity
// truthy : everything else.

// 4 main types of error
// alert(friend); // Uncaught ReferenceError: friend is not defined
// let Nour : 21; // Uncaught SyntaxError: Missing initializer in const declaration
const test = 1;
//test = 2; // Uncaught TypeError: Assignment to constant variable.

let budget = 10;
const sandwitch = 3;
budget = budget + sandwitch;
console.log(budget); // BRAIN ERROR
debugger;
