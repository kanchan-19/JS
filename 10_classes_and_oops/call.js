"use strict";

/*
function setUsername(username){
  // let's suppose, first we have done complex DB calls, then we are performing the below operation.
  this.username = username;
}

function createUser(username, email, password){
  setUsername(username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); 
o/p:  
this.username = username;
                ^

TypeError: Cannot set properties of undefined (setting 'username')
// This error is coming as we have given only reference. We have not actually called the setUsername(). To call it explicitly in JS, we use call method.
*/


/*
function setUsername(username){
  // let's suppose, first we have done complex DB calls, then we are performing the below operation.
  this.username = username;
  console.log("called");
}

function createUser(username, email, password){
  setUsername.call(username); // here, call is used to hold the reference of setUsername(). If we don't hold it, then once setUsername() is run, it will be removed from execution context. This means that its variables will also be removed.
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); 
o/p: 
this.username = username;
^

TypeError: Cannot create property 'username' on string 'chai'
// still, we are getting the same error. In order to remove this error, we can pass this keyword inside call().
*/

function setUsername(username){
  // let's suppose, first we have done complex DB calls, then we are performing the below operation.
  this.username = username;
  console.log("called");
}

function createUser(username, email, password){
  setUsername.call(this, username); // Here, we are telling setUsername function to use this of createUser not their own this as their own this gets deleted once that function is executed.
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai); 
/* o/p: called
createUser { username: 'chai', email: 'chai@fb.com', password: '123' }
*/