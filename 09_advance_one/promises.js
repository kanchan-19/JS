// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise - mdn doc of promise

/*promise gets completed in future. Promise is an object. In most of the operation, we consume promises rather than creating it.*/

// fetch('https://google.com').then().catch().finally(); => fetch some web request -> if some response comes, then it will come in then(), error will come in catch() and everything else will come in finally().

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

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function(){
  console.log('Async task 2 completed / resolved');
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "Kanchan", email: "kanchan@example.com",});
  },1000);
});

promiseThree.then(function(user){
  console.log(user);
});


// how to avoid callback hell

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "Kanchan", password: "123"});
    }else{
      reject('ERROR: Something went wrong.');
    }
  },1000);
});

promiseFour.then()