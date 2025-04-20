const fs = require("fs")

const a = 100;

setImmediate(() => console.log("SetImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading Complete!");
});

setTimeout(() => console.log("Timer Expired!"), 10000);

process.nextTick(() => console.log("process.nextTick"));

function printA()
{
    console.log("a = ", a);
}

printA();
console.log("Last line of the file.");

//While executiion if the event loop becomes idle.