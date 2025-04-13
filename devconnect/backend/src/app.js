const express = require("express");

//Creating a new express.js application. 
//It's like creating a new webserver.
const app = express(); 

//Handling the requests
app.use("/test", (req, res) => {
    res.send("Hello.")
});

//We call listen() to listen on some port so that users can connect to the server.
app.listen(3000, () => {
    console.log("Server active on port 3000.")
});