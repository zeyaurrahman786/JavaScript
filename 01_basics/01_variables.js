const accountId = 144553
let accountEmail = "zeyaurrahman@gmail.com"
var accountPassword = "123456"
accountCity = "Bettiah"

let accountState;

// accountId = 2 // not allowed (const me kuch bhi change nahi kar sakte hai)

console.log(accountId);

accountEmail = "rahman@gmail.com"
accountPassword = "654321"
accountCity = "Patna"

console.table([accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because of issue in block scope and functional scope
*/