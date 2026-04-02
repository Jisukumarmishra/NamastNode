console.log("Hellow Word");

var a = 1078698;
var b= 20986;

setTimeout(()=> {
  console.log("Call Me Right Now");
},0) // js engine First exexute the full code Then execute the any callback function 
// reason is the libuv only the return ans of setTimeOut when the callback is Empty and till now gec call back is not empty

setTimeout(()=> {
  console.log("Call Me after 3 second asap");
},3000)

function muliplyFn(x, y) {
  const result = a*b;
  return result;
}

var c = muliplyFn(a,b);

console.log("MultiPlication Result is : ", c);