const accountId = 144553 
// we can't change this value after using conts
let accountEmail = "Tridip@google.com"
var accountPassword = "12345"
accountCity ="Kolkata"
let accountState;



// accountId = 2 // not allowed

accountEmail = "tp@tp.com"
accountPassword = "2121212121"
accountCity = "Bangaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/