"use strict"

// class User{
//   constructor(email, password){
//     this.email = email;
//     this.password = password;
//   }

//   get password(){
//     return this.password.toUpperCase();
//   }
// }

// const kk = new User("kk@google.com", "123");
// console.log(kk.password); 
/* o/p:
this.password = password;
                  ^

TypeError: Cannot set property password of #<User> which has only a getter
// if we define getter for a property, then we need to define setter also, else error will come.
*/

// class User{
//     constructor(email, password){
//       this.email = email;
//       this.password = password;
//     }
  
//     get password(){
//       return this.password.toUpperCase();
//     }

//     set password(value){
//       this.password = value;
//     }
//   }
  
//   const kk = new User("kk@google.com", "123");
//   console.log(kk.password); 
  /* o/p:
        this.password = value;
                    ^

RangeError: Maximum call stack size exceeded
// this error is coming as constructor and setter both are trying to set the value of password one after the other, again and again, and this process is getting repeated.
*/

class User{
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  get password(){
    // return this._password.toUpperCase();
    return `${this._password}kanchan`;
  }

  set password(value){
    this._password = value; // Now, we are setting the value of password using setter instead of constructor function i.e. setter is overwriting constructor.
  }
}

const kk = new User("kk@google.com", "abc");
console.log(kk.password); // o/p: ABC for line no. 56 and abckanchan for line no. 57