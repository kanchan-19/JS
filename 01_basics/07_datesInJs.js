let myDate = new Date();
console.log(myDate); // o/p: 2025-02-24T13:26:21.342Z
console.log(myDate.toString()); // o/p: Mon Feb 24 2025 13:26:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // o/p: Mon Feb 24 2025
console.log(myDate.toJSON()); // o/p: 2025-02-24T13:26:21.342Z
console.log(myDate.toLocaleString()); // o/p: 2/24/2025, 1:26:21 PM
console.log(myDate.toLocaleDateString()); // o/p: 2/24/2025
console.log(typeof(myDate)); // o/p: object

let myCreatedDate = new Date(2025, 0, 23); // month start with 0 in JS
console.log(myCreatedDate.toString()); // o/p: Thu Jan 23 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

myCreatedDate = new Date(2025, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString()); // o/p: 1/23/2025, 5:03:00 AM

