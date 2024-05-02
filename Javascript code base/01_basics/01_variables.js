const accountId = 12345  //constants
let email = "a@gmail.com" //for block scope
var pass = 'df' // not for block scope - prefer not to use because of issue in block scope and functional scope
city = 'jaipuru'
let accountState;
console.log(typeof(city))
console.log(accountId);
console.table([accountId, email, pass, city, accountState])