"use strict";

function User(email, password){
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function(){
      return this._email.toUpperCase();
    },
    set: function(value){
      this._email = value;
    },
  });

  Object.defineProperty(this, 'password', {
    get: function(){
      return this._password;
    }, 
    set: function(value){
      this._password = value;
    },
  });
}

const kk = new User("kk@google.com", "abc");
console.log(kk.password); // o/p: abc 
// In above example, if we keep property as this.property normally as well as in getter, setter, then we get the error, Maximum call stack size exceeded same like while using class.If we keep the property as this.property in function and this._property in getter and setter, then we don't get any o/p i.e. we get undefined as output. We have to keep the property as this._property while declaring getter or setter or normally as well to get the correct o/p.