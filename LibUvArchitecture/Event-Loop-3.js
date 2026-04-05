/**
 * Last LIne Of The File
 * Process.nextTick
 * Promise
 * Time Expired
 * setImmediate
 * File Reading cb (its sysncho code)
 * 2nd.nextTick
 * 2nd setimmediate <-- Because now EvenLoop Starting from The Poll Phase Not Timer-->
 * 2nd Time Expied
 */


const fs = require("fs");

setImmediate(()  => console.log("setImmediate"));

setTimeout(() => console.log("Time Expired"),0);

Promise.resolve().then(()=>console.log("promise"));

fs.readFile("./file.txt", "utf8", () => {

  setTimeout(() => console.log("2nd Time Expired"),0); // here bhale hi setTime out ki priority jayda hai  setImmediate se par ye us se bad me 
  // print hoga because Evetloop:= EventLoop Wait At The P00l Phase if its have Nothing To Do show before go to the check pahse its check two internal processes then go to the check phase means not start with the timer phaswe 

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(()  => console.log("2nd setImmediate"));

  console.log("File Reading CB");

});

process.nextTick(() => console.log("Process.nextTick"));

console.log("Last Line Of The File");