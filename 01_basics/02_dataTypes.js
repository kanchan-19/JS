"use strict"; // this means that treat all code as newer version of JS

//alert(3 + 3); //ReferenceError: alert is not defined - this error is coming as we are using node js and not executing it through browser

// Refer to ecmaScript and mdn for documentation

let name = "Kanchan";
let age = 27;
let isLoggedIn = true;
let state;
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // o/p: false
const bigNumber = 234568985433567898n; // example of bigInt
console.log(typeof bigNumber); // bigint

//Primitive data types
//number => range: 2^53
//bigint
//string
//boolean
//null => standalone value
//undefined
//symbol => unique

//object

console.log(typeof(null)); // o/p: object
console.log(typeof(undefined)); // o/p: undefined

/*
JS is dynamically typed language
there are 2 types of data based on how it is stored in memory and how it is accessed
1. primitive - call by value
String, number, boolean, null, undefined, symbol, bigInt
2. non-primitive or reference - call by reference
Array, Objects, Functions
*/

const heros = ["shaktiman", "naagraj"];

let myObj = {
    name: "Kanchan",
    age: 27,
};

const myFunction = function(){
    console.log("hello world!");
}

console.log(typeof (myFunction)); // o/p: function => its type is also called function object
console.log(typeof (myObj)); // o/p: object
console.log(typeof (heros)); // o/p: object

/* ******************* Stack and Heap memory ******************** */

//Primitive data types are stored in stack memory and non-primitive data type is stored in heap memory.

let userOne = {
    email: "abc@orkut.com",
    upi: "123@ybl",
};

let userTwo = userOne;
userTwo.email = "kk@google.com";
console.log(userOne.email); // o/p: kk@google.com
console.log(userTwo.email); // o/p: kk@google.com