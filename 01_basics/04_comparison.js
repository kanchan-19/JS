//console.log("2" > 1); // o/p: true
//console.log("02" > 1); // o/p: true

//typescript doesn't allow different data type comparison

console.log(null > 0); // o/p: false
console.log(null == 0); // o/p: false
console.log(null >= 0); // o/p: true

// the reason for above result is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0

console.log(undefined == 0); // o/p: false
console.log(undefined > 0); // o/p: false
console.log(undefined < 0); // o/p: false

//avoid above type of comparisons as it creates confusion
// === checks values as well as its data type

console.log("2" == 2); // o/p: true
console.log("2" === 2); // o/p: false