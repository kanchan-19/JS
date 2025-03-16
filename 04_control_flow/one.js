// if statement
const isuserLoggedIn = true;

if(2!==3){
    console.log("executed");
}

// >, <, >=, <=, ==, !=, ===, !==


//if-else statement
const temperature = 41;
if(temperature < 50){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}

//o/p: less than 50

const balance = 1000;
if(balance > 500) console.log("test");  // Implicit scope // Shorthand
if(balance > 500) console.log("test"), console.log("test2"); // don't do this. It's a bad practice

//if-else if-else statement

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
//o/p: less than 1200

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allowed to buy course");
}

const loggedInFromGoogle = false;
const loggedInfromEmail = true;
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in");
}

//switch

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3;
switch(month){
    case 1: 
        console.log("Jan");
        break;
    case 2: 
        console.log("Feb");
        break;
    case 3: 
        console.log("March");
        break;
    case 4: 
        console.log("Apr");
        break;
    case 5: 
        console.log("May");
        break;
    case 6: 
        console.log("June");
        break;
    case 7: 
        console.log("July");
        break;
    case 8: 
        console.log("Aug");
        break;
    case 9: 
        console.log("Sep");
        break;
    case 10: 
        console.log("Oct");
        break;
    case 11: 
        console.log("Nov");
        break;
    case 12: 
        console.log("Dec");
        break;
    default:
        console.log("Enter valid month");
        break;
}

// shift + alt + down arrow => keyboard shortcut for copying

const userEmail = [];

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values -> "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); // o/p: 5
val1 = null ?? 10
console.log(val1); // o/p: 10
val1 = undefined ?? 15;
console.log(val1); // o/p: 15
val1 = null ?? 10 ?? 20;
console.log(val1); // o/p: 10

// Ternary Operator -> condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

console.log(false == 0); // o/p: true
console.log(false == ""); // o/p: true