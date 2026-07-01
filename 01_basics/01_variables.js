const accountId=144553
let accountEmail="random@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

//accountId=2//not allowed

accountEmail="hello@gmail.com"
accountPassword="1234567"
accountCity="Karnataka"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountPassword,accountEmail,accountCity,accountState])
