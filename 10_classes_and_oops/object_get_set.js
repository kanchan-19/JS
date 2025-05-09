"use strict";

const User = {
  _email: "kk@google.com", // By using _ , we are almost defining a private property. It is not for use of normal users
  _password: "123",

  get email(){
    return this._email.toUpperCase();
  },
  set email(value){
    this._email = value;
  },
};

const kk = Object.create(User); // Object.create() is a factory function. By default, we have null as parameter in Object.create(). We can give reference of object as per which we want to create new object as parameter.

console.log(kk.email); // o/p: KK@GOOGLE.COM