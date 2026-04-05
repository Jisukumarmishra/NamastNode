// a = 100
// Last line Of the File

// process.nextTick()
//Promise

// Time Expired
// setImmediate

// File Reading Cb


const fs = require("fs");
const a = 100;

setImmediate(()  => console.log("setImmediate"));

Promise.resolve().then(()=>console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

setTimeout(() => console.log("Time Expired"),0);

process.nextTick(() => console.log("Process.nextTick"));


function printA() {
  console.log("a=", a);
}

printA();
console.log("Last Line Of The File");