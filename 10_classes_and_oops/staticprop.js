"use strict";

class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }

  static createId(){ // static keyword restricts the access of this method. Even instance of child class will not be allowed to access this method.
    return '123';
  }
}

const kk = new User("Kanchan");
// console.log(kk.createId());
/* o/p:
console.log(kk.createId());
               ^

TypeError: kk.createId is not a function
*/

class Teacher extends User{
  constructor(username, email){
    super(username);
    this.email = email;
  }
}

const sk = new Teacher("Santosh", "sk@teacher.com");
sk.logMe(); // o/p: Username is Santosh
console.log(sk.createId());
/* o/p:
console.log(sk.createId());
               ^

TypeError: sk.createId is not a function
*/