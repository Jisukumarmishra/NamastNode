const fs  = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB")
});

setTimeout(() => console.log("Timer expired"),0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last Line Of The File");

// a = 100
// Last Line Of The File
// Timer Expired
// Set Immediate
// File Reading CB(File Reading Take Time To Read)
