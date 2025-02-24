let myDate = new Date();
console.log(myDate); // o/p: 2025-02-24T13:26:21.342Z
console.log(myDate.toString()); // o/p: Mon Feb 24 2025 13:26:21 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // o/p: Mon Feb 24 2025
console.log(myDate.toJSON()); // o/p: 2025-02-24T13:26:21.342Z
console.log(myDate.toLocaleString()); // o/p: 2/24/2025, 1:26:21 PM
console.log(myDate.toLocaleDateString()); // o/p: 2/24/2025
console.log(typeof(myDate)); // o/p: object

let myCreatedDate = new Date(2025, 0, 23); // month start with 0 in JS when we write in comma format
console.log(myCreatedDate.toString()); // o/p: Thu Jan 23 2025 00:00:00 GMT+0000 (Coordinated Universal Time)

myCreatedDate = new Date(2025, 0, 23, 5, 3);
console.log(myCreatedDate.toLocaleString()); // o/p: 1/23/2025, 5:03:00 AM

myCreatedDate = new Date("2025-2-25");
console.log(myCreatedDate.toLocaleString()); // o/p: 2/25/2025, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // o/p: 1740428703857 => time is in ms
console.log(myCreatedDate.getTime()); // o/p: 1740441600000 => time is in ms
console.log(Math.floor(Date.now()/1000)); // o/p: 1740428703 => time is divided by 1000 to convert it in second

let newDate = new Date();
console.log(newDate); // o/p: 2025-02-24T20:29:18.829Z
console.log(newDate.getMonth()); // o/p: 1 => month starts from 0
console.log(newDate.getDay()); // o/p: 1

console.log(newDate.toLocaleString('default', {
    weekday: "long",
})); // o/p: Monday => Here default is format

