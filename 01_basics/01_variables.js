const accountId = 17; // const variables can't be re-assigned
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Patna";
let accountState; // when we declare a variable and dont't assign any value to it then it gives undefined when printed

// accountId = 234; -not allowed

accountEmail = "hcl@hc.com";
accountPassword = "256688";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/