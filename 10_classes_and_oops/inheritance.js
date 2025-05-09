"use strict";

class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
      console.log(`Username is ${this.username}.`);
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username); // super keyword refers to the class which the present class is inheriting and goes to parent class with current context and sets the username. Here, we no longer need to use call().
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}.`);
  }
}

// const kk = Teacher("kanchan", "kk@teacher.com", "123");
// kk.addCourse(); 
/* o/p: 
const kk = Teacher("kanchan", "kk@teacher.com", "123");
           ^

TypeError: Class constructor Teacher cannot be invoked without 'new'
*/

const kk = new Teacher("kanchan", "kk@teacher.com", "123");
kk.addCourse(); // o/p: A new course was added by kanchan.

const ss = new User("santosh");
ss.logMe(); // o/p: Username is santosh.
// ss.addCourse();
/* o/p: 
ss.addCourse();
   ^

TypeError: ss.addCourse is not a function
*/

console.log(kk === ss); // o/p: false
console.log(kk === Teacher); // o/p: false -> o/p is false because kk is instance of Teacher not the Teacher itself
console.log(kk instanceof Teacher); // o/p: true
console.log(kk instanceof User); // o/p: true -> this is because kk is instance of Teacher and Teacher is instance of User



