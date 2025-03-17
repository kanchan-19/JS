//for of loop

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// for (const element of object) {
    
// }

for(const val of arr){
    // console.log(val);
}

const greetings = "Hello World!";
for(const greet of greetings){
    // console.log('Each char is ' + greet);
}

//Maps -> there are no duplicate values in map
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
console.log(map); /* o/p: Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/

map.set('IN', "India");
console.log(map);/* o/p: Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/
map.set('IN', "Bharat");
console.log(map);/* o/p: Map(3) {
    'IN' => 'Bharat',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
*/

for(const key of map){
    console.log(key); /* o/p: [ 'IN', 'Bharat' ]
    [ 'USA', 'United States of America' ]
    [ 'Fr', 'France' ]
*/
}

for(const [key, value] of map){
    console.log(key+ ':-'+ value); /* o/p: IN :- Bharat
    USA :- United States of America
    Fr :- France
*/
}

const myObj = {
    'Game1' : 'NFS',
    'Game2' : 'JigSaaw',
};

/*for(const [key, value] of myObj){
    console.log(key+ ':-'+ value); //o/p: for(const [key, value] of myObj){
                                                                ^
TypeError: myObj is not iterable
}*/

const myObject = {
    js : 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple',
};

//for-in loop

/*for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

for(const key in myObject){
    // console.log(key);
    /* o/p: js
cpp
rb
swift */
}

for(const key in myObject){
    // console.log(myObject[key]);
    /* o/p: JavaScript
C++
Ruby
Swift by Apple */
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    /*
    o/p: js shortcut is for JavaScript
        cpp shortcut is for C++
        rb shortcut is for Ruby
        swift shortcut is for Swift by Apple
    */
}

const programming = ["JS", "Ruby", "Python", "Java"];
for(const key in programming){
    console.log(key);
    /* o/p: 0
1
2
3*/
// In array, keys are by default its index
}

for(const key in programming){
    // console.log(programming[key]);
    /* o/p: JS
Ruby
Python
Java*/
}

for(const key in map){
    // console.log(key); //we don't get any output as map is not iteratable
}

//for-each loop - it is a property of array in JS

const coding = ["JS", "Java", "Python", "Ruby", "CPP"];
coding.forEach( function (item){
    console.log(item);
}) // we don't have function name in callback. elements of array comes as parameter of function in callback and we can do the required operation in function body using that element

