"use strict";

// console.log(Math.PI); // o/p: 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI);
/* o/p: 
Math.PI = 5;
        ^

TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
*/


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/* o/p: 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


let obj = {
  name: "samosa",
  price: 250,
  isAvailable : true,
};

// console.log(Object.getOwnPropertyDescriptor(obj)); // o/p: undefined -> We are getting this as obj is an Object not a property
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/* o/p: {
  value: 'samosa',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Object.defineProperty(obj, 'name', {
//   writable: false,
//   enumerable: false,
// }) // 1st parameter is object name. 2nd parameter is property which we want to disrupt. 3rd parameter is object in which we can mention the properties which we want to change.

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
/* o/p: 
{
  value: 'samosa',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// for(let [key, value] of obj){
//   console.log(`${key}, ${value}`);
// }
/* o/p: 
for(let [key, value] of obj){
                        ^

TypeError: obj is not iterable
*/

for(let [key, value] of Object.entries(obj)){
  console.log(`${key}, ${value}`);
}
/* o/p: 
name, samosa
price, 250
isAvailable, true
*/

obj = {
  name: "samosa",
  price: 250,
  isAvailable : true,
  orderSamosa: function(){
    console.log('samosa nahi mila');
  }
};

for(let [key, value] of Object.entries(obj)){
  console.log(`${key}, ${value}`);
}
/* o/p: 
name, samosa
price, 250
isAvailable, true
orderSamosa, function(){
    console.log('samosa nahi mila');
  }
    // we don't want orderSamoa() in this way. To avoid this, we need to put a check in for of loop. Let's implement the same below
*/

for(let [key, value] of Object.entries(obj)){
  if(typeof value !== 'function'){
    console.log(`${key}, ${value}`);
  }
}
/* o/p: 
name, samosa
price, 250
isAvailable, true
*/

// If we keep the enumerable property of a particular property of object false, then we won't we able to use for of loop i.e. we won't be able to iterate for that particular property. Let's see the same below.

Object.defineProperty(obj, 'name', {
  enumerable: false,
});

for(let [key, value] of Object.entries(obj)){
  if(typeof value !== 'function'){
    console.log(`${key}, ${value}`);
  }
}
/* o/p: 
price, 250
isAvailable, true
*/