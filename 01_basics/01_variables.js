const accountId = 17; // const variables can't be re-assigned
let accountEmail = "abc@gmail.com"; // let is a block scope variable
var accountPassword = "12345";
accountCity = "Patna";
let accountState; // when we declare a variable and dont't assign any value to it then it gives undefined when printed

// accountId = 234; => not allowed since it's a const variable

accountEmail = "hcl@hc.com";
accountPassword = "256688";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); /* o/p: ┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 17           │
│ 1       │ 'hcl@hc.com' │
│ 2       │ '256688'     │
│ 3       │ 'Bengaluru'  │
│ 4       │ undefined    │
└─────────┴──────────────┘
*/

/*
Prefer not to use var because of issue in block scope and functional scope
*/