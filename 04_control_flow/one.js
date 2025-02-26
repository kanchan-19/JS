// if statement
const isuserLoggedIn = true;

if(2!==3){
    console.log("executed");
}

// >, <, >=, <=, ==, !=, ===, !==


//if-else statement
const temperature = 41;
if(temperature < 50){
    console.log("less than 50");
}else{
    console.log("temperature is greater than 50");
}

//o/p: less than 50

const balance = 1000;
if(balance > 500) console.log("test");  // Implicit scope // Shorthand
if(balance > 500) console.log("test"), console.log("test2"); // don't do this. It's a bad practice

//if-else if-else statement

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
//o/p: less than 1200

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allowed to buy course");
}

const loggedInFromGoogle = false;
const loggedInfromEmail = true;
if(loggedInFromGoogle || loggedInfromEmail){
    console.log("user logged in");
}

//switch

/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = 3;
switch(month){
    case 1: 
        console.log("Jan");
        break;
    case 2: 
        console.log("Feb");
        break;
    case 3: 
        console.log("March");
        break;
    case 4: 
        console.log("Apr");
        break;
    case 5: 
        console.log("May");
        break;
    case 6: 
        console.log("June");
        break;
    case 7: 
        console.log("July");
        break;
    case 8: 
        console.log("Aug");
        break;
    case 9: 
        console.log("Sep");
        break;
    case 10: 
        console.log("Oct");
        break;
    case 11: 
        console.log("Nov");
        break;
    case 12: 
        console.log("Dec");
        break;
    default:
        console.log("Enter valid month");
        break;
}

// shift + alt + down arrow => keyboard shortcut for copying

