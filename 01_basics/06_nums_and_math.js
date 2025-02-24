const score = 400;
console.log(score); // o/p: 400

const balance = new Number(100);
console.log(balance); // o/p: [Number: 100]
console.log(balance.toString().length); // o/p: 3
console.log(balance.toFixed(2)); // o/p: 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // o/p: 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // o/p: 1,000,000 => It converts the value according to US standards
console.log(hundreds.toLocaleString('en-IN')); // o/p: 10,00,000 => It converts the value acoording to Indian standards

// ************************************Maths**********************************

console.log(Math); // o/p: Object [Math] {}
console.log(Math.abs(-4)); // o/p: 4 => Thisfunction converts -ve value to +ve
console.log(Math.round(4.5)); // o/p: 5
console.log(Math.ceil(4.2)); // o/p: 5
console.log(Math.floor(4.9)); // o/p: 4
console.log(Math.max(4, 3, 6, 8)); // o/p: 8
console.log(Math.min(2, 3, 6, 8)); // o/p: 2
console.log(Math.random()); // It gives o/p b/w 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
