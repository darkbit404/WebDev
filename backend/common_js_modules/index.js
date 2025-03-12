require("./require.js"); 
// require(), a built in function in javascript is used to import external modules that exist in separate files.

require("./export multiple functions.js") 
// The require() function protects the internal variables and functions of the external modules.
// Hence we cannot actually access the variables, methods and functions of one module into other using only require().
// To access the variables, methods and functions from external modules we need explictly export the them in external module. 


let single_func = require("./export single function.js")
let a = 10;
let b = 9;
single_func(a, b); 
// If only one variable, function or method is exported in external we can access it directly.


var multiple_func = require("./export multiple functions.js")
let c = 10;
let d = 9;
multiple_func.calculateDifference(c, d); 

let w = 1;
let x = 2;
multiple_func.calculateSum(w, x);
// If multiple variables, methods and functions are exported using object we need to access them using the variable created for the external module.

let data = require("./data.json");
console.log(data);
// Importing json data into the main javascript file


let name = "Pratyush";
console.log(name);