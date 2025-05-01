// Inside JS, array is an object. There is no parent of object
// String is also an object. This means that whatever property is available with prototype, those propertirs are also available with String and Array.
// function is function as well as object in JS. We can see the same from below example

function multiplyBy5(num){
  return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); // o/p: 25
console.log(multiplyBy5.power); // o/p: 2
console.log(multiplyBy5.prototype); // o/p: {} => prototype not only gives us methods but also some internal properties. multiplyBy5() has also some properties. prototype have some properties along with this context though its showing empty parenthesis.

// we can inject our own function or properties in prototype.

function createUser(username, score){
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function(){
  this.score++;
}

createUser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}

let chai = createUser("chai", 25);
let tea = createUser("tea", 250);

// chai.printMe(); 
/* o/p: 
chai.printMe();
     ^

TypeError: Cannot read properties of undefined (reading 'printMe')
*/ 
// properties has been injected in prototype but still we are getting error because when we transferred values from function to chai or tea, then we didn't tell chai or tea that we have got these additional properties. In order to relay the same, we use new keyword.

chai = new createUser("chai", 25);
tea = new createUser("tea", 250);

chai.printMe(); // o/p: score is 25

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

