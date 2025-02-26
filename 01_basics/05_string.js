const name = "Kanchan";
const repoCount = 3;

console.log(name + " " + repoCount); // this way of concatenation is old


//String Interpolation
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String('KK-hc');
console.log(typeof(name)); // o/p: string
console.log(typeof(gameName)); // o/p: object

console.log(gameName.__proto__); // o/p: {}

console.log(gameName.length); // length is a function in String java unlike javascript

const newString = gameName.substring(0, 3);
console.log(newString); // o/p: KK-

const anotherString = gameName.slice(-5, 3);
console.log(anotherString); // o/p: KK-

console.log(gameName.includes('KK')); // o/p: true

console.log(gameName.split("-")); // o/p: [ 'KK', 'hc' ]