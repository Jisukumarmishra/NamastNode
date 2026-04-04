const crypto =  require("node:crypto");

console.log("Hellow Word");

var a = 1078698;
var b = 20986;

// pdkf2 -Password base Key Dertivativve function
//sunc:= Blocking the Thread Dont use it
crypto.pbkdf2Sync("password","salt", 50000000, 50, "sha512");
console.log("First Key is Generated")


setTimeout(()=> {
  console.log("Call Me Right Now !!!! ");
},0) // it will only be called once call stack of main thread is empty



// Async function
//Runs in background (libuv thread pool)
crypto.pbkdf2("Passowrd", "salt", 5000000,50, "sha512", (error, key) => {
  console.log("Second key Is Generated");
});


function mulitplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = mulitplyFn(a,b);

console.log ("MultiPlication result is : ", c);

