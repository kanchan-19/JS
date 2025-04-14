// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise - mdn doc of promise

/*promise gets completed in future. Promise is an object. In most of the operation, we consume promises rather than creating it.*/

// fetch('https://google.com').then().catch().finally(); => fetch some web request -> if some response comes, then it will come in then(), error will come in catch() and everything else will come in finally().

/*
const promiseOne = new Promise(function(resolve, reject){
  // Do an async task like DB calls, cryptography related calls, network calls
  setTimeout(function(){
    console.log('Async task is complete');
    resolve();
  }, 1000);
});

promiseOne.then(function(){
  console.log("Promise consumed");
}); // then() has direct connection with resolve. We get callback function in then() and this function automatically receives an argument. When we mention/call, resolve() inside setTimeout(), then it gets connected with then(). Argument inside resolve() gets passed as values / parameter to function in then().
*/

/*
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function(){
  console.log('Async task 2 completed / resolved');
});
*/

/*
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Kanchan", email: "kanchan@example.com",});
  },1000);
});

promiseThree.then(function(user){
  console.log(user);
});
*/

// how to avoid callback hell

let promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "Kanchan", password: "123"});
    }else{
      reject('ERROR: Something went wrong.');
    }
  },1000);
});

// const username = promiseFour.then((user) => {
//   console.log(user);
//   return user.username;
// })

// console.log(username); 
/* o/p: Promise { <pending> }
node:internal/process/promises:392
      new UnhandledPromiseRejection(reason);
      ^

UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong.".
    at throwUnhandledRejectionsMode (node:internal/process/promises:392:7)
    at processPromiseRejections (node:internal/process/promises:475:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:106:32) {
  code: 'ERR_UNHANDLED_REJECTION'
}

Node.js v22.11.0

// We can see that we can't return and print the value in this way.
*/

promiseFour.then((user) => {
  console.log(user);
  return user.username; 
}).then((username) => { // the value which is getting returned from 1st then() will come as parameter in function in 2nd then()
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected."));
/* o/p: ERROR: Something went wrong.
Promise is either resolved or rejected.
*/

// we can also use async await instead of .then(). async await waits for the work to get executed, if it doesn't get executed. then it throws the error then and there. Here, we don't handle the catch gracefully. If it gets executed, then program goes ahead.

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "JS", password: "!23"});
    }else{
      reject("ERROR: JS went wrong.");
    }
  }, 1000);
});

// async function consumePromiseFive(){
//   const response = await promiseFive;
//   console.log(response); 
// };

// consumePromiseFive();
/* o/p: node:internal/process/promises:392
      new UnhandledPromiseRejection(reason);
      ^

UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: JS went wrong.".
    at throwUnhandledRejectionsMode (node:internal/process/promises:392:7)
    at processPromiseRejections (node:internal/process/promises:475:17)
    at process.processTicksAndRejections (node:internal/process/task_queues:106:32) {
  code: 'ERR_UNHANDLED_REJECTION'
}

Node.js v22.11.0
*/

// async await doesn't handle errors directly.

// in below aync await, we are handling error gracefully using try, catch block
async function consumePromiseFive(){
  try{
    const response = await promiseFive;
    console.log(response); 
  }catch(error){
    console.log(error);
  }
}

consumePromiseFive(); // o/p: ERROR: JS went wrong.

/*async function getAllUsers(){
  // fetch is an object which will give promise as return value. fetch() needs an URL. Since, we are doing network request over here, it will take time. So, we will use await.

  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data  = response.json(); // convert string to json
  console.log(data);
}

getAllUsers(); // o/p: Promise { <pending> } => we don't get the user's data or desired result. So, lets write it in try, catch block
*/

/*
async function getAllUsers(){
  try{
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = response.json();
    console.log(data);
  }catch{
    console.log("E: ", error);
  }
}

getAllUsers(); // still, we are getiing, Promise { <pending> } as o/p despite the correct code. This is because converting string data in json is also taking time. We can get desired result just by awaiting response conversion from string to json. Let's see the same in below example.
*/

/*
async function getAllUsers(){
  try{
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  }catch{
    console.log("E: ", error);
  }
}

getAllUsers();
*/

// we cam perform the above task using .then().catch() as well. Let's see the same.

fetch('http://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));

// We can refer this blog to know about introduction of Fetch API in Node JS : The Fetch API is finally stable in Node.js - LogRocket Blog
// MDN doc of fetch API : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

// In o/p, we can see that first we get the o/p of fetch request, then any other block of code's o/p come. This is because, for fetch, a special task queue i.e. Micro Task Queue / Priority Queue / Fetch Queue is made and it is given priority over normal task queue.

// 
// 
// 
// cd ..