let score = "57abc";

console.log(typeof(score)); // o/p: string

let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); // o/p: number
console.log(valueInNumber); // o/p: NaN

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
//null => 0
//undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // o/p: true

//1 => true; 0 => false
//"" => false
//"kanchan" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); // o/p: 33
console.log(typeof(stringNumber)); // o/p: string


// ******************************* Operations ************************************* //

let value = 3;
let negValue = -value;
//console.log(negValue);

//Arithmetic Operation
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

/*
console.log("1" + 2); // o/p: 12
console.log(1 + "2"); // o/p: 12
console.log("1" + 2 + 2); // o/p: 122
console.log(1 + 2 + "2"); // o/p: 32
*/

/*
console.log(true); //o/p: true
console.log(+true); //o/p: 1
console.log(true+); // o/p: console.log(true+);
                                             ^                                            
SyntaxError: Unexpected token ')'
console.log(+""); //o/p: 0
*/


let num1, num2, num3;
num1 = num2 = num3 = 2+2; // this is not a good practice

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // o/p: 101