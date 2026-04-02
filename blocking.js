const crypto =  require("node:crypto");

console.log("Hellow Word");

var a = 1078698;
var b = 20986;

// pdkf2 -Password base Key Dertivativve function
crypto.pbkdf2("password","salt", 5000000, 50, "sha512");

// Async function

crypto.pbkdf2("Passowrd")