// Arrays in JavaScript is resizable and it can contain mixed data types unlike java

const myArray = [0, 1, 2, 3, 4, 5];
console.log(myArray[0]);
const myHeros = ["Shaktiman", "Krishna", "Naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

//Array Methods

myArray.push(6);
myArray.push(7);
myArray.pop(); // deletes value from the end of the array
myArray.unshift(9); // adds value at the start of the array
console.log(myArray);
myArray.shift(); // deletes value from the start of the array
console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9)); // o/p: -1 => this means that this value is not present in array

const newArr = myArray.join();

console.log(newArr); // o/p: 0,1,2,3,4,5,6 => join function converts the array in string

//slice and splice

console.log("A", myArray); // o/p: A [ 0, 1, 2, 3, 4, 5, 6 ]

const myn1 = myArray.slice(1, 3);
console.log(myn1); // o/p: [ 1, 2 ]
console.log("B", myArray); // o/p: B [0, 1, 2, 3, 4, 5, 6 ]

const myn2 = myArray.splice(1, 3); // splice function changes the original array and and removes that portion portion of values from the array
console.log("C", myArray); // o/p: C [ 0, 4, 5, 6 ]
console.log(myn2); // o/p: [ 1, 2, 3 ]