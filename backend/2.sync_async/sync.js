//Below is the synchronous code. The JS Engine executes this code line by line.
//A global execution context is created and pushed into call stackwhen code execution starts.
//All the variables and functions and etc are stored in memory heap.
//When a function is called a function execution context is pushed into the call stack.
//One function execution finishes the function execution context is pushed out.
//Once the complete code execution completes the global execution context is also pushed out of the callstack.

console.log("Hello World");

var a = 1078628n;
var b = 28986n;

function multiplyFn(x, y)
{
    const result = a*b;
    console.log(result);
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is: ", c);