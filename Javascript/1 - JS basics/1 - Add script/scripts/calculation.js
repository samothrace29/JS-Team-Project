console.log("----  OPERATORS  ---");
// STRING
// + Concatenation
const greeting = "Hey";
const user = "Igor";
const fullGreating = greeting + " " + user + "!";
console.log(fullGreating);

// NUMBER
// Addition
let salary = 3000;
let saving = 1000;
let bankAccount = saving + salary;
console.log("You have : " + (bankAccount + 1000));
//! Beware of concatenation/addiction context

// Substraction
const bike = 2000;
bankAccount = bankAccount - bike;
console.log("You have : " + bankAccount);

// Multiplication
const applePrice = 0.5;
const appleNb = 5;
const totalGrocery = applePrice * appleNb;

// Division
const game = 60;
const budget = 100;
const nbGames = budget / game; // -> 2

// Modulo
let totalMinutes = 83;
let minLeft = totalMinutes % 60; // -> 23
let hourLeft = Math.trunc(totalMinutes / 60); //-> 1

//Short Writing
let money = 100;
money = money + 10;
money += 10;
money -= 10;
money /= 10;
money *= 10;
money %= 2;

//REALLY ?!? SHORT WRITING
let lifes = 3;
lifes = lifes + 1;
lifes += 1;
lifes++;
lifes--;

//smart type
let a = "" + 10; // castin number to string
let b = +"11"; //casting number / convert
console.log("result : " + a + b);

alert(9 - 3 * 1 / 3 + 1);
//BODMAS