let score = "57abc";

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

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
