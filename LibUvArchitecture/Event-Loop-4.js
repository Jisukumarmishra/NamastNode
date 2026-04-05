/**
 * Last Line Of The File
 * nextTick
 *  inner NextTick
 * promise
 * Time Expired
 * setImmediate
 * File Reading CB
 */

const fs = require("fs");

setImmediate(()  => console.log("setImmediate"));

setTimeout(() => console.log("Time Expired"),0);

Promise.resolve().then(()=>console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File Reading CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last Line Of The File. ");
