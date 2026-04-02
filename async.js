const fs = require("fs");
const https = require("https");

console.log("Hellow Word");

var a  = 1078698;
var b  = 20986;


//synchronous func
fs.readFileSync("./file.txt", "utf-8");
console.log("This Is Only Exexute When File Is Reading ");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data SucccesFully");
});

setTimeout(() => {
  console.log("setTimeout called after 5 second");
}, 5000);


// asynchronous funcn
fs.readFile("./file.txt", "utf8" , (err, data) => {
  console.log("File Data : ", data);
});

function multipyFn(x,y) {
  const result  = a*b;
  return result ;
} 

// show basaically js v8 engine peform sysnchronus task very easuly but for asynchronouis task like above stuff it upload aal the procees on the 
// framwork cslled libuv that perform all the operation rapidelly

// here the most fast is read file then api call taht bot k take mili secon show they print too false and then after print the time functalionity that defined in toal 5 secons or given tiem 
// also if the file sixe is big to read then the alos fiale sixe take much tie as comapre to hte api call 