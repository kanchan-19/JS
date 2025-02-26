/*
let a = 10;
const b = 20;
var c = 30;

console.log(a); // o/p: 10
console.log(b); // o/p: 20
console.log(c); // o/p: 30
*/

/*
if(true){
    let a = 10;
    const b = 20;
    var c = 30; 
}

//console.log(a); // o/p: ReferenceError: a is not defined
//console.log(b); // o/p: ReferenceError: b is not defined
console.log(c); // o/p: 30
*/

let a = 300;
if(true){
    let a = 10;
    const b = 20;
    console.log("Inner a ", a); // o/p: Inner a  10
}
console.log("Outer a: ", a); // o/p: Outer a:  300

// global scope in terminal using node js and in browser using console is different

function one(){
    const username = "Kanchan";

    function two(){
        const website = "github";
        console.log(username); // o/p: Kanchan => this output is achieved after we comment line no.41
    }

    //console.log(website); // o/p: ReferenceError: website is not defined
    two();
}

one();

//In nested function, child can use parent function's variable but parent can't use child function's variable

if(true){
    const username = "Kanchan";
    if(username === "Kanchan"){
        const website = "github"; // o/p: Kanchan github
        console.log(username + " " + website);
    }
    //console.log(website); // 1st error: ReferenceError: website is not defined
}

//console.log(website); // 2nd error: ReferenceError: website is not defined => comes after line 55 is commented

/*
function addOne(num){
    return num + 1;
}

addOne(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(3);
*/

console.log(addOne(5));
function addOne(num){
    return num + 1;
}

//console.log(addTwo(3)); // o/p: ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

