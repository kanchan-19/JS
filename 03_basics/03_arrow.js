const user  = {
    username: "Kanchan",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to github`);
        console.log(this);
    },
};

user.welcomeMessage(); // o/p: Kanchan, welcome to github
user.username = "Sam";
user.welcomeMessage(); // o/p: Sam, welcome to github

console.log(this); // o/p: {}

// Inside browser, Window object is the global object while in node environment we get an empty object

/*
function cake(){
    console.log(this);
}

cake(); // o/p: we get many values as output
*/

function cake(){
    let username = "Kanchan";
    console.log(this.username); // o/p: undefined
}

cake();

// from above example we can understand that this works for object but not for function

const cookie = function(){
    let username = "Kanchan";
    console.log(this.username); // o/p: undefined => Here also this will not work
}

cookie();

const pastry = () => {
    let username = "Kanchan";
    console.log(this); // o/p: {}
}

pastry();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 3)); // o/p: 6

let addTwoNum = (num1, num2) => num1 + num2; //Implicit return => If we use curly braces, then we need to mention return keyword but if we don't mention curly braces, then we don't need to use return keyword

console.log(addTwoNum(2, 3)); // o/p: 5

addTwoNum = (num1, num2) => (num1 + num2);
console.log(addTwoNum(2, 2)); // o/p: 4

addTwoNum = (num1, num2) => {username: "Kanchan,"};
console.log(addTwoNum(2, 2)); // o/p: undefined => this means that we can't return objects in curly braces without using ()

addTwoNum = (num1, num2) => ({username: "Kanchan,"});
console.log(addTwoNum(2, 2)); // o/p: { username: 'Kanchan,' }



