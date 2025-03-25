const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("6 - cryptoPBKDF2 done");
})
 /*Thread Pool: A component of libuv that helps to execute the CPU bound operations.
   The main thread executes the non blocking operations and transfers the CPU intensive tasks to 
   thread pool. Instead of executing the tasks directly in the event up these are handed to event loop
   Where if any idle worker thread picks up the task and executes it. If no thread is idle the tasks waits
   a task to becme idle. 
   By default there are only 4 threads available in linuv. These can be increased or decreased accordingly.*/

/*In the above code the threadpool runs first four tasks in the 4 threads that are available and the next two trasks
each wait for a thread to become idle.*/