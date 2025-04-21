const express = require("express");

//Creating a new express.js application. 
//It's like creating a new webserver.
const app = express(); 

//Handling the requests
//app.use handles all the HTTP method API calls
app.use("/Home", (req, res) => {
    res.send("Hello. This is home route.")
});

app.use("/", (req, res) => {
    res.send("Hello. This is / route.")
});

app.use("/test", (req, res) => {
    res.send("Hello. This is test route.")
});

//This will handle only the GET call
app.get("/user", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//This will handle only the POST call
app.post("/user", (req, res) => {
    res.send("Hello. This is user GET route.")
});

//We call listen() to listen on some port so that users can connect to the server.
app.listen(3000, () => {
    console.log("Server active on port 3000.")
});