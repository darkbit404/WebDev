//Below is the asynchronous code. The JS Engine offloads the async functions to libuv for execution.
//libuv executes the async tasks and stores the callback functions.
//Once the tsak execution is complete the callback function is is transfered to JS Engine. 
//A callback function execution context pushed into the callstack.
//As the execution completes the callback function execution context is popped out of the callstack.
//Meanwhile libuv executes the async function, the JS Engine moves forward to execute the sync codes.

const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 1078628n;
var b = 28986n;

//API Call. JS Engines offloads this to libuv. libuv stores the callback function.
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

//setTimeout. JS Engines offloads this to libuv. libuv stores the callback function.
setTimeout(() => {
    console.log("setTimeout called after 5 secs.");
}, 5000);

//Reading file from OS. JS Engines offloads this to libuv. libuv stores the callback function.
fs.readFile("./file.txt", "utf8", (arr, data) => {
    console.log("File Data: ", data);
});

//sync function. JS Engine executes this task while libuv completes the async tasks.
function multiplyFn(x, y)
{
    const result = a*b;
    console.log(result);
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);