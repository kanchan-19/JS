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

/********************* Creating singleton object *****************************/

const tinderUser = new Object();

console.log(tinderUser); // o/p: {}

tinderUser.id = "123fgh";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // o/p: { id: '123fgh', name: 'Sam', isLoggedIn: false }

/********************************************************************************************/
const regularUser = {
    email: "abc@amazon.com",
    fullName: {
        userFullName: {
            firstName: "Kanchan",
            lastName: "Kumari",
        },
    },
};

console.log(regularUser.fullName.userFullName); // o/p: { firstName: 'Kanchan', lastName: 'Kumari' }

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

const obj4 = {obj1, obj2, obj3};
console.log(obj4); /* {
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'a', '4': 'b' },
    obj3: { '5': 'a', '6': 'b' }
  }
    */

const obj5 = Object.assign({}, obj1, obj2, obj3); // this means we are concatenating the key value pair of all objects (obj1, obj2, obj3) and assigning it to empty object
console.log(obj5); // o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2, ...obj3};
console.log(obj6); // o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 2,
        email: "abc@orkut.com",
    }
];

console.log(users[1].email); // o/p: abc@orkut.com

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // o/p: [ 'id', 'name', 'isLoggedIn' ] => gives all keys of an object in the form of array
console.log(Object.values(tinderUser)); // o/p: [ '123fgh', 'Sam', false ] => gives all values of an object in array form
console.log(Object.entries(tinderUser)); // o/p: [ [ 'id', '123fgh' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ] => gives key value pairs in the form of array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // o/p: true => used to check if that key exists in object or not

/************************** Object De-structuring **************************/

const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "Kanchan",
};

const {courseInstructor} = course;

console.log(courseInstructor); // o/p: Kanchan

const {courseInstructor: instructor} = course; // o/p: We can rename key as well to make it shorter or longer
console.log(instructor); // o/p: Kanchan