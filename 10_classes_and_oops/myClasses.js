// Whatever, we are going to learn has come after ES6

class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc`;
  }

  changeUsername(){
    return `${this.username.toUpperCase()}`;
  }
}

const kk = new User("Kanchan", "kk@meta.com", "123");
console.log(kk.encryptPassword()); // o/p: 123abc
console.log(kk.changeUsername()); // o/p: KANCHAN

// behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
  return `${this.username.toUpperCase()}`;
}

const sk = new User("santosh", "ss@accenture.com", "123");
console.log(sk.changeUsername()); // o/p: SANTOSH