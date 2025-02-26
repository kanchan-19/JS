// Immediately Invoked Function Expression (IIFE) => IIFE is those functions which gets immediately executed. It is also done to remove pollution of global scope variables

(function cheesecake(){ // this is named IIFE as this function has name
    console.log("DB CONNECTED");
})(); // o/p: DB CONNECTED

(() => { // this is simple IIFE
    console.log("DB CONNECTED TWO");
})(); // o/p: DB CONNECTED TWO

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Kanchan"); // o/p: DB CONNECTED TWO Kanchan

// if we need to write 2 IIFE, then we must insert ; at the end of first IIFE else it will throw error