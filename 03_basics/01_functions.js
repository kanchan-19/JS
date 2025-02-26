/*
function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("N");
}

//sayMyName => reference of function
//sayMyName() => execution of function

sayMyName();
*/

/*
function addTwoNumbers(num1, num2){ // Here num1 and num2 are parameters
    console.log(num1 + num2);
}

addTwoNumbers(2, 4); // o/p: 6 // when we pass values in a function while calling then it is called arguments
addTwoNumbers(2, "4"); // o/p: 24
addTwoNumbers(3, "a"); // o/p: 3a
addTwoNumbers(3, null); // o/p: 3
*/

/*
function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result); // o/p: Result:  8
*/

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(2, 2)); // o/p: 4

/*
function loginUserMessage(username){ // here we can't use let or const else it will throw error
    return `${username} just logged in`;
}

console.log(loginUserMessage("Kanchan")); // o/p: Kanchan just logged in
console.log(loginUserMessage()); // o/p: undefined just logged in
*/

/*
function loginUserMessage(username){ // here we can't use let or const else it will throw error
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // o/p: Please enter a username
                                         undefined

*/

/*
function loginUserMessage(username){ // here we can't use let or const else it will throw error
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
*/

/*
function loginUserMessage(username = "Sam"){ // here if we will not pass any value while calling this function, then it will take Sam as default value
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // o/p: Sam just logged in
*/

/*
function calculateCartPrice(...num1){ //Here, ... is rest operator which is used to take multiple values. It bundles all the given values
    return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // o/p: [ 200, 400, 500 ]
*/

function calculateCartPrice(val1, va2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 340, 890, 568, 5677)); // o/p: [ 890, 568, 5677 ] => 200 and 340 goes to val1 and val2 respectively and rest is stored in num1 as array

const user = {
    username: "Kanchan",
    price: 199,
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user); // o/p: Username is Kanchan and price is 199
handleObject({
    username: "Sam",
    price: 399,
}); // o/p: Username is Sam and price is 399

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // o/p: 400
console.log(returnSecondValue([234, 45, 56, 788])); // o/p: 45