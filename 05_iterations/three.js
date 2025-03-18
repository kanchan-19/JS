const coding = ["JS", "Java", "Python", "Ruby", "CPP"];

let values = coding.forEach((item) => {
    // console.log(item);
    /* o/p: JS
Java
Python
Ruby
CPP */
})

// console.log(values); // o/p: undefined

values = coding.forEach((item) => {
    // console.log(item);
    return item;
    /* o/p: JS
Java
Python
Ruby
CPP */
})

// console.log(values); // o/p: undefined

// This means that forEach loop doesn't return any value.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter((num) => num > 4); // filter() also uses callback like forEach and returns filtered value unlike forEach. Here, num > 4 is condition which is used to filter.
// console.log(newNums); // o/p: [ 5, 6, 7, 8, 9, 10 ]

newNums = myNums.filter((num) => {
    num > 4;
})
// console.log(newNums); // o/p: [] // Here, implicit return is not working as we have used curly braces

newNums = myNums.filter((num) => {
    return num > 4;
})
console.log(newNums); // o/p: [ 5, 6, 7, 8, 9, 10 ]