// Object Literal

const user = {
  username: "Kanchan",
  logInCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log('Got user details from database');
    // console.log(`Username: ${username}`); 
    /* o/p: console.log(`Username: ${username}`);
                             ^

          ReferenceError: username is not defined // this error is coming because function block doesn't know, we are talking about which username as we have not provided username as parameter from outside. To resolve it, we use this keyword.
    */
    // console.log(`Username: ${this.username}`);
    console.log(this); /* o/p: {
      username: 'Kanchan',
      logInCount: 8,
      signedIn: true,
      getUserDetails: [Function: getUserDetails]
    } 
    // we get current context as o/p.
    */
  }
};

// console.log(user.username);
// console.log(user.getUserDetails());

// whenever we talk about this keyword, then we are talking about current context

console.log(this); // o/p: {} => we get empty parenthesis as we don't have anything in global context at present. But this global context change when we go in browser, we get window object over there.

// ----------------------------------------------------------------------------------

// Constructor function

// const promiseOne = new Promise(); // Here, new keyword is actually a constructor function. Constructor function allows us to make multiple instances from one object literal.

function User(username, loginCount, isLoggedIn){ // function has only 1 global execution context.
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function(){
    console.log(`Welcome, ${this.username}`);
  }

  return this; // Even if we don't return this, we will get the same o/p in line no. 64 and 65. This is because it return this implicitly.
}  

let userOne = User("Kanchan", 12, true);
// console.log(userOne);

let userTwo = User("Santosh", 11, false);
// console.log(userOne); // we will get below as part of o/p. Here, we can see that userTwo has overwritten the values of userOne which is not good at all. To avoid this, we use constructor function which always gives us a new copy
/* username: 'Santosh',
  loginCount: 11,
  isLoggedIn: false
  */

userOne = new User("Kanchan", 12, true);
userTwo = new User("Santosh", 11, false);
// console.log(userOne); // o/p: User { username: 'Kanchan', loginCount: 12, isLoggedIn: true, greeting: [Function (anonymous)] }
// console.log(userTwo); // o/p: User { username: 'Santosh', loginCount: 11, isLoggedIn: false, greeting: [Function (anonymous)] }

// As soon as we use new keyword, an empty object gets created which is known as instance.
// Constructor function gets called because of new keyword

console.log(userOne.constructor) // o/p: [Function: User] => constructor property is nothing but its a reference of itself

// mdn doc of instanceof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// default behavior of javascript is prototypable behavior. JS keeps on finding the value until it reaches null. We can't access this inside arrow function becuase of prototypable behavior. we have got this keyword, classes, working of new keyword, prototypable inheritance because of prototype.

