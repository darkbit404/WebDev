const fs = require("fs")
/*Event Loop: Event loop handles transfer of the claaback function from the callback queue to the the JS Engine (callstack)
    once the async execution is completed bye libuv.
    
    Main function of event loop is that while JS Engine is currently executing the sync and callback functions are waiting in callback queues
    it keeps a regural check on the JS Engine if it is idle or not. Once JS Engine completes all the sync the event loop transfers all the
    functions to JS Engine for execution.*/


//This line is executed by the JS Engine
const a = 100;

//As an async task is encountered the JS Engine offloads the task to libuv.
//libuv runs the task and stores the callback function the callback queues.
//As libuv runs the async tasks JS Engines continues with further execution.

//setImmediate (aysnc task) encountered. JS engine offloads the task to linuv and continues to next line.
//libuv stores thye callback function in callback queues. Callback function: console.log("setImmediate"));
//As liuv executes the async task JS Engine moves to next task.
setImmediate(() => console.log("setImmediate"));

//async task encountered again.
//JS engine offloads the task to linuv and continues to next line.
//libuv stores thye callback function in callback queues.
//As liuv executes the async task JS Engine moves to next task.
fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading Complete!");
});

////async task encountered again.
//JS engine offloads the task to linuv and continues to next line.
//libuv stores thye callback function in callback queues.
//As liuv executes the async task JS Engine moves to next task.
setTimeout(() => console.log("Timer expired"), 0);

//sync tasks. JS Engine executes the function in synchronous manner and moves to next line.
function printA()
{
    console.log("a: ", a);
}

//sync tasks. JS Engine executes the function in synchronous manner and moves to next line.
printA();
console.log("Last line of the code!")

/*As JS Engine completes execution of all the tasks event loop transfers all the callback functions waiting in the callback queues
to the JS Engine to be executed.*/

/*There can be cases where there are muiltiple callback functions waiting in callback queues to be transfered to the JS Engine.
In such cases the event loop has to  priortise the call functions.
There are four main phases in the event loop which determine the priority of cvall back function:
    1) timer: Handles all the timmer related callback functions such as setTimeout.
    2) poll: Handles all the I/O operations.
    3) check: setImmediate functions
    4) socket close: Handles any closing of the sockets after complete execution is done.
The callback funnctions are transfered in the above shown order.
Before every phase in the event loop a smaller cycle is also followed i.e.
    process.nextTick()
    promise callback*/