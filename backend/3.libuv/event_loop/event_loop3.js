const fs = require("fs")

setImmediate(() => console.log("setTimer"));

setTimeout(() => console.log("Timer Expired"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer Expired"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmedite"));

    console.log("File Reading Complete!");
});

process.nextTick(() => console.log("1st nextTick"));

console.log("Last line of the code");