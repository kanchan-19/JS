//singleton => its one of its kind
//Object.create

//when we declare objects using literals, then it is not singleton while when we declare object using constructor, then it is singleton object

//object literals

const mySym = Symbol("key1");
const JSUser = {
    name: "Kanchan", // internally name is converted into "name"
    "last name": "Kumari", // such key value pair can't be accesed using . operator, we have to use []
    [mySym]: "myKey1", // way to define symbol in object, it is also accesed using [] instead of . operator
    age: 27,
    email: "kk@google.com",
    isLoggedIn: false,
    lastLogInDay: ["Monday", "Saturday"],
};

console.log(JSUser["last name"]); // o/p: Kumari
console.log(typeof JSUser[mySym]); // o/p: string

JSUser.email = "kanchan@accenture.com";
//Object.freeze(JSUser); // After using this command on an object, we can't change value of any key of that object
JSUser.email = "kanchan@microsoft.com";
console.log(JSUser); /* o/p: {
    name: 'Kanchan',
    'last name': 'Kumari',
    age: 27,
    email: 'kanchan@accenture.com',
    isLoggedIn: false,
    lastLogInDay: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'myKey1'
  }
*/

JSUser.greeting = function(){
    console.log("Hello JS USer");
};

JSUser.greetingTwo = function(){
    console.log(`Hello! JS user, ${this.name}`); // Here this is used to refer to the current object
}

console.log(JSUser.greeting()); // o/p: Hello JS USer
console.log(JSUser.greetingTwo()); // o/p: Hello! JS user, Kanchan

