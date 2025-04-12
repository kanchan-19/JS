const marvelHeros = ["Spiderman", "thor", "ironman"];
const dcHeros = ["flash", "superman", "batman"];

//marvelHeros.push(dcHeros);
//console.log(marvelHeros); // o/p: [ 'Spiderman', 'thor', 'ironman', [ 'flash', 'superman', 'batman' ] ]

const allHeros = marvelHeros.concat(dcHeros); // concat doesn't make changes in the existing array. Rather it concat the elements of both array and gives a new array
console.log(allHeros); // o/p: [ 'Spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]

const allNewHeros = [...marvelHeros, ...dcHeros]; // spread operator => it also does the same work as concatenation
console.log(allNewHeros); // o/p: [ 'Spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]

const arr2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const newArr2 = arr2.flat(Infinity); // Infinity defines the depth of the array i.e. depth upto which array should be flatten. Here we can also give 3 instead of Infinity as depth
console.log(newArr2); // o/p: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Kanchan")); // o/p: false
console.log(Array.from("Kanchan")); // o/p: [ 'K', 'a', 'n', 'c', 'h', 'a', 'n' ] => to convert value into array
console.log(Array.from({name: "Kanchan"})); // o/p: [] => empty array comes as output because array is confused whether to create array from key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // o/p: [ 100, 200, 300 ] => converts set of elements in array



