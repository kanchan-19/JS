"use strict";

// reduce method

const myNums = [1, 2, 3];
const initialValue = 0;
let myTotal = myNums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, initialValue);
// accumulator is an empty variable which takes initialValue as first value and later it stores sum of accumulator and currentValue.

// console.log(myTotal); // o/p: 6

myTotal = myNums.reduce(function(accumulator, currentValue) {
    // console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 3);
/* o/p: accumulator: 3 and currentValue: 1
accumulator: 4 and currentValue: 2
accumulator: 6 and currentValue: 3 */

myTotal = myNums.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
// console.log(myTotal); // o/p: 6

const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999,
    },
    {
        itemName : "py course",
        price : 999,
    },
    {
        itemName : "mobile dev course",
        price : 5999,
    },
    {
        itemName : "data science course",
        price : 12999,
    },
];

const finalValue = shoppingCart.reduce((acc, currValue) => (acc + currValue.price), 0);
console.log(finalValue); // o/p: 22996

