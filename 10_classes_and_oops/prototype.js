let myName = "Kanchan   ";
console.log(myName.length); // o/p: 10 => we can see that space is also getting counted but we want only the true length of string i.e. space should not be counted. For this we want to inject a method trueLength in prototype.

let myHeros = ["Thor", "Spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
};

// factory functions are nothing but by default functions.

// heroPower.kanchan(); // Method kanchan() is not present in object heroPower, so it will throw error. But lets suppose we inject this method in Object, then it should be available for heroPower as well. Let's do and see the same.

Object.prototype.kanchan = function(){
  console.log(`Kanchan is present in all objects`);
}

// heroPower.kanchan(); // o/p: Kanchan is present in all objects

myHeros.kanchan(); // o/p: Kanchan is present in all objects

// If we inject method in array instead of Object, then will it be available for other Objects like String, function etc.

Array.prototype.heyKanchan = function(){
  console.log("Kanchan says, Hello !");
}
myHeros.heyKanchan(); // Once we comment line no. 32, we get the o/p: Kanchan says, Hello !
// heroPower.heyKanchan(); // o/p: it will throw error. TypeError: heroPower.heyKanchan is not a function


// Inheritance

const user = {
  name: "chai",
  email: "chai@accenture.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const taSupport = {
  makeAssignment: 'JS Assignment',
  fullTime: false,
  __proto__: teachingSupport, // After doing this, we can access properties of teachingSupport as well after creating new object of taSupport.
};

// Let's suppose we want to link taSupport with teachingSupport. We can use prototype for this. Earlier, we used __proto__ for the same.

teacher.__proto__ = user; // teacher can also use all properties of user. This is prototypable inheritance. This approach is outdated.

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher); // Here, we are injecting teachingSupport's property in teacher.


// Now, we will inject trueLength method in String.

let anotherUsername = "ChaiAurCode";
String.prototype.trueLength = function(){
  console.log(`${this}`); 
  console.log(`True length is:  ${this.trim().length}`);
}
anotherUsername.trueLength(); /* o/p: ChaiAurCode
True length is:  11
*/

"kanchan".trueLength(); /* o/p: kanchan
True length is:  7
*/